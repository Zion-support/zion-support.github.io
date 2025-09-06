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

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
        "encoding"
        "encoding"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
