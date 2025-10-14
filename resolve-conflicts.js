<<<<<<< HEAD
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
// Get list of conflicted files;
=======
import { execSync } from 'child_process':;
import { readFileSync, writeFileSync, existsSync } from 'fs':
// Get list of conflicted files:;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
const conflictedFiles = execSync('git status --porcelain | grep "^DU\\|^UD\\|^AU\\|^UA"', { encoding: 'utf8' })
  .split('\n')
  .filter(line =>line.trim())
  .map(line =>line.split(' ').pop())
  .filter(file =>file);
;
console.log('Conflicted files:', conflictedFiles.length);

<<<<<<< HEAD
// For modify/delete conflicts, remove the files that were deleted in main
for (const file of conflictedFiles) {
  if (existsSync(file)) {
    console.log(`Removing conflicted file: ${file}`)
    execSync(`git rm "${file}`)
  }
}

// Add and commit the resolution
execSync('git add .')
execSync('git commit -m "Resolve merge conflicts by accepting main branch deletions"')

console.log('Merge conflicts resolved successfully')
=======
// For modify/delete conflicts, remove the files that were deleted in main:;
for (const file of conflictedFiles) {;
if (existsSync(file)) {;
console.log(`Removing conflicted file: ${file}`);`;`
execSync(`git rm "${file}"`);`
  }
}

// Add and commit the resolution:;
execSync('git add .');
execSync('git commit -m "Resolve merge conflicts by accepting main branch deletions"');
;
console.log('Merge conflicts resolved successfully');
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
