#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎯 Starting PM2 Error Automation Orchestrator...');

// Get automation interval from environment variable (default: 15 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 900000; // 15 minutes

async function runErrorAutomationOrchestrator() {
  try {
    console.log(
      `🎯 Running PM2 Error Automation Orchestrator at ${new Date().toISOString()}`
    );

    let totalFixes = 0;
    let totalErrors = 0;

    // 1. Detect all errors
    console.log('🔍 Step 1: Detecting all errors...');
    const errors = await detectAllErrors();
    totalErrors =
      errors.typescript.length +
      errors.linting.length +
      errors.build.length +
      errors.dependencies.length +
      errors.syntax.length;

    console.log(`📊 Found ${totalErrors} total errors:`);
    console.log(`   - ${errors.typescript.length} TypeScript errors`);
    console.log(`   - ${errors.linting.length} linting errors`);
    console.log(`   - ${errors.build.length} build errors`);
    console.log(`   - ${errors.dependencies.length} dependency issues`);
    console.log(`   - ${errors.syntax.length} syntax errors`);

    // 2. Apply intelligent fixes
    if (totalErrors > 0) {
      console.log('🔧 Step 2: Applying intelligent fixes...');
      totalFixes = await applyIntelligentFixes(errors);
    }

    // 3. Verify fixes
    console.log('✅ Step 3: Verifying fixes...');
    const remainingErrors = await verifyFixes();

    // 4. Generate comprehensive report
    console.log('📊 Step 4: Generating comprehensive report...');
    await generateComprehensiveReport(errors, totalFixes, remainingErrors);

    // 5. Update PM2 status
    console.log('🔄 Step 5: Updating PM2 status...');
    await updatePM2Status(totalErrors, totalFixes, remainingErrors);

    console.log(`🎉 PM2 Error Automation Orchestrator completed successfully!`);
    console.log(`   - Initial errors: ${totalErrors}`);
    console.log(`   - Fixes applied: ${totalFixes}`);
    console.log(`   - Remaining errors: ${remainingErrors.length}`);

    return {
      initialErrors: totalErrors,
      fixesApplied: totalFixes,
      remainingErrors: remainingErrors.length,
      success: true,
    };
  } catch (error) {
    console.error(
      '❌ PM2 Error Automation Orchestrator failed:',
      error.message
    );
    return {
      initialErrors: 0,
      fixesApplied: 0,
      remainingErrors: 0,
      success: false,
      error: error.message,
    };
  }
}

async function detectAllErrors() {
  try {
    // Import and run the enhanced error detector
    const { detectAllErrors } = require('./enhanced-error-detector.cjs');
    return await detectAllErrors();
  } catch (error) {
    console.error('❌ Error detection failed:', error.message);
    return {
      typescript: [],
      linting: [],
      build: [],
      dependencies: [],
      syntax: [],
      timestamp: new Date().toISOString(),
    };
  }
}

async function applyIntelligentFixes(errors) {
  try {
    // Import and run the intelligent error fixer
    const { fixAllErrors } = require('./intelligent-error-fixer.cjs');
    return await fixAllErrors();
  } catch (error) {
    console.error('❌ Intelligent fixes failed:', error.message);
    return 0;
  }
}

async function verifyFixes() {
  try {
    // Run a quick verification to check remaining errors
    const remainingErrors = [];

    // Check TypeScript errors
    try {
      execSync('npx tsc --noEmit', { stdio: 'pipe' });
    } catch (error) {
      const tsOutput = error.stdout || error.stderr || '';
      const tsErrors = parseTypeScriptErrors(tsOutput);
      remainingErrors.push(...tsErrors);
    }

    // Check build errors
    try {
      execSync('npm run build', { stdio: 'pipe' });
    } catch (error) {
      const buildOutput = error.stdout || error.stderr || '';
      const buildErrors = parseBuildErrors(buildOutput);
      remainingErrors.push(...buildErrors);
    }

    return remainingErrors;
  } catch (error) {
    console.error('❌ Fix verification failed:', error.message);
    return [];
  }
}

function parseTypeScriptErrors(output) {
  const errors = [];
  const lines = output.split('\n');

  for (const line of lines) {
    if (line.includes('error TS')) {
      const match = line.match(/(.+):(\d+):(\d+)\s*-\s*error\s+TS\d+:\s*(.+)/);
      if (match) {
        errors.push({
          file: match[1].trim(),
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4].trim(),
          type: 'typescript',
        });
      }
    }
  }

  return errors;
}

