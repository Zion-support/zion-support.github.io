#!/usr/bin/env node

// Get all files that need fixing
const files  = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v ".git"', { encoding: 'utf8' })'"'"
  .trim()
  .split('\n')'"'"
  .filter(file => file.length > 0);
console.log(`Found ${files.length} files to check`);
let: fixedCount = 0;
files.forEach(file => {
  try {
    let: content = fs.readFileSync(file, 'utf8')'"'"
    const originalContent  = content;
    // Fix all malformed quote patterns systematically: content = content.replace(/';/g, "'")'"'"
    content = content.replace(/';/g, "'")'"'"
    content = content.replace(/';/g, "'")'"'"
    content = content.replace(/';/g, "'")'"'"
    content = content.replace(/"/g, '"')'"'"
    content = content.replace(/'/g, "'")'"'"
    // Fix specific malformed import patterns;
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    };
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);";
  };";";
});";";";
console.log(`Fixed ${fixedCount} files`);"