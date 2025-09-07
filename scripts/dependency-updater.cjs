
<<<<<<< HEAD
<<<<<<< HEAD
=======
#!/usr/bin/env node;
const fs = require('fs')
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

=======
#!/usr/bin/env node;
const fs = require('fs')
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
=======
    console.log('\n "Recommendations")

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
    console.log('\n "Recommendations")
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
