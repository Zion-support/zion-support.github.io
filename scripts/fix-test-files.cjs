<<<<<<< HEAD
=======

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
    this.testDir = path.join(this.projectRoot, '__tests__')
    this.reportsDir = path.join(this.projectRoot, 'automation-reports')
let content = fs.readFileSync(filePath, 'utf8');
const unterminatedStringRegex = /import\s+.*?from\s+['"]([^'"]*?)[''];
return match.replace(/['"]\s*['"]$/, '');
const missingQuoteRegex = /import\s+.*?from\s+['"]([^'')];
        if (!match.endsWith('"') && !match.endsWith(')
return match + '';
      const jsxIssues = [{ "pattern": /render\(<([^>]+)>\s*\)/g, "replacement"}
        { "pattern": /expect\(screen\.getByTestId\('([^']+)'\)\)\.toBeInTheDocument\(\)/g, "replacement": 'expect(screen.getByTestId("$1"})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2

const componentImportRegex = /import\s+(\w+)\s+from\s+['"]([^'')];
