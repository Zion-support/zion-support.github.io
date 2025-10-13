const fs = require('fs');
const path = require('path');

// Function to fix SEOOptimizer import paths
function fixSEOImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix various import patterns
    const patterns = [
      { from: /import SEOOptimizer from "\.\.\/\.\.\/components\/SEOOptimizer";/g, to: 'import SEOOptimizer from "../components/SEOOptimizer";' },
      { from: /import SEOOptimizer from "\.\.\/components\/SEOOptimizer";/g, to: 'import SEOOptimizer from "../components/SEOOptimizer";' },
      { from: /import SEOOptimizer from "\.\/components\/SEOOptimizer";/g, to: 'import SEOOptimizer from "../components/SEOOptimizer";' }
    ];
    
    patterns.forEach(pattern => {
      if (pattern.from.test(content)) {
        content = content.replace(pattern.from, pattern.to);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed SEOOptimizer import in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix SEOOptimizer imports
function fixAllSEOImports(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
        fixAllSEOImports(fullPath);
      }
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      fixSEOImports(fullPath);
    }
  }
}

// Start fixing from the app directory
console.log('Starting SEOOptimizer import path fixes...');
fixAllSEOImports('/workspace/app');
console.log('SEOOptimizer import path fixes completed!');