function parseBuildErrors(output) {
  const errors = [];
  const lines = output.split('\n');

  for (const line of lines) {
    if (
      line.includes('Failed to compile') ||
      line.includes('Type error') ||
      line.includes('Cannot find module')
    ) {
      errors.push({
        message: line.trim(),
        type: 'build',
      });
    }
  }

  return errors;
}

async function generateComprehensiveReport(
  initialErrors,
  fixesApplied,
  remainingErrors
) {
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      initialErrors: {
        typescript: initialErrors.typescript.length,
        linting: initialErrors.linting.length,
        build: initialErrors.build.length,
        dependencies: initialErrors.dependencies.length,
        syntax: initialErrors.syntax.length,
        total:
          initialErrors.typescript.length +
          initialErrors.linting.length +
          initialErrors.build.length +
          initialErrors.dependencies.length +
          initialErrors.syntax.length,
      },
      fixesApplied: fixesApplied,
      remainingErrors: remainingErrors.length,
      successRate:
        fixesApplied > 0
          ? (
              (fixesApplied / (fixesApplied + remainingErrors.length)) *
              100
            ).toFixed(2) + '%'
          : '0%',
    },
    details: {
      initialErrors: initialErrors,
      remainingErrors: remainingErrors,
    },
    status: 'completed',
  };

  const reportPath = path.join(
    process.cwd(),
    'pm2-error-automation-report.json'
  );
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`📊 Comprehensive report saved to: ${reportPath}`);
}

async function updatePM2Status(initialErrors, fixesApplied, remainingErrors) {
  try {
    // Create a status file for PM2 monitoring
    const status = {
      timestamp: new Date().toISOString(),
      initialErrors: initialErrors,
      fixesApplied: fixesApplied,
      remainingErrors: remainingErrors.length,
      successRate:
        fixesApplied > 0
          ? (
              (fixesApplied / (fixesApplied + remainingErrors.length)) *
              100
            ).toFixed(2) + '%'
          : '0%',
      status: remainingErrors.length === 0 ? 'clean' : 'has_errors',
    };

    const statusPath = path.join(
      process.cwd(),
      'pm2-error-automation-status.json'
    );
    fs.writeFileSync(statusPath, JSON.stringify(status, null, 2));

    // Update PM2 logs
    console.log(
      `📈 PM2 Status Updated: ${status.status} (${status.successRate} success rate)`
    );
  } catch (error) {
    console.error('❌ PM2 status update failed:', error.message);
  }
}

// Continuous monitoring loop
async function startContinuousMonitoring() {
  console.log(
    `🔄 Starting continuous error monitoring (interval: ${AUTOMATION_INTERVAL / 1000}s)`
  );

  while (true) {
    try {
      await runErrorAutomationOrchestrator();

      // Wait for next cycle
      console.log(
        `⏰ Waiting ${AUTOMATION_INTERVAL / 1000} seconds until next check...`
      );
      await new Promise(resolve => setTimeout(resolve, AUTOMATION_INTERVAL));
    } catch (error) {
      console.error('❌ Continuous monitoring cycle failed:', error.message);

      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, 60000)); // 1 minute
    }
  }
}

// Run the orchestrator
if (require.main === module) {
  const isContinuous =
    process.argv.includes('--continuous') ||
    process.env.CONTINUOUS_MODE === 'true';

  if (isContinuous) {
    startContinuousMonitoring().catch(error => {
      console.error('❌ Continuous monitoring failed:', error);
      process.exit(1);
    });
  } else {
    runErrorAutomationOrchestrator()
      .then(result => {
        if (result.success) {
          console.log(
            '✅ PM2 Error Automation Orchestrator completed successfully'
          );
          process.exit(0);
        } else {
          console.log(
            '⚠️  PM2 Error Automation Orchestrator completed with issues'
          );
          process.exit(1);
        }
      })
      .catch(error => {
        console.error('❌ PM2 Error Automation Orchestrator failed:', error);
        process.exit(1);
      });
  }
}

module.exports = {
  runErrorAutomationOrchestrator,
  startContinuousMonitoring,
};
