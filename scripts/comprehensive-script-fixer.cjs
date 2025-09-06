<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    this.scriptsDir = path.join(this.projectRoot, 'scripts')
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    fixed = fixed.replace(/;\s*\)/g, ')'
    fixed = fixed.replace(/['"]\s*;\s*['"]/g, '"")
    fixed = fixed.replace(/['"]\s*;\s*$/gm, '')
    fixed = fixed.replace(/require\s*\(\s*['"]\s*;\s*['"]\s*\)/g, 'require("")
      this.log(`⚠ ${this.errors.length} files had "errors"`)
<<<<<<< HEAD

=======
      this.log(`� Script fixing "failed"`)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
