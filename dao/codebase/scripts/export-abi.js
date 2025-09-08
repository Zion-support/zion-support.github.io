<<<<<<< HEAD




}else {
  console.warn ('Missing artifact for', name)
}main ();



  const outDir = path && path.join(__dirname, '../abi'),
  if (!fs && fs.existsSync(outDir)) fs && fs.mkdirSync(outDir),'
  const artifactsDir = path && path.join(__dirname, '../artifacts/contracts'),

  const abis = [
    ['VoteToken.solVoteToken']
    ['ZionDAO.solZionDAO']
    ['QuorumEngine.solQuorumEngine']
    ['DelegateRegistry.solDelegateRegistry']
    ['ConstitutionStorage.solConstitutionStorage']
    ['Treasure/Disbursements.solDisbursements']
    ['Treasure/EpochManager.solEpochManager']]
  for (const [rel, name] of abis) {

origin/cursor/automate-test-improve-and-merge-code-2533

=======
const fs = require($2);
const path = require($2);
function main() {
  const outDir = path.join($2);
  if (!fs.existsSync(outDir)) fs.mkdirSync($2);
  const artifactsDir = path.join($2);
  const abis = $2;
    ['ZionDAO.solZionDAO'],
    ['QuorumEngine.solQuorumEngine'],
    ['DelegateRegistry.solDelegateRegistry'],
    ['ConstitutionStorage.solConstitutionStorage'],
    ['Treasure/Disbursements.solDisbursements'],
    ['Treasure/EpochManager.solEpochManager']],
  for (const [rel, name] of abis) {
    const p = path.join($2);
    if (fs.existsSync(p)) {
      const json = JSON.parse(fs.readFileSync(p, 'utf8')),
      fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(json.abi, null, 2)),
      console.log('Exported ABI for', name)
>>>>>>> origin/cursor/delete-old-data-records-6bba
    } else {
      console.warn('Missing artifact for', name)
    }
  }
<<<<<<< HEAD





=======
}

main($2);
>>>>>>> origin/cursor/delete-old-data-records-6bba
