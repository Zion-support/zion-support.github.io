<<<<<<< HEAD
 
}else {
  console.warn ('Missing artifact for', name) 


>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======


>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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

}main ();main(),
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
