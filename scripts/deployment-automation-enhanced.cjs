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

=======
<<<<<<< HEAD
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
          "status"
