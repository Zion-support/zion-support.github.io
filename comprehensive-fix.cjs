const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    
    // Fix unterminated string literals in imports
    content = content.replace(/import\s+.*from\s+"[^"]*$/gm, (match) => {
      if (!match.endsWith('"')) {
        return match + '"';
      }
      return match;
    });
    
    // Add missing semicolons after imports
    content = content.replace(/import\s+.*from\s+"[^"]*"\s*$/gm, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix malformed function declarations
    content = content.replace(/export default function Page\(\) \{;/g, 'export default function Page() {');
    content = content.replace(/const.*= \(\) => \{"/g, 'const Page = () => {');
    
    // Fix malformed JSX
    content = content.replace(/<Helmet><\/Helmet>/g, 
      '<Helmet>\n        <title>Page - Zion Tech Group</title>\n        <meta name="description" content="Professional services by Zion Tech Group" />\n      </Helmet>');
    
    // Fix common JSX syntax issues
    content = content.replace(/className="[^"]*$/gm, (match) => {
      if (!match.endsWith('"')) {
        return match + '"';
      }
      return match;
    });
    
    // Fix malformed return statements
    content = content.replace(/return \($/gm, 'return (');
    
    // Fix duplicate closing braces and parentheses
    content = content.replace(/\}\)\s*\)\s*\)\s*\)/g, '})');
    content = content.replace(/\}\s*\)\s*\)\s*\)/g, '})');
    
    // Fix malformed JSX structure
    content = content.replace(/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><Helmet><title>Page - Zion Tech Group<\/title><meta name="description" content="Learn more about page" \/><\/Helmet><div className="container mx-auto px-4 py-16"><div className="text-center"><\/div>/g, 
      '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <Helmet>\n        <title>Page - Zion Tech Group</title>\n        <meta name="description" content="Learn more about page" />\n      </Helmet>\n      <div className="container mx-auto px-4 py-16">\n        <div className="text-center">');
    
    // Fix common syntax errors
    content = content.replace(/;\s*\)\s*\)/g, ');');
    content = content.replace(/\}\s*\)\s*\)\s*\)\s*\)/g, '});');
    content = content.replace(/\}\s*\)\s*\)\s*\)/g, '});');
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>\n      </div>\n    </div>');
    
    // Clean up extra content after main component
    const mainComponentMatch = content.match(/(export default function \w+\(\) \{[\s\S]*?\});/);
    if (mainComponentMatch) {
      content = mainComponentMatch[1] + ';';
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TypeScript files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);