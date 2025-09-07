<<<<<<< HEAD
const fs = require('fs')
const path = require('path')
  log(message, type = 'INFO')
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

      this.log(`Error during code quality check: ${error.message}`, 'ERROR'`)

=======
<<<<<<< HEAD
const fs = require('fs')
const path = require('path')
  log(message, type = 'INFO')
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


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

<<<<<<< HEAD
=======

      this.log(`Error during code quality check: ${error.message}`, 'ERROR`)

      this.log(`Error during code quality check: ${error.message}`, ERROR'`)
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> merged-prs-20250907-203621
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

      this.log(`Error during code quality check: ${error.message}`, 'ERROR'`)
      this.log(`Error during code quality check: ${error.message}`, 'ERROR'`)
      this.log(`Error during code quality check: ${error.message}`, 'ERROR'`)



=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      this.log(`Error during code quality check: ${error.message}`, 'ERROR'`)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
      this.log(`Error during code quality check: ${error.message}`, 'ERROR'`)
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      this.log(`Error during code quality check: ${error.message}`, 'ERROR'`)


<<<<<<< HEAD
module.exports = CodeQualityChecker;

=======
<<<<<<< HEAD

=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
