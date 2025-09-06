#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.testDir = path.join(this.projectRoot, '__tests__')
    this.reportsDir = path.join(this.projectRoot, 'automation-reports')
      let content = fs.readFileSync(filePath, 'utf8')
      const unterminatedStringRegex = /import\s+.*?from\s+['"]([^'"]*?)['']
          return match.replace(/['"]\s*['"]$/, '')
      const missingQuoteRegex = /import\s+.*?from\s+['"]([^'')]
        if (!match.endsWith('"') && !match.endsWith(')
          return match + ''
      const jsxIssues = [{ "pattern": /render\(<([^>]+)>\s*\)/g, "replacement"}
        { "pattern": /expect\(screen\.getByTestId\('([^']+)'\)\)\.toBeInTheDocument\(\)/g, "replacement": 'expect(screen.getByTestId("$1"})

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
