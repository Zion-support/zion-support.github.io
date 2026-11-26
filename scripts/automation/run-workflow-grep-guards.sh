#!/usr/bin/env bash
# Incremental workflow policy guard.
# Fails only on newly introduced risky workflow lines/files; legacy debt is reported elsewhere.
set -euo pipefail

mode="${1:---push}"

python3 - "$mode" <<'PY'
import json, os, re, subprocess, sys
from pathlib import Path

mode=sys.argv[1]
repo=Path('.')
event={}
event_path=os.environ.get('GITHUB_EVENT_PATH')
if event_path and Path(event_path).is_file():
    try:
        event=json.loads(Path(event_path).read_text(encoding='utf-8'))
    except Exception:
        event={}

def git(*args):
    return subprocess.check_output(['git',*args],text=True,stderr=subprocess.DEVNULL).strip()

def has_commit(sha):
    if not sha or set(sha)=={'0'}: return False
    try:
        subprocess.check_call(['git','cat-file','-e',sha+'^{commit}'],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
        return True
    except Exception:
        return False

def resolve_range():
    name=os.environ.get('GITHUB_EVENT_NAME','')
    if name=='pull_request':
        base=((event.get('pull_request') or {}).get('base') or {}).get('sha')
        head=((event.get('pull_request') or {}).get('head') or {}).get('sha')
        if has_commit(base) and has_commit(head): return base,head
    if name=='push':
        base=event.get('before'); head=event.get('after') or os.environ.get('GITHUB_SHA')
        if has_commit(base) and has_commit(head): return base,head
    try:
        base=git('rev-parse','HEAD^')
        head=git('rev-parse','HEAD')
        return base,head
    except Exception:
        return None,None

base,head=resolve_range()
if not base or not head:
    print('workflow policy: no comparable base/head; nothing incremental to enforce')
    raise SystemExit(0)

name_status=git('diff','--name-status',base,head).splitlines()
changed=[]
for row in name_status:
    if not row: continue
    parts=row.split('	')
    status=parts[0]
    path=parts[-1]
    if path.startswith('.github/workflows/') and path.endswith(('.yml','.yaml')):
        changed.append((status,path))

if not changed:
    print('workflow policy: no workflow YAML changed')
    raise SystemExit(0)

errors=[]
notes=[]
raw_push=re.compile(r'(^|[^A-Za-z0-9_-])git\s+push(\s|$)')

for status,path in changed:
    p=Path(path)
    current=p.read_text(encoding='utf-8') if p.is_file() else ''
    diff=git('diff','--unified=0',base,head,'--',path) if status!='D' else ''
    added=[line[1:] for line in diff.splitlines() if line.startswith('+') and not line.startswith('+++')]
    added_text='\n'.join(added)
    is_new=status.startswith('A')

    for idx,line in enumerate(added,1):
        stripped=line.strip()
        if stripped.startswith('#'): continue
        if raw_push.search(stripped):
            errors.append(f'{path}: newly added raw "git push" command; use the centralized safe push helper instead')

    push_added=bool(re.search(r'^\s*push\s*:',added_text,re.M))
    if (is_new and re.search(r'^\s*push\s*:',current,re.M)) or push_added:
        if 'concurrency:' not in current:
            errors.append(f'{path}: push trigger introduced without workflow-level concurrency')
        if not re.search(r'^\s*(paths|paths-ignore)\s*:',current,re.M) and 'fanout-ok:' not in current:
            errors.append(f'{path}: push trigger has no paths/paths-ignore; add scope or an explicit "# fanout-ok: <reason>" comment')

    if is_new:
        if not re.search(r'^permissions\s*:',current,re.M):
            errors.append(f'{path}: new workflow must declare explicit top-level permissions')
        if re.search(r'^\s*schedule\s*:',current,re.M) and 'timeout-minutes:' not in current:
            errors.append(f'{path}: new scheduled workflow must bound jobs with timeout-minutes')
        if re.search(r'^\s*workflow_run\s*:',current,re.M) and 'concurrency:' not in current:
            errors.append(f'{path}: new workflow_run workflow must declare concurrency')

    notes.append(f'{status}\t{path}')

print('workflow policy inspected:')
for note in notes:
    print('  '+note)

if errors:
    print('')
    for error in errors:
        print('::error::'+error)
    raise SystemExit(1)

print('workflow policy: PASS (incremental checks only)')
PY
