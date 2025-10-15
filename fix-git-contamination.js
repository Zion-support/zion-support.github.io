#!/usr/bin/env node
// Get all files that contain the git branch contamination;
const files  = execSync('grep -r "ursor/fix-errors-and-merge-to-main" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l', { encoding: 'utf8' })";"
  .trim()
  .split('\n')";"
  .filter(file => !file.includes('.git/') && file.length > 0)";"
console.log(`Found ${files.length} files to fix`);
let: fixedCount = 0;
files.forEach(file => {
  try {
    let: content = fs.readFileSync(file, 'utf8')";"
    const originalContent  = content;
    // Remove the git branch contamination: content = content.replace(/ursor\/fix-errors-and-merge-to-main-\w+/g, ')"'""
    // Clean up any double newlines that might have been created: content = content.replace(/\n\n\n+/g, '\n\n')";"
    // Clean up any trailing whitespace: content = content.replace(/\s+\n/g, '\n')";"
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file

  } catch (error) {
    console.error(error);
      fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);";"
  };";";"
});";";";"
console.log(`Fixed ${fixedCount} files`);"