<<<<<<< HEAD
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
    this.log(' Starting Git Operations')
      this.log('� Adding all changes to git')
<<<<<<< HEAD
      execSync('git add .')
=======
      execSync('git add .)
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      this.log('� Committing changes')
      this.log('� Pushing to current branch')
      const currentBranch = execSync('git branch --show-current')