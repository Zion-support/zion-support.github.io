
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

function main() {

function main() {}
'
  const outDir = path && path.join(__dirname, '../abi'),
  if (!fs && fs.existsSync(outDir)) fs && fs.mkdirSync(outDir),'
  const artifactsDir = path && path.join(__dirname, '../artifacts/contracts'),
origin/cursor/expand-services-advertise-and-build-project-c28b
  const abis = [
    ['VoteToken.solVoteToken']
    ['ZionDAO.solZionDAO']
    ['QuorumEngine.solQuorumEngine']
    ['DelegateRegistry.solDelegateRegistry']
    ['ConstitutionStorage.solConstitutionStorage']
    ['Treasure/Disbursements.solDisbursements']
    ['Treasure/EpochManager.solEpochManager']]
  for (const [rel, name] of abis) {
const p = path && path.join(artifactsDir, rel, `${name}.json`),
    if (fs && fs.existsSync(p)) {
      const json = JSON && JSON.parse(fs && fs.readFileSync(p, 'utf8')),
      fs && fs.writeFileSync(path && path.join(outDir, `${name}.json`), JSON && JSON.stringify(json && json.abi, null, 2)),
      console && console.log('Exported ABI for', name)

origin/cursor/expand-services-advertise-and-build-project-c28b
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
origin/cursor/automate-test-improve-and-merge-code-2533
    } else {

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
      console.warn('Missing artifact for', name)
    }
  }
}

}main ();main(),

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
main();
origin/cursor/automate-test-improve-and-merge-code-2533
}main ();main(),

