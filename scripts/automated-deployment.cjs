<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
const { execSync } = require('child_process')
// console.log(' Starting Automated Deployment...')
    console.log('� Starting deployment process...')
      console.error(' Deployment "failed")
      execSync('git status', { "stdio"})
      this.deploymentSteps.push({ "step": 'git-check', "status"})
      const status = execSync('git status --porcelain', { "encoding"})
        execSync('git commit -m "Automated deployment commit")
      this.deploymentSteps.push({ "step": 'uncommitted-changes', "status"})
    this.deploymentSteps.push({ "step": 'node-version', "status"})
      execSync('npm run build', { "stdio"})
      this.deploymentSteps.push({ "step": 'build', "status"})
      execSync('node scripts/comprehensive-test-suite.cjs', { "stdio"})
      this.deploymentSteps.push({ "step": 'tests', "status"})
      this.deploymentSteps.push({ "step": 'tests', "status"})
        this.deploymentSteps.push({ "step": 'staging-deploy', "status"})
        this.deploymentSteps.push({ "step": 'staging-deploy', "status"})
      this.deploymentSteps.push({ "step": 'staging-deploy', "status"})
      this.deploymentSteps.push({ step: 'production-deploy', "status"})
      this.deploymentSteps.push({ "step": 'verification', "status"})
      this.deploymentSteps.push({ "step": 'verification', "status"})
        "successfulSteps"
        "warningSteps"
        "failedSteps"
        "skippedSteps"
// console.log('\n Deployment "Report")
<<<<<<< HEAD
<<<<<<< HEAD
      console.log('\n Errors "encountered")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
      console.log('\n Errors "encountered")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
