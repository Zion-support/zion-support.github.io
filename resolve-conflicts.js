#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to resolve merge conflicts by accepting our version (HEAD)
async function resolveConflicts() {
  console.log('Resolving merge conflicts by accepting our fixed versions...');
  
  try {
    // Get all files with merge conflicts
    const conflictFiles = await glob('**/*', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', '*.log']
    });
    
    let resolvedCount = 0;
    
    for (const file of conflictFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check if file has merge conflict markers
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
          console.log(`Resolving conflicts in: ${file}`);
          
          // Extract our version (between <<<<<<< HEAD and =======)
          const lines = content.split('\n');
          const resolvedLines = [];
          let inOurVersion = false;
          let inTheirVersion = false;
          
          for (const line of lines) {
            if (line.startsWith('<<<<<<< HEAD')) {
              inOurVersion = true;
              continue;
            } else if (line.startsWith('=======')) {
              inOurVersion = false;
              inTheirVersion = true;
              continue;
            } else if (line.startsWith('>>>>>>>')) {
              inTheirVersion = false;
              continue;
            }
            
            if (inOurVersion && !inTheirVersion) {
              resolvedLines.push(line);
            } else if (!inOurVersion && !inTheirVersion) {
              resolvedLines.push(line);
            }
          }
          
          // Write the resolved content
          fs.writeFileSync(file, resolvedLines.join('\n'));
          resolvedCount++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
    
    console.log(`Resolved conflicts in ${resolvedCount} files`);
    return resolvedCount;
  } catch (error) {
    console.error('Error resolving conflicts:', error.message);
    return 0;
  }
}

// Main execution
async function main() {
  const resolvedCount = await resolveConflicts();
  console.log(`Successfully resolved ${resolvedCount} merge conflicts`);
}

main().catch(console.error);