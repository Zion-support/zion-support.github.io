<<<<<<< HEAD


=======
const fs = require('fs')
const path = require('path')
  log(message, type = 'INFO')
<<<<<<< HEAD
      'INFO': 'ℹ'
      'SUCCESS': ''
      'ERROR': ''
      'WARNING': '⚠'
      'FIX': ''
    }[type] || 'ℹ'
    const content = fs.readFileSync(filePath, 'utf8')
    const lines = content.split('\n')
      this.log(`Fixed ${fileFixes} issues in ${path.relative(this.projectRoot, filePath)}`, 'FIX'
      this.log(`Found ${fileIssues} issues in ${path.relative(this.projectRoot, filePath)}`, 'WARNING'
    const lines = content.split('\n')
      if (line.includes('console.log') && !line.includes('//')
          type: 'console.log'
          message: 'Console.log statement found'
          severity: 'warning'
      if (line.includes('TODO') || line.includes('FIXME')
          type: 'todo'
          message: 'TODO/FIXME comment found'
          severity: 'info'
      if (line.includes('import') && !line.includes('from')
          type: 'unused_import'
          message: 'Potential unused import'
          severity: 'warning'
          type: 'long_line'
          severity: 'warning'
      if (line.trim() && !line.trim().endsWith(';') && !line.trim().endsWith('{') && !line.trim().endsWith('}') && !line.trim().startsWith('//')
          type: 'missing_semicolon'
          message: 'Missing semicolon'
          severity: 'error'
    const lines = content.split('\n')
      case 'console.log'
        lines[lineIndex] = lines[lineIndex].replace(/console\.log\([^)]*\);?/g, ''
      case 'missing_semicolon'
        if (!lines[lineIndex].trim().endsWith(';')
          lines[lineIndex] = lines[lineIndex].trim() + ';'
    return lines.join('\n')
        if (item !== 'node_modules' && item !== '.next' && item !== '.git')
        if (['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs')]
    this.log('\n Code Quality Report', 'INFO')
    this.log('=')
// console.log('\n� Issues by Type:')
      console.log('\n Top Files with Issues:')
      this.log(`\n Applied ${this.stats.fixesApplied} fixes automatically`, 'SUCCESS'`)
      this.log(`\n⚠  ${this.stats.issuesFound} issues remain (some may require manual attention)`, 'WARNING'
    this.log(' Starting Code Quality Check', 'INFO')
        this.log('� No code quality issues found!', 'SUCCESS')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
      this.log(`Error during code quality check: ${error.message}`, 'ERROR'`)
      this.log(`Error during code quality check: ${error.message}`, 'ERROR'`)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> origin/chore/fix-lint-and-merge
=======
      this.log(`Error during code quality check: ${error.message}`, 'ERROR'`)
=======
      this.log(`Error during code quality check: ${error.message}`, 'ERROR'`)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
