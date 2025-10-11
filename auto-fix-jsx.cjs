#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to automatically fix JSX syntax issues
function autoFixJsx(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Split content into lines for easier processing
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      let originalLine = line;
      
      // Fix common patterns
      
      // Fix misplaced )} that should be </div>
      if (line.trim() === ')}') {
        // Check if this is inside a map function
        let mapDepth = 0;
        let divDepth = 0;
        for (let j = i - 1; j >= 0; j--) {
          const prevLine = lines[j];
          if (prevLine.includes('map(')) {
            mapDepth++;
          }
          if (prevLine.includes('<div')) {
            divDepth++;
          }
          if (prevLine.includes('</div>')) {
            divDepth--;
          }
        }
        
        if (mapDepth > 0 && divDepth > 0) {
          line = line.replace(')}', '</div>');
        }
      }
      
      // Fix misplaced </div> that should be </li>
      if (line.trim() === '</div>') {
        // Check if this is inside a li element
        let liOpen = false;
        for (let j = i - 1; j >= 0; j--) {
          const prevLine = lines[j];
          if (prevLine.includes('<li')) {
            liOpen = true;
            break;
          }
          if (prevLine.includes('</li>')) {
            liOpen = false;
            break;
          }
        }
        
        if (liOpen) {
          line = line.replace('</div>', '</li>');
        }
      }
      
      // Fix misplaced </div> that should be ))
      if (line.trim() === '</div>') {
        // Check if this is inside a map function
        let mapDepth = 0;
        let divDepth = 0;
        for (let j = i - 1; j >= 0; j--) {
          const prevLine = lines[j];
          if (prevLine.includes('map(')) {
            mapDepth++;
          }
          if (prevLine.includes('<div')) {
            divDepth++;
          }
          if (prevLine.includes('</div>')) {
            divDepth--;
          }
        }
        
        if (mapDepth > 0 && divDepth === 0) {
          line = line.replace('</div>', '))');
        }
      }
      
      // Fix unclosed JSX fragments
      if (line.trim() === '<>') {
        // Check if this fragment is properly closed
        let fragmentOpen = false;
        for (let j = i + 1; j < lines.length; j++) {
          const nextLine = lines[j];
          if (nextLine.includes('</>')) {
            fragmentOpen = false;
            break;
          }
          if (nextLine.includes('<>')) {
            fragmentOpen = true;
            break;
          }
        }
        
        if (!fragmentOpen) {
          // This fragment is not properly closed, add closing tag
          line = line + '\n' + '  </>';
        }
      }
      
      // Fix unclosed sections
      if (line.trim().startsWith('<section')) {
        // Check if this section is properly closed
        let sectionOpen = false;
        for (let j = i + 1; j < lines.length; j++) {
          const nextLine = lines[j];
          if (nextLine.includes('</section>')) {
            sectionOpen = false;
            break;
          }
          if (nextLine.includes('<section')) {
            sectionOpen = true;
            break;
          }
        }
        
        if (!sectionOpen) {
          // This section is not properly closed, add closing tag
          line = line + '\n' + '        </section>';
        }
      }
      
      if (line !== originalLine) {
        modified = true;
      }
      
      fixedLines.push(line);
    }
    
    if (modified) {
      const fixedContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Auto-fixed JSX syntax in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findTsxFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        searchDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution
console.log('Starting automatic JSX syntax fixes...');

const files = findTsxFiles('./app');
console.log(`Found ${files.length} TypeScript/JSX files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (autoFixJsx(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nAutomatic JSX syntax fixes complete:`);
console.log(`  - Files modified: ${fixedCount}`);
console.log(`  - Errors: ${errorCount}`);