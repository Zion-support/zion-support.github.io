#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
<<<<<<< HEAD

// Function to fix common syntax errors in files
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  
  // Fix incomplete JSX structures
  if (filePath.includes('.tsx') || filePath.includes('.jsx')) {
    // Fix missing closing tags in common patterns
    fixed = fixed.replace(/<div[^>]*>(?!.*<\/div>)/g, (match) => {
      // Check if there's already a closing tag
      const openDivs = (match.match(/<div/g) || []).length;
      const closeDivs = (fixed.match(/<\/div>/g) || []).length;
      if (openDivs > closeDivs) {
        return match;
      }
      return match;
    });
    
    // Fix incomplete function returns
    if (fixed.includes('return (') && !fixed.includes(');')) {
      // Find the last opening parenthesis and add closing
      const lastOpenParen = fixed.lastIndexOf('return (');
      if (lastOpenParen !== -1) {
        const afterReturn = fixed.substring(lastOpenParen + 8);
        const openCount = (afterReturn.match(/\(/g) || []).length;
        const closeCount = (afterReturn.match(/\)/g) || []).length;
        
        if (openCount > closeCount) {
          // Add missing closing parentheses and semicolon
          fixed = fixed + ');';
        }
      }
    }
    
    // Fix missing closing braces for JSX
    if (fixed.includes('return (') && !fixed.includes('}')) {
      const returnIndex = fixed.indexOf('return (');
      const afterReturn = fixed.substring(returnIndex);
      const openBraces = (afterReturn.match(/\{/g) || []).length;
      const closeBraces = (afterReturn.match(/\}/g) || []).length;
      
      if (openBraces > closeBraces) {
        fixed = fixed + '}';
      }
    }
  }
  
  // Fix specific parsing errors
  fixed = fixed.replace(/}\s*\)\s*$/g, '});');
  fixed = fixed.replace(/}\s*\)\s*;\s*$/g, '});');
  
  // Fix unterminated strings
  fixed = fixed.replace(/"[^"]*$/g, (match) => {
    if (!match.endsWith('"')) {
      return match + '"';
    }
    return match;
  });
  
  // Fix unterminated regex
  fixed = fixed.replace(/\/[^\/]*$/g, (match) => {
    if (match.startsWith('/') && !match.endsWith('/')) {
      return match + '/';
    }
    return match;
  });
  
  return fixed;
}

// Function to fix specific files with known issues
function fixSpecificFiles() {
  const filesToFix = [
    'app/components/PerformanceMonitor.tsx',
    'app/contact/page.tsx',
    'app/zion-ai-email-analyzer/page.tsx',
    'app/zion-ai-inventory-manager/page.tsx',
    'app/zion-ai-performance-optimizer/page.tsx',
    'app/zion-ai-social-media-manager/page.tsx',
    'app/zion-ai-voice-assistant-pro/page.tsx',
    'app/zion-smart-expense-categorizer/page.tsx',
    'app/zion-smart-inventory-optimizer/page.tsx'
  ];
  
  filesToFix.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Fix specific patterns for these files
        if (filePath.includes('zion-ai-') || filePath.includes('zion-smart-')) {
          // Fix incomplete JSX structure
          if (content.includes('return (') && !content.includes(');')) {
            // Find the last div and add proper closing
            const lastDivIndex = content.lastIndexOf('<div');
            if (lastDivIndex !== -1) {
              const afterLastDiv = content.substring(lastDivIndex);
              const openDivs = (afterLastDiv.match(/<div/g) || []).length;
              const closeDivs = (afterLastDiv.match(/<\/div>/g) || []).length;
              
              if (openDivs > closeDivs) {
                // Add missing closing divs
                const missingDivs = openDivs - closeDivs;
                content = content + '\n' + '        </div>'.repeat(missingDivs) + '\n      </div>\n    </div>\n  );';
              }
            }
          }
        }
        
        // Fix PerformanceMonitor specific issue
        if (filePath.includes('PerformanceMonitor.tsx')) {
          content = content.replace(/const inputEntry = entry as any;/, 'const inputEntry = entry as any;\n            setMetrics(prev => ({ ...prev, fid: inputEntry.processingStart }));\n          }\n        });\n      });\n\n      observer.observe({ entryTypes: [\'paint\', \'largest-contentful-paint\', \'first-input\'] });\n\n      return () => observer.disconnect();\n    }\n  }, []);\n\n  return (\n    <div className="performance-monitor">\n      <h3>Performance Metrics</h3>\n      <div className="metrics-grid">\n        {metrics.fcp && <div>FCP: {metrics.fcp.toFixed(2)}ms</div>}\n        {metrics.lcp && <div>LCP: {metrics.lcp.toFixed(2)}ms</div>}\n        {metrics.fid && <div>FID: {metrics.fid.toFixed(2)}ms</div>}\n        {metrics.cls && <div>CLS: {metrics.cls.toFixed(4)}</div>}\n        {metrics.ttfb && <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>}\n      </div>\n    </div>');
        }
        
        // Fix contact page specific issue
        if (filePath.includes('contact/page.tsx')) {
          content = content.replace(/<div className="min-h-screen[^>]*>/, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">');
          // Add proper closing structure
          if (!content.includes('</div>')) {
            content = content + '\n    </div>\n  );';
          }
        }
        
        content = fixSyntaxErrors(content, filePath);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed syntax errors in: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error fixing ${filePath}:`, error.message);
      }
    }
  });
}

// Function to fix API files
function fixAPIFiles() {
  const apiFiles = [
    'api/create-payment-intent.js',
    'api/newsletter/subscribe.js',
    'api/quotes.js',
    'api/shipping-rates.js',
    'api/subscribe.js',
    'api/wallet.js'
  ];
  
  apiFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Fix missing closing braces
        const openBraces = (content.match(/\{/g) || []).length;
        const closeBraces = (content.match(/\}/g) || []).length;
        
        if (openBraces > closeBraces) {
          const missingBraces = openBraces - closeBraces;
          content = content + '\n' + '}'.repeat(missingBraces);
        }
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed API file: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error fixing API file ${filePath}:`, error.message);
      }
    }
  });
}

