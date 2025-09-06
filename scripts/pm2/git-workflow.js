const fs = require('fs'
const path = require('path'
const { execSync } = require('child_process'
class GitWorkflow {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/git-workflow.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/
    encoding: 'utf8'}).trim().split('\n'); const branchInfo = []; for (const branch of branches) {const branchName = branch.replace('origin/
    encoding: 'utf8'}).trim().split('\n'); const staleBranches = []; const mainBranch = 'main'; for (const branch of branches) {const branchName = branch.replace('origin/