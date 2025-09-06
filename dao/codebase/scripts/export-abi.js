<<<<<<< HEAD
=======
 
}else {
  console.warn ('Missing artifact for', name) 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035


}else {
  console.warn ('Missing artifact for', name)
}main ();
function main() {
  const outDir = path.join(__dirname, '../abi')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)
  const artifactsDir = path.join(__dirname, '../artifacts/contracts')
  const abis = [
    ['VoteToken.solVoteToken']
    ['ZionDAO.solZionDAO']
    ['QuorumEngine.solQuorumEngine']
    ['DelegateRegistry.solDelegateRegistry']
    ['ConstitutionStorage.solConstitutionStorage']
    ['Treasure/Disbursements.solDisbursements']
    ['Treasure/EpochManager.solEpochManager']]
  for (const [rel, name] of abis) {
    const p = path.join(artifactsDir, rel, `${name}.json`)
    if (fs.existsSync(p)) {
      const json = JSON.parse(fs.readFileSync(p, 'utf8'))
      fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(json.abi, null, 2))

      console.log('Exported ABI for', name)
    } else {
      console.warn('Missing artifact for', name)
    }
  }
}

<<<<<<< HEAD
}main ();main()

=======
}main ();main(),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
