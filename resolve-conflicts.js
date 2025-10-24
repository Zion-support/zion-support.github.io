<<<<<<< HEAD
// Get list of conflicted files
const conflictedFiles  = execSync('git status --porcelain | grep "^DU\\|^UD\\|^AU\\|^UA", { encoding: 'utf8'
  .split('\n'
  .map(line => line.split(' '
console.log('Conflicted files:'
execSync('git add .'
execSync('
console.log('Merge conflicts resolved successfully'
=======
const fs = require('fs''
const path = require('path''
    let content = fs.readFileSync(filePath, 'utf8''
      const lines = content.split('\n''
      content = resolvedLines.join('\n''
      if (file !== 'node_modules' && file !== '.next' && file !== '.git' && !file.startsWith('.''
        const content = fs.readFileSync(filePath, 'utf8''
>>>>>>> origin/main
