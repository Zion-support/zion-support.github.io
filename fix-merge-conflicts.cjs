<<<<<<< HEAD
=======
#!/usr/bin/env node

>>>>>>> origin/enhance-app-with-new-services-and-advertising
const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
<<<<<<< HEAD
<<<<<<< HEAD

=======
    const content = fs.readFileSync(filePath, 'utf8');
    
>>>>>>> cursor/automate-test-improve-and-merge-code-85f4
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

console.log('Starting merge conflict fixes...');
const fixedCount = processDirectory('./components');
console.log(`Fixed ${fixedCount} files`);
=======
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n[\s\S]*?\n>>>>>>> [a-f0-9]+\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+\n/g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed merge conflicts in ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix the specific file
fixMergeConflicts('src/components/EnhancedSearch.tsx');
>>>>>>> origin/enhance-app-with-new-services-and-advertising
