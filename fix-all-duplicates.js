#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to extract and normalize imports
function extractImports(content) {
  const lines = content.split('\n');
  const imports = [];
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('import ')) {
      imports.push({
        line: trimmed,
        originalLine: line,
        source: extractSource(trimmed),
        named: extractNamedImports(trimmed)
      });
    }
  }
  
  return imports;
}

function extractSource(importLine) {
  const match = importLine.match(/from\s+['"]([^'"]+)['"]/);
  return match ? match[1] : null;
}

function extractNamedImports(importLine) {
  const match = importLine.match(/\{\s*([^}]+)\s*\}/);
  if (match) {
    return match[1].split(',').map(name => name.trim()).sort();
  }
  return null;
}

// Function to fix duplicate imports and exports in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Map();
    const seenExports = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Handle imports
      if (trimmedLine.startsWith('import ')) {
        const source = extractSource(trimmedLine);
        const named = extractNamedImports(trimmedLine);
        
        if (source) {
          const key = source;
          
          if (seenImports.has(key)) {
            const existing = seenImports.get(key);
            
            // If both have named imports, merge them
            if (named && existing.named) {
              const merged = [...new Set([...existing.named, ...named])].sort();
              const newImport = `import { ${merged.join(', ')} } from '${source}';`;
              seenImports.set(key, { ...existing, named: merged, line: newImport });
              console.log(`Merging imports for ${source}: ${merged.join(', ')}`);
              continue; // Skip this line, we'll add the merged one later
            }
            // If one is default and one is named, keep both
            else if (!named && !existing.named) {
              console.log(`Skipping duplicate import: ${trimmedLine}`);
              continue;
            }
            // If one is default and one is named, keep the default
            else if (!named) {
              console.log(`Skipping duplicate import: ${trimmedLine}`);
              continue;
            }
            // If existing is default and new is named, replace
            else if (!existing.named) {
              seenImports.set(key, { line: trimmedLine, source, named });
              console.log(`Replacing default import with named: ${trimmedLine}`);
              continue;
            }
          } else {
            seenImports.set(key, { line: trimmedLine, source, named });
          }
        }
        
        newLines.push(line);
      }
      // Handle exports
      else if (trimmedLine.startsWith('export ')) {
        if (seenExports.has(trimmedLine)) {
          console.log(`Skipping duplicate export: ${trimmedLine}`);
          continue;
        }
        seenExports.add(trimmedLine);
        newLines.push(line);
      }
      else {
        newLines.push(line);
      }
    }
    
    // Add merged imports at the top
    const finalLines = [];
    let addedImports = false;
    
    for (const line of newLines) {
      if (line.trim().startsWith('import ') && !addedImports) {
        // Add all unique imports first
        for (const [source, importData] of seenImports) {
          if (importData.named) {
            finalLines.push(`import { ${importData.named.join(', ')} } from '${source}';`);
          } else {
            finalLines.push(importData.line);
          }
        }
        addedImports = true;
        continue;
      }
      if (!line.trim().startsWith('import ')) {
        finalLines.push(line);
      }
    }
    
    const newContent = finalLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process files
async function main() {
  // Find all TypeScript/JavaScript files in the app directory
  const pattern = 'app/**/*.{ts,tsx,js,jsx}';
  const files = await glob(pattern, { cwd: process.cwd() });

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);