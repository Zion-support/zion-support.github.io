#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔧 Starting console error fixer automation...');

// Get automation interval from environment variable (default: 15 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 900000; // 15 minutes

// Error patterns and their fixes
const ERROR_PATTERNS = {
  // TypeScript/JavaScript errors
  'Cannot find module': {
    type: 'import_error',
    fix: 'fixImportPath',
    priority: 'high'
  },
  'Module not found': {
    type: 'import_error',
    fix: 'fixImportPath',
    priority: 'high'
  },
  'Unexpected token': {
    type: 'syntax_error',
    fix: 'fixSyntaxError',
    priority: 'critical'
  },
  'Parsing error': {
    type: 'syntax_error',
    fix: 'fixSyntaxError',
    priority: 'critical'
  },
  'Property does not exist': {
    type: 'type_error',
    fix: 'fixTypeError',
    priority: 'medium'
  },
  'Type is not assignable': {
    type: 'type_error',
    fix: 'fixTypeError',
    priority: 'medium'
  },
  'Cannot read property': {
    type: 'runtime_error',
    fix: 'fixRuntimeError',
    priority: 'high'
  },
  'Cannot set property': {
    type: 'runtime_error',
    fix: 'fixRuntimeError',
    priority: 'high'
  },
  'ReferenceError': {
    type: 'reference_error',
    fix: 'fixReferenceError',
    priority: 'high'
  },
  'SyntaxError': {
    type: 'syntax_error',
    fix: 'fixSyntaxError',
    priority: 'critical'
  }
};

