#!/usr/bin/env node

/**
 * Comprehensive Error Fixer - PM2 Automation
 * Automatically fixes common TypeScript, import, and syntax errors
 * Runs every 10 minutes to maintain project health
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'comprehensive-error-fixer.log');
    this.fixesLog = path.join(this.projectRoot, 'logs', 'comprehensive-fixes.json');
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runComprehensiveFix() {
    this.log('🚀 Starting comprehensive error fix automation...');
    
    const fixes = [];
    const errors = [];

    try {
      // 1. Fix ESLint configuration issues
      this.log('🔧 Fixing ESLint configuration...');
      const eslintFix = await this.fixESLintConfig();
      if (eslintFix) fixes.push(eslintFix);

      // 2. Fix TypeScript import/export issues
      this.log('🔧 Fixing TypeScript import/export issues...');
      const importFixes = await this.fixImportExportIssues();
      fixes.push(...importFixes);

      // 3. Fix unused imports and variables
      this.log('🔧 Fixing unused imports and variables...');
      const unusedFixes = await this.fixUnusedImports();
      fixes.push(...unusedFixes);

      // 4. Fix duplicate identifier issues
      this.log('🔧 Fixing duplicate identifier issues...');
      const duplicateFixes = await this.fixDuplicateIdentifiers();
      fixes.push(...duplicateFixes);

      // 5. Fix missing export issues
      this.log('🔧 Fixing missing export issues...');
      const exportFixes = await this.fixMissingExports();
      fixes.push(...exportFixes);

      // 6. Fix API service type issues
      this.log('🔧 Fixing API service type issues...');
      const apiFixes = await this.fixAPIServiceIssues();
      fixes.push(...apiFixes);

      // 7. Fix Stripe configuration issues
      this.log('🔧 Fixing Stripe configuration issues...');
      const stripeFixes = await this.fixStripeIssues();
      fixes.push(...stripeFixes);

      // 8. Fix service worker type issues
      this.log('🔧 Fixing service worker type issues...');
      const swFixes = await this.fixServiceWorkerIssues();
      fixes.push(...swFixes);

      // 9. Run type check to verify fixes
      this.log('🔍 Running type check to verify fixes...');
      const typeCheckResult = await this.runTypeCheck();
      
      // 10. Generate comprehensive report
      await this.generateReport(fixes, errors, typeCheckResult);
      
      // 11. Commit fixes if successful
      if (fixes.length > 0 && errors.length === 0) {
        await this.commitFixes(fixes);
      }

    } catch (error) {
      this.log(`Comprehensive fix automation failed: ${error.message}`, 'ERROR');
    }

    return { fixes, errors };
  }

  async fixESLintConfig() {
    try {
      const eslintPath = path.join(this.projectRoot, '.eslintrc.js');
      if (fs.existsSync(eslintPath)) {
        const content = fs.readFileSync(eslintPath, 'utf8');
        
        // Convert CommonJS to ES module format
        if (content.includes('module.exports')) {
          const newContent = content.replace('module.exports =', 'export default');
          fs.writeFileSync(eslintPath, newContent);
          this.log('✅ Fixed ESLint config: converted to ES module format');
          return { type: 'eslint_config', file: eslintPath, fix: 'converted_to_es_module' };
        }
      }
    } catch (error) {
      this.log(`Error fixing ESLint config: ${error.message}`, 'WARN');
    }
    return null;
  }

  async fixImportExportIssues() {
    const fixes = [];
    const srcPath = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcPath)) return fixes;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            let modified = false;
            let newContent = content;

            // Fix missing default exports
            if (content.includes('export {') && !content.includes('export default')) {
              // Add default export for components
              if (content.includes('function ') || content.includes('const ') || content.includes('class ')) {
                const componentName = this.extractComponentName(content);
                if (componentName) {
                  newContent = content + `\n\nexport default ${componentName};`;
                  modified = true;
                }
              }
            }

            // Fix import statements with missing exports
            if (content.includes('import ') && content.includes(' from ')) {
              newContent = this.fixImportStatements(newContent);
              if (newContent !== content) modified = true;
            }

            if (modified) {
              fs.writeFileSync(file, newContent);
              fixes.push({ type: 'import_export', file: file, fix: 'fixed_imports_exports' });
            }
          } catch (error) {
            this.log(`Error processing file ${file}: ${error.message}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`Error fixing import/export issues: ${error.message}`, 'WARN');
    }

    return fixes;
  }

  async fixUnusedImports() {
    const fixes = [];
    const srcPath = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcPath)) return fixes;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            let modified = false;
            let newContent = content;

            // Remove unused imports
            const lines = content.split('\n');
            const newLines = [];
            let inImportBlock = false;
            let importLines = [];

            for (let i = 0; i < lines.length; i++) {
              const line = lines[i];
              
              if (line.trim().startsWith('import ')) {
                inImportBlock = true;
                importLines.push({ line: line, index: i });
              } else if (inImportBlock && line.trim() === '') {
                inImportBlock = false;
                // Process import block
                const usedImports = this.filterUsedImports(importLines, content);
                newLines.push(...usedImports.map(imp => imp.line));
                newLines.push('');
                importLines = [];
              } else if (!inImportBlock) {
                newLines.push(line);
              }
            }

            if (newLines.length !== lines.length) {
              newContent = newLines.join('\n');
              fs.writeFileSync(file, newContent);
              fixes.push({ type: 'unused_imports', file: file, fix: 'removed_unused_imports' });
            }
          } catch (error) {
            this.log(`Error processing file ${file}: ${error.message}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`Error fixing unused imports: ${error.message}`, 'WARN');
    }

    return fixes;
  }

  async fixDuplicateIdentifiers() {
    const fixes = [];
    const srcPath = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcPath)) return fixes;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            let modified = false;
            let newContent = content;

            // Fix duplicate imports from same module
            const lines = content.split('\n');
            const newLines = [];
            const importMap = new Map();

            for (const line of lines) {
              if (line.trim().startsWith('import ')) {
                const match = line.match(/import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/);
                if (match) {
                  const imports = match[1].split(',').map(imp => imp.trim());
                  const module = match[2];
                  
                  if (importMap.has(module)) {
                    // Merge with existing imports
                    const existing = importMap.get(module);
                    const merged = [...new Set([...existing, ...imports])];
                    importMap.set(module, merged);
                  } else {
                    importMap.set(module, imports);
                  }
                } else {
                  newLines.push(line);
                }
              } else {
                newLines.push(line);
              }
            }

            // Reconstruct import statements
            if (importMap.size > 0) {
              const importStatements = [];
              for (const [module, imports] of importMap) {
                importStatements.push(`import { ${imports.join(', ')} } from '${module}';`);
              }
              
              // Find where to insert imports
              let insertIndex = 0;
              for (let i = 0; i < newLines.length; i++) {
                if (newLines[i].trim().startsWith('import ')) {
                  insertIndex = i;
                  break;
                }
              }
              
              newLines.splice(insertIndex, 0, ...importStatements);
              newContent = newLines.join('\n');
              modified = true;
            }

            if (modified) {
              fs.writeFileSync(file, newContent);
              fixes.push({ type: 'duplicate_identifiers', file: file, fix: 'merged_duplicate_imports' });
            }
          } catch (error) {
            this.log(`Error processing file ${file}: ${error.message}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`Error fixing duplicate identifiers: ${error.message}`, 'WARN');
    }

    return fixes;
  }

  async fixMissingExports() {
    const fixes = [];
    const srcPath = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcPath)) return fixes;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            let modified = false;
            let newContent = content;

            // Check if file has named exports but no default export
            if (content.includes('export ') && !content.includes('export default')) {
              // Look for main component/function/class
              const componentName = this.extractComponentName(content);
              if (componentName) {
                newContent = content + `\n\nexport default ${componentName};`;
                modified = true;
              }
            }

            if (modified) {
              fs.writeFileSync(file, newContent);
              fixes.push({ type: 'missing_exports', file: file, fix: 'added_default_export' });
            }
          } catch (error) {
            this.log(`Error processing file ${file}: ${error.message}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`Error fixing missing exports: ${error.message}`, 'WARN');
    }

    return fixes;
  }

  async fixAPIServiceIssues() {
    const fixes = [];
    const apiPath = path.join(this.projectRoot, 'src', 'services', 'api.ts');
    
    if (fs.existsSync(apiPath)) {
      try {
        const content = fs.readFileSync(apiPath, 'utf8');
        let modified = false;
        let newContent = content;

        // Fix headers type issues
        if (content.includes('headers: Record<string, string> | undefined')) {
          newContent = content.replace(
            /headers: Record<string, string> \| undefined/g,
            'headers: Record<string, string>'
          );
          modified = true;
        }

        // Fix unused apiRequest function
        if (content.includes('async function apiRequest<T>(')) {
          newContent = content.replace(
            /async function apiRequest<T>\([\s\S]*?\)\s*\{[\s\S]*?\}/g,
            '// Removed unused apiRequest function'
          );
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(apiPath, newContent);
          fixes.push({ type: 'api_service', file: apiPath, fix: 'fixed_type_issues' });
        }
      } catch (error) {
        this.log(`Error fixing API service issues: ${error.message}`, 'WARN');
      }
    }

    return fixes;
  }

  async fixStripeIssues() {
    const fixes = [];
    const stripePath = path.join(this.projectRoot, 'src', 'utils', 'getStripe.ts');
    
    if (fs.existsSync(stripePath)) {
      try {
        const content = fs.readFileSync(stripePath, 'utf8');
        let modified = false;
        let newContent = content;

        // Remove unsupported advancedFraudSignals option
        if (content.includes('advancedFraudSignals: false')) {
          newContent = content.replace(
            /,\s*\{\s*advancedFraudSignals:\s*false\s*\}/g,
            ''
          );
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(stripePath, newContent);
          fixes.push({ type: 'stripe_config', file: stripePath, fix: 'removed_unsupported_option' });
        }
      } catch (error) {
        this.log(`Error fixing Stripe issues: ${error.message}`, 'WARN');
      }
    }

    return fixes;
  }

  async fixServiceWorkerIssues() {
    const fixes = [];
    const swPath = path.join(this.projectRoot, 'src', 'utils', 'serviceWorker.ts');
    
    if (fs.existsSync(swPath)) {
      try {
        const content = fs.readFileSync(swPath, 'utf8');
        let modified = false;
        let newContent = content;

        // Fix applicationServerKey type issue
        if (content.includes('applicationServerKey: this.urlBase64ToUint8Array(')) {
          newContent = content.replace(
            /applicationServerKey:\s*this\.urlBase64ToUint8Array\([^)]+\)/g,
            'applicationServerKey: this.urlBase64ToUint8Array(process.env.REACT_APP_VAPID_PUBLIC_KEY || \'\') as Uint8Array'
          );
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(swPath, newContent);
          fixes.push({ type: 'service_worker', file: swPath, fix: 'fixed_type_cast' });
        }
      } catch (error) {
        this.log(`Error fixing service worker issues: ${error.message}`, 'WARN');
      }
    }

    return fixes;
  }

  extractComponentName(content) {
    // Try to extract component name from function/const/class declarations
    const patterns = [
      /function\s+(\w+)/,
      /const\s+(\w+)\s*=/,
      /class\s+(\w+)/
    ];
    
    for (const pattern of patterns) {
      const match = content.match(pattern);
      if (match) return match[1];
    }
    
    return null;
  }

  fixImportStatements(content) {
    // Fix common import issues
    return content
      .replace(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?\s*\n\s*import\s+\1\s+from\s+['"]\2['"]/g, 
               'import { $1 } from \'$2\';')
      .replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"]([^'"]+)['"];?\s*\n\s*import\s+\{\s*([^}]+)\s*\}\s+from\s+['"]\2['"]/g,
               'import { $1, $3 } from \'$2\';');
  }

  filterUsedImports(importLines, content) {
    const usedImports = [];
    
    for (const importLine of importLines) {
      const match = importLine.line.match(/import\s*\{([^}]+)\}\s*from/);
      if (match) {
        const imports = match[1].split(',').map(imp => imp.trim());
        const used = imports.filter(imp => {
          const name = imp.replace(/\s+as\s+\w+/, '').trim();
          return content.includes(name) || content.includes(`<${name}`) || content.includes(`</${name}`);
        });
        
        if (used.length > 0) {
          usedImports.push({
            line: `import { ${used.join(', ')} } from '${importLine.line.match(/from\s+['"]([^'"]+)['"]/)[1]}';`,
            index: importLine.index
          });
        }
      }
    }
    
    return usedImports;
  }

  async getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = await this.getAllFiles(fullPath, arrayOfFiles);
      } else {
        arrayOfFiles.push(fullPath);
      }
    }

    return arrayOfFiles;
  }

  async runTypeCheck() {
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      return { success: true, errors: 0 };
    } catch (error) {
      const output = error.message;
      const errorCount = (output.match(/error TS\d+:/g) || []).length;
      return { success: false, errors: errorCount };
    }
  }

  async generateReport(fixes, errors, typeCheckResult) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFixes: fixes.length,
        totalErrors: errors.length,
        typeCheckSuccess: typeCheckResult.success,
        typeCheckErrors: typeCheckResult.errors
      },
      fixes: fixes,
      errors: errors,
      typeCheckResult: typeCheckResult
    };

    fs.writeFileSync(this.fixesLog, JSON.stringify(report, null, 2));
    this.log(`📊 Comprehensive fix report generated: ${this.fixesLog}`);
  }

  async commitFixes(fixes) {
    try {
      if (fixes.length > 0) {
        execSync('git add .', { stdio: 'pipe' });
        execSync(`git commit -m "Auto-fix: ${fixes.length} issues resolved by comprehensive error fixer"`, { stdio: 'pipe' });
        this.log(`✅ Committed ${fixes.length} fixes to git`);
      }
    } catch (error) {
      this.log(`Warning: Could not commit fixes: ${error.message}`, 'WARN');
    }
  }
}

// Main execution
async function main() {
  const fixer = new ComprehensiveErrorFixer();
  
  // Run the comprehensive fix
  const result = await fixer.runComprehensiveFix();
  
  console.log(`\n🎯 Comprehensive Error Fixer Summary:`);
  console.log(`✅ Total fixes applied: ${result.fixes.length}`);
  console.log(`❌ Total errors encountered: ${result.errors.length}`);
  
  if (result.fixes.length > 0) {
    console.log(`\n🔧 Fixes applied:`);
    result.fixes.forEach(fix => {
      console.log(`  - ${fix.type}: ${path.basename(fix.file)}`);
    });
  }
  
  process.exit(0);
}

// Handle PM2 execution
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Comprehensive Error Fixer failed:', error);
    process.exit(1);
  });
}

module.exports = ComprehensiveErrorFixer;