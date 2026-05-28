#!/usr/bin/env python3
"""
himalaya_mail.py — V33 SMTP/IMAP Email Sender
==============================================
Wraps Gmail SMTP for intelligent_email_responder_v33.
Standalone: send emails, search inbox, fetch single messages.
No external dependencies besides stdlib smtplib + imaplib.

Usage:
  python3 himalaya_mail.py                     # test credentials
  python3 himalaya_mail.py send <to> <subj> <body>
  python3 himalaya_mail.py search "<gmail-search>"
  python3 himalaya_mail.py reply <to> <subject> <body>

Environment variables (set these before importing):
  SMTP_HOST=smtp.gmail.com    (default)
  SMTP_PORT=587              (default: TLS)
  SMTP_USER=you@gmail.com
  SMTP_PASS=your_gmail_app_password    # 16-char Gmail App Password
  IMAP_HOST=imap.gmail.com    (default)
  IMAP_PORT=993               (default)
  IMAP_USER=you@gmail.com
  IMAP_PASS=your_gmail_app_password
"""

import os, json, re
from pathlib import Path
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email import message_from_bytes

# ── Config defaults ─────────────────────────────────────────────────────────
def _env(k, default):
    return os.environ.get(k, default)

SMTP_HOST = _env('SMTP_HOST', 'smtp.gmail.com')
SMTP_PORT = int(_env('SMTP_PORT', '587'))
IMAP_HOST = _env('IMAP_HOST', 'imap.gmail.com')
IMAP_PORT = int(_env('IMAP_PORT', '993'))
USE_TLS  = True

_CREDS_JSON  = Path.home() / '.himalaya_credentials.json'

# ── Credentials ─────────────────────────────────────────────────────────────
def _load_creds():
    if _CREDS_JSON.exists():
        try: return json.loads(_CREDS_JSON.read_text())
        except Exception: pass
    return {}

def _get_smtp_creds():
    c = _load_creds()
    return (
        c.get('email','') or _env('SMTP_USER',''),
        c.get('password','') or _env('SMTP_PASS',''),
        c.get('from_addr','') or _env('SMTP_FROM','') or _env('SMTP_USER',''),
    )

# ── Message builder ─────────────────────────────────────────────────────────
def _make_msg(to_addrs, subject, body, cc=None, reply_to=None, in_reply_to=None, references=None):
    email_addr, _, from_addr = _get_smtp_creds()
    msg = MIMEMultipart('mixed')
    msg['From']    = from_addr
    msg['To']      = ', '.join(to_addrs)
    if cc:  msg['Cc'] = ', '.join(cc)
    # Subject
    from email.header import Header
    try:   msg['Subject'] = Header(subject, 'utf-8').encode()
    except: msg['Subject'] = subject
    if reply_to:   msg['Reply-To'] = reply_to
    if in_reply_to: msg['In-Reply-To'] = in_reply_to
    if references:  msg['References']  = references
    msg.attach(MIMEText(body, 'plain', 'utf-8'))
    return msg

# ── SMTP send ───────────────────────────────────────────────────────────────
def _smtp_send(msg, to_addrs, cc=None):
    import smtplib
    email_addr, password, _ = _get_smtp_creds()
    if not email_addr or not password:
        return {'success': False, 'error': 'No SMTP credentials'}
    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=30) as server:
            server.ehlo()
            if USE_TLS:
                server.starttls()
                server.ehlo()
            server.login(email_addr, password)
            all_rcps = list(to_addrs) + (list(cc) if cc else [])
            server.send_message(msg, to_addrs=all_rcps)
            return {'success': True, 'message_id': msg['Message-ID'] or ''}
    except Exception as ex:
        return {'success': False, 'error': str(ex)}

# ═══════════════════════════════════════════════════════════════════════════════
#  PUBLIC API
# ═══════════════════════════════════════════════════════════════════════════════

def send_email(to, subject, body, cc=None, reply_to=None):
    """Send email. to/cc can be str (comma-sep) or list."""
    if isinstance(to, str):   to = [e.strip() for e in to.split(',') if e.strip()]
    if isinstance(cc, str):  cc = [e.strip() for e in cc.split(',') if e.strip()]
    msg = _make_msg(to, subject, body, cc=cc, reply_to=reply_to)
    return _smtp_send(msg, to, cc=cc)

def send_reply(all_recipients, subject, body, in_reply_to=None, thread_id_for_ref=None):
    """
    Send reply preserving Reply-All semantics.
    all_recipients: sender, then cc-list (sender is To, rest are Cc).
    Properly sets In-Reply-To and References for threading.
    """
    if isinstance(all_recipients, str):
        recipients = [r.strip() for r in all_recipients.split(',') if r.strip()]
    else:
        recipients = list(all_recipients)
    if not recipients:
        return {'success': False, 'error': 'No recipients'}
    to_addr   = [recipients[0]]
    cc_addr   = recipients[1:] if len(recipients) > 1 else None
    ref_id    = in_reply_to or thread_id_for_ref
    msg = _make_msg(to_addr, subject, body, cc=cc_addr,
                    in_reply_to=ref_id, references=ref_id)
    return _smtp_send(msg, to_addr, cc_addr)

