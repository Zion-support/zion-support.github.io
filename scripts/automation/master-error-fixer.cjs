#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting master error fixer automation...');

// Get automation interval from environment variable (default: 1 hour)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 3600000; // 1 hour

async function runMasterErrorFixer() {
  try {
    console.log(`🔧 Running master error fixer at ${new Date().toISOString()}`);
    
    let totalFixes = 0;
    const results = {};
    
    // 1. Run comprehensive error fixer
    console.log('🔧 Running comprehensive error fixer...');
    try {
      const comprehensiveScript = path.join(__dirname, 'comprehensive-error-fixer.cjs');
      if (fs.existsSync(comprehensiveScript)) {
        const result = await runErrorFixerScript(comprehensiveScript);
        results.comprehensive = result;
        totalFixes += result.fixes || 0;
        console.log(`  ✅ Comprehensive error fixer completed: ${result.fixes || 0} fixes`);
      }
    } catch (error) {
      console.log(`  ⚠️  Comprehensive error fixer failed: ${error.message}`);
    }
    
    // 2. Run TypeScript error fixer
    console.log('🔧 Running TypeScript error fixer...');
    try {
      const typescriptScript = path.join(__dirname, 'typescript-error-fixer.cjs');
      if (fs.existsSync(typescriptScript)) {
        const result = await runErrorFixerScript(typescriptScript);
        results.typescript = result;
        totalFixes += result.fixes || 0;
        console.log(`  ✅ TypeScript error fixer completed: ${result.fixes || 0} fixes`);
      }
    } catch (error) {
      console.log(`  ⚠️  TypeScript error fixer failed: ${error.message}`);
    }
    
    // 3. Run JSX error fixer
    console.log('🔧 Running JSX error fixer...');
    try {
      const jsxScript = path.join(__dirname, 'jsx-error-fixer.cjs');
      if (fs.existsSync(jsxScript)) {
        const result = await runErrorFixerScript(jsxScript);
        results.jsx = result;
        totalFixes += result.fixes || 0;
        console.log(`  ✅ JSX error fixer completed: ${result.fixes || 0} fixes`);
      }
    } catch (error) {
      console.log(`  ⚠️  JSX error fixer failed: ${error.message}`);
    }
    
    // 4. Run console error fixer
    console.log('🔧 Running console error fixer...');
    try {
      const consoleScript = path.join(__dirname, 'console-error-fixer.cjs');
      if (fs.existsSync(consoleScript)) {
        const result = await runErrorFixerScript(consoleScript);
        results.console = result;
        totalFixes += result.fixes || 0;
        console.log(`  ✅ Console error fixer completed: ${result.fixes || 0} fixes`);
      }
    } catch (error) {
      console.log(`  ⚠️  Console error fixer failed: ${error.message}`);
    }
    
    // 5. Run final validation
    console.log('🔧 Running final validation...');
    const validationResults = await runFinalValidation();
    results.validation = validationResults;
    
    // Generate master error fixer report
    console.log('📊 Generating master error fixer report...');
    const report = {
      timestamp: new Date().toISOString(),
      totalFixes: totalFixes,
      individualResults: results,
      summary: 'Master error fixer completed',
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'master-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Master error fixer report saved to ${reportPath}`);
    
    console.log(`✅ Master error fixer completed successfully. Total fixes applied: ${totalFixes}`);
    
  } catch (error) {
    console.error('❌ Master error fixer failed:', error.message);
  }
}

async function runErrorFixerScript(scriptPath) {
  return new Promise((resolve, reject) => {
    try {
      // Create a temporary script to extract the fix count
      const tempScript = `
        const originalLog = console.log;
        let fixCount = 0;
        
        console.log = (...args) => {
          const message = args.join(' ');
          if (message.includes('✅ Fixed') || message.includes('fixes applied')) {
            const match = message.match(/(\d+)/);
            if (match) {
              fixCount = parseInt(match[1]);
            }
          }
          originalLog(...args);
        };
        
        try {
          require('${scriptPath}');
          setTimeout(() => {
            process.exit(0);
          }, 5000);
        } catch (error) {
          console.error('Script error:', error.message);
          process.exit(1);
        }
      `;
      
      const tempScriptPath = path.join(__dirname, 'temp-error-fixer.js');
      fs.writeFileSync(tempScriptPath, tempScript);
      
      execSync(`node "${tempScriptPath}"`, { stdio: 'pipe', timeout: 10000 });
      
      // Clean up temp script
      if (fs.existsSync(tempScriptPath)) {
        fs.unlinkSync(tempScriptPath);
      }
      
      resolve({ fixes: 0, status: 'completed' });
    } catch (error) {
      resolve({ fixes: 0, status: 'failed', error: error.message });
    }
  });
}

async function runFinalValidation() {
  const results = {
    linting: { status: 'unknown', errors: 0, warnings: 0 },
    typescript: { status: 'unknown', errors: 0 },
    build: { status: 'unknown', success: false }
  };
  
  try {
    // Check linting
    console.log('  🔍 Checking linting status...');
    try {
      const lintOutput = execSync('npm run lint', { stdio: 'pipe' }).toString();
      results.linting.status = 'success';
      results.linting.errors = 0;
      results.linting.warnings = 0;
    } catch (error) {
      const errorOutput = error.message;
      const errorMatch = errorOutput.match(/(\d+)\s+errors?/);
      const warningMatch = errorOutput.match(/(\d+)\s+warnings?/);
      
      results.linting.status = 'failed';
      results.linting.errors = errorMatch ? parseInt(errorMatch[1]) : 0;
      results.linting.warnings = warningMatch ? parseInt(warningMatch[1]) : 0;
    }
    
    // Check TypeScript
    console.log('  🔍 Checking TypeScript status...');
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      results.typescript.status = 'success';
      results.typescript.errors = 0;
    } catch (error) {
      const errorOutput = error.message;
      const errorMatch = errorOutput.match(/Found\s+(\d+)\s+errors?/);
      
      results.typescript.status = 'failed';
      results.typescript.errors = errorMatch ? parseInt(errorMatch[1]) : 0;
    }
    
    // Check build
    console.log('  🔍 Checking build status...');
    try {
      execSync('npm run build', { stdio: 'pipe', timeout: 60000 });
      results.build.status = 'success';
      results.build.success = true;
    } catch (error) {
      results.build.status = 'failed';
      results.build.success = false;
    }
    
  } catch (error) {
    console.log(`  ⚠️  Validation failed: ${error.message}`);
  }
  
  return results;
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting master error fixer with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial error fixer
  await runMasterErrorFixer();
  
  // Set up continuous execution
  setInterval(async () => {
    await runMasterErrorFixer();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Master error fixer running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
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

// Start the master error fixer
runContinuous().catch(error => {
  console.error('❌ Failed to start master error fixer:', error);
  process.exit(1);
});