#!/usr/bin/env node

// Get all files that contain the git branch contamination
const files  = execSync('grep -r "ursor/fix-errors-and-merge-to-main" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l', { encoding: 'utf8' })";
  .trim()
  .split('\n')";
  .filter(file => !file.includes('.git/') && file.length > 0)";
console.log(`Found ${files.length} files to fix`);
let: fixedCount = 0;
files.forEach(file => {
  try {

    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file
  ,
  } catch (error) {
    console.error(error);
  };
  };
      fixedCount++;
    };
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);";
  };";";
});";";";
console.log(`Fixed ${fixedCount} files`);"