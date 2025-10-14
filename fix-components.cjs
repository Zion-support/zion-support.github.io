const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function fixComponentFiles() {
  try {
    // Find all component files
    const componentFiles = await glob('app/components/*.tsx', { cwd: __dirname });
    
    console.log(`Found ${componentFiles.length} component files to fix`);

    for (const filePath of componentFiles) {
      try {
        const fullPath = path.join(__dirname, filePath);
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Skip if no issues found
        if (!content.includes('f7f852c0f7415181a1b362c4aa5a784585ad5828') && 
            !content.includes('Expected an assignment or function call')) {
          continue;
        }
        
        // Remove stray hash strings
        content = content.replace(/f7f852c0f7415181a1b362c4aa5a784585ad5828/g, '');
        
        // Fix common issues
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive newlines
        content = content.replace(/\s+$/gm, ''); // Remove trailing whitespace
        
        // Fix missing return statements in components
        if (content.includes('export default function') && !content.includes('return (')) {
          // This is a more complex fix that would need individual attention
          console.log(`Skipping ${filePath} - needs manual attention for return statement`);
          continue;
        }
        
        fs.writeFileSync(fullPath, content);
        console.log(`Fixed ${filePath}`);
      } catch (error) {
        console.error(`Error fixing ${filePath}:`, error.message);
      }
    }

    console.log('Component files fix completed');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

fixComponentFiles();