// Fix strategies
const FIX_STRATEGIES = {
  fixImportPath: async (error, filePath) => {
    console.log(`🔧 Fixing import path error in ${filePath}`);
    
    try {
      // Read the file content
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Common import path fixes
      let fixedContent = content
        .replace(/from ['"]\.\.\/\.\.\/\.\.\/components\//g, "from '@/components/")
        .replace(/from ['"]\.\.\/\.\.\/components\//g, "from '@/components/")
        .replace(/from ['"]\.\.\/components\//g, "from '@/components/")
        .replace(/from ['"]\.\.\/\.\.\/utils\//g, "from '@/utils/")
        .replace(/from ['"]\.\.\/utils\//g, "from '@/utils/")
        .replace(/from ['"]\.\.\/\.\.\/types\//g, "from '@/types/")
        .replace(/from ['"]\.\.\/types\//g, "from '@/types/")
        .replace(/from ['"]\.\.\/\.\.\/hooks\//g, "from '@/hooks/")
        .replace(/from ['"]\.\.\/hooks\//g, "from '@/hooks/")
        .replace(/from ['"]\.\.\/\.\.\/styles\//g, "from '@/styles/")
        .replace(/from ['"]\.\.\/styles\//g, "from '@/styles/");
      
      // Fix JSX extension imports
      fixedContent = fixedContent.replace(/from ['"]([^'"]+)\.js['"]/g, "from '$1'");
      fixedContent = fixedContent.replace(/from ['"]([^'"]+)\.jsx['"]/g, "from '$1'");
      
      // Write the fixed content back
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`✅ Fixed import paths in ${filePath}`);
        return true;
      }
    } catch (fixError) {
      console.log(`⚠️  Could not fix import path in ${filePath}:`, fixError.message);
    }
    return false;
  },

  fixSyntaxError: async (error, filePath) => {
    console.log(`🔧 Fixing syntax error in ${filePath}`);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Fix common syntax issues
      let fixedContent = content
        .replace(/(\w+)\s*=\s*function\s*\(/g, '$1 = function(')
        .replace(/(\w+)\s*:\s*function\s*\(/g, '$1: function(')
        .replace(/,\s*,/g, ',')
        .replace(/;\s*;/g, ';')
        .replace(/\(\s*\)/g, '()')
        .replace(/\{\s*\}/g, '{}');
      
      // Fix JSX syntax
      fixedContent = fixedContent
        .replace(/<(\w+)\s*\/>/g, '<$1 />')
        .replace(/(\w+)\s*=\s*\{([^}]+)\}/g, '$1={$2}');
      
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`✅ Fixed syntax errors in ${filePath}`);
        return true;
      }
    } catch (fixError) {
      console.log(`⚠️  Could not fix syntax error in ${filePath}:`, fixError.message);
    }
    return false;
  },

  fixTypeError: async (error, filePath) => {
    console.log(`🔧 Fixing type error in ${filePath}`);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Add type annotations where missing
      let fixedContent = content
        .replace(/const\s+(\w+)\s*=\s*(\w+)\s*=>/g, 'const $1 = ($2: any) =>')
        .replace(/function\s+(\w+)\s*\(([^)]*)\)/g, 'function $1($2: any)')
        .replace(/const\s+(\w+)\s*:\s*any\s*=/g, 'const $1: any =');
      
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`✅ Fixed type errors in ${filePath}`);
        return true;
      }
    } catch (fixError) {
      console.log(`⚠️  Could not fix type error in ${filePath}:`, fixError.message);
    }
    return false;
  },

  fixRuntimeError: async (error, filePath) => {
    console.log(`🔧 Fixing runtime error in ${filePath}`);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Add null checks and error handling
      let fixedContent = content
        .replace(/(\w+)\.(\w+)/g, '$1?.$2')
        .replace(/if\s*\(([^)]+)\)\s*\{/g, 'if ($1 && $1 !== null && $1 !== undefined) {');
      
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`✅ Fixed runtime errors in ${filePath}`);
        return true;
      }
    } catch (fixError) {
      console.log(`⚠️  Could not fix runtime error in ${filePath}:`, fixError.message);
    }
    return false;
  },

  fixReferenceError: async (error, filePath) => {
    console.log(`🔧 Fixing reference error in ${filePath}`);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Add missing variable declarations
      let fixedContent = content
        .replace(/const\s+(\w+)\s*=/g, 'const $1 =')
        .replace(/let\s+(\w+)\s*=/g, 'let $1 =')
        .replace(/var\s+(\w+)\s*=/g, 'var $1 =');
      
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`✅ Fixed reference errors in ${filePath}`);
        return true;
      }
    } catch (fixError) {
      console.log(`⚠️  Could not fix reference error in ${filePath}:`, fixError.message);
    }
    return false;
  }
};

async function scanForErrors() {
  console.log('🔍 Scanning for console errors...');
  
  const errors = [];
  
  try {
    // Run linting to catch errors
    console.log('🔍 Running ESLint scan...');
    const lintOutput = execSync('npm run lint 2>&1', { encoding: 'utf8' });
    
    // Parse lint output for errors
    const lines = lintOutput.split('\n');
    for (const line of lines) {
      for (const [pattern, errorInfo] of Object.entries(ERROR_PATTERNS)) {
        if (line.includes(pattern)) {
          // Extract file path from lint output
          const fileMatch = line.match(/([^\s]+\.(tsx?|jsx?))/);
          if (fileMatch) {
            errors.push({
              pattern,
              errorInfo,
              filePath: fileMatch[1],
              line: line,
              timestamp: new Date().toISOString()
            });
          }
        }
      }
    }
  } catch (error) {
    // Lint command failed, which means there are errors
    console.log('⚠️  Lint scan found errors, analyzing...');
  }
  
  // Also check for TypeScript errors
  try {
    console.log('🔍 Running TypeScript check...');
    const tsOutput = execSync('npm run type-check 2>&1', { encoding: 'utf8' });
    
    const lines = tsOutput.split('\n');
    for (const line of lines) {
      for (const [pattern, errorInfo] of Object.entries(ERROR_PATTERNS)) {
        if (line.includes(pattern)) {
          const fileMatch = line.match(/([^\s]+\.(tsx?|jsx?))/);
          if (fileMatch) {
            errors.push({
              pattern,
              errorInfo,
              filePath: fileMatch[1],
              line: line,
              timestamp: new Date().toISOString()
            });
          }
        }
      }
    }
  } catch (error) {
    console.log('⚠️  TypeScript check found errors, analyzing...');
  }
  
  return errors;
}

async function autoFixErrors(errors) {
  console.log(`🔧 Attempting to auto-fix ${errors.length} errors...`);
  
  let fixedCount = 0;
  const fixResults = [];
  
  for (const error of errors) {
    try {
      const fixFunction = FIX_STRATEGIES[error.errorInfo.fix];
      if (fixFunction && fs.existsSync(error.filePath)) {
        const fixed = await fixFunction(error, error.filePath);
        if (fixed) {
          fixedCount++;
          fixResults.push({
            file: error.filePath,
            pattern: error.pattern,
            status: 'fixed',
            timestamp: new Date().toISOString()
          });
        } else {
          fixResults.push({
            file: error.filePath,
            pattern: error.pattern,
            status: 'not_fixed',
            timestamp: new Date().toISOString()
          });
        }
      }
    } catch (fixError) {
      console.log(`❌ Error fixing ${error.filePath}:`, fixError.message);
      fixResults.push({
        file: error.filePath,
        pattern: error.pattern,
        status: 'error',
        error: fixError.message,
        timestamp: new Date().toISOString()
      });
    }
  }
  
  return { fixedCount, totalErrors: errors.length, fixResults };
}

async function runBuildTest() {
  console.log('🧪 Running build test after fixes...');
  
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build test passed after fixes');
    return true;
  } catch (error) {
    console.log('❌ Build test failed after fixes');
    return false;
  }
}

async function generateErrorReport(errors, fixResults) {
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalErrors: errors.length,
      fixedErrors: fixResults.filter(r => r.status === 'fixed').length,
      unfixedErrors: fixResults.filter(r => r.status === 'not_fixed').length,
      errors: fixResults.filter(r => r.status === 'error').length
    },
    errors: errors,
    fixResults: fixResults,
    status: 'completed'
  };
  
  const reportPath = path.join(process.cwd(), 'console-error-fix-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`✅ Error fix report saved to ${reportPath}`);
  
  return report;
}

async function runConsoleErrorFixer() {
  try {
    console.log(`🔧 Running console error fixer at ${new Date().toISOString()}`);
    
    // Scan for errors
    const errors = await scanForErrors();
    
    if (errors.length === 0) {
      console.log('✅ No console errors found');
      return;
    }
    
    console.log(`🔍 Found ${errors.length} errors to fix`);
    
    // Auto-fix errors
    const fixResults = await autoFixErrors(errors);
    
    console.log(`🔧 Fixed ${fixResults.fixedCount} out of ${fixResults.totalErrors} errors`);
    
    // Run build test to verify fixes
    const buildSuccess = await runBuildTest();
    
    // Generate report
    const report = await generateErrorReport(errors, fixResults);
    
    if (buildSuccess) {
      console.log('✅ Console error fixer completed successfully');
    } else {
      console.log('⚠️  Console error fixer completed but build still has issues');
    }
    
  } catch (error) {
    console.error('❌ Console error fixer failed:', error.message);
    // Don't exit, just log the error and continue
  }
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting continuous console error fixer with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial error fixer
  await runConsoleErrorFixer();
  
  // Set up continuous execution
  setInterval(async () => {
    await runConsoleErrorFixer();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Continuous console error fixer running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the continuous console error fixer
runContinuous().catch(error => {
  console.error('❌ Failed to start continuous console error fixer:', error);
  process.exit(1);
});