def gmail_search(query, limit=20):
    """Search Gmail via IMAP. Returns list of email dicts."""
    import imaplib
    c = _load_creds()
    user     = _env('IMAP_USER','') or c.get('email','')
    password = _env('IMAP_PASS','') or c.get('password','')
    if not user or not password:
        return []
    try:
        with imaplib.IMAP4_SSL(IMAP_HOST, IMAP_PORT, timeout=30) as M:
            M.login(user, password)
            M.select('INBOX')
            status, msgs = M.search(None, query)
            if status != 'OK': return []
            ids = msgs[0].split()[:limit]
            results = []
            for eid in ids:
                status, data = M.fetch(eid, '(RFC822)')
                if status == 'OK' and data and data[0]:
                    try:
                        msg = message_from_bytes(data[0][1])
                        results.append(_parse_msg(msg))
                    except Exception:
                        pass
            return results
    except Exception as ex:
        print(f'[himalaya_mail] IMAP search failed: {ex}', flush=True)
        return []

def gmail_get(message_id):
    """Fetch a single email by Message-ID."""
    import imaplib
    c = _load_creds()
    user     = _env('IMAP_USER','') or c.get('email','')
    password = _env('IMAP_PASS','') or c.get('password','')
    if not user or not password:
        return {}
    try:
        with imaplib.IMAP4_SSL(IMAP_HOST, IMAP_PORT, timeout=30) as M:
            M.login(user, password)
            M.select('INBOX')
            _, msgs = M.search(None, f'HEADER "Message-ID" "{message_id}"')
            if not msgs[0]: return {}
            _, data = M.fetch(msgs[0], '(RFC822)')
            if data and data[0]:
                return _parse_msg(message_from_bytes(data[0][1]))
    except Exception as ex:
        print(f'[himalaya_mail] IMAP get failed: {ex}', flush=True)
    return {}

def gmail_get_or_create_label_id(name):
    return f'label-{name}'

def gmail_batch_modify(message_ids, label, add=True):
    pass  # stub

def telegram_send(text):
    print(f'[TG] {text}', flush=True)

# ── Gmail_send_reply_fixed — V33 adapter ─────────────────────────────────────────
def gmail_send_reply_fixed(thread_id, subject, body, all_recipients,
                           reply_to=None, thread_id_for_ref=None):
    """Matches V26Responder.gmail_send_reply_fixed signature."""
    return send_reply(all_recipients, subject, body,
                     in_reply_to=thread_id_for_ref or thread_id,
                     thread_id_for_ref=thread_id_for_ref or thread_id)

# ── Parser ─────────────────────────────────────────────────────────────────
def _get(payload, charset='utf-8'):
    try:
        if isinstance(payload, bytes):
            return payload.decode(charset, errors='replace')
        return payload
    except Exception:
        return str(payload)

def _parse_msg(msg):
    def g(k, default=''):
        return _get(msg.get(k, default))
    body = ''
    if msg.is_multipart():
        for part in msg.walk():
            if part.get_content_type() == 'text/plain':
                payload = part.get_payload(decode=True)
                if payload:
                    body = _get(payload, part.get_content_charset() or 'utf-8')
                    break
    else:
        payload = msg.get_payload(decode=True)
        if payload:
            body = _get(payload, msg.get_content_charset() or 'utf-8')
    return {
        'message_id':  g('Message-ID'),
        'thread_id':    g('References') or g('Gmail.ThreadId',''),
        'sender':       g('From'),
        'to':           g('To'),
        'cc':           g('Cc'),
        'subject':      g('Subject'),
        'snippet':      body[:200],
        'body':         body,
        'date':         g('Date'),
    }

# ── CLI ─────────────────────────────────────────────────────────────────────
if __name__ == '__main__':
    import sys
    args = sys.argv[1:]
    if not args or args[0] == 'test':
        e, p, f = _get_smtp_creds()
        print(f'From: {f}')
        print(f'SMTP:  {SMTP_HOST}:{SMTP_PORT}')
        print(f'IMAP:  {IMAP_HOST}:{IMAP_PORT}')
        print(f'Creds: {"OK" if e else "MISSING — set SMTP_USER/SMTP_PASS"}')
    elif args[0] == 'send' and len(args) >= 4:
        r = send_email(args[1], args[2], '\n'.join(args[3:]))
        print(json.dumps(r, indent=2))
    elif args[0] == 'reply' and len(args) >= 4:
        r = send_reply(args[1], args[2], '\n'.join(args[3:]))
        print(json.dumps(r, indent=2))
    elif args[0] == 'search':
        q = args[1] if len(args) > 1 else 'ALL'
        results = gmail_search(q)
        print(f'{len(results)} results for "{q}":')
        for m in results:
            print(f"  [{m.get('message_id','')[-20:]}] {m.get('subject','(no subject)')[:60]}")
    else:
        print('Usage: himalaya_mail.py test|send <to> <subj> <body>|reply <all_rcps> <subj> <body>|search <query>')
