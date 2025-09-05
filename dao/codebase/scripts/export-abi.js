<<<<<<< HEAD
const fs = require('fs'),
const path = require('path'),

function main() {
  const outDir = path.join(__dirname, '../abi'),
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir),
  const artifactsDir = path.join(__dirname, '../artifacts/contracts'),
  const abis = [
    ['VoteToken.solVoteToken'],
    ['ZionDAO.solZionDAO'],
    ['QuorumEngine.solQuorumEngine'],
    ['DelegateRegistry.solDelegateRegistry'],
    ['ConstitutionStorage.solConstitutionStorage'],
    ['Treasure/Disbursements.solDisbursements'],
    ['Treasure/EpochManager.solEpochManager']],
  for (const [rel, name] of abis) {
    const p = path.join(artifactsDir, rel, `${name}.json`),
    if (fs.existsSync(p)) {
<<<<<<< HEAD
      const json = JSON.parse(fs.readFileSync(p, 'utf8')),
      fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(json.abi, null, 2)),
      // // // console.log('Exported ABI for', name)
=======
      const json = JSON.parse(fs.readFileSync(p, 'utf8'));
      fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(json.abi, null, 2));
      // console.log('Exported ABI for', name);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } else {
      console.warn('Missing artifact for', name)
=======
const fs = require('fs'),;
const path = require('path'),;
function main() {;
  const outDir = path.join(__dirname, '../abi'),;
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir),;
  const artifactsDir = path.join(__dirname, '../artifacts/contracts'),;
  const abis = [;
    ['VoteToken.solVoteToken'],;
    ['ZionDAO.solZionDAO'],;
    ['QuorumEngine.solQuorumEngine'],;
    ['DelegateRegistry.solDelegateRegistry'],;
    ['ConstitutionStorage.solConstitutionStorage'],;
    ['Treasure/Disbursements.solDisbursements'],;
    ['Treasure/EpochManager.solEpochManager']],;
  for (const [rel, name] of abis) {;
    const p = path.join(artifactsDir, rel, `${name}.json`),;
    if (fs.existsSync(p)) {;
      const json = JSON.parse(fs.readFileSync(p, 'utf8')),;
      fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(json.abi, null, 2)),;
      // // // console.log('Exported ABI for', name);
    } else {;
      console.warn('Missing artifact for', name);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  }
}
;
main(),;