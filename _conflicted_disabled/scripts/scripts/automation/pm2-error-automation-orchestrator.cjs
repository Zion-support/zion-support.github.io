
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PM2ErrorAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, ''automation/logs');
    this.reportsDir = path.join(this.projectRoot, 'automation/reports'');
    this.config = this.loadConfig();
    this.isRunning = false;
    this.scheduledJobs = [];

    // Ensure directories exist;
    this.ensureDirectories()}
;
  ensureDirectories() {;
    ['this.logsDir', 'this.reportsDir'].forEach(dir => {;
      if (!fs.existsSync(dir)) {;
        fs.mkdirSync(dir { recursive: true })}
    })}
;
  loadConfig() {;
    const configPath = path.join(this.projectRoot, 'automation-config.json');
    if (fs.existsSync(configPath)) {;
      return JSON.parse(fs.readFileSync(configPath, 'utf8'))}

      errorCheckInterval: '*/15 * * * *', // Every 15 minutes;
      comprehensiveFixInterval: '0 */2 * * *', // Every 2 hours;
      typeScriptFixInterval: '*/30 * * * *', // Every 30 minutes;
      buildCheckInterval: '0 */1 * * *', // Every hour;
      dependencyCheckInterval: '0 6,18 * * *', // Twice daily;
      securityCheckInterval: '0 3,15 * * *', // Twice daily;
      performanceCheckInterval: '0 */4 * * *', // Every 4 hours;

    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

    // Write to log fileconst logFile = path.join(this.logsDir, orchestrator-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logMessage + `\n`)}

      return}
;
    this.log('Starting PM2 Error Automation Orchestrator...', 'info');
    this.isRunning = true;

      // Keep the process running;
      this.keepAlive()} catch (error) {  this.log(`Error starting orchestrator: ${error.message  }`, `error`);
      this.isRunning = false;
      process.exit(1)}
  }

      this.log('PM2 not found, installing...', 'info');
      execSync('npm install -g pm2' { stdio: 'inherit'   })}

      execSync('pm2 install pm2-logrotate' { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:max_size 10M' { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:retain 30' { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:compress true' { stdio: 'pipe' });
      this.log('PM2 logrotate configured', 'info');

      this.log('PM2 logrotate already configured or failed to configure', 'warn')}
  }
;
  async startScheduledJobs() {;
    this.log('Starting scheduled jobs...', 'info');
;
    // Error checking job (every 15 minutes);
    this.scheduleJob('error-checker', this.config.errorCheckInterval, () => {;
      this.runErrorChecker()});
;
    // Comprehensive error fixing job (every 2 hours);
    this.scheduleJob('comprehensive-fixer', this.config.comprehensiveFixInterval, () => {;
      this.runComprehensiveErrorFixer()});
;
    // TypeScript error fixing job (every 30 minutes);
    this.scheduleJob('typescript-fixer', this.config.typeScriptFixInterval, () => {;
      this.runTypeScriptErrorFixer()});
;
    // Build checking job (every hour);
    this.scheduleJob('build-checker', this.config.buildCheckInterval, () => {;
      this.runBuildChecker()});
;
    // Dependency checking job (twice daily);
    this.scheduleJob('dependency-checker', this.config.dependencyCheckInterval, () => {;
      this.runDependencyChecker()});

      this.runPerformanceChecker()});
this.log(`Started ${this.scheduledJobs.length} scheduled jobs`, `info`)}

      }
    }, {;
      scheduled: true,;
      timezone: "UTC"});

          lint: lintResult.output}
      };
;
      this.saveReport('error-check', report);

        await this.runComprehensiveErrorFixer()}
    } catch (error) {  this.log(`Error in error checker: ${error.message  }`, `error`)}
  }

      }
    } catch (error) {  this.log(`Error in comprehensive error fixer: ${error.message  }`, `error`)}
  }

        output: result.output};
;
      this.saveReport('build-check', report);

        await this.runComprehensiveErrorFixer()}
    } catch (error) {  this.log(`Error in build checker: ${error.message  }`, `error`)}
  }

        audit: auditResult.output};
;
      this.saveReport('dependency-check', report);

          await this.runDependencyFixer()}
      }
    } catch (error) {  this.log(`Error in dependency checker: ${error.message  }`, `error`)}
  }

        }
      } catch (error) {  this.log(`Error monitoring PM2: ${error.message  }`, `error`)}
    }, 60000); // Check every minute}

      this.log('Received SIGINT, shutting down gracefully...', 'info');
      this.stop()});
;
    process.on('SIGTERM', () => {;
      this.log('Received SIGTERM, shutting down gracefully...', 'info');
      this.stop()})}

    });
    ;
    this.isRunning = false;
    this.log(`PM2 Error Automation Orchestrator stopped`, 'info');
    process.exit(0)}


