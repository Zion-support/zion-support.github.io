#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive error fixer automation...');

// Get automation interval from environment variable (default: 30 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes

async function runComprehensiveErrorFixer() {
  try {
    console.log(`🔧 Running comprehensive error fixer at ${new Date().toISOString()}`);
    
    const errors = {
      eslint: [],
      typescript: [],
      syntax: [],
      missingExports: [],
      duplicateDeclarations: [],
      fixed: []
    };
    
    // Step 1: Run ESLint to detect issues
    console.log('🔍 Step 1: Running ESLint to detect issues...');
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      console.log('✅ ESLint passed - no issues found');
    } catch (error) {
      console.log('⚠️  ESLint found issues, analyzing...');
      const lintOutput = error.message;
      errors.eslint = parseESLintOutput(lintOutput);
      console.log(`📊 Found ${errors.eslint.length} ESLint issues`);
    }
    
    // Step 2: Run TypeScript type checking
    console.log('🔍 Step 2: Running TypeScript type checking...');
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      console.log('✅ TypeScript type checking passed');
    } catch (error) {
      console.log('⚠️  TypeScript found issues, analyzing...');
      const tsOutput = error.message;
      errors.typescript = parseTypeScriptOutput(tsOutput);
      console.log(`📊 Found ${errors.typescript.length} TypeScript issues`);
    }
    
    // Step 3: Fix common issues automatically
    console.log('🔧 Step 3: Attempting to fix common issues automatically...');
    const fixedIssues = await autoFixCommonIssues(errors);
    errors.fixed = fixedIssues;
    
    // Step 4: Run ESLint again to see if we fixed issues
    console.log('🔍 Step 4: Running ESLint again to verify fixes...');
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      console.log('✅ ESLint passed after fixes - issues resolved');
    } catch (error) {
      console.log('⚠️  Some ESLint issues remain after fixes');
    }
    
    // Step 5: Run TypeScript again to see if we fixed issues
    console.log('🔍 Step 5: Running TypeScript again to verify fixes...');
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      console.log('✅ TypeScript passed after fixes - issues resolved');
    } catch (error) {
      console.log('⚠️  Some TypeScript issues remain after fixes');
    }
    
    // Generate comprehensive error fixer report
    console.log('📊 Generating comprehensive error fixer report...');
    const report = {
      timestamp: new Date().toISOString(),
      summary: 'Comprehensive error fixer completed',
      status: 'completed',
      errors: {
        eslint: errors.eslint.length,
        typescript: errors.typescript.length,
        syntax: errors.syntax.length,
        missingExports: errors.missingExports.length,
        duplicateDeclarations: errors.duplicateDeclarations.length
      },
      fixed: errors.fixed.length,
      details: errors
    };
    
    const reportPath = path.join(process.cwd(), 'comprehensive-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Comprehensive error fixer report saved to ${reportPath}`);
    
    console.log('✅ Comprehensive error fixer completed successfully');
    
  } catch (error) {
    console.error('❌ Comprehensive error fixer failed:', error.message);
  }
}

function parseESLintOutput(output) {
  const issues = [];
  const lines = output.split('\n');
  
  for (const line of lines) {
    if (line.includes('error') || line.includes('warning')) {
      const match = line.match(/([^:]+):(\d+):(\d+)\s+(error|warning)\s+(.+)/);
      if (match) {
        issues.push({
          file: match[1],
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          type: match[4],
          message: match[5],
          severity: match[4] === 'error' ? 'high' : 'medium'
        });
      }
    }
  }
  
  return issues;
}

function parseTypeScriptOutput(output) {
  const issues = [];
  const lines = output.split('\n');
  
  for (const line of lines) {
    if (line.includes('error TS')) {
      const match = line.match(/([^:]+):(\d+):(\d+)\s+-\s+error\s+(.+)/);
      if (match) {
        issues.push({
          file: match[1],
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4],
          severity: 'high'
        });
      }
    }
  }
  
  return issues;
}

async function autoFixCommonIssues(errors) {
  const fixedIssues = [];
  
  // Fix missing export statements
  for (const issue of errors.typescript) {
    if (issue.message.includes('has no default export')) {
      try {
        const fixed = await fixMissingExport(issue.file);
        if (fixed) {
          fixedIssues.push({
            type: 'missingExport',
            file: issue.file,
            message: 'Added missing export statement'
          });
        }
      } catch (error) {
        console.log(`⚠️  Could not fix missing export in ${issue.file}: ${error.message}`);
      }
    }
  }
  
  // Fix duplicate identifier errors
  for (const issue of errors.typescript) {
    if (issue.message.includes('already defined') || issue.message.includes('Duplicate identifier')) {
      try {
        const fixed = await fixDuplicateIdentifier(issue.file, issue.line);
        if (fixed) {
          fixedIssues.push({
            type: 'duplicateIdentifier',
            file: issue.file,
            message: 'Fixed duplicate identifier'
          });
        }
      } catch (error) {
        console.log(`⚠️  Could not fix duplicate identifier in ${issue.file}: ${error.message}`);
      }
    }
  }
  
  // Fix missing closing tags in JSX
  for (const issue of errors.eslint) {
    if (issue.message.includes('Expected corresponding JSX closing tag')) {
      try {
        const fixed = await fixJSXClosingTag(issue.file, issue.line);
        if (fixed) {
          fixedIssues.push({
            type: 'jsxClosingTag',
            file: issue.file,
            message: 'Fixed missing JSX closing tag'
          });
        }
      } catch (error) {
        console.log(`⚠️  Could not fix JSX closing tag in ${issue.file}: ${error.message}`);
      }
    }
  }
  
  // Fix undefined variables
  for (const issue of errors.eslint) {
    if (issue.message.includes('is not defined')) {
      try {
        const fixed = await fixUndefinedVariable(issue.file, issue.line, issue.message);
        if (fixed) {
          fixedIssues.push({
            type: 'undefinedVariable',
            file: issue.file,
            message: 'Fixed undefined variable'
          });
        }
      } catch (error) {
        console.log(`⚠️  Could not fix undefined variable in ${issue.file}: ${error.message}`);
      }
    }
  }
  
  return fixedIssues;
}

