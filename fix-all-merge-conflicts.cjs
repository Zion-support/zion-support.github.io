const fs = require('fs');
const path = require('path');
function fixMergeConflicts(filePath) {
  try {
const content = fs.readFileSync(filePath, 'utf8');

ursor/automate-test-improve-and-merge-code-85f4
    // Check if file has merge conflict markers
    if (
      content.includes('
      content.includes('') ||
ursor/fix-lint-push-and-merge-to-main-28da
    ) {
      console.log(`Fixing merge conflicts: in: ${filePath}`);

      // Remove merge conflict markers and keep the content after 
ursor/fix-lint-push-and-merge-to-main-28da

    ) {

      const lines = content.split('\n');
      const fixedLines = [];
      let inConflict = false;
      let keepContent = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes('
ursor/fix-lint-push-and-merge-to-main-28da
          inConflict = true;
          keepContent = false;
          continue;

if (line.includes('')) {
          keepContent = true;
          continue;
        }

ursor/fix-lint-push-and-merge-to-main-28da
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