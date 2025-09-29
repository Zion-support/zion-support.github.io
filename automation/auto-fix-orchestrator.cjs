#!/usr/bin/env node
      content = content.replace(/<<<<<<<.*$/gm, '');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        fixes++;
      }
      
      return fixes;
      
    } catch (error) {
      return 0;
    }
  }

  async generateFixReport(fixResults) {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        fixResults,
        history: this.fixHistory.slice(-10), // Last 10 fixes
        summary: {
          totalFixes: fixResults.totalFixes,
          success: fixResults.success,
          fixTypes: fixResults.fixes.map(f => f.type)
        }
      };
      
      fs.writeFileSync(
        path.join(process.cwd(), 'automation/logs/auto-fix-report.json'),
        JSON.stringify(report, null, 2)
      );
      
    } catch (error) {
      this.log(`Error generating fix report: ${error.message}`, 'ERROR');
    }
  }

  async start() {
    this.isRunning = true;
    this.log('🚀 Auto-Fix Orchestrator started');
    
    // Initial comprehensive fix
    await this.runComprehensiveFix();
    
    // Set up interval
    setInterval(async () => {
      if (this.isRunning) {
        this.lastCheck = new Date();
        await this.runComprehensiveFix();
      }
    }, this.checkInterval);
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      this.log('🛑 Shutting down Auto-Fix Orchestrator...');
      this.isRunning = false;
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      this.log('🛑 Shutting down Auto-Fix Orchestrator...');
      this.isRunning = false;
      process.exit(0);
    });
  }
}

// Start the orchestrator
const autoFixOrchestrator = new AutoFixOrchestrator();
autoFixOrchestrator.start().catch(error => {
  console.error('❌ Failed to start Auto-Fix Orchestrator:', error);
  process.exit(1);
});
/* eslint-disable */
const { execSync } = require('child_process');

function run(cmd) {
  console.log(`[auto-fix] ${cmd}`);
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (e) {
    console.log(`[auto-fix] Command failed (continuing): ${cmd}`);
  }
}

function main() {
  // Formatting and linting quick fixes
  run('npx prettier --write .');
  run('npm run lint --if-present');
  run('npm run linting:fix --if-present');
  // Attempt type-check; non-blocking
  run('npm run type-check --if-present');
  console.log('[auto-fix] Done');
}

if (require.main === module) main();
