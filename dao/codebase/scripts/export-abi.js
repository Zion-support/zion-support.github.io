<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


=======

 
}else {
  console.warn ('Missing artifact for', name) 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d


>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}else {
  console.warn ('Missing artifact for', name)
}main ();
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
function main() {
  const outDir = path.join(__dirname, '../abi')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)
  const artifactsDir = path.join(__dirname, '../artifacts/contracts')
<<<<<<< HEAD
=======
=======

=======
const fs = require('fs'),
const path = require('path'),


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
function main() {

  const outDir = path && path.join(__dirname, '../abi'),
  if (!fs && fs.existsSync(outDir)) fs && fs.mkdirSync(outDir),
  const artifactsDir = path && path.join(__dirname, '../artifacts/contracts'),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
<<<<<<< HEAD
=======
    const p = path && path.join(artifactsDir, rel, `${name}.json`),
    if (fs && fs.existsSync(p)) {
      const json = JSON && JSON.parse(fs && fs.readFileSync(p, 'utf8')),
      fs && fs.writeFileSync(path && path.join(outDir, `${name}.json`), JSON && JSON.stringify(json && json.abi, null, 2)),
      console && console.log('Exported ABI for', name)

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    } else {
      console.warn('Missing artifact for', name)
    }
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

}main ();main(),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
main();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
