const fs = require('fs');
const path = require('path');

// Function to remove Helmet from a file
function removeHelmet(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file uses Helmet
    if (!content.includes('Helmet')) {
      return false; // No Helmet usage
    }
    
    console.log(`Removing Helmet from: ${filePath}`);
    
    // Remove Helmet import
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];\s*\n?/g, '');
    
    // Remove Helmet component usage
    content = content.replace(/<Helmet>\s*<title>.*?<\/title>\s*<meta[^>]*\/>\s*<meta[^>]*\/>\s*<\/Helmet>\s*/gs, '');
    
    // Remove Helmet component usage (alternative pattern)
    content = content.replace(/<Helmet>\s*<title>.*?<\/title>\s*<meta[^>]*\/>\s*<\/Helmet>\s*/gs, '');
    
    // Remove Helmet component usage (simple pattern)
    content = content.replace(/<Helmet>\s*<title>.*?<\/title>\s*<\/Helmet>\s*/gs, '');
    
    // Clean up any remaining Helmet references
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
    
    // Clean up excessive newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all .tsx files
function removeHelmetFromAll(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git
      if (file !== 'node_modules' && file !== '.git' && !file.startsWith('.')) {
        fixedCount += removeHelmetFromAll(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (removeHelmet(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to remove Helmet components...');
const fixedCount = removeHelmetFromAll(appDir);
console.log(`Removed Helmet from ${fixedCount} files.`);