<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs");"'"
const path = require('path");
"
// Performance monitoring script"
function checkPerformance() {"'"
  console.log('🔍 Running performance checks...\n");"
"
  // Check bundle size"'"
  const buildDir = path.join(process.cwd(), '.next");
  if (fs.existsSync(buildDir)) {"
    checkBundleSize(buildDir);"
  } else {"'"
    console.log('⚠️  Build directory not found. Run "npm run build" first.");
  }

  // Check for large files
  checkLargeFiles();

  // Check for unused dependencies"
  checkUnusedDependencies();"
"'"
  console.log('\n✅ Performance check completed!");
}"
"
function checkBundleSize(buildDir) {"'"
  console.log('📦 Bundle Size Analysis:");"
  "'"
  const staticDir = path.join(buildDir, 'static");"
  if (fs.existsSync(staticDir)) {"
    const files = getAllFiles(staticDir);"'"
    const jsFiles = files.filter(file => file.endsWith('.js"));"'"
    const cssFiles = files.filter(file => file.endsWith('.css"));
    
=======
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
;
// Performance monitoring script;
function checkPerformance() {
  console.log('🔍 Running performance checks...\n');
;
  // Check bundle size;
  const buildDir = path.join(process.cwd(), '.next');
  if (fs.existsSync(buildDir)) {;
    checkBundleSize(buildDir)} else {;
    console.log('⚠️  Build directory not found. Run "npm run build" first.')}
  // Check for large files;
  checkLargeFiles();
  // Check for unused dependencies;
  checkUnusedDependencies();
  console.log('\n✅ Performance check completed!')}
function checkBundleSize(buildDir) {;
  console.log('📦 Bundle Size Analysis:');
;
  const staticDir = path.join(buildDir, 'static');
  if (fs.existsSync(staticDir)) {;
    const files = getAllFiles(staticDir);
    const jsFiles = files.filter(file => file.endsWith('.js'));
    const cssFiles = files.filter(file => file.endsWith('.css'));
;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
    let totalJsSize = 0;
    let totalCssSize = 0;
;
    jsFiles.forEach(file => {);
      const stats = fs.statSync(file);
      totalJsSize += stats.size});
;
    cssFiles.forEach(file => {);
      const stats = fs.statSync(file);
      totalCssSize += stats.size});
;
    console.log(`  JavaScript: ${formatBytes(totalJsSize)}`);`
    console.log(`  CSS: ${formatBytes(totalCssSize)}`);`
    console.log(`  Total: ${formatBytes(totalJsSize + totalCssSize)}`);
<<<<<<< HEAD
    "
    // Warn if bundle is too large"
    if (totalJsSize > 500 * 1024) { // 500KB"'"
      console.log('  ⚠️  JavaScript bundle is large. Consider code splitting.");
    }"
    "
    if (totalCssSize > 100 * 1024) { // 100KB"'"
      console.log('  ⚠️  CSS bundle is large. Consider purging unused styles.");
    }
  }
}"
"
function checkLargeFiles() {"'"
  console.log('\n📁 Large Files Check:");"
  "'"
  const appDir = path.join(process.cwd(), 'app");
=======
;
    // Warn if bundle is too large;
    if (totalJsSize > 500 * 1024) { // 500KB;
      console.log('  ⚠️  JavaScript bundle is large. Consider code splitting.')}
    if (totalCssSize > 100 * 1024) { // 100KB;
      console.log('  ⚠️  CSS bundle is large. Consider purging unused styles.')}
  }
}
function checkLargeFiles() {
  console.log('\n📁 Large Files Check:');
;
  const appDir = path.join(process.cwd(), 'app');
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
  const files = getAllFiles(appDir);
;
  const largeFiles = files;
    .map(file => ({;
      path: file,);
      size: fs.statSync(file).size;
    }));
    .filter(file => file.size > 50 * 1024) // 50KB;
    .sort((a, b) => b.size - a.size);
<<<<<<< HEAD
  
  if (largeFiles.length > 0) {
    largeFiles.forEach(file => {
      console.log(`  ${file.path}: ${formatBytes(file.size)}`);"
    });"
  } else {"'"
    console.log('  ✅ No large files found.");
  }
}"
"
function checkUnusedDependencies() {"'"
  console.log('\n📋 Dependency Analysis:");"
  "'"
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8"));"
  const dependencies = Object.keys(packageJson.dependencies || {});"
  "
  // This is a simple check - in a real scenario, you"d use tools like depcheck"
  console.log(`  Total dependencies: ${dependencies.length}`);"'"
  console.log('  💡 Consider running "npx depcheck" for detailed unused dependency analysis.");
}

function getAllFiles(dir) {
=======
;
  if (largeFiles.length > 0) {;
    largeFiles.forEach(file => {);`
      console.log(`  ${file.path}: ${formatBytes(file.size)}`)})} else {;
    console.log('  ✅ No large files found.')}
}
function checkUnusedDependencies() {
  console.log('\n📋 Dependency Analysis:');
;
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const dependencies = Object.keys(packageJson.dependencies || {});
;
  // This is a simple check - in a real scenario, you'd use tools like depcheck;`"
  console.log(`  Total dependencies: ${dependencies.length}`);";'"
  console.log('  💡 Consider running "npx depcheck" for detailed unused dependency analysis.')}
function getAllFiles(dir) {;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
  let files = [];
  const items = fs.readdirSync(dir);
;
  items.forEach(item => {);
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
;
    if (stat.isDirectory()) {;
      files = files.concat(getAllFiles(fullPath))} else {;
      files.push(fullPath)}
  });
<<<<<<< HEAD
  
  return files;
}"
"
function formatBytes(bytes) {"'"
  if (bytes === 0) return '0 Bytes";"
  "
  const k = 1024;"'"
  const sizes = ['Bytes', 'KB', 'MB', 'GB"];"
  const i = Math.floor(Math.log(bytes) / Math.log(k));"
  "'"
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' " + sizes[i];
}
"
// Run the performance check"
checkPerformance();"'"
=======
;
  return files}
function formatBytes(bytes) {;
  if (bytes === 0) return '0 Bytes'
;
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
;
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]}
// Run the performance check;"
checkPerformance()";`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
