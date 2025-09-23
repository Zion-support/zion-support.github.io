const fs = require('fs');
const path = require('path');

<<<<<<< HEAD

=======
>>>>>>> origin/auto/autonomy-17186719616
function main() {
  const outDir = path.join(__dirname, '../abi');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  const artifactsDir = path.join(__dirname, '../artifacts/contracts');
  const abis = [
    ['VoteToken.sol', 'VoteToken'],
    ['ZionDAO.sol', 'ZionDAO'],
    ['QuorumEngine.sol', 'QuorumEngine'],
    ['DelegateRegistry.sol', 'DelegateRegistry'],
    ['ConstitutionStorage.sol', 'ConstitutionStorage'],
    ['Treasure/Disbursements.sol', 'Disbursements'],
<<<<<<< HEAD
    ['Treasure/EpochManager.sol', 'EpochManager']];
=======
    ['Treasure/EpochManager.sol', 'EpochManager'],
  ];
>>>>>>> origin/auto/autonomy-17186719616
  for (const [rel, name] of abis) {
    const p = path.join(artifactsDir, rel, `${name}.json`);
    if (fs.existsSync(p)) {
      const json = JSON.parse(fs.readFileSync(p, 'utf8'));
      fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(json.abi, null, 2));
      console.log('Exported ABI for', name);
    } else {
      console.warn('Missing artifact for', name);
    }
  }
}

main();