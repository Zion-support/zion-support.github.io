<<<<<<< HEAD
<<<<<<< HEAD
 
}else {
  console.warn ('Missing artifact for', name) 
=======
const fs = require('fs'),
const path = require('path'),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

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
      const json = JSON.parse(fs.readFileSync(p, 'utf8')),
      fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(json.abi, null, 2)),
      console.log('Exported ABI for', name)
    } else {
      console.warn('Missing artifact for', name)
    }
  }
}

<<<<<<< HEAD
}main ();
=======
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
      const json = JSON.parse(fs.readFileSync(p, 'utf8')),
      fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(json.abi, null, 2)),
      console.log('Exported ABI for', name)
    } else {
      console.warn('Missing artifact for', name)
    }
  }
}

main(),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
main(),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
