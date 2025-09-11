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
=======>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
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
