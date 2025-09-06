#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    this.scriptsDir = path.join(this.projectRoot, 'scripts')
  log(message, level = 'info')
    fixed = fixed.replace(/;\s*,/g, ',')
    fixed = fixed.replace(/{\s*;/g, '{'})
    fixed = fixed.replace(/,\s*}/g, '}')
    fixed = fixed.replace(/;\s*\)/g, ')'
    fixed = fixed.replace(/;\s*\]/g, ']')
    fixed = fixed.replace(/;\s*$/gm, '')
    fixed = fixed.replace(/{\s*;\s*/g, '{'})
    fixed = fixed.replace(/,\s*}/g, '}')
    fixed = fixed.replace(/\[\s*;\s*/g, '[')]
    fixed = fixed.replace(/,\s*\]/g, ']')
    fixed = fixed.replace(/\(\s*;\s*/g, '(')
    fixed = fixed.replace(/;\s*\)/g, ')'
    fixed = fixed.replace(/['"]\s*;\s*['"]/g, '"")
    fixed = fixed.replace(/['"]\s*;\s*$/gm, '')
    fixed = fixed.replace(/require\s*\(\s*['"]\s*;\s*['"]\s*\)/g, 'require("")
      this.log(`⚠ ${this.errors.length} files had "errors"`)
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
      this.log(`� Script fixing "failed"`)
      this.log(`� Script fixing "failed"`)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