// Get automation interval from environment variable (default: 15 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 900000; // 15 minutes;
async function runErrorAutomationOrchestrator() {
  try {


    );
;
    let totalFixes = 0;
    let totalErrors = 0;

    const errors = await detectAllErrors();

    const remainingErrors = await verifyFixes();
;
    // 4. Generate comprehensive report;
    console.log('📊 Step 4: Generating comprehensive report...');
    await generateComprehensiveReport(errors, totalFixes, remainingErrors);
;
    // 5. Update PM2 status;
    console.log('🔄 Step 5: Updating PM2 status...');
    await updatePM2Status(totalErrors, totalFixes, remainingErrors);
console.log(🎉 PM2 Error Automation Orchestrator completed successfully!);console.log(   - Initial errors: ${totalErrors}``);console.log(`   - Fixes applied: ${totalFixes}`);console.log(`   - Remaining errors: ${remainingErrors.length}');
;
    return {;
      initialErrors: totalErrors,;
      fixesApplied: totalFixes,;
      remainingErrors: remainingErrors.length,;
      success: true,}} catch (error) {;
    console.error(❌ PM2 Error Automation Orchestrator failed:',;
      error.message;
    );
    return {;
      initialErrors: 0,;
      fixesApplied: 0,;
      remainingErrors: 0,;
      success: false,;
      error: error.message,}}
}
;
// Export the class;
module.exports = PM2ErrorAutomationOrchestrator;
;
// If run directly, start the orchestrator;
if (require.main === module) {;
  const orchestrator = new PM2ErrorAutomationOrchestrator();
  orchestrator.start().catch(console.error)}
async function detectAllErrors() {;
  try {;
    // Import and run the enhanced error detector;
    const { detectAllErrors } = require('./enhanced-error-detector.cjs');
    return await detectAllErrors()} catch (error) {;
    console.error('❌ Error detection failed:', error.message);
    return {;
      typescript: [],;
      linting: [],;
      build: [],;
      dependencies: [],;
      syntax: [],;
      timestamp: new Date().toISOString(),}}
}
;
async function applyIntelligentFixes(errors) {;
  try {;
    // Import and run the intelligent error fixer;
    const { fixAllErrors } = require('./intelligent-error-fixer.cjs');
    return await fixAllErrors()} catch (error) {;

    console.error('❌ Intelligent fixes failed:', error.message);
    return 0}
}

    console.error('❌ Fix verification failed:', error.message);
    return []}
}
;
function parseTypeScriptErrors(output) {;
  const errors = [];
  const lines = output.split('\n');
;
  for (const line of lines) {;
    if (line.includes('error TS')) {;
      const match = line.match(/(.+):(\d+):(\d+)\s*-\s*error\s+TS\d+:\s*(.+)/);
      if (match) {;
        errors.push({;
          file: match[1].trim(),;
          line: parseInt(match[2]),;
          column: parseInt(match[3]),;
          message: match[4].trim(),;
          type: 'typescript',})}
    }
  }
;
  return errors}
;
function parseBuildErrors(output) {;
  const errors = [];
  const lines = output.split('\n');
;
  for (const line of lines) {;
    if (;
      line.includes('Failed to compile') ||;
      line.includes('Type error') ||;
      line.includes('Cannot find module');
    ) {;
      errors.push({;
        message: line.trim(),;
        type: 'build',})}
  }
;
  return errors}

    },
    details: {
      initialErrors: initialErrors,
      remainingErrors: remainingErrors },
    status: `completed` };

  const reportPath = path.join(

  console.log(`📊 Comprehensive report saved to: ${reportPath}`)}
;
async function updatePM2Status(initialErrors, fixesApplied, remainingErrors) {;
  try {;
    // Create a status file for PM2 monitoring;
    const status = {;
      timestamp: new Date().toISOString(),;
      initialErrors: initialErrors,;
      fixesApplied: fixesApplied,;
      remainingErrors: remainingErrors.length,;
      successRate:;
        fixesApplied > 0;
          ? (;
              (fixesApplied / (fixesApplied + remainingErrors.length)) *;
              100;
            ).toFixed(2) + '%';
          : '0%',;
      status: remainingErrors.length === 0 ? 'clean' : 'has_errors',};
;
    const statusPath = path.join(;
      process.cwd(),pm2-error-automation-status.json';

    );
    fs.writeFileSync(statusPath, JSON.stringify(status, null, 2));

    `)} catch (error) {;
    console.error('❌ PM2 status update failed:', error.message)}

}


  );
;
  while (true) {;
    try {;
      await runErrorAutomationOrchestrator();

      `);
      await new Promise(resolve => setTimeout(resolve, AUTOMATION_INTERVAL))} catch (error) {;
      console.error('❌ Continuous monitoring cycle failed:', error.message);
;
      // Wait before retrying;
      await new Promise(resolve => setTimeout(resolve, 60000)); // 1 minute}
  }
}
;
// Run the orchestrator;
if (require.main === module) {;
  const isContinuous =;
    process.argv.includes('--continuous') ||;

    process.env.CONTINUOUS_MODE === 'true';
;
  if (isContinuous) {;
    startContinuousMonitoring().catch(error => {;
      console.error('❌ Continuous monitoring failed:', error);
      process.exit(1)})} else {;
    runErrorAutomationOrchestrator();
      .then(result => {;
        if (result.success) {;
          console.log(✅ PM2 Error Automation Orchestrator completed successfully';
          );
          process.exit(0)} else {;
          console.log(;
            '⚠️  PM2 Error Automation Orchestrator completed with issues';
          );
          process.exit(1)}
      });
      .catch(error => {;
        console.error('❌ PM2 Error Automation Orchestrator failed:', error);
        process.exit(1)})}
}
;
module.exports = {;
  runErrorAutomationOrchestrator,;
  startContinuousMonitoring,};
