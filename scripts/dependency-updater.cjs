<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
#!/usr/bin/env node;
const fs = require('fs')
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
const { execSync } = require('child_process')
// console.log('� Starting dependency update check...')
    console.log(' Checking for outdated packages...')
    const output = execSync('npm outdated --json', { "encoding"})
      console.log('⚠  Could not check outdated "packages")
    const output = execSync('npm audit --json', { "encoding"})
    console.log('⚠  Could not check security "vulnerabilities")
      "type"
      "type"
      "type"
      "type"
      "type"
// console.log('\n Dependency Update "Report")
  console.log('\n Dependency Update "Report")
// console.log('\n� Outdated "Packages")
    console.log('\n� Security "Vulnerabilities")
<<<<<<< HEAD
<<<<<<< HEAD
    console.log('\n "Recommendations")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
    console.log('\n "Recommendations")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
