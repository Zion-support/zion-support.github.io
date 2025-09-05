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
  }
}

main();