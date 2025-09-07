
;
}else {console.warn ('Missing artifact for', name)}main ()}else {console.warn ('Missing artifact for', name)}main ()}else {console.warn ('Missing artifact for', name)ursor/fix-website-loading-errors-and-merge-6662;
}else {console.warn ('Missing artifact for', name)}main ()function main() {const outDir = path.join(__dirname, '../abi')if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)const artifactsDir = path.join(__dirname, '../artifacts/contracts')const fs = require('fs'),const path = require('path'),function main() {const outDir = path && path.join(__dirname, '../abi'),if (!fs && fs.existsSync(outDir)) fs && fs.mkdirSync(outDir),const artifactsDir = path && path.join(__dirname, '../artifacts/contracts'),const abis = [;
    ['VoteToken.solVoteToken'];
    ['ZionDAO.solZionDAO'];
    ['QuorumEngine.solQuorumEngine'];
    ['DelegateRegistry.solDelegateRegistry'];
    ['ConstitutionStorage.solConstitutionStorage'];
    ['Treasure/Disbursements.solDisbursements'];
    ['Treasure/EpochManager.solEpochManager']];
  for (const [rel, name] of abis) {const p = path && path.join(artifactsDir, rel, `${name}.json`),if (fs && fs.existsSync(p)) {const json = JSON && JSON.parse(fs && fs.readFileSync(p, 'utf8')),fs && fs.writeFileSync(path && path.join(outDir, `${name}.json`), JSON && JSON.stringify(json && json.abi, null, 2)),console && console.log('Exported ABI for', name)const fs = require('fs')const path = require('path')function main() {const outDir = path.join(__dirname, '../abi')if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)const artifactsDir = path.join(__dirname, '../artifacts/contracts')const abis = [;
    ['VoteToken.solVoteToken'],['ZionDAO.solZionDAO'],['QuorumEngine.solQuorumEngine'],['DelegateRegistry.solDelegateRegistry'],['ConstitutionStorage.solConstitutionStorage'],['Treasure/Disbursements.solDisbursements'],['Treasure/EpochManager.solEpochManager']];
  for (const [rel, name] of abis) {const p = path.join(artifactsDir, rel, `${name}.json`)if (fs.existsSync(p)) {const json = JSON.parse(fs.readFileSync(p, 'utf8')),fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(json.abi, null, 2))console.log('Exported ABI for', name)} else {console.warn('Missing artifact for', name)}
  }
}}main ()main()}main ()main(),ursor/fix-website-loading-errors-and-merge-6662;
main()

<<<<<<< HEAD


}else {
  console.warn ('Missing artifact for', name)
}main ();


=======
}else {
  console.warn ('Missing artifact for', name)
}main ();
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
function main() {
  const outDir = path.join(__dirname, '../abi')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)
  const artifactsDir = path.join(__dirname, '../artifacts/contracts')
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
function main() {

  const outDir = path && path.join(__dirname, '../abi'),
  if (!fs && fs.existsSync(outDir)) fs && fs.mkdirSync(outDir),
  const artifactsDir = path && path.join(__dirname, '../artifacts/contracts'),
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  const abis = [
    ['VoteToken.solVoteToken']
    ['ZionDAO.solZionDAO']
    ['QuorumEngine.solQuorumEngine']
    ['DelegateRegistry.solDelegateRegistry']
    ['ConstitutionStorage.solConstitutionStorage']
    ['Treasure/Disbursements.solDisbursements']
    ['Treasure/EpochManager.solEpochManager']]
<<<<<<< HEAD
  for (const [rel, name] of abis) {



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
    } else {
=======
  for (const [rel, name] of abis) {} else {
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
      console.warn('Missing artifact for', name)
    }
  }
}


<<<<<<< HEAD

}main ();main(),




main();

=======
}main ();main(),

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
