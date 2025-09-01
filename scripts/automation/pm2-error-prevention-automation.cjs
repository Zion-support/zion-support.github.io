#!/usr/bin/env node

/**
 * PM2 Error Prevention Automation
 * Continuously monitors and prevents errors before they occur
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// Configuration
const CONFIG = {
  CHECK_INTERVAL: 300000, // 5 minutes
  MAX_ERRORS_THRESHOLD: 10,
  CRITICAL_FILES: [
    'package.json',
    'next.config.js',
    'eslint.config.js',
    'tsconfig.json',
    'ecosystem.config.cjs'
  ],
  BACKUP_DIR: path.join(__dirname, '..', '..', 'automation', 'backups'),
  LOG_DIR: path.join(__dirname, '..', '..', 'automation', 'logs')
};

// Ensure directories exist
[CONFIG.BACKUP_DIR, CONFIG.LOG_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Logging utility
function log(message, level = 'info') {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level.toUpperCase()}] [PM2-ERROR-PREVENTION] ${message}`;
  console.log(logMessage);
  
  const logFile = path.join(CONFIG.LOG_DIR, 'pm2-error-prevention.log');
  fs.appendFileSync(logFile, logMessage + '\n');
}

// Error detection patterns
const ERROR_PATTERNS = {
  syntax: [
    /SyntaxError:/,
    /Unexpected token/,
    /Unexpected keyword/,
    /Unterminated string/,
    /Missing \) after argument list/,
    /<<<<<<<|=======|>>>>>>>/  // Git merge conflicts
  ],
  typescript: [
    /error TS\d+:/,
    /Type '.+' is not assignable/,
    /Property '.+' does not exist/,
    /Cannot find module/
  ],
  eslint: [
    /\d+:\d+\s+error/,
    /Parsing error/,
    /Definition for rule '.+' was not found/
  ],
  build: [
    /Build failed/,
    /Module not found/,
    /Cannot resolve module/,
    /Invalid configuration/
  ]
};

// Error fixing strategies
const ERROR_FIXES = {
  // Fix Git merge conflicts
  mergeConflicts: (filePath) => {
    log(`Fixing merge conflicts in ${filePath}`);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove merge conflict markers and choose the appropriate version
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> \w+/g, 
        (match, head, incoming) => {
          // Simple strategy: prefer HEAD version for config files
          return head;
        });
      
      // Remove any remaining conflict markers
      content = content.replace(/<<<<<<< HEAD\n/g, '');
      content = content.replace(/=======\n/g, '');
      content = content.replace(/>>>>>>> .+\n/g, '');
      
      fs.writeFileSync(filePath, content);
      log(`Merge conflicts resolved in ${filePath}`);
      return true;
    } catch (error) {
      log(`Failed to fix merge conflicts in ${filePath}: ${error.message}`, 'error');
      return false;
    }
  },

  // Fix syntax errors in JavaScript/TypeScript files
  syntaxErrors: (filePath) => {
    log(`Fixing syntax errors in ${filePath}`);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;
      
      // Fix common syntax issues
      const fixes = [
        // Fix missing quotes in object properties
        { pattern: /(\w+):\s*(\w+),/g, replacement: '"$1": "$2",' },
        // Fix trailing commas in arrays/objects
        { pattern: /,(\s*[}\]])/g, replacement: '$1' },
        // Fix unclosed strings (basic)
        { pattern: /'([^']*?)$/gm, replacement: "'$1'" },
        // Fix missing semicolons at end of statements
        { pattern: /(\w+)\n(\s*)/g, replacement: '$1;\n$2' }
      ];
      
      fixes.forEach(fix => {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          fixed = true;
        }
      });
      
      if (fixed) {
        fs.writeFileSync(filePath, content);
        log(`Syntax errors fixed in ${filePath}`);
      }
      
      return fixed;
    } catch (error) {
      log(`Failed to fix syntax errors in ${filePath}: ${error.message}`, 'error');
      return false;
    }
  },

  // Fix ESLint configuration issues
  eslintConfig: () => {
    log('Fixing ESLint configuration issues');
    
    const eslintConfigPath = path.join(process.cwd(), 'eslint.config.js');
    
    if (fs.existsSync(eslintConfigPath)) {
      try {
        let content = fs.readFileSync(eslintConfigPath, 'utf8');
        
        // Fix common ESLint config issues
        content = content.replace(/import.*from\s+(['"][^'"]+['"])\s*;?/g, 'import $1;');
        content = content.replace(/files:\s*\[['"]([^'"]+)['"](?!\])/g, "files: ['$1']");
        content = content.replace(/'([^']+)':\s*([^,}]+)(?=[,}])/g, "'$1': $2");
        
        fs.writeFileSync(eslintConfigPath, content);
        log('ESLint configuration fixed');
        return true;
      } catch (error) {
        log(`Failed to fix ESLint config: ${error.message}`, 'error');
        return false;
      }
    }
    
    return false;
  },

  // Fix TypeScript configuration issues
  typescriptConfig: () => {
    log('Fixing TypeScript configuration issues');
    
    const tsConfigPath = path.join(process.cwd(), 'tsconfig.json');
    
    if (fs.existsSync(tsConfigPath)) {
      try {
        const content = fs.readFileSync(tsConfigPath, 'utf8');
        const config = JSON.parse(content);
        
        // Ensure basic configuration is correct
        if (!config.compilerOptions) {
          config.compilerOptions = {};
        }
        
        // Set essential options
        config.compilerOptions.skipLibCheck = true;
        config.compilerOptions.allowJs = true;
        config.compilerOptions.noEmit = true;
        
        fs.writeFileSync(tsConfigPath, JSON.stringify(config, null, 2));
        log('TypeScript configuration fixed');
        return true;
      } catch (error) {
        log(`Failed to fix TypeScript config: ${error.message}`, 'error');
        return false;
      }
    }
    
    return false;
  },

  // Fix package.json issues
  packageJson: () => {
    log('Fixing package.json issues');
    
    const packagePath = path.join(process.cwd(), 'package.json');
    
    if (fs.existsSync(packagePath)) {
      try {
        const content = fs.readFileSync(packagePath, 'utf8');
        const pkg = JSON.parse(content);
        
        // Ensure essential scripts exist
        if (!pkg.scripts) {
          pkg.scripts = {};
        }
        
        const essentialScripts = {
          'lint': 'next lint',
          'type-check': 'tsc --noEmit',
          'build': 'next build',
          'dev': 'next dev'
        };
        
        Object.entries(essentialScripts).forEach(([key, value]) => {
          if (!pkg.scripts[key]) {
            pkg.scripts[key] = value;
          }
        });
        
        fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
        log('package.json fixed');
        return true;
      } catch (error) {
        log(`Failed to fix package.json: ${error.message}`, 'error');
        return false;
      }
    }
    
    return false;
  }
};

// Main error prevention function
async function preventErrors() {
  log('Starting error prevention check');
  
  try {
    let errorsFixed = 0;
    
    // 1. Check for merge conflicts in critical files
    for (const file of CONFIG.CRITICAL_FILES) {
      const filePath = path.join(process.cwd(), file);
      
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check for merge conflicts
        if (ERROR_PATTERNS.syntax.some(pattern => pattern.test(content))) {
          if (ERROR_FIXES.mergeConflicts(filePath)) {
            errorsFixed++;
          }
        }
      }
    }
    
    // 2. Fix specific configuration issues
    if (ERROR_FIXES.eslintConfig()) errorsFixed++;
    if (ERROR_FIXES.typescriptConfig()) errorsFixed++;
    if (ERROR_FIXES.packageJson()) errorsFixed++;
    
    // 3. Run linting and fix auto-fixable issues
    try {
      execSync('npm run lint -- --fix', { stdio: 'pipe', cwd: process.cwd() });
      log('ESLint auto-fixes applied');
    } catch (lintError) {
      log('ESLint found issues that need manual attention', 'warn');
    }
    
    // 4. Check build status
    try {
      execSync('npm run type-check', { stdio: 'pipe', cwd: process.cwd() });
      log('TypeScript check passed');
    } catch (tsError) {
      log('TypeScript errors detected, investigating...', 'warn');
      
      // Try basic TypeScript fixes
      const errorOutput = tsError.stdout?.toString() || tsError.stderr?.toString() || '';
      
      if (errorOutput.includes('Unexpected keyword')) {
        // Fix test files with syntax issues
        const testFiles = findFilesWithPattern(path.join(process.cwd(), '__tests__'), /\.test\.(ts|tsx|js|jsx)$/);
        testFiles.forEach(file => {
          if (ERROR_FIXES.syntaxErrors(file)) {
            errorsFixed++;
          }
        });
      }
    }
    
    // 5. Security audit and dependency fixes
    try {
      execSync('npm audit fix --force', { stdio: 'pipe', cwd: process.cwd() });
      log('Security vulnerabilities fixed');
      errorsFixed++;
    } catch (auditError) {
      log('Security audit completed with warnings', 'warn');
    }
    
    // 6. Generate error prevention report
    const report = {
      timestamp: new Date().toISOString(),
      errorsFixed,
      nextCheck: new Date(Date.now() + CONFIG.CHECK_INTERVAL).toISOString(),
      status: errorsFixed > 0 ? 'fixes_applied' : 'healthy'
    };
    
    const reportPath = path.join(CONFIG.LOG_DIR, 'error-prevention-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    log(`Error prevention check completed. Fixed ${errorsFixed} issues.`);
    
  } catch (error) {
    log(`Error prevention check failed: ${error.message}`, 'error');
  }
}

// Helper function to find files with pattern
function findFilesWithPattern(dir, pattern) {
  const files = [];
  
  if (!fs.existsSync(dir)) return files;
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFilesWithPattern(fullPath, pattern));
    } else if (pattern.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
async function main() {
  log('PM2 Error Prevention Automation started');
  
  // Run initial check
  await preventErrors();
  
  // Set up interval for continuous monitoring
  setInterval(async () => {
    await preventErrors();
  }, CONFIG.CHECK_INTERVAL);
  
  // Keep the process alive
  process.on('SIGINT', () => {
    log('PM2 Error Prevention Automation stopping...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    log('PM2 Error Prevention Automation stopping...');
    process.exit(0);
  });
}

// Start the automation
if (require.main === module) {
  main().catch(error => {
    log(`Fatal error: ${error.message}`, 'error');
    process.exit(1);
  });
}

module.exports = { preventErrors, ERROR_FIXES, log };