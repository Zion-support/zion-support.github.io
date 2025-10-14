const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax issues
    content = content.replace(/export default \w+;<\/meta>/g, 'export default AppPage;');
    content = content.replace(/export default \w+;<\/div>/g, 'export default AppPage;');
    content = content.replace(/export default \w+;<\/CheckCircle>/g, 'export default AppPage;');
    content = content.replace(/export default \w+;<\/Users>/g, 'export default AppPage;');
    content = content.replace(/export default \w+;<\/ArrowRight>/g, 'export default AppPage;');
    
    // Fix extra closing tags at the end of files
    content = content.replace(/;\s*<\/[^>]+>\s*$/g, ';');
    content = content.replace(/;\s*<\/[^>]+>\s*<\/[^>]+>\s*$/g, ';');
    content = content.replace(/;\s*<\/[^>]+>\s*<\/[^>]+>\s*<\/[^>]+>\s*$/g, ';');
    
    // Fix malformed JSX structure
    content = content.replace(/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><Helmet><title>Page - Zion Tech Group<\/title><meta name="description" content="Learn more about page" \/><\/Helmet><div className="container mx-auto px-4 py-16"><div className="text-center"><\/div>/g, 
      '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <Helmet>\n        <title>Page - Zion Tech Group</title>\n        <meta name="description" content="Learn more about page" />\n      </Helmet>\n      <div className="container mx-auto px-4 py-16">\n        <div className="text-center">');
    
    // Fix common JSX syntax issues
    content = content.replace(/className="[^"]*$/gm, (match) => {
      if (!match.endsWith('"')) {
        return match + '"';
      }
      return match;
    });
    
    // Fix malformed return statements
    content = content.replace(/return \($/gm, 'return (');
    
    // Fix duplicate closing braces
    content = content.replace(/\}\s*\)\s*\)\s*\)\s*\)/g, '});');
    content = content.replace(/\}\s*\)\s*\)\s*\)/g, '});');
    content = content.replace(/\}\s*\)\s*\)/g, '});');
    
    // Fix malformed function declarations
    content = content.replace(/const.*= \(\) => \{"/g, 'const Page = () => {');
    content = content.replace(/export default function Page\(\) \{;/g, 'export default function Page() {');
    
    // Fix unterminated string literals
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
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*<\/>/g, '<></>');
    
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