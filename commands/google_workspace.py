#!/usr/bin/env python3
from __future__ import annotations

"""
Google Workspace API helpers for Zion Org Memory system.

Shared between org_memory_agent.py and vector_index.py
FIXED for proper conversation threading
"""

import urllib.request, urllib.parse, json, datetime, sys, time, base64
from pathlib import Path

# Auto-resolve to current user's home — works on macOS and Linux
home = Path.home()
WORKSPACE = home / '.openclaw' / 'workspace'
TOKENS_FILE = WORKSPACE / 'gog_tokens.json'

def load_gog_tokens():
    try:
        with open(TOKENS_FILE) as f:
            content = f.read().strip()
            if not content:
                # Return empty dict if file is empty
                return {}
            return json.loads(content)
    except (FileNotFoundError, json.JSONDecodeError):
        # Return empty dict if file doesn't exist or is invalid JSON
        return {}

def refresh_access_token(tokens):
    if not tokens:
        return None
    now_utc = datetime.datetime.now(datetime.timezone.utc)
    expiry_str = tokens.get('expiry', '')
    if expiry_str:
        try:
            exp = datetime.datetime.fromisoformat(expiry_str.replace('Z', '+00:00'))
            if exp.tzinfo is None: exp = exp.replace(tzinfo=datetime.timezone.utc)
            if exp > now_utc + datetime.timedelta(minutes=5):
                return tokens['access_token']
        except Exception: pass
    data = urllib.parse.urlencode({
        'client_id': tokens.get('client_id', ''),
        'client_secret': tokens.get('client_secret', ''),
        'refresh_token': tokens.get('refresh_token', ''),
        'grant_type': 'refresh_token',
    }).encode()
    req = urllib.request.Request('https://oauth2.googleapis.com/token', data=data,
        headers={'Content-Type': 'application/x-www-form-urlencoded'})
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
        tokens['access_token'] = resp['access_token']
        exp_in = resp.get('expires_in', 3600)
        tokens['expiry'] = (now_utc + datetime.timedelta(seconds=exp_in)).isoformat()
        with open(TOKENS_FILE, 'w') as f:
            json.dump(tokens, f)
        return tokens['access_token']
    except Exception as e:
        print(f"Error refreshing token: {e}")
        return None

def gog_headers():
    tokens = load_gog_tokens()
    token = refresh_access_token(tokens)
    if token:
        return {'Authorization': f'Bearer {token}'}
    else:
        # Return empty headers if no token available
        return {}

def goggle_search(query, limit=20):
    """Search Gmail for messages matching query."""
    url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages'
    params = urllib.parse.urlencode({'q': query, 'maxResults': limit})
    req = urllib.request.Request(f'{url}?{params}', headers=gog_headers())
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
        return resp.get('messages', [])
    except Exception as e:
        print(f"Error in goggle_search: {e}")
        return []

def gmail_get(message_id):
    """Get a full Gmail message by ID."""
    url = f'https://gmail.googleapis.com/gmail/v1/users/me/messages/{message_id}'
    req = urllib.request.Request(url, headers=gog_headers())
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
        return resp
    except Exception as e:
        print(f"Error in gmail_get: {e}")
        return {}

def gmail_send_reply_fixed(to, subject, body, thread_id=None):
    """Send a reply via Gmail (fixed version)."""
    # Note: This function is kept for compatibility with V21 code.
    # In V22+, we use gmail_create_draft_new for safety.
    url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send'
    message = {
        'raw': base64.urlsafe_b64encode(
            f'To: {to}\r\n'
            f'Subject: {subject}\r\n'
            f'\r\n'
            f'{body}'.encode()
        ).decode()
    }
    if thread_id:
        message['threadId'] = thread_id
    data = json.dumps(message).encode()
    req = urllib.request.Request(url, data=data, headers={**gog_headers(), 'Content-Type': 'application/json'})
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
        return {'success': True, 'id': resp.get('id')}
    except Exception as e:
        return {'success': False, 'error': str(e)}

def gmail_batch_modify(message_ids, add_label_ids=None, remove_label_ids=None):
    """Batch modify Gmail messages (add/remove labels)."""
    url = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/batchModify'
    body = {
        'ids': message_ids,
    }
    if add_label_ids:
        body['addLabelIds'] = add_label_ids
    if remove_label_ids:
        body['removeLabelIds'] = remove_label_ids
    data = json.dumps(body).encode()
    req = urllib.request.Request(url, data=data, headers={**gog_headers(), 'Content-Type': 'application/json'})
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
        return resp
    except Exception as e:
        print(f"Error in gmail_batch_modify: {e}")
        return {}

def gmail_get_or_create_label_id(label_name):
    """Get or create a Gmail label by name, returning its ID."""
    # First, try to list labels to find existing one
    url = 'https://gmail.googleapis.com/gmail/v1/users/me/labels'
    req = urllib.request.Request(url, headers=gog_headers())
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
        for label in resp.get('labels', []):
            if label.get('name') == label_name:
                return label['id']
        # If not found, create it
        url = 'https://gmail.googleapis.com/gmail/v1/users/me/labels'
        label_obj = {
            'name': label_name,
            'labelListVisibility': 'labelShow',
            'messageListVisibility': 'show'
        }
        data = json.dumps(label_obj).encode()
        req = urllib.request.Request(url, data=data, headers={**gog_headers(), 'Content-Type': 'application/json'})
        resp = json.loads(urllib.request.urlopen(req).read())
        return resp.get('id')
    except Exception as e:
        print(f"Error in gmail_get_or_create_label_id: {e}")
        return None

def gcal_list_events(max_results=10, time_min=None, time_max=None):
    """List events from the primary calendar."""
    url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events'
    params = {'maxResults': max_results}
    if time_min:
        params['timeMin'] = time_min
    if time_max:
        params['timeMax'] = time_max
    # Always show single events and order by start time
    params['singleEvents'] = True
    params['orderBy'] = 'startTime'
    # Build the URL with parameters
    query_string = urllib.parse.urlencode(params)
    req = urllib.request.Request(f'{url}?{query_string}', headers=gog_headers())
    try:
        resp = json.loads(urllib.request.urlopen(req).read())
        return resp.get('items', [])
    except Exception as e:
        print(f"Error in gcal_list_events: {e}")
        return []


# Alias for backward compatibility
gmail_search = goggle_search
gmail_get = gmail_get
gmail_send_reply = gmail_send_reply_fixed
gmail_create_draft_new = lambda to, subject, body: {
    'id': 'draft_id_placeholder',  # Placeholder for now
}
telegram_send = lambda text: print(f"[TG] {text}")  # Placeholder for now