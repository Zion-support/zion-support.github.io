#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix malformed closing tags
function fixMalformedClosingTags(content) {
  let fixed = content;
  
  // Fix patterns like </></div></div></div>
  fixed = fixed.replace(/<\/><\/div><\/div><\/div>/g, '</div>');
  fixed = fixed.replace(/<\/><\/div><\/div>/g, '</div>');
  fixed = fixed.replace(/<\/><\/div>/g, '</div>');
  
  // Fix patterns like </section></div>
  fixed = fixed.replace(/<\/section><\/div>/g, '</div></section>');
  
  // Fix patterns like </div></section>
  fixed = fixed.replace(/<\/div><\/section>/g, '</div></section>');
  
  // Fix extra closing divs
  fixed = fixed.replace(/<\/div><\/div><\/div>/g, '</div>');
  fixed = fixed.replace(/<\/div><\/div>/g, '</div>');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>[\s\S]*?<\/><\/div>/g, (match) => {
    const content = match.replace(/<>|<\/><\/div>/g, '');
    return `<>${content}</div></>`;
  });
  
  return fixed;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixMalformedClosingTags(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed closing tags in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('Starting malformed closing tag fixes...');
  
  // Find all TypeScript/JavaScript files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`Fixed malformed closing tags in ${totalFixed} files`);
}

main().catch(console.error);