async function fixMissingExport(filePath) {
  try {
    if (!fs.existsSync(filePath)) return false;
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it's a React component
    if (content.includes('function') && content.includes('return') && content.includes('JSX')) {
      // Add export default if missing
      if (!content.includes('export default')) {
        const newContent = content.replace(/^function\s+(\w+)/m, 'export default function $1');
        fs.writeFileSync(filePath, newContent);
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.log(`Error fixing missing export in ${filePath}:`, error.message);
    return false;
  }
}

async function fixDuplicateIdentifier(filePath, lineNumber) {
  try {
    if (!fs.existsSync(filePath)) return false;
    
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Look for duplicate imports around the error line
    const importLines = [];
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('import') && lines[i].includes('from')) {
        importLines.push({ line: i + 1, content: lines[i] });
      }
    }
    
    // Remove duplicate imports
    const seenImports = new Set();
    let hasChanges = false;
    
    for (let i = importLines.length - 1; i >= 0; i--) {
      const importLine = importLines[i];
      if (seenImports.has(importLine.content)) {
        lines.splice(importLine.line - 1, 1);
        hasChanges = true;
      } else {
        seenImports.add(importLine.content);
      }
    }
    
    if (hasChanges) {
      fs.writeFileSync(filePath, lines.join('\n'));
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`Error fixing duplicate identifier in ${filePath}:`, error.message);
    return false;
  }
}

async function fixJSXClosingTag(filePath, lineNumber) {
  try {
    if (!fs.existsSync(filePath)) return false;
    
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Look for unclosed JSX tags around the error line
    const startLine = Math.max(0, lineNumber - 10);
    const endLine = Math.min(lines.length, lineNumber + 10);
    
    for (let i = startLine; i < endLine; i++) {
      const line = lines[i];
      if (line.includes('<div') && !line.includes('/>')) {
        // Check if this div is closed later
        const tagName = line.match(/<(\w+)/)?.[1];
        if (tagName) {
          // Look for closing tag
          let foundClosing = false;
          for (let j = i + 1; j < endLine; j++) {
            if (lines[j].includes(`</${tagName}>`)) {
              foundClosing = true;
              break;
            }
          }
          
          if (!foundClosing) {
            // Add closing tag
            lines.splice(i + 1, 0, `  </${tagName}>`);
            fs.writeFileSync(filePath, lines.join('\n'));
            return true;
          }
        }
      }
    }
    
    return false;
  } catch (error) {
    console.log(`Error fixing JSX closing tag in ${filePath}:`, error.message);
    return false;
  }
}

async function fixUndefinedVariable(filePath, lineNumber, message) {
  try {
    if (!fs.existsSync(filePath)) return false;
    
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Extract variable name from error message
    const varMatch = message.match(/'([^']+)' is not defined/);
    if (!varMatch) return false;
    
    const varName = varMatch[1];
    
    // Check if it's a browser/Node.js global that needs to be added to globals
    const globalVars = [
      'IntersectionObserver', 'SpeechSynthesisUtterance', 'speechSynthesis',
      'navigate', 'reject'
    ];
    
    if (globalVars.includes(varName)) {
      // Add to ESLint globals or fix the code
      if (varName === 'navigate') {
        // This should be imported from react-router-dom
        const importLine = lines.findIndex(line => line.includes('react-router-dom'));
        if (importLine !== -1) {
          if (!lines[importLine].includes('navigate')) {
            lines[importLine] = lines[importLine].replace(
              /from ['"]react-router-dom['"]/,
              'from \'react-router-dom\''
            );
            lines[importLine] = lines[importLine].replace(
              /import\s*{([^}]+)}\s*from/,
              `import { $1, navigate } from`
            );
            fs.writeFileSync(filePath, lines.join('\n'));
            return true;
          }
        }
      }
    }
    
    return false;
  } catch (error) {
    console.log(`Error fixing undefined variable in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
if (require.main === module) {
  runComprehensiveErrorFixer();
  
  // Set up continuous monitoring
  setInterval(runComprehensiveErrorFixer, AUTOMATION_INTERVAL);
  console.log(`🔄 Comprehensive error fixer will run every ${AUTOMATION_INTERVAL / 60000} minutes`);
}

module.exports = { runComprehensiveErrorFixer };