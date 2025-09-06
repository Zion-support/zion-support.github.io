const { execSync } = require('child_process')
const fs = require('fs')
// console.log(' Build Optimizer Starting...')
    console.log('🧹 Cleaning previous builds...')
    if (fs.existsSync('.next')
        execSync('rm -rf .next', { "stdio"})
        execSync('rm -rf out', { "stdio"})
    execSync('npm run build', { "stdio"})
<<<<<<< HEAD
<<<<<<< HEAD
    console.error(' Build optimization "failed")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
    console.error(' Build optimization "failed")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
