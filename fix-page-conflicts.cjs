const fs = require('fs');
const path = require('path');

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts or syntax errors
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
      content = content.replace(/=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
      
      // Clean up any remaining conflict markers
      content = content.replace(/^<<<<<<< HEAD$/gm, '');
      content = content.replace(/^=======$/gm, '');
      content = content.replace(/^>>>>>>> [a-f0-9]+$/gm, '');
    }
    
    // Fix common syntax issues
    if (content.includes('&apos;')) {
      content = content.replace(/&apos;/g, "'");
    }
    
    // Fix malformed JSX fragments
    if (content.includes('</div>\n      </>')) {
      content = content.replace(/<\/div>\n {6}<\/>/g, '</div>\n      </div>\n    </>');
    }
    
    // Fix malformed paragraphs
    if (content.includes('<p className="Professional')) {
      content = content.replace(/<p className="Professional[^"]*"[^>]*>\s*\$2<\/p>/g, '<p className="text-xl text-gray-300 mb-8">Professional solutions and services</p>');
    }
    
    // Fix duplicate service cards
    const duplicatePattern = /<div className="bg-green-50[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<div className="bg-green-50[^>]*>[\s\S]*?<\/div>\s*<\/div>/g;
    if (duplicatePattern.test(content)) {
      content = content.replace(duplicatePattern, (match) => {
        // Keep only the first occurrence
        const firstMatch = match.match(/<div className="bg-green-50[^>]*>[\s\S]*?<\/div>\s*<\/div>/);
        return firstMatch ? firstMatch[0] : match;
      });
    }
    
    // Fix syntax errors in function parameters
    if (content.includes(') expected')) {
      content = content.replace(/\) expected/g, '');
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix page files
function fixPageFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-app directories
      if (!['node_modules', '.git', 'dist', '.next'].includes(file)) {
        fixPageFiles(filePath);
      }
    } else if (file.endsWith('.tsx') && file === 'page.tsx') {
      fixPageFile(filePath);
    }
  }
}

// Start fixing from the app directory
console.log('Starting to fix page files...');
fixPageFiles('./app');
console.log('Finished fixing page files.');