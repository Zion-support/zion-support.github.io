#!/usr/bin/env python3
"""Read-only integration of reviewed Discovery dependencies and the satellite suite.
Builds in a fresh disposable workspace, never modifies repository source or deploys.
Dependencies are immutable Git blobs copied from existing PRs, not rewritten fixes.
"""
from __future__ import annotations
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import tempfile

SCHEMA = 'zion-satellite-release-integration-v1'
DEPENDENCIES = 'tests/fixtures/satellite-release-dependencies'
TARGETS = {
 'public/discovery/index.html', 'public/managed-it-services/index.html',
 'public/assets/js/discovery-delivery.js', 'scripts/prepare-pages-out.sh',
 'scripts/test-discovery-delivery-contract.cjs'
}
# Exactly the inputs used by the pinned preparation script, plus local tests/renderers.
INPUTS = ['public', 'scripts', 'content', 'tests', '_redirects', 'blog',
 'field-services', 'field-services-brazil', 'plans', 'discovery', 'enterprise',
 'about', 'solutions', 'managed-it-services', 'ai-consulting-services',
 'finops-consulting', 'autonomous-ai-agents', 'healthcare-it-hipaa', 'fintech-it-ai',
 'docs/solutions/healthcare', 'docs/industries/financial-services',
 'docs/tools/phishing-analyzer', 'assets/css/site.css', 'assets/js/zion-shell.js', 'css/site.css']
HOME_EDITS = [
 ('Monitoramento, patch, backup e escala\u00e7\u00e3o nomeada \u2014 com prova FGV de renova\u00e7\u00e3o.',
  'Monitoramento, patch, backup e escala\u00e7\u00e3o nomeada, com escopo e evid\u00eancias documentados por projeto.'),
 ('FGV \u2014 renova\u00e7\u00e3o de manuten\u00e7\u00e3o', 'Continuidade de manuten\u00e7\u00e3o de TI'),
 ('FGV renovou a Zion para manuten\u00e7\u00e3o de inform\u00e1tica (SDCOMPRASTIC-6963 \u00b7 PO 12 Aug 2026). Continuidade operacional \u2014 n\u00e3o ROI inventado.',
  'Exemplo anonimizado de continuidade de manuten\u00e7\u00e3o, sem divulgar cliente, refer\u00eancias contratuais, pre\u00e7os ou m\u00e9tricas n\u00e3o verificadas.')
]
OBSOLETE_COMMENT = '<!-- Family A marker: Discovery $99 -->'


def git_blob(data: bytes) -> str:
 return hashlib.sha1(b'blob '+str(len(data)).encode()+b'\0'+data).hexdigest()


def checked_path(root: Path, rel: str) -> Path:
 if Path(rel).is_absolute() or '..' in Path(rel).parts: raise ValueError('Unsafe relative input path')
 p = root / rel
 if not p.resolve().is_relative_to(root.resolve()): raise ValueError('Input escapes reviewed root: '+rel)
 for part in [p, *p.parents]:
  if part == root.parent: break
  if part.is_symlink(): raise ValueError('Symlink input refused: '+rel)
 return p


def public_fingerprint(root: Path) -> tuple[int, str]:
 h = hashlib.sha256(); count = 0
 if not root.is_dir(): raise ValueError('Missing public source tree')
 for p in sorted(root.rglob('*')):
  if p.is_symlink(): raise ValueError('Symlink in public source')
  if p.is_file():
   count += 1; h.update(p.relative_to(root).as_posix().encode()+b'\0'); h.update(hashlib.sha256(p.read_bytes()).digest())
 return count, h.hexdigest()


