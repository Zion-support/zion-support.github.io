const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
;
function fixMergeConflicts(filePath) {;
  try {;
<<<<<<< HEAD;
;
=======;
    const content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD
    ;
>>>>>>> cursor/automate-test-improve-and-merge-code-85f4;
    // Check if file has merge conflict markers;
    if (;
      content.includes(';
      content.includes('') ||;
      content.includes('>>>>>>>');
    ) {;
      console.log(`Fixing merge conflicts:in:${filePath}`);
;
      // Remove merge conflict markers and keep the content after ;
=======
    
>>>>>>> cursor/automate-test-improve-and-merge-code-85f4
=======

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    // Check if file has merge conflict markers
    if (
      content.includes('<<<<<<< HEAD') ||
      content.includes('=======') ||
      content.includes('>>>>>>>')
    ) {
      console.log(`Fixing merge conflicts in: ${filePath}`);

<<<<<<< HEAD
<<<<<<< HEAD
=======
      // Remove merge conflict markers and keep the content after 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
      // Remove merge conflict markers and keep the content after =======
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      const lines = content.split('\n');
      let fixedLines = [];
      let inConflict = false;
      let keepContent = false;
;
      for (let i = 0; i < lines.length; i++) {;
        const line = lines[i];
<<<<<<< HEAD
;
        if (line.includes(';
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
        if (line.includes('
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
        if (line.includes('<<<<<<< HEAD')) {
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
          inConflict = true;
          keepContent = false;
          continue;
        }
<<<<<<< HEAD
;
        if (line.includes('')) {;
          keepContent = true;
          continue;
        }
;
        if (line.includes('>>>>>>>')) {;
=======

        if (line.includes('=======')) {
          keepContent = true;
          continue;
        }

        if (line.includes('>>>>>>>')) {
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
          inConflict = false;
          keepContent = false;
          continue;
        }
;
        if (!inConflict || keepContent) {;
          fixedLines.push(line);
        }
      }
;
      fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
      return true;
    }
;
    return false;
  } catch (error) {;
    console.error(`Error processing ${filePath} `, error.message);
    return false;
  }
}
;
function processDirectory(dirPath) {;
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
;
  for (const file of files) {;
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
;
    if (stat.isDirectory()) {;
      fixedCount += processDirectory(filePath);
    } else if (;
      file.endsWith('.tsx') ||;
      file.endsWith('.ts') ||;
      file.endsWith('.jsx') ||;
      file.endsWith('.js');
    ) {;
      if (fixMergeConflicts(filePath)) fixedCount++;
    }
  }
;
  return fixedCount;
}
;
console.log('Starting comprehensive merge conflict fixes...');
const fixedCount = processDirectory('.');
console.log(`Fixed ${fixedCount} files`);
