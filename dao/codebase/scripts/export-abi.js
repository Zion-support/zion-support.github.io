<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508



 
}else {
  console.warn ('Missing artifact for', name) 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}else {
  console.warn ('Missing artifact for', name)
}main ();
function main() {
  const outDir = path.join(__dirname, '../abi')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)
  const artifactsDir = path.join(__dirname, '../artifacts/contracts')
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b




}else {
  console.warn ('Missing artifact for', name)
}main ();

const fs = require('fs'),
const path = require('path'),



function main() {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

  const outDir = path && path.join(__dirname, '../abi'),
  if (!fs && fs.existsSync(outDir)) fs && fs.mkdirSync(outDir),
  const artifactsDir = path && path.join(__dirname, '../artifacts/contracts'),
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  const abis = [
    ['VoteToken.solVoteToken']
    ['ZionDAO.solZionDAO']
    ['QuorumEngine.solQuorumEngine']
    ['DelegateRegistry.solDelegateRegistry']
    ['ConstitutionStorage.solConstitutionStorage']
    ['Treasure/Disbursements.solDisbursements']
    ['Treasure/EpochManager.solEpochManager']]
<<<<<<< HEAD
<<<<<<< HEAD
  for (const [rel, name] of abis) {
<<<<<<< HEAD
=======
=======
  for (const [rel, name] of abis) {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    const p = path && path.join(artifactsDir, rel, `${name}.json`),
    if (fs && fs.existsSync(p)) {
      const json = JSON && JSON.parse(fs && fs.readFileSync(p, 'utf8')),
      fs && fs.writeFileSync(path && path.join(outDir, `${name}.json`), JSON && JSON.stringify(json && json.abi, null, 2)),
      console && console.log('Exported ABI for', name)

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const fs = require('fs');
const path = require('path');
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    } else {
      console.warn('Missing artifact for', name)
    }
  }
}
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508




}main ();main(),

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  for (const [rel, name] of abis) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
main();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

main();
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