def read_manifest(repo: Path) -> dict:
 p = checked_path(repo, DEPENDENCIES+'/manifest.json')
 m = json.loads(p.read_text('utf-8'))
 if m.get('schema') != SCHEMA or m.get('reviewOnly') is not True: raise ValueError('Not a review-only manifest')
 rows = m.get('files', [])
 if {r.get('target') for r in rows} != TARGETS or len(rows) != len(TARGETS): raise ValueError('Unexpected dependency scope')
 if not re.fullmatch('[0-9a-f]{40}', m.get('homepageBeforeGitBlob','')): raise ValueError('Missing homepage lease')
 if not re.fullmatch('[0-9a-f]{40}', m.get('homepageCandidateGitBlob','')): raise ValueError('Missing homepage candidate hash')
 for row in rows:
  if not re.fullmatch('[0-9a-f]{40}',row.get('gitBlob','')): raise ValueError('Invalid dependency hash')
  if not re.fullmatch('[0-9a-f]{40}',row.get('sourceCommit','')): raise ValueError('Missing source provenance')
  checked_path(repo,DEPENDENCIES+'/'+row['target'])
 return m


def preflight(repo: Path, m: dict) -> list[dict]:
 receipt = []
 for row in m['files']:
  data = checked_path(repo,DEPENDENCIES+'/'+row['target']).read_bytes()
  if git_blob(data) != row['gitBlob']: raise ValueError('Dependency blob mismatch: '+row['target'])
  target = checked_path(repo,row['target'])
  before = git_blob(target.read_bytes()) if target.is_file() else None
  if before not in row['allowedBeforeGitBlobs']: raise ValueError('Concurrent source changed: '+row['target'])
  receipt.append({'target':row['target'],'before':before,'candidate':row['gitBlob'],'sourcePR':row['sourcePR'],'sourceCommit':row['sourceCommit']})
 home_sha = git_blob(checked_path(repo,'public/index.html').read_bytes())
 if home_sha not in {m['homepageBeforeGitBlob'], m['homepageCandidateGitBlob']}:
  raise ValueError('Concurrent homepage changed; reconcile the existing PR first')
 return receipt


def reconcile_home(data: bytes, m: dict) -> bytes:
 current = git_blob(data)
 if current == m['homepageCandidateGitBlob']:
  return data
 if current != m['homepageBeforeGitBlob']:
  raise ValueError('Homepage is neither the leased source nor integrated candidate')
 text = data.decode('utf-8')
 for old,new in HOME_EDITS:
  if text.count(old) != 1: raise ValueError('Privacy patch no longer has one exact source match')
  text = text.replace(old,new,1)
 if text.count(OBSOLETE_COMMENT) != 1: raise ValueError('Paid comment removal needs exactly one reviewed match')
 # Remove the obsolete comment only, not visible commercial copy or form behavior.
 text = text.replace(OBSOLETE_COMMENT,'',1)
 result = text.encode('utf-8')
 if git_blob(result) != m['homepageCandidateGitBlob']:
  raise ValueError('Homepage candidate hash differs from the reviewed integration')
 return result


def copy_inputs(repo: Path, stage: Path) -> int:
 count = 0
 for rel in INPUTS:
  src = checked_path(repo,rel)
  if not src.exists(): continue
  dst = stage/rel; dst.parent.mkdir(parents=True,exist_ok=True)
  if src.is_dir():
   if any(p.is_symlink() for p in src.rglob('*')): raise ValueError('Symlink inside publisher input: '+rel)
   shutil.copytree(src,dst,dirs_exist_ok=True)
  elif src.is_file(): shutil.copy2(src,dst)
  else: raise ValueError('Non-regular publisher input: '+rel)
  count += 1
 return count


def stage_dependencies(repo: Path, stage: Path, m: dict) -> None:
 for row in m['files']:
  dst=stage/row['target']; dst.parent.mkdir(parents=True,exist_ok=True)
  dst.write_bytes(checked_path(repo,DEPENDENCIES+'/'+row['target']).read_bytes())
 home=stage/'public/index.html'; home.write_bytes(reconcile_home(home.read_bytes(), m))


def run_step(name: str, cmd: list[str], stage: Path, evidence: Path, env: dict) -> dict:
 log=evidence/(name+'.log')
 with log.open('w',encoding='utf-8') as out:
  try:
   result=subprocess.run(cmd,cwd=stage,env=env,stdout=out,stderr=subprocess.STDOUT,timeout=480,check=False)
   code=result.returncode
  except subprocess.TimeoutExpired: code=124; out.write('\nTIMEOUT: no release authorization.\n')
 return {'name':name,'command':cmd,'exitCode':code,'status':'passed' if code==0 else 'failed','log':log.name}


