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
          "status"
=======
          "status"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
