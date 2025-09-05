#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');



// Get automation interval from environment variable ("default": 1 hour)
const ORCHESTRATOR_INTERVAL = parseInt(process.env.ORCHESTRATOR_INTERVAL) || 3600000;

class MasterErrorFixingOrchestrator {
  constructor() {
    this.fixers = ['enhanced-error-detector',
      'intelligent-typescript-fixer',
      'smart-linting-fixer',
      'auto-import-export-fixer',
      'jsx-tsx-syntax-fixer',
      'dependency-error-resolver',
      'build-error-auto-fixer',
      'error-prevention-monitor'
    ];
    this.healthStatus = {};
    this.performanceMetrics = {};
    this.lastOrchestration = null}

  async run() {
    try {
      .toISOString()}`);
      
      // 1. Check system health
      await this.checkSystemHealth();
      
      // 2. Analyze current error state
      await this.analyzeErrorState();
      
      // 3. Prioritize and schedule fixes
      await this.prioritizeAndScheduleFixes();
      
      // 4. Monitor fixer performance
      await this.monitorFixerPerformance();
      
      // 5. Generate orchestration report
      await this.generateOrchestrationReport();
      
      // 6. Trigger critical fixes if needed
      await this.triggerCriticalFixes();
      
      this.lastOrchestration = new Date();
      } catch (error) {
      console.error('❌ Master error fixing orchestrator "failed": ', error.message)}
  }

  async checkSystemHealth() {
    
    
    try {
      // Check PM2 status
      const pm2Status = execSync('pm2 status --no-daemon', { "encoding": 'utf8' });
      
      // Parse PM2 status to check if all fixers are running
      this.fixers.forEach(fixer => {
        if (pm2Status.includes(fixer)) {
          if (pm2Status.includes(`${fixer} online`)) {
            this.healthStatus[fixer] = 'healthy'} else {
            this.healthStatus[fixer] = 'unhealthy'}
        } else {
          this.healthStatus[fixer] = 'not_running'}
      });
      
      
      } catch (error) {
      }
  }

  async analyzeErrorState() {
    
    
    try {
      // Check for error reports from individual fixers
      const errorReports = ['enhanced-error-detector-report.json',
        'intelligent-typescript-fixer-report.json',
        'smart-linting-fixer-report.json',
        'auto-import-export-fixer-report.json',
        'jsx-tsx-syntax-fixer-report.json',
        'dependency-error-resolver-report.json',
        'build-error-auto-fixer-report.json'
      ];
      
      const currentErrorState = {};
      
      errorReports.forEach(reportFile => {
        const reportPath = path.join(process.cwd(), reportFile);
        if (fs.existsSync(reportPath)) {
          try {
            const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
            currentErrorState[reportFile] = report} catch (error) {
            }
        }
      });
      
      // Analyze error patterns
      const totalErrors = Object.values(currentErrorState).reduce((sum, report) => {
        return sum + (report.totalErrors || report.fixesApplied || 0)}, 0);
      
      
      
      
      this.currentErrorState = currentErrorState} catch (error) {
      }
  }

  async prioritizeAndScheduleFixes() {
    
    
    try {
      const priorities = {
        "critical": [],
        "high": [],
        "medium": [],
        "low": []
      };
      
      // Prioritize based on error types and severity
      if (this.currentErrorState) {
        Object.entries(this.currentErrorState).forEach(([reportFile, report]) => {
          const errorCount = report.totalErrors || report.fixesApplied || 0;
          
          if (errorCount > 100) {
            priorities.critical.push(reportFile)} else if (errorCount > 50) {
            priorities.high.push(reportFile)} else if (errorCount > 20) {
            priorities.medium.push(reportFile)} else {
            priorities.low.push(reportFile)}
        })}
      
      // Schedule fixes based on priority
      if (priorities.critical.length > 0) {
        
        priorities.critical.forEach(reportFile => {
          this.triggerFixerByReport(reportFile)})}
      
      if (priorities.high.length > 0) {
        
        priorities.high.forEach(reportFile => {
          setTimeout(() => {
            this.triggerFixerByReport(reportFile)}, 5000); // 5 second delay
        })}
      
      
      } catch (error) {
      }
  }

  async monitorFixerPerformance() {
    
    
    try {
      // Get PM2 logs for performance analysis
      this.fixers.forEach(fixer => {
        try {
          const logs = execSync(`pm2 logs ${fixer} --lines 50 --nostream`, { "encoding": 'utf8' });
          
          // Analyze performance metrics
          const errorCount = (logs.match(/error|Error/g) || []).length;
          const successCount = (logs.match(/✅|success|Success/g) || []).length;
          const warningCount = (logs.match(/⚠️|warning|Warning/g) || []).length;
          
          this.performanceMetrics[fixer] = {
            errorCount,
            successCount,
            warningCount,
            "successRate": successCount / (successCount + errorCount + warningCount) || 0,
            "lastCheck": new Date().toISOString()
          }} catch (error) {
          this.performanceMetrics[fixer] = {
            "errorCount": 0,
            "successCount": 0,
            "warningCount": 0,
            "successRate": 0,
            "lastCheck": new Date().toISOString(),
            "error": error.message
          }}
      });
      
      
      } catch (error) {
      }
  }

  async generateOrchestrationReport() {
    
    
    const report = {
      "timestamp": new Date().toISOString(),
      "systemHealth": this.healthStatus,
      "currentErrorState": this.currentErrorState,
      "performanceMetrics": this.performanceMetrics,
      "summary": 'Master error fixing orchestrator completed',
      "status": 'completed',
      "recommendations": this.generateRecommendations()
    };
    
    const reportPath = path.join(process.cwd(), 'master-error-fixing-orchestrator-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    }

  async triggerCriticalFixes() {
    
    
    try {
      // Check if any fixers are not running
      const unhealthyFixers = Object.entries(this.healthStatus)
        .filter(([fixer, status]) => status !== 'healthy')
        .map(([fixer]) => fixer);
      
      if (unhealthyFixers.length > 0) {
        }`);
        unhealthyFixers.forEach(fixer => {
          try {
            execSync(`pm2 restart ${fixer}`, { "stdio": 'pipe' });
            } catch (error) {
            }
        })}
      
      // Check for high error rates
      const highErrorFixers = Object.entries(this.performanceMetrics)
        .filter(([fixer, metrics]) => metrics.successRate < 0.5)
        .map(([fixer]) => fixer);
      
      if (highErrorFixers.length > 0) {
        }`);
        highErrorFixers.forEach(fixer => {
          try {
            execSync(`pm2 restart ${fixer}`, { "stdio": 'pipe' });
            } catch (error) {
            }
        })}
      
    } catch (error) {
      }
  }

  triggerFixerByReport(reportFile) {
    const fixerMap = {
      'enhanced-error-detector-report.json': 'enhanced-error-detector',
      'intelligent-typescript-fixer-report.json': 'intelligent-typescript-fixer',
      'smart-linting-fixer-report.json': 'smart-linting-fixer',
      'auto-import-export-fixer-report.json': 'auto-import-export-fixer',
      'jsx-tsx-syntax-fixer-report.json': 'jsx-tsx-syntax-fixer',
      'dependency-error-resolver-report.json': 'dependency-error-resolver',
      'build-error-auto-fixer-report.json': 'build-error-auto-fixer'
    };
    
    const fixerName = fixerMap[reportFile];
    if (fixerName) {
      try {
        execSync(`pm2 restart ${fixerName}`, { "stdio": 'pipe' });
        } catch (error) {
        }
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Check system health recommendations
    Object.entries(this.healthStatus).forEach(([fixer, status]) => {
      if (status === 'not_running') {
        recommendations.push(`Start ${fixer} - currently not running`)} else if (status === 'unhealthy') {
        recommendations.push(`Restart ${fixer} - currently unhealthy`)}
    });
    
    // Check performance recommendations
    Object.entries(this.performanceMetrics).forEach(([fixer, metrics]) => {
      if (metrics.successRate < 0.3) {
        recommendations.push(`Investigate ${fixer} - very low success rate (${(metrics.successRate * 100).toFixed(1)}%)`)} else if (metrics.successRate < 0.7) {
        recommendations.push(`Monitor ${fixer} - moderate success rate (${(metrics.successRate * 100).toFixed(1)}%)`)}
    });
    
    // Check error state recommendations
    if (this.currentErrorState) {
      const totalErrors = Object.values(this.currentErrorState).reduce((sum, report) => {
        return sum + (report.totalErrors || report.fixesApplied || 0)}, 0);
      
      if (totalErrors > 200) {
        recommendations.push('High error count detected - consider manual intervention')} else if (totalErrors > 100) {
        recommendations.push('Moderate error count - monitor closely')}
    }
    
    return recommendations}
}

// Main execution
async function main() {
  const orchestrator = new MasterErrorFixingOrchestrator();
  
  // Run initial orchestration
  await orchestrator.run();
  
  // Set up continuous orchestration
  setInterval(async () => {
    await orchestrator.run()}, ORCHESTRATOR_INTERVAL);
  
  }

// Handle graceful shutdown
process.on('SIGINT', () => {
  
  process.exit(0)});

process.on('SIGTERM', () => {
  
  process.exit(0)});

// Start the orchestrator
main().catch(error => {
  console.error('❌ Master error fixing orchestrator failed to "start": ', error.message);
  process.exit(1)});