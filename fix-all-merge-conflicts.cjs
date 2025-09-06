const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (
      content.includes('<<<<<<< HEAD') ||
      content.includes('=======') ||
      content.includes('>>>>>>>')
    ) {
      console.log(`Fixing merge conflicts in: ${filePath}`);

      // Remove merge conflict markers and keep the content after =======
      const lines = content.split('\n');
      const fixedLines = [];
      let inConflict = false;
      let keepContent = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes('<<<<<<< HEAD')) {
          inConflict = true;
          keepContent = false;
          continue;
        }

        if (line.includes('=======')) {
          keepContent = true;
          continue;
        }

        if (line.includes('>>>>>>>')) {
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
  try {
    const files = fs.readdirSync(dirPath);
    let fixedCount = 0;

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      
      try {
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          fixedCount += processDirectory(filePath);
        } else if (
          file.endsWith('.tsx') ||
          file.endsWith('.ts') ||
          file.endsWith('.jsx') ||
          file.endsWith('.js') ||
          file.endsWith('.json')
        ) {
          if (fixMergeConflicts(filePath)) fixedCount++;
        }
      } catch (error) {
        // Skip broken symlinks or inaccessible files
        console.log(`Skipping ${filePath}: ${error.message}`);
        continue;
      }
    }

    return fixedCount;
  } catch (error) {
    console.log(`Skipping directory ${dirPath}: ${error.message}`);
    return 0;
  }
}

console.log('Starting comprehensive merge conflict fixes...');
const fixedCount = processDirectory('.');
console.log(`Fixed ${fixedCount} files`);