import fs from 'fs';
import path from 'path';

// Function to fix comprehensive JSX syntax errors
function fixComprehensiveJSX(content) {
  let fixed = content;
  
  // Fix missing closing tags for common patterns
  const tagPairs = [
    ['<div', '</div>'],
    ['<section', '</section>'],
    ['<h1', '</h1>'],
    ['<h2', '</h2>'],
    ['<h3', '</h3>'],
    ['<p', '</p>'],
    ['<span', '</span>'],
    ['<Routes', '</Routes>'],
    ['<main', '</main>'],
    ['<Router', '</Router>'],
    ['<ErrorBoundary', '</ErrorBoundary>'],
    ['<HelmetProvider', '</HelmetProvider>'],
    ['<AnalyticsProvider', '</AnalyticsProvider>'],
    ['<PerformanceOptimizer', '</PerformanceOptimizer>'],
    ['<AccessibilityEnhancer', '</AccessibilityEnhancer>'],
    ['<EnhancedAccessibility', '</EnhancedAccessibility>'],
    ['<AppWithPerformanceMonitoring', '</AppWithPerformanceMonitoring>']
  ];
  
  // Fix specific malformed patterns
  // Pattern: <h1>text<p>content</p> -> <h1>text</h1><p>content</p>
  fixed = fixed.replace(/<h1([^>]*)>([^<]*)<p([^>]*)>/g, '<h1$1>$2</h1><p$3>');
  fixed = fixed.replace(/<h2([^>]*)>([^<]*)<p([^>]*)>/g, '<h2$1>$2</h2><p$3>');
  fixed = fixed.replace(/<h3([^>]*)>([^<]*)<p([^>]*)>/g, '<h3$1>$2</h3><p$3>');
  
  // Fix nested div patterns
  fixed = fixed.replace(/<div([^>]*)>([^<]*)<div([^>]*)>/g, '<div$1>$2</div><div$3>');
  
  // Fix missing closing tags in specific contexts
  fixed = fixed.replace(/<div([^>]*)>([^<]*)$/gm, (match, attrs, text) => {
    if (text.trim() && !match.includes('</div>')) {
      return `<div${attrs}>${text}</div>`;
    }
    return match;
  });
  
  // Fix JSX fragments that are malformed
  fixed = fixed.replace(/<>\s*<div/g, '<><div');
  fixed = fixed.replace(/<\/div>\s*<\/>/g, '</div></>');
  
  // Fix specific component patterns
  fixed = fixed.replace(/<Routes([^>]*)>([^<]*)<\/Routes>/g, '<Routes$1>$2</Routes>');
  fixed = fixed.replace(/<main([^>]*)>([^<]*)<\/main>/g, '<main$1>$2</main>');
  
  // Fix missing closing tags for self-closing components
  const selfClosingComponents = ['Cube', 'Star', 'Award', 'Shield', 'Globe', 'Brain', 'Users', 'CheckCircle'];
  for (const component of selfClosingComponents) {
    fixed = fixed.replace(new RegExp(`<${component}([^>]*)(?<!\\/>)>`, 'g'), `<${component}$1 />`);
  }
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{([^}]*)\}\s*<(\w+)/g, '{$1}<$2');
  
  // Fix missing closing tags in map functions
  fixed = fixed.replace(/\.map\(([^)]*)\)\s*=>\s*<(\w+)([^>]*)>([^<]*)<\/\2>/g, '.map($1) => <$2$3>$4</$2>');
  
  // Fix specific patterns in about page
  fixed = fixed.replace(/<h2([^>]*)>([^<]*)<p([^>]*)>/g, '<h2$1>$2</h2><p$3>');
  fixed = fixed.replace(/<h3([^>]*)>([^<]*)<p([^>]*)>/g, '<h3$1>$2</h3><p$3>');
  
  // Fix missing closing tags in grid layouts
  fixed = fixed.replace(/<div([^>]*grid[^>]*)>([^<]*)<div([^>]*)>/g, '<div$1>$2</div><div$3>');
  
  // Fix specific App.tsx issues
  fixed = fixed.replace(/<Routes([^>]*)>([^<]*)<\/Routes>/g, '<Routes$1>$2</Routes>');
  
  return fixed;
}

// Function to process a file with comprehensive fixes
function processFileComprehensive(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixComprehensiveJSX(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific problematic files
function fixSpecificFiles() {
  const problematicFiles = [
    '/workspace/App.tsx',
    '/workspace/app/App.tsx',
    '/workspace/app/about/page.tsx',
    '/workspace/app/ai-3d-generation/page.tsx',
    '/workspace/app/ai-analytics-dashboard/page.tsx'
  ];
  
  let fixedCount = 0;
  for (const filePath of problematicFiles) {
    if (fs.existsSync(filePath)) {
      if (processFileComprehensive(filePath)) {
        fixedCount++;
      }
    }
  }
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive JSX fixes...');
const fixedCount = fixSpecificFiles();
console.log(`Fixed ${fixedCount} files`);