def verify_pages(stage: Path) -> dict:
 out=stage/'out'; m=json.loads((out/'apps/satellite-suite-publication.json').read_text())
 if len(m['pages'])!=20 or len(m['homepages'])!=5: raise ValueError('Expected 20 editions and five actual homepage integrations')
 for row in m['pages']:
  path=row['url'].lstrip('/')+('index.html' if row['url'].endswith('/') else '')
  p=checked_path(out,path)
  if hashlib.sha256(p.read_bytes()).hexdigest()!=row['sha256']: raise ValueError('Rendered page hash mismatch: '+path)
 missing=[]
 for lang in ['', 'pt/', 'es/', 'fr/', 'de/']:
  rel=lang+'discovery/index.html';p=checked_path(out,rel)
  if not p.is_file() or not re.search(r'<form\b[^>]*\bid=[\"\']dform[\"\']',p.read_text('utf-8')): missing.append('/'+rel)
 if missing: raise ValueError('Suite Discovery destinations lack questionnaire: '+', '.join(missing))
 return {'pageHashesVerified':20,'homepageIntegrations':5,'discoveryQuestionnaires':5,'hostedVerified':False}


def main() -> int:
 parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--source',type=Path,default=Path('.'));parser.add_argument('--evidence',type=Path,required=True)
 args=parser.parse_args();repo=args.source.resolve();ev=args.evidence.absolute()
 # Evidence must be outside the checkout, so source preservation is measurable.
 if ev.resolve().is_relative_to(repo): raise ValueError('Evidence must be outside repository')
 ev.mkdir(parents=True,exist_ok=True)
 report={'schema':SCHEMA,'reviewOnly':True,'deployed':False,'authorized':False,'scope':'reviewed publisher inputs plus pinned dependencies; no live requests','steps':[]}
 before=None
 try:
  m=read_manifest(repo); report['dependencies']=preflight(repo,m)
  before=public_fingerprint(repo/'public');report['publicInputFiles']=before[0];report['publicBeforeSha256']=before[1]
  with tempfile.TemporaryDirectory(prefix='zion-candidate-') as temp:
   stage=Path(temp);report['publisherInputRootsCopied']=copy_inputs(repo,stage);stage_dependencies(repo,stage,m)
   env=os.environ.copy();env['SATELLITE_PREVIEW']=str(stage/'out');env['DISCOVERY_HTML']=str(stage/'public/discovery/index.html')
   commands=[('discovery-mocked',['node','--test','scripts/test-discovery-delivery-contract.cjs']),('satellite-unit',[sys.executable,'tests/satellite-suite.test.py']),('prepare',['bash','scripts/prepare-pages-out.sh']),('render-real-homepages',[sys.executable,'scripts/render-satellite-suite.py','--source','public','--out','out']),('satellite-runtime',['node','--test','tests/satellite-suite-runtime.test.cjs','tests/satellite-manual-gates.test.cjs'])]
   for name,cmd in commands:
    step=run_step(name,cmd,stage,ev,env);report['steps'].append(step)
    if step['exitCode']: raise ValueError('Integration failed at '+name+'; see '+step['log'])
   report['artifact']=verify_pages(stage);report['status']='passed'
 except (ValueError,OSError,KeyError,TypeError,json.JSONDecodeError) as error:
  report['status']='blocked';report['blocker']=str(error)
 finally:
  if before is not None:
   after=public_fingerprint(repo/'public');report['sourcePublicUnchanged']=before==after
   if before!=after:report['status']='blocked';report['blocker']='Concurrent public source change during read-only build'
  (ev/'report.json').write_text(json.dumps(report,indent=2)+'\n',encoding='utf-8')
 print(json.dumps(report,indent=2));return 0 if report['status']=='passed' else 1

if __name__=='__main__':raise SystemExit(main())
