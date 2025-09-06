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
<<<<<<< HEAD
        "encoding"
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
        "encoding"
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
