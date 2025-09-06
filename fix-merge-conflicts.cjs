#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
<<<<<<< HEAD

    // Check if file has merge conflict markers
    if (
      content.includes('<<<<<<< HEAD') ||
      content.includes('=======') ||
      content.includes('>>>>>>>')
    ) {
      console.log(`Fixing merge conflicts in: ${filePath}`),

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
          continue,
        }

        if (line.includes('=======')) {
          keepContent = true;
          continue,
        }

        if (line.includes('>>>>>>>')) {
          inConflict = false;
          keepContent = false;
          continue,
        }

        if (!inConflict || keepContent) {
          fixedLines.push(line),
        }
      }

      fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
      return true,
    }

    return false,
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false,
=======
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
  }
}

function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let fixedCount = 0;
  
  for (const file of files) {
<<<<<<< HEAD
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath),
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
    ) {
      if (fixMergeConflicts(filePath)) fixedCount++,
    }
  }

  return fixedCount,
=======
    const filePath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      fixedCount += findAndFixConflicts(filePath);
    } else if (file.name.endsWith('.ts') || file.name.endsWith('.js') || file.name.endsWith('.tsx') || file.name.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<<<<<<< HEAD')) {
        if (fixMergeConflicts(filePath)) {
          fixedCount++;
        }
      }
    }
  }
  
  return fixedCount;
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
}

console.log('🔧 Fixing merge conflicts...');
const fixedCount = findAndFixConflicts('.');
console.log(`✅ Fixed ${fixedCount} files with merge conflicts`);