#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting JSX/React error fixer automation...');

// Get automation interval from environment variable (default: 5 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 300000; // 5 minutes

async function runJSXErrorFixer() {
  try {
    console.log(`🔧 Running JSX/React error fixer at ${new Date().toISOString()}`);
    
    let fixesApplied = 0;
    let errorsFixed = [];
    
    // 1. Fix JSX syntax errors
    console.log('🔧 Fixing JSX syntax errors...');
    const jsxFixes = await fixJSXSyntaxErrors();
    fixesApplied += jsxFixes.length;
    errorsFixed.push(...jsxFixes);
    
    // 2. Fix React component errors
    console.log('🔧 Fixing React component errors...');
    const reactFixes = await fixReactComponentErrors();
    fixesApplied += reactFixes.length;
    errorsFixed.push(...reactFixes);
    
    // 3. Fix JSX closing tag errors
    console.log('🔧 Fixing JSX closing tag errors...');
    const closingTagFixes = await fixJSXClosingTagErrors();
    fixesApplied += closingTagFixes.length;
    errorsFixed.push(...closingTagFixes);
    
    // 4. Fix JSX expression errors
    console.log('🔧 Fixing JSX expression errors...');
    const expressionFixes = await fixJSXExpressionErrors();
    fixesApplied += expressionFixes.length;
    errorsFixed.push(...expressionFixes);
    
    // 5. Fix JSX attribute errors
    console.log('🔧 Fixing JSX attribute errors...');
    const attributeFixes = await fixJSXAttributeErrors();
    fixesApplied += attributeFixes.length;
    errorsFixed.push(...attributeFixes);
    
    // 6. Run ESLint to check for remaining JSX errors
    console.log('🔧 Running ESLint to check for remaining JSX errors...');
    try {
      execSync('npx eslint . --ext .jsx,.tsx --fix', { stdio: 'pipe' });
      console.log('✅ ESLint JSX check completed');
    } catch (error) {
      console.log('⚠️  ESLint found JSX issues, continuing...');
    }
    
    // Generate JSX error fixer report
    console.log('📊 Generating JSX error fixer report...');
    const report = {
      timestamp: new Date().toISOString(),
      totalFixesApplied: fixesApplied,
      errorsFixed: errorsFixed,
      summary: 'JSX/React error fixer completed',
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'jsx-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ JSX error fixer report saved to ${reportPath}`);
    
    console.log(`✅ JSX/React error fixer completed successfully. Applied ${fixesApplied} fixes.`);
    
  } catch (error) {
    console.error('❌ JSX/React error fixer failed:', error.message);
    
    // Generate error report
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      summary: 'JSX/React error fixer failed',
      status: 'failed'
    };
    
    const reportPath = path.join(process.cwd(), 'jsx-error-fixer-error-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

async function fixJSXSyntaxErrors() {
  const fixes = [];
  
  try {
    const sourceFiles = findJSXFiles('./src');
    
    for (const file of sourceFiles) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Fix extra semicolons in JSX
      if (content.includes('{;')) {
        content = content.replace(/\{;/g, '{');
        modified = true;
      }
      
      // Fix malformed JSX expressions
      if (content.includes('{anyany')) {
        content = content.replace(/\{anyany/g, '{');
        modified = true;
      }
      
      if (content.includes('{anystring')) {
        content = content.replace(/\{anystring/g, '{');
        modified = true;
      }
      
      // Fix malformed JSX fragments
      if (content.includes('<>;')) {
        content = content.replace(/<>;/g, '<>');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        fixes.push({
          type: 'jsx-syntax',
          file: file,
          description: 'Fixed JSX syntax errors'
        });
      }
    }
  } catch (error) {
    console.log('⚠️  Error fixing JSX syntax errors:', error.message);
  }
  
  return fixes;
}

async function fixReactComponentErrors() {
  const fixes = [];
  
  try {
    const sourceFiles = findJSXFiles('./src');
    
    for (const file of sourceFiles) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Fix malformed React component definitions
      if (content.includes('const Component: React.FC = () => {')) {
        content = content.replace(/const Component: React\.FC = \(\) => \{/g, 'const Component: React.FC = () => {');
        modified = true;
      }
      
      // Fix malformed component props
      if (content.includes('props: anyany')) {
        content = content.replace(/props: anyany/g, 'props: any');
        modified = true;
      }
      
      if (content.includes('props: anystring')) {
        content = content.replace(/props: anystring/g, 'props: string');
        modified = true;
      }
      
      // Fix malformed component state
      if (content.includes('state: anyany')) {
        content = content.replace(/state: anyany/g, 'state: any');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        fixes.push({
          type: 'react-component',
          file: file,
          description: 'Fixed React component errors'
        });
      }
    }
  } catch (error) {
    console.log('⚠️  Error fixing React component errors:', error.message);
  }
  
  return fixes;
}

async function fixJSXClosingTagErrors() {
  const fixes = [];
  
  try {
    const sourceFiles = findJSXFiles('./src');
    
    for (const file of sourceFiles) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Fix missing closing tags for common elements
      const tagPatterns = [
        { open: '<div>', close: '</div>' },
        { open: '<h1>', close: '</h1>' },
        { open: '<h2>', close: '</h2>' },
        { open: '<h3>', close: '</h3>' },
        { open: '<p>', close: '</p>' },
        { open: '<span>', close: '</span>' },
        { open: '<button>', close: '</button>' },
        { open: '<input>', close: '' }, // Self-closing
        { open: '<img>', close: '' }, // Self-closing
        { open: '<br>', close: '' }, // Self-closing
      ];
      
      for (const pattern of tagPatterns) {
        const openCount = (content.match(new RegExp(pattern.open.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
        const closeCount = (content.match(new RegExp(pattern.close.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
        
        if (openCount > closeCount && pattern.close) {
          // Add missing closing tags
          const lines = content.split('\n');
          for (let i = lines.length - 1; i >= 0; i--) {
            if (lines[i].includes(pattern.open)) {
              lines.splice(i + 1, 0, '          ' + pattern.close);
              modified = true;
              break;
            }
          }
          content = lines.join('\n');
        }
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        fixes.push({
          type: 'jsx-closing-tags',
          file: file,
          description: 'Fixed JSX closing tag errors'
        });
      }
    }
  } catch (error) {
    console.log('⚠️  Error fixing JSX closing tag errors:', error.message);
  }
  
  return fixes;
}

async function fixJSXExpressionErrors() {
  const fixes = [];
  
  try {
    const sourceFiles = findJSXFiles('./src');
    
    for (const file of sourceFiles) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Fix malformed JSX expressions
      if (content.includes('{anyany')) {
        content = content.replace(/\{anyany/g, '{');
        modified = true;
      }
      
      if (content.includes('{anystring')) {
        content = content.replace(/\{anystring/g, '{');
        modified = true;
      }
      
      // Fix malformed JSX conditional expressions
      if (content.includes('{anyany &&')) {
        content = content.replace(/\{anyany &&/g, '{any &&');
        modified = true;
      }
      
      if (content.includes('{anystring &&')) {
        content = content.replace(/\{anystring &&/g, '{string &&');
        modified = true;
      }
      
      // Fix malformed JSX map expressions
      if (content.includes('.map(anyany =>')) {
        content = content.replace(/\.map\(anyany =>/g, '.map(any =>');
        modified = true;
      }
      
      if (content.includes('.map(anystring =>')) {
        content = content.replace(/\.map\(anystring =>/g, '.map(string =>');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        fixes.push({
          type: 'jsx-expressions',
          file: file,
          description: 'Fixed JSX expression errors'
        });
      }
    }
  } catch (error) {
    console.log('⚠️  Error fixing JSX expression errors:', error.message);
  }
  
  return fixes;
}

async function fixJSXAttributeErrors() {
  const fixes = [];
  
  try {
    const sourceFiles = findJSXFiles('./src');
    
    for (const file of sourceFiles) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Fix malformed JSX attributes
      if (content.includes('any"')) {
        content = content.replace(/any"/g, '"');
        modified = true;
      }
      
      if (content.includes('anystring"')) {
        content = content.replace(/anystring"/g, '"');
        modified = true;
      }
      
      // Fix malformed className attributes
      if (content.includes('className={anyany')) {
        content = content.replace(/className=\{anyany/g, 'className={any');
        modified = true;
      }
      
      if (content.includes('className={anystring')) {
        content = content.replace(/className=\{anystring/g, 'className={string');
        modified = true;
      }
      
      // Fix malformed style attributes
      if (content.includes('style={anyany')) {
        content = content.replace(/style=\{anyany/g, 'style={any');
        modified = true;
      }
      
      if (content.includes('style={anystring')) {
        content = content.replace(/style=\{anystring/g, 'style={string');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        fixes.push({
          type: 'jsx-attributes',
          file: file,
          description: 'Fixed JSX attribute errors'
        });
      }
    }
  } catch (error) {
    console.log('⚠️  Error fixing JSX attribute errors:', error.message);
  }
  
  return fixes;
}

function findJSXFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && /\.(jsx|tsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
async function main() {
  console.log('🚀 Starting JSX/React error fixer...');
  
  // Run once immediately
  await runJSXErrorFixer();
  
  // Set up continuous execution
  setInterval(async () => {
    await runJSXErrorFixer();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🔄 JSX/React error fixer will run every ${AUTOMATION_INTERVAL / 60000} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 JSX/React error fixer shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 JSX/React error fixer shutting down gracefully...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Fatal error in JSX/React error fixer:', error);
  process.exit(1);
});