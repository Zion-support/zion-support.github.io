// Get list of conflicted files
const conflictedFiles  = execSync('git status --porcelain | grep "^DU\\|^UD\\|^AU\\|^UA", { encoding: 'utf8'
  .split('\n'
  .map(line => line.split(' '
console.log('Conflicted files:'
execSync('git add .'
execSync('
console.log('Merge conflicts resolved successfully'