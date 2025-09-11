<<<<<<< HEAD:backup-problematic-files/scripts/final-build-fixer.cjs
<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"console.log(" Final Build Fixer")"console.log("=====")class FinalBuildFixer { constructor() { this.fixedFiles = [] this.errors = [] } async fixAllFiles() { try { / Fix specific files that are causing build errors" const filesToFix = ["pages/NotFound.tsx","pages/_document.tsx","pages/about.tsx";" "pages/ai-services.tsx";" "pages/api.tsx"] for (const file of filesToFix) { if (fs.existsSync(file)) { await this.fixFile(file) } } console.log(`\n Fixed ${this.fixedFiles.length} files`)` console.log(` Errors in ${this.errors.length} files`) } catch (error) {" console.error("Error fixing files: ", error.message) } } async fixFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8") let fixedContent = content / Fix specific patterns const patterns = [/ Fix corrupted meta descriptions"" {pattern: /content="The page you"re looking for doesn"t exist."/g,replacement: "content="The page you\"re looking for doesn\"t exist.""}; / Fix extra closing braces {" pattern: /\n}\s*$/gm;"" replacement: "\n}" }; / Fix corrupted JSX attributes"" {pattern: /content="([^"]*)"\s*\/>/g,replacement: "content="$1" />"}; / Fix missing function declarations {" pattern: /const Layout = dynamic\(\(\) => import\("\.\.\/components\/Layout"\), \{ ssr: false \}\)\n\}/g;"" replacement: "const Layout = dynamic(() => import("./components/Layout"), { ssr: false })" }; / Fix extra closing braces in functions {" pattern: /export default function \w+\(\) \{\n {2}return \(\n {4}<>\n {6}<Head>/g;"" replacement: "export default function NotFound() {\n return (\n <>\n <Head>" } ] for (const { pattern, replacement } of patterns) { fixedContent = fixedContent.replace(pattern, replacement) } / Write the fixed content fs.writeFileSync(filePath, fixedContent) this.fixedFiles.push(filePath)"` console.log(` Fixed: ${filePath}`) } catch (error) {` this.errors.push(`${filePath}: ${error.message}`)` console.error(` Error fixing ${filePath}:`, error.message) } }}/ Run the fixerconst fixer = new FinalBuildFixer()fixer.fixAllFiles().then(() => {" console.log("\n Final build fix completed!")})'"`'"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
class FinalBuildFixer {
  constructor() {
    this.fixedFiles = []
    this.errors = []
  }
  async fixAllFiles() {
    try {
      // Fix specific files that are causing build errors
      const filesToFix = ['pages/NotFound.tsx','pages/_document.tsx','pages/about.tsx';
        'pages/ai-services.tsx';
        'pages/api.tsx']
      for (const file of filesToFix) {
        if (fs.existsSync(file)) {
          await this.fixFile(file)
        }
      }
      } catch (error) {
      console.error('Error fixing "files": ', error.message)
    }
  }
  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      let fixedContent = content
      // Fix specific patterns
      const patterns = [// Fix corrupted meta descriptions
        {"pattern": /content="The page you"re looking for doesn"t exist."/g,"replacement": 'content="The page you\'re looking for doesn\'t exist."'};
        // Fix extra closing braces
        {
          "pattern": /\n}\s*$/gm;
          "replacement": '\n}'
        };
        // Fix corrupted JSX attributes
        {"pattern": /content="([^"]*)"\s*\/>/g,"replacement": 'content="$1" />'};
        // Fix missing function declarations
        {
          "pattern": /const Layout = dynamic\(\(\) => import\("\.\.\/components\/Layout"\), \{ "ssr": false \}\)\n\}/g;
          "replacement": 'const Layout = dynamic(() => import("../components/Layout"), { "ssr": false })'
        };
        // Fix extra closing braces in functions
        {
          "pattern": /export default function \w+\(\) \{\n {2}return \(\n {4}<>\n {6}<Head>/g;
          "replacement": 'export default function NotFound() {\n  return (\n    <>\n      <Head>'
        }
      ]
      for (const { pattern, replacement } of patterns) {
        fixedContent = fixedContent.replace(pattern, replacement)
      }
      // Write the fixed content
      fs.writeFileSync(filePath, fixedContent)
      this.fixedFiles.push(filePath)
      } catch (error) {
      this.errors.push(`${filePath}: ${error.message}`)
      console.error(`❌ Error fixing ${filePath}:`, error.message)
    }
  }
}
// Run the fixer
const fixer = new FinalBuildFixer()
fixer.fixAllFiles().then(() => {
  })
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20:scripts/final-build-fixer.cjs
// console.log(' Final Build Fixer')
console.log('=====')
      const filesToFix = ['pages/NotFound.tsx','pages/_document.tsx','pages/about.tsx']
        'pages/ai-services.tsx'
        'pages/api.tsx'
      console.error('Error fixing "files")
        {"pattern": /content="The page you"re looking for doesn"t exist."/g,"replacement": 'content="The page you\'re looking for doesn\'t exist.'}
          "replacement"
        {"pattern": /content="([^"]*)"\s*\/>/g,"replacement": 'content="$1"}
          "replacement": 'const Layout = dynamic(() => import("../components/Layout"), { "ssr"}
<<<<<<< HEAD:backup-problematic-files/scripts/final-build-fixer.cjs
<<<<<<< HEAD
          "pattern"
=======
<<<<<<< HEAD
          "pattern"
=======
          "pattern"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
          "pattern"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20:scripts/final-build-fixer.cjs
