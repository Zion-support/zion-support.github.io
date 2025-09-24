const fs = require('fs')
const path = require('path')
  log(message, type = 'INFO')
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
      this.log(`Error during code quality check: ${error.message}`, 'ERROR'`)
