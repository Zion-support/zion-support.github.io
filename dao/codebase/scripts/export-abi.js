

}else {
  console.warn ('Missing artifact for', name)
}main ();
function main() {
  const outDir = path.join(__dirname, '../abi')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)
  const artifactsDir = path.join(__dirname, '../artifacts/contracts')

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