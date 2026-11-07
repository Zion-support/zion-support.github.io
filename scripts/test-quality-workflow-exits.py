"""Run actual workflow shell blocks with isolated Git/command fixtures."""
from pathlib import Path
import os,subprocess,tempfile,unittest
ROOT=Path(__file__).resolve().parents[1]
NAMES=('openapi-drift-detector.yml','custom-eslint.yml','type-coverage.yml')
def shell(name,step):
 source=(ROOT/'.github/workflows'/name).read_text().split('    - name: '+step+'\n',1)[1].split('    - name:',1)[0]
 block=source.split('      run: ',1)[1]
 if not block.startswith('|\n'):return block.splitlines()[0]
 return '\n'.join(l[8:] for l in block.splitlines()[1:] if l.startswith('        '))
CHECKOUT=shell(NAMES[0],'Checkout public candidate without stored credentials')
class Tests(unittest.TestCase):
 def test_identical_shallow_checkouts(self):
  for name in NAMES:
   source=(ROOT/'.github/workflows'/name).read_text()
   self.assertEqual(CHECKOUT,shell(name,'Checkout public candidate without stored credentials'))
   self.assertIn('--depth=1',CHECKOUT);self.assertNotIn('actions/checkout@',source)
   self.assertIn('CANDIDATE_SHA: ${{ github.sha }}',source)
 def test_real_checkout_malformed_gitlink(self):
  with tempfile.TemporaryDirectory() as td:
   root=Path(td);repo=root/'repo';repo.mkdir();work=root/'work';work.mkdir()
   def git(*args):return subprocess.check_output(['git','-C',str(repo),*args],stderr=subprocess.DEVNULL,text=True).strip()
   git('init','-q');git('config','user.name','Fixture');git('config','user.email','fixture@example.invalid')
   (repo/'file').write_text('fixture');git('add','.');git('commit','-qm','initial')
   git('update-index','--add','--cacheinfo','160000,'+git('rev-parse','HEAD')+',.pageploy');git('commit','-qm','gitlink')
   sha=git('rev-parse','HEAD');code=CHECKOUT.replace('https://github.com/Zion-support/zion-support.github.io.git',str(repo))
   result=subprocess.run(['bash','-c',code],cwd=work,env=dict(os.environ,CANDIDATE_SHA=sha,GIT_TERMINAL_PROMPT='0'),capture_output=True,text=True)
   self.assertEqual(result.returncode,0,result.stderr)
   self.assertEqual(subprocess.check_output(['git','rev-parse','HEAD'],cwd=work,text=True).strip(),sha)
   self.assertEqual(subprocess.check_output(['git','rev-list','--count','HEAD'],cwd=work,text=True).strip(),'1')
 def test_existing_workspace_untouched(self):
  with tempfile.TemporaryDirectory() as td:
   p=Path(td)/'keep';p.write_text('fixture')
   r=subprocess.run(['bash','-c',CHECKOUT],cwd=td,env=dict(os.environ,CANDIDATE_SHA='a'*40),capture_output=True)
   self.assertNotEqual(r.returncode,0);self.assertEqual(p.read_text(),'fixture');self.assertFalse((Path(td)/'.git').exists())
 def test_invalid_sha_rejected(self):
  with tempfile.TemporaryDirectory() as td:
   r=subprocess.run(['bash','-c',CHECKOUT],cwd=td,env=dict(os.environ,CANDIDATE_SHA='invalid'),capture_output=True)
   self.assertNotEqual(r.returncode,0);self.assertEqual(list(Path(td).iterdir()),[])
 def test_custom_eslint_preserves_exit_and_output(self):
  for status in (0,1,2):
   with self.subTest(status=status),tempfile.TemporaryDirectory() as td:
    root=Path(td);binary=root/'npx';binary.write_text('#!/bin/sh\nprintf "[]\\n"\nexit '+str(status)+'\n');binary.chmod(0o755)
    output=root/'output';code=shell('custom-eslint.yml','Run Autonomous ESLint').replace('/tmp/eslint-report.json',str(root/'report.json'))
    r=subprocess.run(['bash','-e','-o','pipefail','-c',code],env=dict(os.environ,PATH=str(root)+os.pathsep+os.environ['PATH'],GITHUB_OUTPUT=str(output)),capture_output=True)
    self.assertEqual(r.returncode,status);self.assertEqual(output.read_text().strip(),'exit_code='+str(status))
 def test_final_lint_gate_fails_on_nonzero_or_missing_result(self):
  for status in ('0','1','2','','invalid'):
   r=subprocess.run(['bash','-e','-c',shell('custom-eslint.yml','Check for errors')],env=dict(os.environ,ESLINT_EXIT_CODE=status),capture_output=True)
   self.assertEqual(r.returncode==0,status=='0')
 def test_type_and_lint_propagate_failure(self):
  for step in ('Run TypeScript Check','Run ESLint Check'):
   with self.subTest(step=step),tempfile.TemporaryDirectory() as td:
    binary=Path(td)/'npm';binary.write_text('#!/bin/sh\nexit 23\n');binary.chmod(0o755)
    r=subprocess.run(['bash','-e','-c',shell('type-coverage.yml',step)],env=dict(os.environ,PATH=td+os.pathsep+os.environ['PATH']),capture_output=True)
    self.assertEqual(r.returncode,23)
if __name__=='__main__':unittest.main()
