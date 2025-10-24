const fs = require('fs');
const path = require('path');

// Function to clean merge conflict markers and fix syntax
function cleanMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Fix common syntax issues
  content = content.replace(/const\s+\$1:\s*React\.FC\s*=\s*\(\)\s*=>\s*{;?/g, 'const Page: React.FC = () => {');
  content = content.replace(/const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{;?/g, 'const Page: React.FC = () => {');
  
  // Fix array declarations
  content = content.replace(/const\s+(\w+)\s*=\s*\[\s*;\s*/g, 'const $1 = [');
  content = content.replace(/const\s+(\w+)\s*=\s*\[\s*\]\s*/g, 'const $1 = [');
  
  // Fix object declarations in arrays
  content = content.replace(/\{\s*icon:\s*(\w+)\s*title:/g, '{\n      icon: $1,\n      title:');
  content = content.replace(/\{\s*name:\s*(\w+)\s*price:/g, '{\n      name: $1,\n      price:');
  content = content.replace(/\{\s*title:\s*(\w+)\s*description:/g, '{\n      title: $1,\n      description:');
  
  // Fix missing commas
  content = content.replace(/(\w+)\s*title:/g, '$1,\n      title:');
  content = content.replace(/(\w+)\s*description:/g, '$1,\n      description:');
  content = content.replace(/(\w+)\s*benefits:/g, '$1,\n      benefits:');
  content = content.replace(/(\w+)\s*features:/g, '$1,\n      features:');
  content = content.replace(/(\w+)\s*price:/g, '$1,\n      price:');
  content = content.replace(/(\w+)\s*period:/g, '$1,\n      period:');
  content = content.replace(/(\w+)\s*popular:/g, '$1,\n      popular:');
  content = content.replace(/(\w+)\s*icon:/g, '$1,\n      icon:');
  content = content.replace(/(\w+)\s*stats:/g, '$1,\n      stats:');
  content = content.replace(/(\w+)\s*role:/g, '$1,\n      role:');
  content = content.replace(/(\w+)\s*company:/g, '$1,\n      company:');
  content = content.replace(/(\w+)\s*content:/g, '$1,\n      content:');
  content = content.replace(/(\w+)\s*rating:/g, '$1,\n      rating:');
  content = content.replace(/(\w+)\s*number:/g, '$1,\n      number:');
  content = content.replace(/(\w+)\s*label:/g, '$1,\n      label:');
  
  // Fix array syntax
  content = content.replace(/\[\s*(\w+)\s*\]/g, '[\n        $1\n      ]');
  content = content.replace(/\[\s*'([^']+)'\s*\]/g, '[\n        \'$1\'\n      ]');
  
  // Fix function calls
  content = content.replace(/return\s*\(\s*\)\s*{/g, 'return (');
  content = content.replace(/return\s*\(\s*\)\s*<[^>]*>/g, 'return (');
  
  // Fix JSX syntax
  content = content.replace(/<(\w+)\s*className="([^"]*)"\s*>\s*<\/\1>/g, '<$1 className="$2"></$1>');
  content = content.replace(/<(\w+)\s*className="([^"]*)"\s*>\s*<\/\1>/g, '<$1 className="$2"></$1>');
  
  // Fix missing semicolons and brackets
  content = content.replace(/\}\s*const\s+/g, '};\n\n  const ');
  content = content.replace(/\}\s*return\s+/g, '};\n\n  return ');
  content = content.replace(/\}\s*<[^>]*>/g, '};\n\n  return (');
  
  // Fix export statements
  content = content.replace(/export\s+default\s+Page;?\s*$/, 'export default Page;');
  content = content.replace(/export\s+default\s+\w+;?\s*$/, 'export default Page;');
  
  // Fix duplicate imports
  const lines = content.split('\n');
  const importLines = lines.filter(line => line.trim().startsWith('import'));
  const uniqueImports = [...new Set(importLines)];
  const nonImportLines = lines.filter(line => !line.trim().startsWith('import'));
  content = [...uniqueImports, ...nonImportLines].join('\n');
  
  // Fix missing closing brackets
  const openBrackets = (content.match(/\{/g) || []).length;
  const closeBrackets = (content.match(/\}/g) || []).length;
  if (openBrackets > closeBrackets) {
    content += '\n' + '}'.repeat(openBrackets - closeBrackets);
  }
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const cleanedContent = cleanMergeConflicts(content);
    fs.writeFileSync(filePath, cleanedContent);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const appDir = path.join(__dirname, 'app');

console.log('Starting merge conflict cleanup...');

// Process src directory
if (fs.existsSync(srcDir)) {
  const srcFiles = findFiles(srcDir);
  console.log(`Found ${srcFiles.length} files in src directory`);
  
  let fixedCount = 0;
  for (const file of srcFiles) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  console.log(`Fixed ${fixedCount} files in src directory`);
}

// Process app directory
if (fs.existsSync(appDir)) {
  const appFiles = findFiles(appDir);
  console.log(`Found ${appFiles.length} files in app directory`);
  
  let fixedCount = 0;
  for (const file of appFiles) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  console.log(`Fixed ${fixedCount} files in app directory`);
}

console.log('Merge conflict cleanup completed!');