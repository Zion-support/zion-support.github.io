<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
    this.reportsDir = path.join(this.projectRoot, 'resource-optimization-reports')
    this.log('� Optimizing images...')
const publicDir = path.join(this.projectRoot, 'public');
        this.log('⚠ Public directory not found')
          // For now, we'
          // Skip files that can'
    this.log('� Optimizing CSS...')
const content = fs.readFileSync(cssFile, 'utf8');
=======
<<<<<<< HEAD
#!/usr/bin/env node;
=======
<<<<<<< HEAD

#!/usr/bin/env node;

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
#!/usr/bin/env node;
>>>>>>> merged-prs-20250907-203621
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportsDir = path.join(this.projectRoot, 'resource-optimization-reports')
    this.log('� Optimizing images...')
      const publicDir = path.join(this.projectRoot, 'public')
        this.log('⚠ Public directory not found')
          // For now, we'
          // Skip files that can'
    this.log('� Optimizing CSS...')
          const content = fs.readFileSync(cssFile, 'utf8')
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\s+/g, ' ')
            .replace(/;\s*}/g, '}')
            .replace(/,\s+/g, ',')
            fs.writeFileSync(cssFile, optimizedContent, 'utf8')
>>>>>>> origin/chore/fix-lint-and-merge
          // Skip files that can'
    this.log('� Optimizing CSS...)
          const content = fs.readFileSync(cssFile, utf8')
            .replace(/\/\*[\s\S]*?\*\//g, ')
            .replace(/\s+/g,  ')
            .replace(/;\s*}/g, '})
            .replace(/,\s+/g, ,')
            fs.writeFileSync(cssFile, optimizedContent, 'utf8)
          // Skip files that can
    this.log('⚡ Optimizing JavaScript...')
<<<<<<< HEAD
          const content = fs.readFileSync(jsFile, 'utf8')
=======
<<<<<<< HEAD

=======
          const content = fs.readFileSync(jsFile, 'utf8')
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\s+/g, ' ')
            .replace(/;\s*}/g, '}')
            .replace(/,\s+/g, ',')
            fs.writeFileSync(cssFile, optimizedContent, 'utf8')
          // Skip files that can'
<<<<<<< HEAD
    this.log('⚡ Optimizing JavaScript...')
const content = fs.readFileSync(jsFile, 'utf8');
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\/\/.*$/gm, '')
            .replace(/\s+/g, ' ')
            .replace(/;\s*}/g, '}')
            .replace(/,\s+/g, ',')
            fs.writeFileSync(jsFile, optimizedContent, 'utf8')
=======
<<<<<<< HEAD

=======
    this.log('� Optimizing HTML...)
          const content = fs.readFileSync(htmlFile, utf8')
            .replace(/<!--[\s\S]*?-->/g, ')
            .replace(/\s+/g,  ')
            .replace(/>\s+</g, '><)
            fs.writeFileSync(htmlFile, optimizedContent, utf8')
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          // Skip files that can'
    this.log('� Optimizing HTML...')
const content = fs.readFileSync(htmlFile, 'utf8');
            .replace(/<!--[\s\S]*?-->/g, '')
            .replace(/\s+/g, ' ')
            .replace(/>\s+</g, '><')
            fs.writeFileSync(htmlFile, optimizedContent, 'utf8')
          // Skip files that can'
    this.log('� Optimizing dependencies...')
const packageJsonPath = path.join(this.projectRoot, 'package.json');
throw new Error('package.json not found');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8');
const content = fs.readFileSync(file, 'utf8');
const importMatches = content.match(/import\s+.*?\s+from\s+['""]([^'"")];
const dep = match.match(/from\s+['""]([^'"")];
const requireMatches = content.match(/require\s*\(\s*['""]([^'"")];
const dep = match.match(/require\s*\(\s*['""]([^'"")];
        "encoding"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"

      console.error('\n� Resource Optimizer "failed")


<<<<<<< HEAD



=======
      console.error('\n� Resource Optimizer failed")

      console.error('\n� Resource Optimizer "failed)
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
      console.error('\n� Resource Optimizer failed")

=======
    this.log('� Optimizing HTML...')
          const content = fs.readFileSync(htmlFile, 'utf8')
            .replace(/<!--[\s\S]*?-->/g, '')
            .replace(/\s+/g, ' ')
            .replace(/>\s+</g, '><')
            fs.writeFileSync(htmlFile, optimizedContent, 'utf8')
          // Skip files that can'
    this.log('� Optimizing dependencies...')
      const packageJsonPath = path.join(this.projectRoot, 'package.json')
        throw new Error('package.json not found')
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')
          const content = fs.readFileSync(file, 'utf8')
          const importMatches = content.match(/import\s+.*?\s+from\s+['""]([^'"")]
              const dep = match.match(/from\s+['""]([^'"")]
          const requireMatches = content.match(/require\s*\(\s*['""]([^'"")]
              const dep = match.match(/require\s*\(\s*['""]([^'"")]
        "encoding"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
        "type"
        "priority"
        "impact"
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621

=======
      console.error('\n� Resource Optimizer "failed")
<<<<<<< HEAD
      console.error('\n� Resource Optimizer "failed")
      console.error('\n� Resource Optimizer "failed")



=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
      console.error('\n� Resource Optimizer "failed")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
      console.error('\n� Resource Optimizer "failed")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
