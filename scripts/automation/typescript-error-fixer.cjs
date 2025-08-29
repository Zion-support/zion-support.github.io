#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting TypeScript error fixer automation...');

// Get automation interval from environment variable (default: 30 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes

async function runTypeScriptErrorFixer() {
  try {
    console.log(`🔧 Running TypeScript error fixer at ${new Date().toISOString()}`);
    
    let fixesApplied = 0;
    const errors = [];
    
    // 1. Fix case sensitivity issues
    console.log('🔍 Fixing case sensitivity issues...');
    const caseSensitivityFixes = fixCaseSensitivityIssues();
    fixesApplied += caseSensitivityFixes.length;
    
    // 2. Fix unused imports
    console.log('🔍 Fixing unused imports...');
    const unusedImportFixes = fixUnusedImports();
    fixesApplied += unusedImportFixes.length;
    
    // 3. Fix missing exports
    console.log('🔍 Fixing missing exports...');
    const missingExportFixes = fixMissingExports();
    fixesApplied += missingExportFixes.length;
    
    // 4. Fix type mismatches
    console.log('🔍 Fixing type mismatches...');
    const typeMismatchFixes = fixTypeMismatches();
    fixesApplied += typeMismatchFixes.length;
    
    // 5. Fix duplicate identifiers
    console.log('🔍 Fixing duplicate identifiers...');
    const duplicateIdentifierFixes = fixDuplicateIdentifiers();
    fixesApplied += duplicateIdentifierFixes.length;
    
    // 6. Run type check to verify fixes
    console.log('🔍 Running type check to verify fixes...');
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      console.log('✅ Type check passed - all errors fixed!');
    } catch (error) {
      console.log('⚠️  Type check still has errors, generating detailed report...');
      const remainingErrors = parseTypeScriptErrors(error.message);
      errors.push(...remainingErrors);
    }
    
    // Generate comprehensive report
    const report = {
      timestamp: new Date().toISOString(),
      fixesApplied,
      caseSensitivityFixes: caseSensitivityFixes.length,
      unusedImportFixes: unusedImportFixes.length,
      missingExportFixes: missingExportFixes.length,
      typeMismatchFixes: typeMismatchFixes.length,
      duplicateIdentifierFixes: duplicateIdentifierFixes.length,
      remainingErrors: errors.length,
      summary: `TypeScript error fixer completed with ${fixesApplied} fixes applied`,
      status: errors.length === 0 ? 'completed' : 'partial',
      details: {
        caseSensitivityFixes,
        unusedImportFixes,
        missingExportFixes,
        typeMismatchFixes,
        duplicateIdentifierFixes,
        remainingErrors: errors
      }
    };
    
    const reportPath = path.join(process.cwd(), 'typescript-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ TypeScript error fixer report saved to ${reportPath}`);
    
    console.log(`✅ TypeScript error fixer completed successfully with ${fixesApplied} fixes applied`);
    
  } catch (error) {
    console.error('❌ TypeScript error fixer failed:', error.message);
  }
}

function fixCaseSensitivityIssues() {
  const fixes = [];
  
  try {
    // Find files with case sensitivity issues
    const srcPath = path.join(process.cwd(), 'src');
    const allFiles = getAllFiles(srcPath, ['.tsx', '.ts', '.jsx', '.js']);
    
    for (const file of allFiles) {
      const fileName = path.basename(file);
      const dirName = path.dirname(file);
      
      // Check for duplicate files with different casing
      const filesInDir = fs.readdirSync(dirName);
      const lowerCaseFiles = filesInDir.filter(f => 
        f.toLowerCase() === fileName.toLowerCase() && f !== fileName
      );
      
      if (lowerCaseFiles.length > 0) {
        // Keep the capitalized version, remove lowercase
        for (const duplicate of lowerCaseFiles) {
          const duplicatePath = path.join(dirName, duplicate);
          try {
            fs.unlinkSync(duplicatePath);
            fixes.push({
              type: 'case_sensitivity',
              file: duplicatePath,
              action: 'removed_duplicate',
              reason: 'Case sensitivity conflict'
            });
            console.log(`✅ Removed duplicate file: ${duplicatePath}`);
          } catch (err) {
            console.log(`⚠️  Could not remove duplicate file: ${duplicatePath}`);
          }
        }
      }
    }
  } catch (error) {
    console.log(`⚠️  Error fixing case sensitivity issues: ${error.message}`);
  }
  
  return fixes;
}

