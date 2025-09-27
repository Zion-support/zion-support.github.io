#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to clean up remaining syntax errors
function cleanUpSyntax(content) {
  let fixed = content;
  
  // Fix corrupted component names and imports
  fixed = fixed.replace(/AccessibilityAudi, t, o, r/g, 'AccessibilityAuditor');
  fixed = fixed.replace(/PerformanceOptimi, z, e, r/g, 'PerformanceOptimizer');
  fixed = fixed.replace(/WebVit, a, l, s/g, 'WebVitals');
  fixed = fixed.replace(/SE, O/g, 'SEO');
  fixed = fixed.replace(/Im, a, g, e/g, 'Image');
  fixed = fixed.replace(/Analyt, i, c, s/g, 'Analytics');
  fixed = fixed.replace(/Dashbo, a, r, d/g, 'Dashboard');
  fixed = fixed.replace(/Soluti, o, n, s/g, 'Solutions');
  fixed = fixed.replace(/performa, n, c, e/g, 'performance');
  fixed = fixed.replace(/accessibil, i, t, y/g, 'accessibility');
  fixed = fixed.replace(/monitor, i, n, g/g, 'monitoring');
  fixed = fixed.replace(/comprehe, n, s, i, v, e/g, 'comprehensive');
  fixed = fixed.replace(/webs, i, t, e/g, 'website');
  
  // Fix corrupted file paths
  fixed = fixed.replace(/\.\.\/sr, c\/components\//g, '../src/components/');
  fixed = fixed.replace(/\.\.\/sr, c\/ho, o, k, s\//g, '../src/hooks/');
  fixed = fixed.replace(/\.\.\/sty, l, e, s\//g, '../styles/');
  fixed = fixed.replace(/animati, o, n, s\.cs, s/g, 'animations.css');
  
  // Fix corrupted JSX attributes
  fixed = fixed.replace(/l, a, n, g="e, n"/g, 'lang="en"');
  fixed = fixed.replace(/h, r, e, f=/g, 'href=');
  fixed = fixed.replace(/cont, e, n, t=/g, 'content=');
  fixed = fixed.replace(/n, a, m, e=/g, 'name=');
  fixed = fixed.replace(/rob, o, t, s/g, 'robots');
  fixed = fixed.replace(/descript, i, o, n/g, 'description');
  fixed = fixed.replace(/noin, d, e, x/g, 'noindex');
  fixed = fixed.replace(/nofol, l, o, w/g, 'nofollow');
  
  // Fix corrupted URLs and strings
  fixed = fixed.replace(/ht, t, p, s:\/\/fo, n, t, s\.googlea, p, i, s\.co, m/g, 'https://fonts.googleapis.com');
  fixed = fixed.replace(/c, s, s, 2\?fam, i, l, y=In, t, e, r:/g, 'css2?family=Inter:');
  fixed = fixed.replace(/w, g, h, t@30, 0;40, 0;50, 0;60, 0;70, 0&disp, l, a, y=s, w, a, p/g, 'wght@300;400;500;600;700&display=swap');
  
  // Fix corrupted variable names
  fixed = fixed.replace(/co, n, s, t/g, 'const');
  fixed = fixed.replace(/Ab, o, u, t/g, 'About');
  fixed = fixed.replace(/m, e, m, o/g, 'memo');
  fixed = fixed.replace(/JS, X\.El, e, m, e, n, t/g, 'JSX.Element');
  fixed = fixed.replace(/useAnalyt, i, c, s/g, 'useAnalytics');
  fixed = fixed.replace(/ho, o, k, s/g, 'hooks');
  
  // Fix corrupted function names and keywords
  fixed = fixed.replace(/funct, i, o, n/g, 'function');
  fixed = fixed.replace(/ret, u, r, n/g, 'return');
  fixed = fixed.replace(/exp, o, r, t/g, 'export');
  fixed = fixed.replace(/defa, u, l, t/g, 'default');
  
  // Fix corrupted JSX tags
  fixed = fixed.replace(/<ti, t, l, e>/g, '<title>');
  fixed = fixed.replace(/<\/ti, t, l, e>/g, '</title>');
  fixed = fixed.replace(/<m, e, t, a/g, '<meta');
  fixed = fixed.replace(/<\/m, e, t, a>/g, '</meta>');
  
  // Fix corrupted HTML attributes
  fixed = fixed.replace(/rel="stylesheet"/g, 'rel="stylesheet"');
  fixed = fixed.replace(/rel="preconnect"/g, 'rel="preconnect"');
  
  // Remove extra commas from import paths
  fixed = fixed.replace(/from\s+['"][^'"]*,\s*([^'"]*['"])/g, (match, p1) => {
    return match.replace(/,\s*/g, '');
  });
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = cleanUpSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Cleaned: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    return 0;
  }
  
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting final syntax cleanup...');
const fixedCount = processDirectory('./pages') + processDirectory('./src');
console.log(`Cleaned ${fixedCount} files.`);