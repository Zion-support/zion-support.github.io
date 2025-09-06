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
<<<<<<< HEAD
          "status"
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
          "status"
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
