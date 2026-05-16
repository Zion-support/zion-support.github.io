#!/usr/bin/env python3
"""Email Tone Adaptor - Analyzes sender's communication style and adapts reply tone accordingly."""

import sys
import json
import subprocess
from datetime import datetime

def run_cmd(cmd):
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=30)
        return result.stdout.strip()
    except Exception:
        return ""

def analyze_tone_from_threads(sender):
    """Analyze historical tone patterns from sender's emails."""
    query = f'from:{sender} newer_than:30d'
    threads_json = run_cmd(f'gog gmail search "{query}" --limit 20 --json 2>/dev/null || echo "[]"')
    
    try:
        threads = json.loads(threads_json) if threads_json else []
    except Exception:
        threads = []
    
    tone_indicators = {
        'formal': ['dear', 'regards', 'sincerely', 'best regards'],
        'casual': ['hey', 'thanks', 'cheers', 'talk soon', 'hi there'],
        'direct': ['asap', 'urgent', 'need', 'require', 'must'],
        'collaborative': ['together', 'let\'s', 'we can', 'how about', 'suggestion']
    }
    
    scores = {k: 0 for k in tone_indicators}
    
    for thread in threads[:5]:
        body = thread.get('snippet', '').lower()
        for tone, keywords in tone_indicators.items():
            for kw in keywords:
                if kw in body:
                    scores[tone] += 1
    
    if not any(scores.values()):
        return 'neutral'
    
    return max(scores, key=scores.get)

def get_reply_template(tone):
    """Generate reply based on detected tone."""
    templates = {
        'formal': "Dear {name},\n\n{body}\n\nBest regards,\nKleber Garcia Alcatrão",
        'casual': "Hi {name}!\n\n{body}\n\nCheers!\nKleber",
        'direct': "{name} - {body}\n\nKleber",
        'collaborative': "{name},\n\nLet's {body}\n\nBest,\nKleber",
        'neutral': "Hello {name},\n\n{body}\n\nKleber Garcia Alcatrão"
    }
    return templates.get(tone, templates['neutral'])

def main():
    if '--execute' not in sys.argv:
        print("Dry run - no emails sent")
        return
    
    limit = int(run_cmd('echo "$@" | grep -oP "\\b--limit\\s+\\K[0-9]+" || echo "10"').split('\n')[0] or '10')
    
    # Get recent emails needing replies
    emails_json = run_cmd('gog gmail search "in:inbox is:unread newer_than:7d -from:github.com -from:noreply -from:mailer-daemon" --limit 20 --json 2>/dev/null || echo "[]"')
    
    try:
        emails = json.loads(emails_json) if emails_json else []
    except Exception:
        emails = []
    
    processed = 0
    for email in emails[:limit]:
        sender = email.get('from', '').split('<')[0].strip() if '<' in email.get('from', '') else email.get('from', '').split('@')[0]
        subject = email.get('subject', '')
        thread_id = email.get('threadId', '')
        
        tone = analyze_tone_from_threads(sender)
        template = get_reply_template(tone)
        
        reply_body = f"Re: {subject}"
        composed = template.format(name=sender.split()[0] if sender else 'there', body=reply_body)
        
        # Send reply via gog
        run_cmd(f'gog gmail send --to "{sender}" --subject "Re: {subject}" --body "{composed}" --thread-id "{thread_id}" 2>/dev/null')
        
        processed += 1
    
    print(f"Tone-adapted replies sent: {processed}")

if __name__ == '__main__':
    main()