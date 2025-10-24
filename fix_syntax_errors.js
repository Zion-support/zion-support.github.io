const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing function declarations
    if (content.includes('const CaseStudiesPage: React.FC = () => {}') && !content.includes('export default')) {
      content = content.replace('const CaseStudiesPage: React.FC = () => {}', 'export default function CaseStudiesPage() {');
    }
    
    // Fix malformed JSX fragments
    content = content.replace(/<React\.Fragment>/g, '<>');
    content = content.replace(/<\/React\.Fragment>/g, '</>');
    
    // Fix malformed array syntax
    content = content.replace(/"([^"]*)"\s*,\s*""/g, '"$1",');
    content = content.replace(/"([^"]*)"\s*""/g, '"$1"');
    
    // Fix missing closing braces and parentheses
    if (content.includes('return (') && !content.includes('};')) {
      content = content.replace(/(\s+)(<\/>)\s*,\s*""\s*\)\s*,\s*""\s*;\s*""\s*""\s*""\s*""/g, '$1$2\n  );\n};');
    }
    
    // Fix missing function closing
    if (content.includes('return (') && !content.includes('export default')) {
      content += '\n\nexport default function Page() {}';
    }
    
    // Fix malformed object properties
    content = content.replace(/id=\s*(\d+)/g, 'id: $1');
    
    // Fix missing semicolons and commas
    content = content.replace(/(\w+)\s*=\s*\[/g, '$1 = [');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files
const appDir = path.join(__dirname, 'app');
const pageFiles = [];

function findPageFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findPageFiles(filePath);
    } else if (file === 'page.tsx') {
      pageFiles.push(filePath);
    }
  });
}

findPageFiles(appDir);

// Fix all page files
pageFiles.forEach(fixSyntaxErrors);

console.log(`Fixed ${pageFiles.length} page files`);
