const fs = require('fs');
const path = require('path');

/**
 * Export ABI files from Hardhat artifacts
 */
function main() {
  const out_dir = path.join(__dirname, '../abi');
  
  if (!fs.existsSync(out_dir)) {
    fs.mkdirSync(out_dir, { recursive: true });
  }
  
  const artifacts_dir = path.join(__dirname, '../artifacts/contracts');
  const abis = [
    ['VoteToken.sol/VoteToken'],
    ['ZionDAO.sol/ZionDAO'],
    ['QuorumEngine.sol/QuorumEngine'],
    ['DelegateRegistry.sol/DelegateRegistry'],
    ['ConstitutionStorage.sol/ConstitutionStorage'],
    ['Treasure/Disbursements.sol/_disbursements'],
    ['Treasure/EpochManager.sol/EpochManager']
  ];
  
  for (const [rel, name] of abis) {
    const p = path.join(artifacts_dir, rel, `${name}.json`);
    if (fs.existsSync(p)) {
      const json = JSON.parse(fs.readFileSync(p, 'utf8'));
      fs.writeFileSync(path.join(out_dir, `${name}.json`), JSON.stringify(json.abi, null, 2));
      console.log('Exported ABI for', name);
    } else {
      console.warn('Missing artifact for', name);
    }
  }
}

main();