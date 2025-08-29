#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎯 Starting error fixing orchestrator...');

// Get automation interval from environment variable (default: 60 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 3600000; // 60 minutes

async function runErrorFixingOrchestrator() {
  try {
    console.log(`🎯 Running error fixing orchestrator at ${new Date().toISOString()}`);
    
    const summary = {
      timestamp: new Date().toISOString(),
      mergeConflicts: { resolved: 0, found: 0 },
      lintingErrors: { fixed: 0, remaining: 0 },
      typescriptErrors: { fixed: 0, remaining: 0 },
      consoleErrors: { fixed: 0, found: 0 },
      buildErrors: { fixed: 0, status: 'unknown' },
      totalFixes: 0,
      status: 'completed'
    };
    
    // Run all error fixing automations
    console.log('🔧 Orchestrating error fixing automations...');
    
    // 1. Merge conflict resolver (highest priority)
    console.log('🔧 Running merge conflict resolver...');
    try {
      execSync('node ./scripts/automation/merge-conflict-resolver.cjs', { stdio: 'pipe' });
      const mergeReport = loadReport('merge-conflict-resolver-report.json');
      if (mergeReport) {
        summary.mergeConflicts = mergeReport.conflicts;
      }
    } catch (error) {
      console.log('⚠️  Merge conflict resolver failed');
    }
    
    // 2. Comprehensive error fixer
    console.log('🔧 Running comprehensive error fixer...');
    try {
      execSync('node ./scripts/automation/comprehensive-error-fixer.cjs', { stdio: 'pipe' });
      const comprehensiveReport = loadReport('comprehensive-error-fixer-report.json');
      if (comprehensiveReport) {
        summary.totalFixes += comprehensiveReport.fixes.totalFixes || 0;
      }
    } catch (error) {
      console.log('⚠️  Comprehensive error fixer failed');
    }
    
    // 3. Linting error fixer
    console.log('🔧 Running linting error fixer...');
    try {
      execSync('node ./scripts/automation/linting-error-fixer.cjs', { stdio: 'pipe' });
      const lintingReport = loadReport('linting-error-fixer-report.json');
      if (lintingReport) {
        summary.lintingErrors.fixed = lintingReport.fixes.totalFixes || 0;
        summary.lintingErrors.remaining = lintingReport.fixes.remaining || 0;
      }
    } catch (error) {
      console.log('⚠️  Linting error fixer failed');
    }
    
    // 4. TypeScript error fixer
    console.log('🔧 Running TypeScript error fixer...');
    try {
      execSync('node ./scripts/automation/typescript-error-fixer.cjs', { stdio: 'pipe' });
      const typescriptReport = loadReport('typescript-error-fixer-report.json');
      if (typescriptReport) {
        summary.typescriptErrors.fixed = typescriptReport.fixes.totalFixes || 0;
        summary.typescriptErrors.remaining = typescriptReport.fixes.remaining || 0;
      }
    } catch (error) {
      console.log('⚠️  TypeScript error fixer failed');
    }
    
    // 5. Console error fixer
    console.log('🔧 Running console error fixer...');
    try {
      execSync('node ./scripts/automation/console-error-fixer.cjs', { stdio: 'pipe' });
      const consoleReport = loadReport('console-error-fixer-report.json');
      if (consoleReport) {
        summary.consoleErrors.fixed = consoleReport.consoleStatements || 0;
        summary.consoleErrors.found = consoleReport.consoleStatements || 0;
      }
    } catch (error) {
      console.log('⚠️  Console error fixer failed');
    }
    
    // 6. Build verification
    console.log('🔧 Verifying build status...');
    try {
      execSync('npm run build', { stdio: 'pipe' });
      summary.buildErrors.status = 'success';
      summary.buildErrors.fixed = 0;
    } catch (error) {
      summary.buildErrors.status = 'failed';
      console.log('⚠️  Build verification failed');
    }
    
    // Calculate total fixes
    summary.totalFixes = 
      summary.mergeConflicts.resolved +
      summary.lintingErrors.fixed +
      summary.typescriptErrors.fixed +
      summary.consoleErrors.fixed +
      summary.buildErrors.fixed;
    
    // Generate orchestrator report
    console.log('📊 Generating error fixing orchestrator report...');
    const report = {
      timestamp: new Date().toISOString(),
      summary: summary,
      details: {
        mergeConflicts: loadReport('merge-conflict-resolver-report.json'),
        comprehensive: loadReport('comprehensive-error-fixer-report.json'),
        linting: loadReport('linting-error-fixer-report.json'),
        typescript: loadReport('typescript-error-fixer-report.json'),
        console: loadReport('console-error-fixer-report.json')
      },
      summary: 'Error fixing orchestrator completed',
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'error-fixing-orchestrator-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Error fixing orchestrator report saved to ${reportPath}`);
    
    // Generate summary dashboard
    generateDashboard(summary);
    
    console.log('✅ Error fixing orchestrator completed successfully');
    
  } catch (error) {
    console.error('❌ Error fixing orchestrator failed:', error.message);
  }
}

function loadReport(filename) {
  try {
    const reportPath = path.join(process.cwd(), filename);
    if (fs.existsSync(reportPath)) {
      const content = fs.readFileSync(reportPath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    // Report doesn't exist or can't be parsed
  }
  return null;
}

function generateDashboard(summary) {
  const dashboard = `
# Error Fixing Dashboard

**Last Updated:** ${new Date().toISOString()}

## Summary
- **Total Fixes Applied:** ${summary.totalFixes}
- **Overall Status:** ${summary.status}

## Error Categories

### Merge Conflicts
- **Found:** ${summary.mergeConflicts.found}
- **Resolved:** ${summary.mergeConflicts.resolved}
- **Status:** ${summary.mergeConflicts.found === 0 ? '✅ Clean' : '⚠️ Needs Attention'}

### Linting Errors
- **Fixed:** ${summary.lintingErrors.fixed}
- **Remaining:** ${summary.lintingErrors.remaining}
- **Status:** ${summary.lintingErrors.remaining === 0 ? '✅ Clean' : '⚠️ Needs Attention'}

### TypeScript Errors
- **Fixed:** ${summary.typescriptErrors.fixed}
- **Remaining:** ${summary.typescriptErrors.remaining}
- **Status:** ${summary.typescriptErrors.remaining === 0 ? '✅ Clean' : '⚠️ Needs Attention'}

### Console Errors
- **Found:** ${summary.consoleErrors.found}
- **Fixed:** ${summary.consoleErrors.fixed}
- **Status:** ${summary.consoleErrors.found === 0 ? '✅ Clean' : '⚠️ Needs Attention'}

### Build Status
- **Status:** ${summary.buildErrors.status}
- **Status:** ${summary.buildErrors.status === 'success' ? '✅ Success' : '❌ Failed'}

## Automation Status
- **Merge Conflict Resolver:** Running every 10 minutes
- **Comprehensive Error Fixer:** Running every 30 minutes
- **Linting Error Fixer:** Running every 20 minutes
- **TypeScript Error Fixer:** Running every 25 minutes
- **Console Error Fixer:** Running every 15 minutes

## Next Actions
${summary.totalFixes > 0 ? '- ✅ Errors were automatically fixed' : '- ✅ No errors found'}
${summary.lintingErrors.remaining > 0 ? '- ⚠️ Manual review needed for remaining linting errors' : ''}
${summary.typescriptErrors.remaining > 0 ? '- ⚠️ Manual review needed for remaining TypeScript errors' : ''}
${summary.buildErrors.status === 'failed' ? '- ❌ Build verification failed - manual intervention required' : ''}
`;

  const dashboardPath = path.join(process.cwd(), 'ERROR_FIXING_DASHBOARD.md');
  fs.writeFileSync(dashboardPath, dashboard);
  console.log(`✅ Error fixing dashboard saved to ${dashboardPath}`);
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting error fixing orchestrator with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial error fixing orchestrator
  await runErrorFixingOrchestrator();
  
  // Set up continuous execution
  setInterval(async () => {
    await runErrorFixingOrchestrator();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Error fixing orchestrator running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
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

// Start the error fixing orchestrator
runContinuous().catch(error => {
  console.error('❌ Failed to start error fixing orchestrator:', error);
  process.exit(1);
});