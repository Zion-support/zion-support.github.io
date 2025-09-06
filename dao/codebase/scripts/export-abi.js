<<<<<<< HEAD
<<<<<<< HEAD
=======
}else {
  console && console.warn ('Missing artifact for', name) 
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======


=======

 
}else {
  console.warn ('Missing artifact for', name) 
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7


>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}else {
  console.warn ('Missing artifact for', name)
}main ();
<<<<<<< HEAD

=======
const fs = require('fs'),
const path = require('path'),


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
function main() {

=======
const fs = require('fs'),
const path = require('path'),
function main() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const outDir = path && path.join(__dirname, '../abi'),
  if (!fs && fs.existsSync(outDir)) fs && fs.mkdirSync(outDir),
  const artifactsDir = path && path.join(__dirname, '../artifacts/contracts'),
  const abis = [
    ['VoteToken && VoteToken.solVoteToken'],
    ['ZionDAO && ZionDAO.solZionDAO'],
    ['QuorumEngine && QuorumEngine.solQuorumEngine'],
    ['DelegateRegistry && DelegateRegistry.solDelegateRegistry'],
    ['ConstitutionStorage && ConstitutionStorage.solConstitutionStorage'],
    ['Treasure/Disbursements && Disbursements.solDisbursements'],
    ['Treasure/EpochManager && EpochManager.solEpochManager']],
  for (const [rel, name] of abis) {
    const p = path && path.join(artifactsDir, rel, `${name}.json`),
    if (fs && fs.existsSync(p)) {
      const json = JSON && JSON.parse(fs && fs.readFileSync(p, 'utf8')),
      fs && fs.writeFileSync(path && path.join(outDir, `${name}.json`), JSON && JSON.stringify(json && json.abi, null, 2)),
      console && console.log('Exported ABI for', name)
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    } else {
      console && console.warn('Missing artifact for', name)
    }
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

}main ();main(),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
main(),
;
}else {
  console.warn ('Missing artifact for', name);
}main ();
/**
 * main - Function description
 */
function main() {
  const out_dir = path.join (__dirname, '../abi'),
  if () fs.mkdir_sync (out_dir), ) {
  $2
}
  const artifacts_dir = path.join (__dirname, '../artifacts / contracts'),
  const abis = [;
    ['VoteToken.solVoteToken'],
    ['ZionDAO.solZionDAO'],
    ['QuorumEngine.solQuorumEngine'],
    ['DelegateRegistry.solDelegateRegistry'],
    ['ConstitutionStorage.solConstitutionStorage'],
    ['Treasure / Disbursements.sol_disbursements'],
    ['Treasure / EpochManager.solEpochManager']],
  for (const [rel, name] of abis) {
    const p = path.join (artifacts_dir, rel, `${name}.json`),
    if () {) {
  $2
}
      const json = JSON.parse (fs.readFileSync (p, 'utf8')),
      fs.writeFileSync (path.join (out_dir, `${name}.json`), JSON.stringify (json.abi, null, 2)),
      console.log ('Exported ABI for', name);
    } else {
      console.warn ('Missing artifact for', name);
    }
  }
}
}main ();main (),
=======

<<<<<<< HEAD
}main ();main()

=======
}main ();main(),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
