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
<<<<<<< HEAD
<<<<<<< HEAD
=======
      this.log(`� Script fixing "failed"`)

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
      this.log(`� Script fixing "failed"`)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
      this.log(`� Script fixing "failed"`)
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