function fixUnusedImports() {
  const fixes = [];
  
  try {
    const srcPath = path.join(process.cwd(), 'src');
    const allFiles = getAllFiles(srcPath, ['.tsx', '.ts', '.jsx', '.js']);
    
    for (const file of allFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        let modified = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          // Check for unused imports
          if (line.includes('import') && line.includes('{') && line.includes('}')) {
            const importMatch = line.match(/import\s*{([^}]+)}\s*from/);
            if (importMatch) {
              const imports = importMatch[1].split(',').map(imp => imp.trim());
              const unusedImports = [];
              
              for (const imp of imports) {
                const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
                if (!content.includes(cleanImp) || content.indexOf(cleanImp) === content.indexOf(line)) {
                  unusedImports.push(cleanImp);
                }
              }
              
              if (unusedImports.length > 0) {
                const remainingImports = imports.filter(imp => 
                  !unusedImports.includes(imp.replace(/\s+as\s+\w+/, '').trim())
                );
                
                if (remainingImports.length > 0) {
                  lines[i] = line.replace(
                    /import\s*{[^}]+}\s*from/,
                    `import {${remainingImports.join(', ')}} from`
                  );
                } else {
                  lines[i] = `// ${line} // Removed unused import`;
                }
                
                modified = true;
                fixes.push({
                  type: 'unused_import',
                  file,
                  line: i + 1,
                  action: 'removed_unused_imports',
                  removed: unusedImports
                });
              }
            }
          }
        }
        
        if (modified) {
          fs.writeFileSync(file, lines.join('\n'));
          console.log(`✅ Fixed unused imports in: ${file}`);
        }
      } catch (err) {
        console.log(`⚠️  Could not process file: ${file}`);
      }
    }
  } catch (error) {
    console.log(`⚠️  Error fixing unused imports: ${error.message}`);
  }
  
  return fixes;
}

function fixMissingExports() {
  const fixes = [];
  
  try {
    const srcPath = path.join(process.cwd(), 'src');
    const allFiles = getAllFiles(srcPath, ['.tsx', '.ts', '.jsx', '.js']);
    
    for (const file of allFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        let modified = false;
        
        // Check for components that should be exported
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          // Look for React components that aren't exported
          if (line.includes('function') && line.includes('(') && !line.includes('export')) {
            const functionMatch = line.match(/function\s+(\w+)/);
            if (functionMatch) {
              const functionName = functionMatch[1];
              
              // Check if this looks like a React component
              if (functionName.match(/^[A-Z]/) && content.includes('return') && content.includes('JSX')) {
                lines[i] = line.replace('function', 'export default function');
                modified = true;
                fixes.push({
                  type: 'missing_export',
                  file,
                  line: i + 1,
                  action: 'added_default_export',
                  component: functionName
                });
              }
            }
          }
        }
        
        if (modified) {
          fs.writeFileSync(file, lines.join('\n'));
          console.log(`✅ Fixed missing exports in: ${file}`);
        }
      } catch (err) {
        console.log(`⚠️  Could not process file: ${file}`);
      }
    }
  } catch (error) {
    console.log(`⚠️  Error fixing missing exports: ${error.message}`);
  }
  
  return fixes;
}

