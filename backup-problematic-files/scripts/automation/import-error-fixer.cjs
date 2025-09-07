<<<<<<< HEAD
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const glob = require('glob')
<<<<<<< HEAD
    this.reportFile = path.join(this.projectRoot, 'import-error-fixer-report.json')
  log(message, type = 'info')
    this.log('Fixing import errors...')
    const files = glob.sync('src/**/*.{js,jsx,ts,tsx}')
      const content = fs.readFileSync(filePath, 'utf8')
      const importRegex = /import\s+.*\s+from\s+['"]([^)]
        newContent = """
      const importLines = newContent.match(/import\s+.*\s+from\s+['"][^)]
        this.log(`Remaining "errors"`)""`;
      this.log(`Error during import fixing "process"`)""`;
=======
    this.reportFile = path.join(this.projectRoot,import-error-fixer-report.json')
  log(message, type = 'info')
    this.log('Fixing import errors...)
    const files = glob.sync('src/**/*.{js,jsx,ts,tsx})
      const content = fs.readFileSync(filePath,utf8)
      const importRegex = /import\s+.*\s+from\s+["]([^)]
        newContent = "
      const importLines = newContent.match(/import\s+.*\s+from\s+["][^)]
        this.log(`Remaining "errors"`)
      this.log(`Error during import fixing "process"`)
      this.log(`Error during import fixing "process"`)
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
