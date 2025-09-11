#!/usr/bin/env node;
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
    this.log(' Starting Git Operations')
      this.log('� Adding all changes to git')
      execSync('git add .')
      this.log('� Committing changes')
      this.log('� Pushing to current branch')
      const currentBranch = execSync('git branch --show-current')
<<<<<<< HEAD
        "encoding"
=======
        "encoding"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