console.log('Starting syntax error fixes...');

// Fix specific files
fixSpecificFiles();

// Fix API files
fixAPIFiles();

console.log('Syntax error fixes completed!');
=======

// Function to recursively find all files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(file)) {
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      // Only process certain file types
      if (file.match(/\.(js|jsx|ts|tsx)$/)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unescaped entities in JSX
    if (content.includes("'")) {
      const originalContent = content;
      content = content.replace(/(?<!&)(?<!&#)(?<!&apos;)(?<!&lsquo;)(?<!&rsquo;)(?<!&quot;)(?<!&lt;)(?<!&gt;)(?<!&amp;)'(?![^<]*>)/g, '&apos;');
      if (content !== originalContent) {
        modified = true;
        console.log(`✓ Fixed unescaped entities in: ${filePath}`);
      }
    }

    // Fix duplicate Router imports
    if (content.includes("import { Router }")) {
      const lines = content.split('\n');
      const routerLines = lines.filter(line => line.includes("import { Router }"));
      if (routerLines.length > 1) {
        const cleanedLines = lines.filter((line, index) => {
          if (line.includes("import { Router }")) {
            return index === lines.findIndex(l => l.includes("import { Router }"));
          }
          return true;
        });
        const cleanedContent = cleanedLines.join('\n');
        if (cleanedContent !== content) {
          content = cleanedContent;
          modified = true;
          console.log(`✓ Fixed duplicate Router import in: ${filePath}`);
        }
      }
    }

    // Fix missing closing tags
    if (content.includes('<div') && !content.includes('</div>')) {
      const divCount = (content.match(/<div/g) || []).length;
      const closingDivCount = (content.match(/<\/div>/g) || []).length;
      if (divCount > closingDivCount) {
        const missingDivs = divCount - closingDivCount;
        content += '\n' + '</div>'.repeat(missingDivs);
        modified = true;
        console.log(`✓ Added ${missingDivs} missing closing div tags in: ${filePath}`);
      }
    }

    // Fix parsing errors in API files
    if (filePath.includes('/api/')) {
      // Fix missing commas in object literals
      content = content.replace(/(\w+)\s*\n\s*}/g, '$1\n}');
      
      // Fix try-catch blocks
      if (content.includes('try {') && !content.includes('} catch')) {
        content = content.replace(/try\s*{([^}]+)}/g, (match, tryContent) => {
          return `try {\n${tryContent}\n} catch (error) {\n  console.error('Error:', error);\n  res.status(500).json({ error: 'Internal server error' });\n}`;
        });
        modified = true;
        console.log(`✓ Fixed try-catch block in: ${filePath}`);
      }
    }

    // Fix missing semicolons
    content = content.replace(/([^;}])\n\s*}/g, '$1;\n}');
    content = content.replace(/([^;}])\n\s*\)/g, '$1;\n)');

    // Fix missing commas in function parameters
    content = content.replace(/\)\s*{/g, ') {');
    content = content.replace(/,\s*\)/g, ')');

    // Fix broken JSX attributes
    content = content.replace(/=\s*{\s*}\s*/g, '={true} ');
    content = content.replace(/=\s*{\s*undefined\s*}/g, '={false} ');

    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
      content += ')'.repeat(missingParens);
      modified = true;
      console.log(`✓ Added ${missingParens} missing closing parentheses in: ${filePath}`);
    }

    // Fix missing closing braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '}'.repeat(missingBraces);
      modified = true;
      console.log(`✓ Added ${missingBraces} missing closing braces in: ${filePath}`);
    }

    // Only write if content actually changed
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting syntax error fixes...');

const allFiles = getAllFiles(process.cwd());
let fixedCount = 0;

allFiles.forEach(file => {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`\nCompleted! Fixed syntax errors in ${fixedCount} files.`);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-52d3
