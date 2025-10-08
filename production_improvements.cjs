#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const improvements = [];

// Function to update console.log to use conditional logging
function improveLogging(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  let changes = 0;

  // Replace console.log with environment-aware logging
  content = content.replace(
    /console\.(log|debug|info)\((.*?)\);/g,
    (match, level, args) => {
      // Keep console.error and console.warn
      if (level === 'error' || level === 'warn') return match;
      
      // Skip if already wrapped in env check
      if (match.includes('process.env') || match.includes('import.meta.env')) {
        return match;
      }
      
      changes++;
      return `if (import.meta.env.DEV) { console.${level}(${args}); }`;
    }
  );

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    improvements.push({
      file: filePath,
      type: 'logging',
      changes
    });
    return changes;
  }
  
  return 0;
}

// Function to add performance hints
function addPerformanceHints(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Check if file already has prefetch/preload hints
  if (content.includes('link rel="prefetch"') || content.includes('link rel="preload"')) {
    return 0;
  }
  
  // Add hints to HTML files
  if (filePath.endsWith('.html') && content.includes('<head>')) {
    const hints = `
    <!-- Performance Hints -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">`;
    
    content = content.replace('</head>', `${hints}\n  </head>`);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      improvements.push({
        file: filePath,
        type: 'performance-hints',
        changes: 1
      });
      return 1;
    }
  }
  
  return 0;
}

// Function to optimize error handling
function optimizeErrorHandling(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  let changes = 0;

  // Add error boundaries where missing
  if (filePath.includes('App.tsx') && !content.includes('ErrorBoundary')) {
    // Already has ErrorBoundary
    return 0;
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    improvements.push({
      file: filePath,
      type: 'error-handling',
      changes
    });
    return changes;
  }
  
  return 0;
}

// Walk directory
function walkDirectory(dir, fileTypes = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = fs.readdirSync(dir);
  const results = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('dist') && !file.includes('.git')) {
        results.push(...walkDirectory(filePath, fileTypes));
      }
    } else {
      const ext = path.extname(file);
      if (fileTypes.includes(ext)) {
        results.push(filePath);
      }
    }
  }

  return results;
}

function main() {
  console.log('='.repeat(80));
  console.log('PRODUCTION IMPROVEMENTS');
  console.log('='.repeat(80));
  console.log();

  const appDir = path.join(__dirname, 'app');
  const srcDir = path.join(__dirname, 'src');
  
  console.log('Scanning files for improvements...\n');

  // Process app directory
  if (fs.existsSync(appDir)) {
    console.log('Processing app/ directory...');
    const appFiles = walkDirectory(appDir);
    console.log(`Found ${appFiles.length} files in app/`);
    
    let totalChanges = 0;
    for (const file of appFiles) {
      const changes = improveLogging(file);
      totalChanges += changes;
    }
    console.log(`Applied ${totalChanges} logging improvements in app/\n`);
  }

  // Process src directory
  if (fs.existsSync(srcDir)) {
    console.log('Processing src/ directory...');
    const srcFiles = walkDirectory(srcDir);
    console.log(`Found ${srcFiles.length} files in src/`);
    
    let totalChanges = 0;
    for (const file of srcFiles) {
      const changes = improveLogging(file);
      totalChanges += changes;
    }
    console.log(`Applied ${totalChanges} logging improvements in src/\n`);
  }

  // Add performance hints to index.html
  const indexHtml = path.join(__dirname, 'index.html');
  if (fs.existsSync(indexHtml)) {
    console.log('Adding performance hints to index.html...');
    addPerformanceHints(indexHtml);
  }

  console.log('\n' + '='.repeat(80));
  console.log('IMPROVEMENTS SUMMARY');
  console.log('='.repeat(80));
  console.log();

  if (improvements.length === 0) {
    console.log('✅ No improvements needed - code is already optimized!');
  } else {
    const byType = {};
    improvements.forEach(imp => {
      if (!byType[imp.type]) byType[imp.type] = [];
      byType[imp.type].push(imp);
    });

    Object.keys(byType).forEach(type => {
      const items = byType[type];
      const totalChanges = items.reduce((sum, item) => sum + item.changes, 0);
      console.log(`${type}: ${totalChanges} changes across ${items.length} file(s)`);
    });

    console.log();
    console.log('Files modified:');
    improvements.forEach(imp => {
      console.log(`  - ${imp.file}`);
    });
  }

  console.log();
  console.log('='.repeat(80));
  console.log('✅ Production improvements completed!');
  console.log('='.repeat(80));
}

main();
