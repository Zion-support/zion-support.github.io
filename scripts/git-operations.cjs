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
=======
        "encoding"

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
        "encoding"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
