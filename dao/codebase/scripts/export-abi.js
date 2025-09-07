

<<<<<<< HEAD
<<<<<<< HEAD

 
}else {
  console.warn ('Missing artifact for', name) 

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b


}else {
  console.warn ('Missing artifact for', name)
}main ();
function main() {
  const outDir = path.join(__dirname, '../abi')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)
  const artifactsDir = path.join(__dirname, '../artifacts/contracts')

const fs = require('fs'),
const path = require('path'),


<<<<<<< HEAD
=======

=======
}else {
  console.warn ('Missing artifact for', name)
}main ();
function main() {
  const outDir = path.join(__dirname, '../abi')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)
  const artifactsDir = path.join(__dirname, '../artifacts/contracts')
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
function main() {
=======



}else {}
  console.warn ('Missing artifact for', name)
}main ();
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

function main() {}
'
  const outDir = path && path.join(__dirname, '../abi'),
  if (!fs && fs.existsSync(outDir)) fs && fs.mkdirSync(outDir),'
  const artifactsDir = path && path.join(__dirname, '../artifacts/contracts'),
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const abis = [
    ['VoteToken.solVoteToken']
    ['ZionDAO.solZionDAO']
    ['QuorumEngine.solQuorumEngine']
    ['DelegateRegistry.solDelegateRegistry']
    ['ConstitutionStorage.solConstitutionStorage']
    ['Treasure/Disbursements.solDisbursements']
    ['Treasure/EpochManager.solEpochManager']]
  for (const [rel, name] of abis) {
<<<<<<< HEAD
    const p = path && path.join(artifactsDir, rel, `${name}.json`),
    if (fs && fs.existsSync(p)) {
      const json = JSON && JSON.parse(fs && fs.readFileSync(p, 'utf8')),
      fs && fs.writeFileSync(path && path.join(outDir, `${name}.json`), JSON && JSON.stringify(json && json.abi, null, 2)),
      console && console.log('Exported ABI for', name)

origin/cursor/expand-services-advertise-and-build-project-c28b
const fs = require('fs');
const path = require('path');
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
function main() {
  const outDir = path.join(__dirname, '../abi');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  const artifactsDir = path.join(__dirname, '../artifacts/contracts');
  const abis = [
    ['VoteToken.solVoteToken'],
    ['ZionDAO.solZionDAO'],
    ['QuorumEngine.solQuorumEngine'],
    ['DelegateRegistry.solDelegateRegistry'],
    ['ConstitutionStorage.solConstitutionStorage'],
    ['Treasure/Disbursements.solDisbursements'],
    ['Treasure/EpochManager.solEpochManager']];
  for (const [rel, name] of abis) {
    const p = path.join(artifactsDir, rel, `${name}.json`);
    if (fs.existsSync(p)) {
      const json = JSON.parse(fs.readFileSync(p, 'utf8')),
      fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(json.abi, null, 2));
      console.log('Exported ABI for', name)
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    } else {
=======

  const abis = ['
    ['VoteToken.solVoteToken']'
    ['ZionDAO.solZionDAO']'
    ['QuorumEngine.solQuorumEngine']'
    ['DelegateRegistry.solDelegateRegistry']'
    ['ConstitutionStorage.solConstitutionStorage']'
    ['Treasure/Disbursements.solDisbursements']'
    ['Treasure/EpochManager.solEpochManager']]
  for (const [rel, name] of abis) {}
    } else {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      console.warn('Missing artifact for', name)
    }
  }
}

<<<<<<< HEAD
<<<<<<< HEAD



}main ();main(),

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
main();
origin/cursor/automate-test-improve-and-merge-code-2533
=======

<<<<<<< HEAD

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}main ();main(),

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}main ();main(),



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
