import fs from 'fs';
import path from 'path';

function fixSemicolonsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix semicolons in array elements (but not in object properties that should have semicolons)
    content = content.replace(/;\s*\]/g, ']');
    
    // Fix semicolons after object properties that should be commas
    content = content.replace(/;\s*}/g, '}');
    
    // Fix semicolons after href properties
    content = content.replace(/href:\s*"[^"]*";/g, (match) => match.replace(';', ''));
    
    // Fix semicolons in features arrays
    content = content.replace(/(\s+)([^;]+);(\s*\])/g, '$1$2$3');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed semicolons in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix the ai-solutions page
fixSemicolonsInFile('/workspace/app/ai-solutions/page.tsx');