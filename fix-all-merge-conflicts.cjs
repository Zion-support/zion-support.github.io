const fs = require('fs');
const path = require('path');
function fixMergeConflicts(filePath) {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

    // Check if file has merge conflict markers
    if (
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    ) {

<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const lines = content.split('\n');
      const fixedLines = [];
      let inConflict = false;
      let keepContent = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

<<<<<<< HEAD
<<<<<<< HEAD
        if (line.includes('
ursor/fix-lint-push-and-merge-to-main-28da
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          inConflict = true;
          keepContent = false;
          continue;

<<<<<<< HEAD
<<<<<<< HEAD
        if (line.includes('')) {
          keepContent = true;
          continue;
        }

        if (line.includes('>>>>>>>')) {
ursor/fix-lint-push-and-merge-to-main-28da
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          inConflict = false;

        if (!inConflict || keepContent) {
          fixedLines.push(line);

      return true;

    return false;
  } catch (error) {`;
    console.error(`Error processing ${filePath}:`, error.message);

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if ()
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')

      if (fixMergeConflicts(filePath)) fixedCount++;

  return fixedCount;

console.log(`Fixed ${fixedCount} files`);
`;