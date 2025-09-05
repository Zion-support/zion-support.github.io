const fs = require('fs');
const path = require('path');

// Function to fix specific syntax issues
function fixSyntaxIssues(content) {
  // Fix indentation issues in JSX
  content = content.replace(/^      \{\/\* Blog Posts Section \*\/\}/gm, '      {/* Blog Posts Section */}');
  content = content.replace(/^        <section className="py-20">/gm, '      <section className="py-20">');
  
  // Fix any remaining corrupted text
  content = content.replace(/ursor\/add-new-services-and-deploy-updates-1b90/g, '');
  
  // Fix common JSX syntax issues
  content = content.replace(/hover: text-/g, 'hover:text-');
  content = content.replace(/hover: bg-/g, 'hover:bg-');
  content = content.replace(/hover: shadow-/g, 'hover:shadow-');
  
  return content;
}

// Files to fix
const filesToFix = [
  'pages/blog.tsx',
  'pages/privacy.tsx', 
  'pages/terms.tsx'
];

let fixedCount = 0;

filesToFix.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = fixSyntaxIssues(content);
      
      if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`Fixed: ${filePath}`);
        fixedCount++;
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files`);