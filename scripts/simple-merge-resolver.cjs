#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const util = require('util')
    this.projectRoot = path.join(__dirname, '..')
  async log(message, level = 'INFO')
      const { stdout } = await execAsync('git diff --name-only --diff-filter=U')
      return stdout.trim().split('\n')
      await this.log(`Error finding conflicted "files"`)
      await this.log(`Encountered ${this.errors.length} "errors"`)
    console.log('You can now commit the changes "with": git add . && git commit -m "Resolve merge conflicts")
cursor/fix-lint-push-and-merge-to-main-f3c1;