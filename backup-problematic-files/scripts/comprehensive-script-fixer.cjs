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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
