const fs = require('fs');
const path = require('path');

function resolveMergeConflicts() {
  console.log('Starting merge conflict resolution...');
  
  // Get all files with conflicts
  const { execSync } = require('child_process');
  
  try {
    // Get list of conflicted files
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(file => file.length > 0);
    
    console.log(`Found ${conflictedFiles.length} conflicted files`);
    
    let resolvedCount = 0;
    let deletedCount = 0;
    
    for (const file of conflictedFiles) {
      try {
        if (!fs.existsSync(file)) {
          console.log(`File ${file} doesn't exist, skipping...`);
          continue;
        }
        
        const content = fs.readFileSync(file, 'utf8');
        
        // Check if it's a modify/delete conflict
        if (content.includes('deleted in') && content.includes('modified in HEAD')) {
          console.log(`Resolving modify/delete conflict for ${file} - keeping modified version`);
          // For modify/delete conflicts, keep the modified version (HEAD)
          const lines = content.split('\n');
          const resolvedContent = lines.filter(line => 
            !line.includes('<<<<<<< HEAD') && 
            !line.includes('=======') && 
            !line.includes('>>>>>>>') &&
            !line.includes('deleted in') &&
            !line.includes('modified in HEAD')
          ).join('\n');
          
          fs.writeFileSync(file, resolvedContent);
          deletedCount++;
        }
        // Check if it's an add/add conflict
        else if (content.includes('<<<<<<< HEAD') && content.includes('=======') && content.includes('>>>>>>>')) {
          console.log(`Resolving add/add conflict for ${file} - keeping both versions`);
          // For add/add conflicts, try to merge both versions
          const lines = content.split('\n');
          let resolvedContent = '';
          let inConflict = false;
          let headContent = '';
          let incomingContent = '';
          
          for (const line of lines) {
            if (line.includes('<<<<<<< HEAD')) {
              inConflict = true;
              headContent = '';
            } else if (line.includes('=======')) {
              incomingContent = '';
            } else if (line.includes('>>>>>>>')) {
              inConflict = false;
              // Merge both versions, preferring the longer/more complete one
              if (incomingContent.trim().length > headContent.trim().length) {
                resolvedContent += incomingContent;
              } else {
                resolvedContent += headContent;
              }
            } else if (inConflict) {
              if (headContent === '') {
                headContent = line + '\n';
              } else {
                headContent += line + '\n';
              }
            } else if (incomingContent !== undefined && incomingContent !== '') {
              if (incomingContent === '') {
                incomingContent = line + '\n';
              } else {
                incomingContent += line + '\n';
              }
            } else {
              resolvedContent += line + '\n';
            }
          }
          
          fs.writeFileSync(file, resolvedContent);
          resolvedCount++;
        }
        // Check if it's a content conflict
        else if (content.includes('<<<<<<< HEAD') && content.includes('=======') && content.includes('>>>>>>>')) {
          console.log(`Resolving content conflict for ${file} - keeping incoming version`);
          // For content conflicts, prefer the incoming version (after =======)
          const lines = content.split('\n');
          let resolvedContent = '';
          let inConflict = false;
          let keepContent = false;
          
          for (const line of lines) {
            if (line.includes('<<<<<<< HEAD')) {
              inConflict = true;
              keepContent = false;
            } else if (line.includes('=======')) {
              keepContent = true;
            } else if (line.includes('>>>>>>>')) {
              inConflict = false;
              keepContent = false;
            } else if (!inConflict || keepContent) {
              resolvedContent += line + '\n';
            }
          }
          
          fs.writeFileSync(file, resolvedContent);
          resolvedCount++;
        }
        
      } catch (error) {
        console.log(`Error processing ${file}: ${error.message}`);
      }
    }
    
    console.log(`Resolved ${resolvedCount} conflicts and handled ${deletedCount} modify/delete conflicts`);
    
  } catch (error) {
    console.log(`Error getting conflicted files: ${error.message}`);
  }
}

resolveMergeConflicts();