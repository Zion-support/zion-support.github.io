#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting comprehensive error monitor automation...');

// Get automation interval from environment variable (default: 2 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 120000; // 2 minutes

async function runErrorMonitor() {
  try {
    console.log(`🔍 Running comprehensive error monitor at ${new Date().toISOString()}`);
    
    const errorReport = {
      timestamp: new Date().toISOString(),
      typescript: { errors: 0, warnings: 0, details: [] },
      eslint: { errors: 0, warnings: 0, details: [] },
      jsx: { errors: 0, warnings: 0, details: [] },
      build: { errors: 0, warnings: 0, details: [] },
      summary: 'Error monitoring completed',
      status: 'completed'
    };
    
    // 1. Monitor TypeScript errors
    console.log('🔍 Monitoring TypeScript errors...');
    const tsErrors = await monitorTypeScriptErrors();
    errorReport.typescript = tsErrors;
    
    // 2. Monitor ESLint errors
    console.log('🔍 Monitoring ESLint errors...');
    const eslintErrors = await monitorESLintErrors();
    errorReport.eslint = eslintErrors;
    
    // 3. Monitor JSX/React errors
    console.log('🔍 Monitoring JSX/React errors...');
    const jsxErrors = await monitorJSXErrors();
    errorReport.jsx = jsxErrors;
    
    // 4. Monitor build errors
    console.log('🔍 Monitoring build errors...');
    const buildErrors = await monitorBuildErrors();
    errorReport.build = buildErrors;
    
    // 5. Generate comprehensive error summary
    const totalErrors = errorReport.typescript.errors + errorReport.eslint.errors + 
                       errorReport.jsx.errors + errorReport.build.errors;
    const totalWarnings = errorReport.typescript.warnings + errorReport.eslint.warnings + 
                          errorReport.jsx.warnings + errorReport.build.warnings;
    
    errorReport.totalErrors = totalErrors;
    errorReport.totalWarnings = totalWarnings;
    
    // 6. Determine overall health status
    if (totalErrors === 0 && totalWarnings < 10) {
      errorReport.healthStatus = 'excellent';
    } else if (totalErrors === 0 && totalWarnings < 50) {
      errorReport.healthStatus = 'good';
    } else if (totalErrors < 10) {
      errorReport.healthStatus = 'fair';
    } else {
      errorReport.healthStatus = 'poor';
    }
    
    // 7. Generate recommendations
    errorReport.recommendations = generateRecommendations(errorReport);
    
    // 8. Save error report
    console.log('📊 Saving comprehensive error report...');
    const reportPath = path.join(process.cwd(), 'comprehensive-error-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
    console.log(`✅ Error monitor report saved to ${reportPath}`);
    
    // 9. Log summary
    console.log(`📊 Error Summary: ${totalErrors} errors, ${totalWarnings} warnings - Status: ${errorReport.healthStatus}`);
    
    // 10. Alert if critical errors detected
    if (totalErrors > 20) {
      console.log('🚨 CRITICAL: High number of errors detected!');
      await sendErrorAlert(errorReport);
    }
    
    console.log('✅ Comprehensive error monitor completed successfully');
    
  } catch (error) {
    console.error('❌ Comprehensive error monitor failed:', error.message);
    
    // Generate error report
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      summary: 'Comprehensive error monitor failed',
      status: 'failed'
    };
    
    const reportPath = path.join(process.cwd(), 'comprehensive-error-monitor-error-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

async function monitorTypeScriptErrors() {
  try {
    execSync('npm run type-check', { stdio: 'pipe' });
    return { errors: 0, warnings: 0, details: [], status: 'clean' };
  } catch (error) {
    const errorOutput = error.message;
    const errors = parseTypeScriptErrors(errorOutput);
    
    return {
      errors: errors.length,
      warnings: 0,
      details: errors,
      status: 'has-errors'
    };
  }
}

async function monitorESLintErrors() {
  try {
    execSync('npm run lint', { stdio: 'pipe' });
    return { errors: 0, warnings: 0, details: [], status: 'clean' };
  } catch (error) {
    const errorOutput = error.message;
    const errors = parseESLintErrors(errorOutput);
    
    return {
      errors: errors.filter(e => e.severity === 'error').length,
      warnings: errors.filter(e => e.severity === 'warning').length,
      details: errors,
      status: 'has-errors'
    };
  }
}

async function monitorJSXErrors() {
  try {
    // Run ESLint specifically on JSX files
    execSync('npx eslint . --ext .jsx,.tsx', { stdio: 'pipe' });
    return { errors: 0, warnings: 0, details: [], status: 'clean' };
  } catch (error) {
    const errorOutput = error.message;
    const errors = parseESLintErrors(errorOutput);
    
    return {
      errors: errors.filter(e => e.severity === 'error').length,
      warnings: errors.filter(e => e.severity === 'warning').length,
      details: errors,
      status: 'has-errors'
    };
  }
}

async function monitorBuildErrors() {
  try {
    execSync('npm run build', { stdio: 'pipe' });
    return { errors: 0, warnings: 0, details: [], status: 'clean' };
  } catch (error) {
    const errorOutput = error.message;
    const errors = parseBuildErrors(errorOutput);
    
    return {
      errors: errors.length,
      warnings: 0,
      details: errors,
      status: 'has-errors'
    };
  }
}

function parseTypeScriptErrors(errorOutput) {
  const errors = [];
  const lines = errorOutput.split('\n');
  
  for (const line of lines) {
    if (line.includes('error TS')) {
      const match = line.match(/(\S+):(\d+):(\d+)\s*-\s*error\s+TS\d+:\s*(.+)/);
      if (match) {
        errors.push({
          file: match[1],
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4],
          type: 'typescript'
        });
      }
    }
  }
  
  return errors;
}

function parseESLintErrors(errorOutput) {
  const errors = [];
  const lines = errorOutput.split('\n');
  
  for (const line of lines) {
    if (line.includes('error') || line.includes('warning')) {
      const match = line.match(/(\S+):(\d+):(\d+)\s+(error|warning)\s+(.+)/);
      if (match) {
        errors.push({
          file: match[1],
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          severity: match[4],
          message: match[5],
          type: 'eslint'
        });
      }
    }
  }
  
  return errors;
}

function parseBuildErrors(errorOutput) {
  const errors = [];
  const lines = errorOutput.split('\n');
  
  for (const line of lines) {
    if (line.includes('Error:') || line.includes('error')) {
      errors.push({
        message: line.trim(),
        type: 'build'
      });
    }
  }
  
  return errors;
}

function generateRecommendations(errorReport) {
  const recommendations = [];
  
  // TypeScript recommendations
  if (errorReport.typescript.errors > 0) {
    if (errorReport.typescript.errors > 50) {
      recommendations.push('🚨 CRITICAL: High number of TypeScript errors. Run TypeScript error fixer immediately.');
    } else if (errorReport.typescript.errors > 20) {
      recommendations.push('⚠️  WARNING: Moderate TypeScript errors detected. Run TypeScript error fixer soon.');
    } else {
      recommendations.push('💡 SUGGESTION: Some TypeScript errors found. Consider running TypeScript error fixer.');
    }
  }
  
  // ESLint recommendations
  if (errorReport.eslint.errors > 0) {
    if (errorReport.eslint.errors > 30) {
      recommendations.push('🚨 CRITICAL: High number of ESLint errors. Run comprehensive error fixer immediately.');
    } else if (errorReport.eslint.errors > 10) {
      recommendations.push('⚠️  WARNING: Moderate ESLint errors detected. Run comprehensive error fixer soon.');
    } else {
      recommendations.push('💡 SUGGESTION: Some ESLint errors found. Consider running comprehensive error fixer.');
    }
  }
  
  // JSX recommendations
  if (errorReport.jsx.errors > 0) {
    recommendations.push('🔧 JSX errors detected. Run JSX error fixer to resolve syntax issues.');
  }
  
  // Build recommendations
  if (errorReport.build.errors > 0) {
    recommendations.push('🏗️  Build errors detected. Fix compilation issues before deployment.');
  }
  
  // General recommendations
  if (errorReport.totalErrors === 0 && errorReport.totalWarnings < 10) {
    recommendations.push('✅ Project is in excellent condition. Continue with development.');
  } else if (errorReport.totalErrors === 0) {
    recommendations.push('💡 Project has warnings but no errors. Consider cleaning up warnings for better code quality.');
  }
  
  return recommendations;
}

async function sendErrorAlert(errorReport) {
  try {
    // Create alert file for external monitoring systems
    const alertPath = path.join(process.cwd(), 'error-alert.json');
    const alert = {
      timestamp: new Date().toISOString(),
      severity: 'critical',
      message: `High number of errors detected: ${errorReport.totalErrors} errors, ${errorReport.totalWarnings} warnings`,
      details: errorReport,
      action: 'Run error fixers immediately'
    };
    
    fs.writeFileSync(alertPath, JSON.stringify(alert, null, 2));
    console.log('🚨 Error alert created for external monitoring');
    
    // You can add additional alert mechanisms here:
    // - Send email notifications
    // - Send Slack/Discord messages
    // - Create GitHub issues
    // - Send SMS alerts
    
  } catch (error) {
    console.log('⚠️  Failed to send error alert:', error.message);
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting comprehensive error monitor...');
  
  // Run once immediately
  await runErrorMonitor();
  
  // Set up continuous execution
  setInterval(async () => {
    await runErrorMonitor();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🔄 Error monitor will run every ${AUTOMATION_INTERVAL / 60000} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Error monitor shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Error monitor shutting down gracefully...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Fatal error in error monitor:', error);
  process.exit(1);
});