function fixTypeMismatches() {
  const fixes = [];
  
  try {
    const srcPath = path.join(process.cwd(), 'src');
    const allFiles = getAllFiles(srcPath, ['.tsx', '.ts', '.jsx', '.js']);
    
    for (const file of allFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        let modified = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          // Fix common type issues
          if (line.includes('headers') && line.includes('undefined')) {
            // Fix headers type issue
            lines[i] = line.replace(
              /headers\s*\|\s*undefined/,
              'headers || {}'
            );
            modified = true;
            fixes.push({
              type: 'type_mismatch',
              file,
              line: i + 1,
              action: 'fixed_headers_type',
              issue: 'headers undefined type mismatch'
            });
          }
          
          // Fix Stripe constructor options
          if (line.includes('advancedFraudSignals')) {
            lines[i] = line.replace(
              /,\s*{\s*advancedFraudSignals:\s*false\s*}/,
              ''
            );
            modified = true;
            fixes.push({
              type: 'type_mismatch',
              file,
              line: i + 1,
              action: 'removed_invalid_stripe_option',
              issue: 'advancedFraudSignals not supported'
            });
          }
        }
        
        if (modified) {
          fs.writeFileSync(file, lines.join('\n'));
          console.log(`✅ Fixed type mismatches in: ${file}`);
        }
      } catch (err) {
        console.log(`⚠️  Could not process file: ${file}`);
      }
    }
  } catch (error) {
    console.log(`⚠️  Error fixing type mismatches: ${error.message}`);
  }
  
  return fixes;
}

function fixDuplicateIdentifiers() {
  const fixes = [];
  
  try {
    const srcPath = path.join(process.cwd(), 'src');
    const allFiles = getAllFiles(srcPath, ['.tsx', '.ts', '.jsx', '.js']);
    
    for (const file of allFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        let modified = false;
        
        // Check for duplicate imports in the same line
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          if (line.includes('import') && line.includes('{') && line.includes('}')) {
            const importMatch = line.match(/import\s*{([^}]+)}\s*from/);
            if (importMatch) {
              const imports = importMatch[1].split(',').map(imp => imp.trim());
              const uniqueImports = [...new Set(imports)];
              
              if (uniqueImports.length !== imports.length) {
                lines[i] = line.replace(
                  /import\s*{[^}]+}\s*from/,
                  `import {${uniqueImports.join(', ')}} from`
                );
                modified = true;
                fixes.push({
                  type: 'duplicate_identifier',
                  file,
                  line: i + 1,
                  action: 'removed_duplicate_imports',
                  removed: imports.filter(imp => 
                    imports.filter(x => x.trim() === imp.trim()).length > 1
                  )
                });
              }
            }
          }
        }
        
        if (modified) {
          fs.writeFileSync(file, lines.join('\n'));
          console.log(`✅ Fixed duplicate identifiers in: ${file}`);
        }
      } catch (err) {
        console.log(`⚠️  Could not process file: ${file}`);
      }
    }
  } catch (error) {
    console.log(`⚠️  Error fixing duplicate identifiers: ${error.message}`);
  }
  
  return fixes;
}

function parseTypeScriptErrors(errorOutput) {
  const errors = [];
  const lines = errorOutput.split('\n');
  
  for (const line of lines) {
    if (line.includes('error TS')) {
      const match = line.match(/src\/([^:]+):(\d+):(\d+):\s*error\s+TS\d+:\s*(.+)/);
      if (match) {
        errors.push({
          file: `src/${match[1]}`,
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4].trim(),
          type: 'typescript_error'
        });
      }
    }
  }
  
  return errors;
}

function getAllFiles(dirPath, extensions) {
  const files = [];
  
  function traverse(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dirPath);
  return files;
}

// Main execution
async function main() {
  console.log('🚀 Starting TypeScript error fixer automation...');
  
  // Run immediately
  await runTypeScriptErrorFixer();
  
  // Set up continuous execution
  setInterval(async () => {
    await runTypeScriptErrorFixer();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🔄 TypeScript error fixer will run every ${AUTOMATION_INTERVAL / 60000} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 TypeScript error fixer automation stopped');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 TypeScript error fixer automation stopped');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Fatal error in TypeScript error fixer:', error);
  process.exit(1);
});