const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting production optimization...');

// Function to remove console logs from files
function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove console.log, console.warn, console.error, console.info statements
    content = content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);?\s*/g, '');
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Cleaned console logs from: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript and JavaScript files
function findSourceFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, dist, .git, etc.
        if (!['node_modules', 'dist', '.git', '.next', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main optimization process
function optimizeProduction() {
  console.log('📁 Finding source files...');
  const sourceFiles = findSourceFiles('./app');
  const componentFiles = findSourceFiles('./app/components');
  const allFiles = [...sourceFiles, ...componentFiles];
  
  console.log(`📊 Found ${allFiles.length} files to process`);
  
  let cleanedCount = 0;
  
  // Clean console logs
  console.log('🧹 Removing console logs...');
  allFiles.forEach(file => {
    if (removeConsoleLogs(file)) {
      cleanedCount++;
    }
  });
  
  console.log(`✅ Cleaned console logs from ${cleanedCount} files`);
  
  // Run build
  console.log('🔨 Running production build...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Production build completed successfully');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
  
  console.log('🎉 Production optimization completed!');
}

// Run optimization
optimizeProduction();
