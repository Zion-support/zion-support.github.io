import fs from 'fs';

function fixAISolutionsFile() {
  try {
    let content = fs.readFileSync('/workspace/app/ai-solutions/page.tsx', 'utf8');
    
    // Fix semicolons in JSX text content
    content = content.replace(/;\s*$/gm, '');
    
    // Fix semicolons after JSX closing tags
    content = content.replace(/;\s*<\/[^>]+>/g, (match) => match.replace(';', ''));
    
    // Fix semicolons in JSX attributes
    content = content.replace(/;\s*>/g, '>');
    
    // Fix semicolons in JSX expressions
    content = content.replace(/;\s*}/g, '}');
    
    // Fix semicolons after closing parentheses in JSX
    content = content.replace(/;\s*\)/g, ')');
    
    // Fix semicolons in template literals
    content = content.replace(/;\s*`/g, '`');
    
    fs.writeFileSync('/workspace/app/ai-solutions/page.tsx', content);
    console.log('Fixed AI solutions file');
  } catch (error) {
    console.error('Error fixing AI solutions file:', error.message);
  }
}

fixAISolutionsFile();