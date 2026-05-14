#!/usr/bin/env python3
"""
Thread Summarizer — Zion Tech Group

Summarizes long email threads (>=20 messages) to concise digests.
Saves markdown summaries locally; labels thread as 'Thread-Summarized'.

Usage: python3 thread_summarizer.py [--execute] [--limit N]
"""

import sys, os, re, json, datetime, argparse
from pathlib import Path

WORKSPACE = Path('/root/.openclaw/workspace')
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'commands'))
sys.path.insert(0, str(WORKSPACE / 'zion.app' / 'lib'))

from google_workspace import gmail_search, gmail_thread_get, gmail_batch_modify, gmail_get_or_create_label_id
from llm_client import chat

DB_FILE = WORKSPACE / 'zion.app' / 'data' / 'thread_summaries.json'
REPORTS_DIR = WORKSPACE / 'zion.app' / 'reports' / 'thread_summaries'
REPORTS_DIR.mkdir(parents=True, exist_ok=True)

def load_db():
    if DB_FILE.exists():
        return json.loads(DB_FILE.read_text())
    return {'summarized': []}

def save_db(db):
    DB_FILE.parent.mkdir(parents=True, exist_ok=True)
    DB_FILE.write_text(json.dumps(db, indent=2))

def find_candidate_threads(limit=10):
    candidates = []
    # Use a heuristic: threads with many participants or long snippets
    threads = gmail_search('is:unread', limit=limit*5)
    for t in threads:
        tid = t.get('threadId')
        full = gmail_thread_get(tid)
        if not full or 'messages' not in full:
            continue
        count = len(full['messages'])
        if count >= 20:
            candidates.append(tid)
        if len(candidates) >= limit:
            break
    return candidates

def extract_thread_text(thread_id):
    thread = gmail_thread_get(thread_id)
    if not thread or 'messages' not in thread:
        return ''
    texts = []
    for m in thread['messages']:
        headers = m.get('payload', {}).get('headers', [])
        sender = next((h['value'] for h in headers if h['name']=='From'), 'Unknown')
        body = m.get('snippet','')
        texts.append(f"From: {sender}\n{body[:500]}")
    return '\n\n---\n\n'.join(texts)

def summarize(text):
    prompt = f"""Summarize this email thread concisely:

**Key Decisions:**
- ...

**Action Items:**
- ...

**Open Questions:**
- ...

Thread:
{text[:8000]}"""
    try:
        resp = chat([{"role":"user","content":prompt}], provider="auto", temperature=0.4)
        return resp.get('content','[LLM failed]')[:2000]
    except Exception as e:
        return f"[Error: {e}]"

def cmd_run(dry_run=True, limit=10):
    db = load_db()
    candidates = find_candidate_threads(limit=limit)
    if not candidates:
        print("✅ No long threads found.")
        return
    done = 0
    for tid in candidates:
        if tid in db.get('summarized', []):
            continue
        text = extract_thread_text(tid)
        if not text:
            continue
        summary = summarize(text)
        fname = REPORTS_DIR / f"thread_{tid[:8]}_{datetime.date.today().isoformat()}.md"
        fname.write_text(summary)
        print(f"   📝 Summary: {fname.name} ({len(summary)} chars)")
        if not dry_run:
            try:
                lbl_id = gmail_get_or_create_label_id('Thread-Summarized')
                gmail_batch_modify([tid], add_labels=[lbl_id])
            except Exception as e:
                print(f"   ⚠️  Label failed: {e}")
            db['summarized'].append(tid)
            done += 1
    if not dry_run:
        db['lastRun'] = datetime.datetime.utcnow().isoformat()
        save_db(db)
    print(f"\n✅ Summarized {done} threads.")
    if dry_run:
        print("💡 Add --execute to save and label.")

def main():
    p = argparse.ArgumentParser()
    p.add_argument('--execute', action='store_true')
    p.add_argument('--limit', type=int, default=10)
    args = p.parse_args()
    cmd_run(dry_run=not args.execute, limit=args.limit)

if __name__ == '__main__':
    main()
