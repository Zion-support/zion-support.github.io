const fs = require('fs');
const path = require('path');

function fixJSXStructure(content) {
  // Fix common JSX structure issues
  let fixed = content;
  
  // Fix missing closing tags by adding them at the end
  const openTags = [];
  const tagRegex = /<(\w+)(?:\s[^>]*)?(?:\s*\/>|>)/g;
  const closeTagRegex = /<\/(\w+)>/g;
  
  // Count opening and closing tags
  const openMatches = [...fixed.matchAll(tagRegex)];
  const closeMatches = [...fixed.matchAll(closeTagRegex)];
  
  const openCounts = {};
  const closeCounts = {};
  
  openMatches.forEach(match => {
    const tag = match[1];
    openCounts[tag] = (openCounts[tag] || 0) + 1;
  });
  
  closeMatches.forEach(match => {
    const tag = match[1];
    closeCounts[tag] = (closeCounts[tag] || 0) + 1;
  });
  
  // Add missing closing tags
  Object.keys(openCounts).forEach(tag => {
    const openCount = openCounts[tag];
    const closeCount = closeCounts[tag] || 0;
    const missing = openCount - closeCount;
    
    if (missing > 0) {
      for (let i = 0; i < missing; i++) {
        fixed += `</${tag}>`;
      }
    }
  });
  
  // Fix common JSX syntax issues
  fixed = fixed.replace(/\}\s*\)\s*\)\s*\)/g, '});');
  fixed = fixed.replace(/\}\s*\)\s*\)/g, '});');
  fixed = fixed.replace(/;\s*\)\s*\)/g, ');');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*<\/>/g, '<></>');
  
  // Fix missing semicolons
  fixed = fixed.replace(/export default \w+;?\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  return fixed;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply JSX fixes
    content = fixJSXStructure(content);
    
    // Additional specific fixes
    content = content.replace(/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><Helmet><title>Page - Zion Tech Group<\/title><meta name="description" content="Learn more about page" \/><\/Helmet><div className="container mx-auto px-4 py-16"><div className="text-center"><\/div>/g, 
      '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <Helmet>\n        <title>Page - Zion Tech Group</title>\n        <meta name="description" content="Learn more about page" />\n      </Helmet>\n      <div className="container mx-auto px-4 py-16">\n        <div className="text-center">');
    
    // Fix malformed return statements
    content = content.replace(/return \($/gm, 'return (');
    
    // Fix duplicate closing braces
    content = content.replace(/\}\s*\)\s*\)\s*\)\s*\)/g, '});');
    
    // Clean up extra content
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