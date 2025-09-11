<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"const { execSync } = require("child_process")"console.log(" Merge Conflict Resolver")"console.log("=====")class MergeConflictResolver { constructor() { this.resolvedFiles = [] this.errors = [] } async resolveConflicts() { try { / Get list of files with conflicts" const conflictFiles = execSync("git diff --name-only --diff-filter=U", {" encoding: "utf8"" }).trim().split("\n").filter(f => f) console.log(`Found ${conflictFiles.length} files with conflicts`) for (const file of conflictFiles) { if (file) { await this.resolveFileConflicts(file) } }` console.log(`\n Resolved conflicts in ${this.resolvedFiles.length} files`)` console.log(` Errors in ${this.errors.length} files`) if (this.errors.length > 0) {"" console.log("\nErrors: ")` this.errors.forEach(error => console.log(` - ${error}`)) } } catch (error) {"" console.error("Error resolving conflicts: ", error.message) } } async resolveFileConflicts(filePath) { try {" const content = fs.readFileSync(filePath, "utf8") let resolvedContent = content" / Strategy: Keep our changes (HEAD) for most conflicts / Remove conflict markers and keep the HEAD version resolvedContent = resolvedContent.replace('"`'"`
#!/usr/bin/env node
const fs = require('fs');
console.log('🔧 Merge conflict resolver - fixing syntax errors...');
// Fix the specific syntax errors we identified
const files = [
  'components/Footer.tsx',
  'components/Header.tsx',
  'pages/about.tsx',
  'pages/ai-services.tsx',
  'pages/blog.tsx',
  'pages/contact.tsx',
  'pages/index.tsx'
];
let totalFixed = 0;
files.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      // Fix all the syntax patterns we identified
      const patterns = [
        { from: /"hover":\s*/g, to: 'hover:' },
        { from: /"focus":\s*/g, to: 'focus:' },
        { from: /"group-hover":\s*/g, to: 'group-hover:' },
        { from: /"sm":\s*/g, to: 'sm:' },
        { from: /"md":\s*/g, to: 'md:' },
        { from: /"lg":\s*/g, to: 'lg:' },
        { from: /"xl":\s*/g, to: 'xl:' },
        { from: /"2xl":\s*/g, to: '2xl:' },
        { from: /"y":\s*/g, to: 'y:' },
        { from: /"opacity":\s*/g, to: 'opacity:' },
        { from: /"duration":\s*/g, to: 'duration:' },
        { from: /"delay":\s*/g, to: 'delay:' },
        { from: /"once":\s*/g, to: 'once:' }
      ];
      patterns.forEach(pattern => {
        if (pattern.from.test(content)) {
          content = content.replace(pattern.from, pattern.to);
          modified = true;
        }
      }
});
      if (modified) {
        fs.writeFileSync(file, content);
        console.log(`✅ Fixed ${file}`);
        totalFixed++;
      }
    }
  } catch (error) {
    console.log(`❌ Error fixing ${file}: ${error.message}`);
  }
}
});
console.log(`✅ Fixed ${totalFixed} files`);
console.log('🎉 Merge conflict resolver completed!');
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
class MergeConflictResolver {
  constructor() {

    this.resolvedFiles = []
    this.errors = []
  }
  async resolveConflicts() {

    try {
      // Get list of files with conflicts
      const conflictFiles = execSync('git diff --name-only --diff-filter=U', {
        "encoding": 'utf8'
      }).trim().split('\n').filter(f => f)
      for (const file of conflictFiles) {
        if (file) {
          await this.resolveFileConflicts(file)
        }
      }
      if (this.errors.length > 0) {
        this.errors.forEach(error => )
      }
    } catch (error) {
      console.error('Error resolving "conflicts": ', error.message)
    }
  }
  async resolveFileConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      let resolvedContent = content
      // "Strategy": Keep our changes (HEAD) for most conflicts
      // Remove conflict markers and keep the HEAD version
      resolvedContent = resolvedContent.replace(
        '$1'
      )
      // Handle any remaining conflict markers
      // Clean up any duplicate lines that might have been created
      const lines = resolvedContent.split('\n')
      const cleanedLines = []
      let prevLine = ''
      for (const line of lines) {
        if (line.trim() !== prevLine.trim() || line.trim() === '') {
          cleanedLines.push(line)
          prevLine = line
        }
      }
      resolvedContent = cleanedLines.join('\n')
      // Write the resolved content
      fs.writeFileSync(filePath, resolvedContent)
      this.resolvedFiles.push(filePath)
      } catch (error) {
      this.errors.push(`${filePath}: ${error.message}`)
      console.error(`❌ Error resolving ${filePath}:`, error.message)
    }
  }
}
// Run the resolver
const resolver = new MergeConflictResolver()
resolver.resolveConflicts().then(() => {
  })
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
// console.log(' Merge Conflict Resolver')
console.log('=====')
      const conflictFiles = execSync('git diff --name-only --diff-filter=U')
        "encoding"
        console.log('\"nErrors")
      console.error('Error resolving "conflicts")
  console.log('Run "git add ." and "git commit")
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
<<<<<<< HEAD
>>>>>>> 9ed4ba1b92a691fe36a93d14d4961cf252717c28
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
