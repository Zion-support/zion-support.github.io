"""Exercise publisher checkout using an isolated repository with a broken gitlink."""
from pathlib import Path
import os, subprocess, tempfile, unittest
ROOT=Path(__file__).resolve().parents[1]

def checkout(name):
 source=(ROOT/'.github/workflows'/name).read_text()
 block=source.split('- name: Checkout public candidate without stored credentials\n',1)[1]
 block=block.split('run: |\n',1)[1]
 lines=block.splitlines();indent=len(lines[0])-len(lines[0].lstrip())
 result=[]
 for line in lines:
  if len(line)-len(line.lstrip())<indent:break
  result.append(line[indent:])
 return '\n'.join(result)

class Tests(unittest.TestCase):
 def test_all_publishers_use_identical_checkout(self):
  expected=checkout('deploy-on-push.yml')
  for name in ('static-deploy.yml','gh-pages.yml','private-ops-boundary-test.yml'):self.assertEqual(expected,checkout(name))
 def test_real_checkout_with_malformed_gitlink(self):
  with tempfile.TemporaryDirectory() as td:
   root=Path(td);repo=root/'repository';repo.mkdir()
   def git(*args):return subprocess.check_output(['git','-C',str(repo),*args],stderr=subprocess.DEVNULL,text=True).strip()
   git('init','-q');git('config','user.name','Synthetic test');git('config','user.email','test@example.invalid')
   (repo/'index.html').write_text('synthetic');git('add','.');git('commit','-qm','fixture')
   git('update-index','--add','--cacheinfo','160000,'+git('rev-parse','HEAD')+',.pageploy');git('commit','-qm','malformed gitlink fixture')
   sha=git('rev-parse','HEAD')
   for depth in ('0','1'):
    with self.subTest(depth=depth):
     dest=root/('workspace'+depth);dest.mkdir()
     script=checkout('deploy-on-push.yml').replace('https://github.com/Zion-support/zion-support.github.io.git',str(repo))
     result=subprocess.run(['bash','-c',script],cwd=dest,env=dict(os.environ,CANDIDATE_SHA=sha,GIT_TERMINAL_PROMPT='0',FETCH_DEPTH=depth),capture_output=True,text=True)
     self.assertEqual(result.returncode,0,result.stderr)
     self.assertEqual((dest/'index.html').read_text(),'synthetic')
     self.assertEqual(subprocess.check_output(['git','rev-parse','HEAD'],cwd=dest,text=True).strip(),sha)
     count=int(subprocess.check_output(['git','rev-list','--count','HEAD'],cwd=dest,text=True).strip())
     self.assertEqual(count,2 if depth=='0' else 1)
     # Reproduce the checkout-action auth-cleanup failure separately.
     self.assertNotEqual(subprocess.run(['git','submodule','foreach','--recursive','true'],cwd=dest,capture_output=True).returncode,0)
 def test_checked_out_head_mismatch_rejected(self):
  with tempfile.TemporaryDirectory() as td:
   root=Path(td);(root/'bin').mkdir();(root/'workspace').mkdir()
   git=root/'bin/git';git.write_text('#!/bin/sh\nif [ "$1" = rev-parse ]; then echo '+ 'b'*40 +'\nfi\n')
   git.chmod(0o755)
   result=subprocess.run(['bash','-c',checkout('deploy-on-push.yml')],cwd=root/'workspace',env=dict(os.environ,CANDIDATE_SHA='a'*40,PATH=str(root/'bin')+os.pathsep+os.environ['PATH']),capture_output=True,text=True)
   self.assertNotEqual(result.returncode,0)
   self.assertIn('Checked out revision differs',result.stdout)
 def test_existing_workspace_is_untouched(self):
  with tempfile.TemporaryDirectory() as td:
   root=Path(td);sentinel=root/'keep';sentinel.write_text('preserve')
   r=subprocess.run(['bash','-c',checkout('deploy-on-push.yml')],cwd=root,env=dict(os.environ,CANDIDATE_SHA='a'*40),capture_output=True)
   self.assertNotEqual(r.returncode,0);self.assertEqual(sentinel.read_text(),'preserve');self.assertFalse((root/'.git').exists())
 def test_invalid_sha_rejected_before_initialization(self):
  with tempfile.TemporaryDirectory() as td:
   r=subprocess.run(['bash','-c',checkout('deploy-on-push.yml')],cwd=td,env=dict(os.environ,CANDIDATE_SHA='invalid'),capture_output=True)
   self.assertNotEqual(r.returncode,0);self.assertEqual(list(Path(td).iterdir()),[])
 def test_no_checkout_action_left_in_publishers(self):
  for name in ('deploy-on-push.yml','gh-pages.yml','static-deploy.yml'):
   self.assertNotIn('actions/checkout@',(ROOT/'.github/workflows'/name).read_text())
  source=(ROOT/'.github/workflows/deploy-on-push.yml').read_text()
  self.assertEqual(source.count('- name: Checkout public candidate without stored credentials'),2)
  self.assertIn('CANDIDATE_SHA: ${{ needs.build.outputs.sha }}',source.split('  smoke-tests:',1)[1])
 def test_upstream_success_and_main_required(self):
  source=(ROOT/'.github/workflows/deploy-on-push.yml').read_text()
  self.assertIn("if: github.ref == 'refs/heads/main' && (github.event_name != 'workflow_run' || github.event.workflow_run.conclusion == 'success')",source)

if __name__=='__main__':unittest.main()
