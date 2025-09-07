const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
<<<<<<< HEAD
<<<<<<< HEAD

    // Check if file has merge conflict markers
    if (

    ) {
      console.log(`Fixing merge conflicts: in: ${filePath}`);

=======
    const content = fs.readFileSync(filePath, 'utf8');
    
ursor/automate-test-improve-and-merge-code-85f4
    // Check if file has merge conflict markers
    if (
      content.includes('
      content.includes('') ||
      content.includes('>>>>>>>')
ursor/fix-lint-push-and-merge-to-main-28da
    ) {
      console.log(`Fixing merge conflicts: in: ${filePath}`);

      // Remove merge conflict markers and keep the content after 
ursor/fix-lint-push-and-merge-to-main-28da
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      const lines = content.split('\n');
      const fixedLines = [];
      let inConflict = false;
      let keepContent = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

<<<<<<< HEAD
=======
        if (line.includes('
ursor/fix-lint-push-and-merge-to-main-28da
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (

      content.includes('
      content.includes('') ||
      content.includes('>>>>>>>')

    ) {
      console.log(`Fixing merge conflicts: in: ${filePath}`);


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
          inConflict = true;
          keepContent = false;
          continue;
        }


<<<<<<< HEAD
        if (line.includes('>>>>>>>')) {
ursor/fix-lint-push-and-merge-to-main-28da
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
          inConflict = false;
          keepContent = false;
          continue;
        }

        if (!inConflict || keepContent) {
          fixedLines.push(line);
        }
      }

      fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
    ) {
      if (fixMergeConflicts(filePath)) fixedCount++;
    }
  }

  return fixedCount;
}

console.log('Starting comprehensive merge conflict fixes...');
const fixedCount = processDirectory('.');
console.log(`Fixed ${fixedCount} files`);
