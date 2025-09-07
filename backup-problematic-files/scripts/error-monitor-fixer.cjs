<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require(path')
const { execSync } = require('child_process')
<<<<<<< HEAD
    this.reportsDir = path.join(this.projectRoot, automation-reports')
    this.logsDir = path.join(this.projectRoot, 'logs)
    this.log( Detecting common errors in codebase')
    const srcDir = path.join(this.projectRoot, 'src)
    const pagesDir = path.join(this.projectRoot, pages')
    const componentsDir = path.join(this.projectRoot, 'components)
      const content = fs.readFileSync(filePath, utf8')
      const syntaxIssues = [{ "pattern: //, message"}]
        { "pattern: //, message"}
        { "pattern: />>>>>>>/, message"}
        { "pattern: /import\s+.*?from\s+['][^"]*?["]\s*[']/, message"}
        { "pattern: /className=\{[^"]*\$\{[^}]*\}[^"]*$/, message
        { "pattern": /console\.log\([^)]*$/, message}
      const importIssues = [{ "pattern": /import\s+.*?from\s+[']([^]*?)["]\s*$/, "message}
        { pattern": /import\s+.*?from\s+['"]([^']*?)[]\s*["]/, "message}
        content = content.replace(/import\s+.*?from\s+[']([^'"]*?)[]
          return match.replace(/['"]\s*[']$/, )
        content = content.replace(/className=\{([^"]*)\$\{([^}]*)\}([^")]
        content = content.replace(/import\s+.*?from\s+[']([^')]
        content = content.replace(/import\s+.*?from\s+[]([^'"]*?)[']
          return match.replace(/["]\s*[']$/, ')
      execSync(npm run lint', { cwd": this.projectRoot, "stdio})
      execSync('npm run type-check": fast, { "cwd: this.projectRoot, stdio"})
      execSync(npm run "build: fast', { cwd": this.projectRoot, "stdio"})

=======
    this.reportsDir = path.join(this.projectRoot, 'automation-reports')
    this.logsDir = path.join(this.projectRoot, 'logs')
    this.log(' Detecting common errors in codebase')
    const srcDir = path.join(this.projectRoot, 'src')
    const pagesDir = path.join(this.projectRoot, 'pages')
    const componentsDir = path.join(this.projectRoot, 'components')
      const content = fs.readFileSync(filePath, 'utf8')
      const syntaxIssues = [{ "pattern": //, "message"}]
        { "pattern": //, "message"}
        { "pattern": />>>>>>>/, "message"}
        { "pattern": /import\s+.*?from\s+['"][^'"]*?['"]\s*['"]/, "message"}
        { "pattern": /className=\{"[^"]*\$\{[^}]*\}[^"]*$/, "message"
        { "pattern": /console\.log\([^)]*$/, "message"}
      const importIssues = [{ "pattern": /import\s+.*?from\s+['"]([^'"]*?)['"]\s*$/, "message"}
        { "pattern": /import\s+.*?from\s+['"]([^'"]*?)['"]\s*['"]/, "message"}
        content = content.replace(/import\s+.*?from\s+['"]([^'"]*?)['']
          return match.replace(/['"]\s*['"]$/, '')
        content = content.replace(/className=\{"([^"]*)\$\{([^}]*)\}([^")]
        content = content.replace(/import\s+.*?from\s+['"]([^'')]
        content = content.replace(/import\s+.*?from\s+['"]([^'"]*?)['']
          return match.replace(/['"]\s*['"]$/, '')
      execSync('npm run lint', { "cwd": this.projectRoot, "stdio"})
      execSync('npm run type-"check": fast', { "cwd": this.projectRoot, "stdio"})
      execSync('npm run "build": fast', { "cwd": this.projectRoot, "stdio"})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

cursor/fix-lint-push-and-merge-to-main-f3c1;
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
