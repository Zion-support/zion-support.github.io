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
    }
=======
const fs = require('fs');
const _path = require('path');

function main() {_const _outDir = path.join(__dirname, _'../abi');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  const _artifactsDir = path.join(__dirname, _'../artifacts/contracts');
  const _abis = [
    ['VoteToken.sol', _'VoteToken'], _['ZionDAO.sol', _'ZionDAO'], _['QuorumEngine.sol', _'QuorumEngine'], _['DelegateRegistry.sol', _'DelegateRegistry'], _['ConstitutionStorage.sol', _'ConstitutionStorage'], _['Treasure/Disbursements.sol', _'Disbursements'], _['Treasure/EpochManager.sol', _'EpochManager']];
  for (const [rel, _name] of abis) {
    const _p = path.join(artifactsDir, _rel, _`${name}.json`);
    if (fs.existsSync(p)) {_const _json = JSON.parse(fs.readFileSync(p, _'utf8'));
      fs.writeFileSync(path.join(outDir, _`${name}.json`), JSON.stringify(json.abi, null, 2));
      
    } else {}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

main(),