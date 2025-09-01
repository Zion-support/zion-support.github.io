#!/usr/bin/env node

/**
 * Intelligent Error Fixer
 * AI-powered error detection and automatic fixing
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  CHECK_INTERVAL: 180000, // 3 minutes
  MAX_AUTO_FIXES: 50,
  BACKUP_ENABLED: true,
  LOG_DIR: path.join(__dirname, '..', '..', 'automation', 'logs'),
  BACKUP_DIR: path.join(__dirname, '..', '..', 'automation', 'backups')
};

// Ensure directories exist
[CONFIG.LOG_DIR, CONFIG.BACKUP_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Logging utility
function log(message, level = 'info') {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level.toUpperCase()}] [INTELLIGENT-ERROR-FIXER] ${message}`;
  console.log(logMessage);
  
  const logFile = path.join(CONFIG.LOG_DIR, 'intelligent-error-fixer.log');
  fs.appendFileSync(logFile, logMessage + '\n');
}

// Advanced error patterns and fixes
const INTELLIGENT_FIXES = {
  // Fix JSX/TSX syntax issues
  fixJsxSyntax: (filePath, content) => {
    log(`Applying JSX syntax fixes to ${filePath}`);
    
    let fixed = content;
    let changes = 0;
    
    // Fix describe/it syntax in test files
    if (filePath.includes('.test.') || filePath.includes('.spec.')) {
      const testFixes = [
        // Fix malformed describe/it calls
        { 
          pattern: /describe['"]([^'"]+)['"]:\s*unknown,\s*\(:\s*unknown\s*\{/g, 
          replacement: "describe('$1', () => {" 
        },
        { 
          pattern: /it['"]([^'"]+)['"]:\s*unknown,\s*\(:\s*unknown\s*\{/g, 
          replacement: "it('$1', () => {" 
        },
        // Fix expect statements with missing quotes
        { 
          pattern: /expect\([^)]+\)\.toHaveAttribute\((['"][^'"]+['"])\s*,\s*([^'"][^)]*)\)/g, 
          replacement: "expect($1).toHaveAttribute($1, '$2')" 
        },
        // Fix class name assertions
        { 
          pattern: /expect\([^)]+\)\.toHaveClass\(\s*(['"][^'"]*['"])\s*,\s*(['"][^'"]*['"])\s*,\s*(['"][^'"]*['"])\s*\)/g, 
          replacement: "expect($1).toHaveClass($1, $2, $3)" 
        }
      ];
      
      testFixes.forEach(fix => {
        const newContent = fixed.replace(fix.pattern, fix.replacement);
        if (newContent !== fixed) {
          fixed = newContent;
          changes++;
        }
      });
    }
    
    // Fix import/export issues
    const importFixes = [
      // Fix unterminated imports
      { 
        pattern: /import\s+[^;]*$/gm, 
        replacement: (match) => match.includes(';') ? match : match + ';' 
      },
      // Fix missing quotes in imports
      { 
        pattern: /import\s+([^'"]+)\s+from\s+([^;'"]+);?/g, 
        replacement: "import $1 from '$2';" 
      }
    ];
    
    importFixes.forEach(fix => {
      const newContent = fixed.replace(fix.pattern, fix.replacement);
      if (newContent !== fixed) {
        fixed = newContent;
        changes++;
      }
    });
    
    return { content: fixed, changes };
  },

  // Fix configuration files
  fixConfigFiles: () => {
    log('Fixing configuration files');
    let totalFixes = 0;
    
    // Fix ESLint config
    const eslintPath = path.join(process.cwd(), 'eslint.config.js');
    if (fs.existsSync(eslintPath)) {
      try {
        let content = fs.readFileSync(eslintPath, 'utf8');
        
        // Fix plugin object syntax
        content = content.replace(
          /plugins:\s*\{\s*([^}]+)\s*\}/,
          (match, plugins) => {
            const fixed = plugins
              .split(',')
              .map(line => line.trim())
              .filter(line => line)
              .map(line => {
                if (!line.includes(':')) {
                  return `'${line}': ${line}`;
                }
                return line;
              })
              .join(',\n      ');
            return `plugins: {\n      ${fixed}\n    }`;
          }
        );
        
        // Fix rules object syntax
        content = content.replace(
          /rules:\s*\{([^}]+)\}/,
          (match, rules) => {
            const fixed = rules
              .split(',')
              .map(line => line.trim())
              .filter(line => line)
              .map(line => {
                if (line.includes(':') && !line.match(/^['"][^'"]+['"]\s*:/)) {
                  const [key, ...rest] = line.split(':');
                  return `'${key.trim()}': ${rest.join(':').trim()}`;
                }
                return line;
              })
              .join(',\n      ');
            return `rules: {\n      ${fixed}\n    }`;
          }
        );
        
        fs.writeFileSync(eslintPath, content);
        totalFixes++;
        log('ESLint configuration fixed');
      } catch (error) {
        log(`Failed to fix ESLint config: ${error.message}`, 'error');
      }
    }
    
    // Fix Next.js config
    const nextConfigPath = path.join(process.cwd(), 'next.config.js');
    if (fs.existsSync(nextConfigPath)) {
      try {
        let content = fs.readFileSync(nextConfigPath, 'utf8');
        
        // Remove merge conflict markers
        const beforeLength = content.length;
        content = content.replace(/<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> .+\n/g, '');
        
        if (content.length !== beforeLength) {
          fs.writeFileSync(nextConfigPath, content);
          totalFixes++;
          log('Next.js configuration merge conflicts resolved');
        }
      } catch (error) {
        log(`Failed to fix Next.js config: ${error.message}`, 'error');
      }
    }
    
    return totalFixes;
  },

  // Fix test files
  fixTestFiles: () => {
    log('Fixing test files');
    let totalFixes = 0;
    
    const testDir = path.join(process.cwd(), '__tests__');
    if (!fs.existsSync(testDir)) return totalFixes;
    
    const testFiles = fs.readdirSync(testDir).filter(file => 
      file.match(/\.(test|spec)\.(ts|tsx|js|jsx)$/)
    );
    
    testFiles.forEach(file => {
      const filePath = path.join(testDir, file);
      
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const { content: fixedContent, changes } = INTELLIGENT_FIXES.fixJsxSyntax(filePath, content);
        
        if (changes > 0) {
          // Create backup if enabled
          if (CONFIG.BACKUP_ENABLED) {
            const backupPath = path.join(CONFIG.BACKUP_DIR, `${file}.backup`);
            fs.writeFileSync(backupPath, content);
          }
          
          fs.writeFileSync(filePath, fixedContent);
          totalFixes += changes;
          log(`Fixed ${changes} issues in ${file}`);
        }
      } catch (error) {
        log(`Failed to fix test file ${file}: ${error.message}`, 'error');
      }
    });
    
    return totalFixes;
  },

  // Fix TypeScript errors
  fixTypeScriptErrors: () => {
    log('Fixing TypeScript errors');
    let totalFixes = 0;
    
    try {
      // Get TypeScript errors
      const result = execSync('npx tsc --noEmit --listFiles false 2>&1', { 
        cwd: process.cwd(),
        encoding: 'utf8'
      });
      
      // Parse error output and apply fixes
      const errors = result.split('\n').filter(line => line.includes('error TS'));
      
      errors.forEach(error => {
        const match = error.match(/^(.+?)\((\d+),(\d+)\): error TS(\d+): (.+)$/);
        if (match) {
          const [, filePath, line, col, errorCode, message] = match;
          
          // Apply specific fixes based on error codes
          if (errorCode === '1434' || errorCode === '1005') {
            // Syntax errors - already handled by other fixes
            totalFixes += INTELLIGENT_FIXES.fixSyntaxErrorInFile(filePath);
          }
        }
      });
      
    } catch (error) {
      // TypeScript errors are expected here
      log('TypeScript error analysis completed');
    }
    
    return totalFixes;
  },

  // Fix syntax error in specific file
  fixSyntaxErrorInFile: (filePath) => {
    if (!fs.existsSync(filePath)) return 0;
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const { content: fixedContent, changes } = INTELLIGENT_FIXES.fixJsxSyntax(filePath, content);
      
      if (changes > 0) {
        if (CONFIG.BACKUP_ENABLED) {
          const backupPath = path.join(CONFIG.BACKUP_DIR, 
            `${path.basename(filePath)}.${Date.now()}.backup`);
          fs.writeFileSync(backupPath, content);
        }
        
        fs.writeFileSync(filePath, fixedContent);
        log(`Fixed ${changes} syntax errors in ${filePath}`);
      }
      
      return changes;
    } catch (error) {
      log(`Failed to fix syntax errors in ${filePath}: ${error.message}`, 'error');
      return 0;
    }
  },

  // Fix ESLint errors
  fixEslintErrors: () => {
    log('Fixing ESLint errors');
    let totalFixes = 0;
    
    try {
      // Run ESLint with auto-fix
      execSync('npm run lint -- --fix', { 
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      totalFixes++;
      log('ESLint auto-fixes applied');
    } catch (error) {
      log('ESLint auto-fix completed with remaining issues', 'warn');
    }
    
    return totalFixes;
  },

  // Clean up backup files
  cleanupBackupFiles: () => {
    const backupDir = path.join(process.cwd(), 'backup-pages');
    if (!fs.existsSync(backupDir)) return 0;
    
    try {
      const files = fs.readdirSync(backupDir);
      files.forEach(file => {
        const filePath = path.join(backupDir, file);
        if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
          // Check if file has syntax errors and remove if corrupted
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('";"') || content.includes('import { toast }')) {
              log(`Removing corrupted backup file: ${file}`);
              fs.unlinkSync(filePath);
            }
          } catch (error) {
            log(`Error processing backup file ${file}: ${error.message}`, 'warn');
          }
        }
      });
      return 1;
    } catch (error) {
      log(`Failed to cleanup backup files: ${error.message}`, 'error');
      return 0;
    }
  }
};

// Main intelligent error fixing function
async function runIntelligentErrorFixer() {
  log('Starting intelligent error fixing cycle');
  
  try {
    let totalFixes = 0;
    
    // 1. Fix configuration files
    totalFixes += INTELLIGENT_FIXES.fixConfigFiles();
    
    // 2. Fix test files
    totalFixes += INTELLIGENT_FIXES.fixTestFiles();
    
    // 3. Fix ESLint errors
    totalFixes += INTELLIGENT_FIXES.fixEslintErrors();
    
    // 4. Fix TypeScript errors
    totalFixes += INTELLIGENT_FIXES.fixTypeScriptErrors();
    
    // 5. Clean up problematic backup files
    totalFixes += INTELLIGENT_FIXES.cleanupBackupFiles();
    
    // 6. Run final validation
    try {
      execSync('npm run type-check', { stdio: 'pipe', cwd: process.cwd() });
      log('TypeScript validation passed after fixes');
    } catch (tsError) {
      log('TypeScript still has issues after fixes - manual review needed', 'warn');
    }
    
    // 7. Generate fix report
    const report = {
      timestamp: new Date().toISOString(),
      totalFixes,
      status: totalFixes > 0 ? 'fixes_applied' : 'no_issues',
      nextRun: new Date(Date.now() + CONFIG.CHECK_INTERVAL).toISOString()
    };
    
    const reportPath = path.join(CONFIG.LOG_DIR, 'intelligent-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    log(`Intelligent error fixing completed. Applied ${totalFixes} fixes.`);
    
    return totalFixes;
    
  } catch (error) {
    log(`Intelligent error fixing failed: ${error.message}`, 'error');
    return 0;
  }
}

// Main execution
async function main() {
  log('Intelligent Error Fixer started');
  
  // Run initial fix
  await runIntelligentErrorFixer();
  
  // Set up interval for continuous monitoring
  setInterval(async () => {
    await runIntelligentErrorFixer();
  }, CONFIG.CHECK_INTERVAL);
  
  // Keep the process alive
  process.on('SIGINT', () => {
    log('Intelligent Error Fixer stopping...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    log('Intelligent Error Fixer stopping...');
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

module.exports = { runIntelligentErrorFixer, INTELLIGENT_FIXES, log };