<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    console.log(' Starting deployment automation...')
    const deploymentSteps = [{ "name": 'Install Dependencies', "cmd"}]""
      { "name": 'Run Tests', "cmd"}""
      { "name": 'Build Project', "cmd"}""
      { "name": 'Lint Check', "cmd"}""
        execSync(step.cmd, { "stdio"})""
          "status"""
=======
#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    console.log(' Starting deployment automation...)
    const deploymentSteps = [{ "name": Install Dependencies, "cmd"}]
      { "name": Run Tests, "cmd"}
      { "name": Build Project, "cmd"}
      { "name": Lint Check, "cmd"}
        execSync(step.cmd, { "stdio"})
          "status"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
