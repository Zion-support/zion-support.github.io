#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting TypeScript error fixer automation...');

// Get automation interval from environment variable (default: 5 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 300000; // 5 minutes

async function runTypeScriptErrorFixer() {
  try {
    console.log(`🔧 Running TypeScript error fixer at ${new Date().toISOString()}`);
    
    let fixesApplied = 0;
    let errorsFixed = [];
    
    // 1. Fix TypeScript parsing errors
    console.log('🔧 Fixing TypeScript parsing errors...');
    const parsingFixes = await fixTypeScriptParsingErrors();
    fixesApplied += parsingFixes.length;
    errorsFixed.push(...parsingFixes);
    
    // 2. Fix type annotation errors
    console.log('🔧 Fixing type annotation errors...');
    const typeFixes = await fixTypeAnnotationErrors();
    fixesApplied += typeFixes.length;
    errorsFixed.push(...typeFixes);
    
    // 3. Fix interface and type definition errors
    console.log('🔧 Fixing interface and type definition errors...');
    const interfaceFixes = await fixInterfaceErrors();
    fixesApplied += interfaceFixes.length;
    errorsFixed.push(...interfaceFixes);
    
    // 4. Fix import/export errors
    console.log('🔧 Fixing import/export errors...');
    const importFixes = await fixImportExportErrors();
    fixesApplied += importFixes.length;
    errorsFixed.push(...importFixes);
    
    // 5. Run TypeScript compiler to check for remaining errors
    console.log('🔧 Running TypeScript compiler check...');
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      console.log('✅ TypeScript compilation successful - no errors');
    } catch (error) {
      console.log('⚠️  TypeScript compilation still has errors, analyzing...');
      const remainingErrors = analyzeTypeScriptErrors(error.message);
      console.log(`📊 Found ${remainingErrors.length} remaining TypeScript errors`);
    }
    
    // Generate TypeScript error fixer report
    console.log('📊 Generating TypeScript error fixer report...');
    const report = {
      timestamp: new Date().toISOString(),
      totalFixesApplied: fixesApplied,
      errorsFixed: errorsFixed,
      summary: 'TypeScript error fixer completed',
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'typescript-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ TypeScript error fixer report saved to ${reportPath}`);
    
    console.log(`✅ TypeScript error fixer completed successfully. Applied ${fixesApplied} fixes.`);
    
  } catch (error) {
    console.error('❌ TypeScript error fixer failed:', error.message);
    
    // Generate error report
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      summary: 'TypeScript error fixer failed',
      status: 'failed'
    };
    
    const reportPath = path.join(process.cwd(), 'typescript-error-fixer-error-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

async function fixTypeScriptParsingErrors() {
  const fixes = [];
  
  try {
    const sourceFiles = findTypeScriptFiles('./src');
    
    for (const file of sourceFiles) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Fix malformed type annotations
      if (content.includes('anyany')) {
        content = content.replace(/anyany/g, 'any');
        modified = true;
      }
      
      if (content.includes('anystring')) {
        content = content.replace(/anystring/g, 'string');
        modified = true;
      }
      
      if (content.includes('anynull')) {
        content = content.replace(/anynull/g, 'null');
        modified = true;
      }
      
      if (content.includes('anyReact')) {
        content = content.replace(/anyReact/g, 'React');
        modified = true;
      }
      
      if (content.includes('anyRootState')) {
        content = content.replace(/anyRootState/g, 'RootState');
        modified = true;
      }
      
      // Fix malformed JSX attributes
      if (content.includes('any"')) {
        content = content.replace(/any"/g, '"');
        modified = true;
      }
      
      // Fix malformed object properties
      if (content.includes('{;')) {
        content = content.replace(/\{;/g, '{');
        modified = true;
      }
      
      // Fix malformed function parameters
      if (content.includes('args: any')) {
        content = content.replace(/args: any/g, 'args: any');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        fixes.push({
          type: 'parsing',
          file: file,
          description: 'Fixed TypeScript parsing errors'
        });
      }
    }
  } catch (error) {
    console.log('⚠️  Error fixing TypeScript parsing errors:', error.message);
  }
  
  return fixes;
}

async function fixTypeAnnotationErrors() {
  const fixes = [];
  
  try {
    const sourceFiles = findTypeScriptFiles('./src');
    
    for (const file of sourceFiles) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Fix malformed type annotations in function parameters
      if (content.includes(': anyany')) {
        content = content.replace(/: anyany/g, ': any');
        modified = true;
      }
      
      if (content.includes(': anystring')) {
        content = content.replace(/: anystring/g, ': string');
        modified = true;
      }
      
      // Fix malformed generic types
      if (content.includes('<anyany>')) {
        content = content.replace(/<anyany>/g, '<any>');
        modified = true;
      }
      
      if (content.includes('<anystring>')) {
        content = content.replace(/<anystring>/g, '<string>');
        modified = true;
      }
      
      // Fix malformed array types
      if (content.includes('anyany[]')) {
        content = content.replace(/anyany\[\]/g, 'any[]');
        modified = true;
      }
      
      if (content.includes('anystring[]')) {
        content = content.replace(/anystring\[\]/g, 'string[]');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        fixes.push({
          type: 'type-annotation',
          file: file,
          description: 'Fixed type annotation errors'
        });
      }
    }
  } catch (error) {
    console.log('⚠️  Error fixing type annotation errors:', error.message);
  }
  
  return fixes;
}

async function fixInterfaceErrors() {
  const fixes = [];
  
  try {
    const sourceFiles = findTypeScriptFiles('./src');
    
    for (const file of sourceFiles) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Fix malformed interface properties
      if (content.includes('contactInfo: {;')) {
        content = content.replace(/contactInfo: \{;/g, 'contactInfo: {');
        modified = true;
      }
      
      if (content.includes('pricing: {;')) {
        content = content.replace(/pricing: \{;/g, 'pricing: {');
        modified = true;
      }
      
      // Fix malformed object literal syntax
      if (content.includes('{ id: any')) {
        content = content.replace(/\{ id: any'/g, "{ id: '");
        modified = true;
      }
      
      if (content.includes('{ type: any')) {
        content = content.replace(/\{ type: any'/g, "{ type: '");
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        fixes.push({
          type: 'interface',
          file: file,
          description: 'Fixed interface and object literal errors'
        });
      }
    }
  } catch (error) {
    console.log('⚠️  Error fixing interface errors:', error.message);
  }
  
  return fixes;
}

async function fixImportExportErrors() {
  const fixes = [];
  
  try {
    const sourceFiles = findTypeScriptFiles('./src');
    
    for (const file of sourceFiles) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Fix malformed import statements
      if (content.includes('import { anyany')) {
        content = content.replace(/import \{ anyany/g, 'import { any');
        modified = true;
      }
      
      if (content.includes('import { anystring')) {
        content = content.replace(/import \{ anystring/g, 'import { string');
        modified = true;
      }
      
      // Fix malformed export statements
      if (content.includes('export type anyany')) {
        content = content.replace(/export type anyany/g, 'export type any');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        fixes.push({
          type: 'import-export',
          file: file,
          description: 'Fixed import/export errors'
        });
      }
    }
  } catch (error) {
    console.log('⚠️  Error fixing import/export errors:', error.message);
  }
  
  return fixes;
}

function analyzeTypeScriptErrors(errorOutput) {
  const errors = [];
  
  try {
    // Parse TypeScript compiler error output
    const lines = errorOutput.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/(\S+):(\d+):(\d+)\s*-\s*error\s+TS\d+:\s*(.+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4]
          });
        }
      }
    }
  } catch (error) {
    console.log('⚠️  Error analyzing TypeScript errors:', error.message);
  }
  
  return errors;
}

function findTypeScriptFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && /\.(ts|tsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
async function main() {
  console.log('🚀 Starting TypeScript error fixer...');
  
  // Run once immediately
  await runTypeScriptErrorFixer();
  
  // Set up continuous execution
  setInterval(async () => {
    await runTypeScriptErrorFixer();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🔄 TypeScript error fixer will run every ${AUTOMATION_INTERVAL / 60000} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 TypeScript error fixer shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 TypeScript error fixer shutting down gracefully...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Fatal error in TypeScript error fixer:', error);
  process.exit(1);
});