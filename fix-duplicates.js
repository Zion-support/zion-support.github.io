import fs from 'fs';
import path from 'path';

function fixDuplicateImports(filePath) {
  console.log(`Fixing duplicates in ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the import section
  const importMatch = content.match(/import\s+{\s*([\s\S]*?)\s*}\s+from\s+['"][^'"]+['"];?\s*$/m);
  
  if (!importMatch) {
    console.log('No import section found');
    return;
  }
  
  // Extract all imports
  const importSection = importMatch[0];
  const imports = importSection.match(/\b\w+\b/g);
  
  // Find duplicates
  const seen = new Set();
  const duplicates = new Set();
  
  imports.forEach(importName => {
    if (seen.has(importName)) {
      duplicates.add(importName);
    } else {
      seen.add(importName);
    }
  });
  
  console.log(`Found duplicates: ${Array.from(duplicates).join(', ')}`);
  
  // Remove duplicate imports
  duplicates.forEach(duplicate => {
    // Remove the second occurrence of each duplicate
    const regex = new RegExp(`\\b${duplicate}\\b`, 'g');
    let count = 0;
    content = content.replace(regex, (match, offset) => {
      count++;
      if (count === 2) {
        return ''; // Remove the second occurrence
      }
      return match;
    });
    
    // Clean up any double commas or trailing commas
    content = content.replace(/,\s*,/g, ',');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/{\s*,/g, '{');
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed duplicates in ${filePath}`);
}

// Fix both files
fixDuplicateImports('/workspace/app/components/Navigation.tsx');
fixDuplicateImports('/workspace/app/components/Footer.tsx');

console.log('Duplicate import fixing completed!');