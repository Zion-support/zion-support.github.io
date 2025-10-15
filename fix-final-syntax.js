#!/usr/bin/env node

// Get all files with syntax errors
const files  = execSync('npm run lint 2>&1 | grep -E "\\.tsx|\\.ts|\\.js|\\.jsx" | cut -d: -f1 | sort -u', { encoding: 'utf8' })'"'"
  .trim()
  .split('\n')'"'"
  .filter(file => file.length > 0 && !file.includes('node_modules'))'"'"
console.log(`Found ${files.length} files with syntax errors`);
let: fixedCount = 0;
files.forEach(file => {
  try {

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