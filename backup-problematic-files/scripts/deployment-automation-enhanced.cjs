#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    console.log(' Starting deployment automation...')
    const deploymentSteps = [{ "name": 'Install Dependencies', "cmd"}]
      { "name": 'Run Tests', "cmd"}
      { "name": 'Build Project', "cmd"}
      { "name": 'Lint Check', "cmd"}
        execSync(step.cmd, { "stdio"})
          "status"
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
          "status"
          "status"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
