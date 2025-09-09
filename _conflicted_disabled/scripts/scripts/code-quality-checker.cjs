
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
