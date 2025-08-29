#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎯 Starting error fixing orchestrator automation...');

// Get automation interval from environment variable (default: 15 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 900000; // 15 minutes

class ErrorFixingOrchestrator {
  constructor() {
    this.automations = [
      {
        name: 'typescript-error-fixer',
        script: './scripts/automation/typescript-error-fixer.cjs',
        priority: 'high',
        description: 'Fixes TypeScript compilation errors, case sensitivity issues, and type mismatches'
      },
      {
        name: 'console-error-fixer',
        script: './scripts/automation/console-error-fixer.cjs',
        priority: 'high',
        description: 'Removes console statements and fixes runtime errors'
      },
      {
        name: 'project-health-monitor',
        script: './scripts/automation/project-health-monitor.cjs',
        priority: 'medium',
        description: 'Monitors overall project health and applies automatic fixes'
      },
      {
        name: 'security-audit',
        script: './scripts/automation/security-audit.cjs',
        priority: 'high',
        description: 'Identifies and fixes security vulnerabilities'
      },
      {
        name: 'quality-checks',
        script: './scripts/automation/quality-checks.cjs',
        priority: 'medium',
        description: 'Runs code quality checks and applies fixes'
      },
      {
        name: 'dependency-updates',
        script: './scripts/automation/dependency-updates.cjs',
        priority: 'medium',
        description: 'Updates dependencies and fixes compatibility issues'
      }
    ];
    
    this.reports = [];
    this.fixesApplied = 0;
    this.errorsResolved = 0;
  }

  async runOrchestration() {
    try {
      console.log(`🎯 Running error fixing orchestration at ${new Date().toISOString()}`);
      
      const startTime = Date.now();
      const results = {
        timestamp: new Date().toISOString(),
        automations: [],
        summary: {},
        recommendations: []
      };
      
      // 1. Run initial project assessment
      console.log('🔍 Running initial project assessment...');
      const initialAssessment = await this.assessProjectHealth();
      results.initialAssessment = initialAssessment;
      
      // 2. Execute automations in priority order
      console.log('🚀 Executing error fixing automations...');
      const automationResults = await this.executeAutomations();
      results.automations = automationResults;
      
      // 3. Reassess project health
      console.log('🔍 Running post-fix assessment...');
      const postFixAssessment = await this.assessProjectHealth();
      results.postFixAssessment = postFixAssessment;
      
      // 4. Calculate improvement metrics
      const improvementMetrics = this.calculateImprovements(initialAssessment, postFixAssessment);
      results.improvementMetrics = improvementMetrics;
      
      // 5. Generate comprehensive summary
      results.summary = this.generateSummary(results);
      
      // 6. Generate recommendations
      results.recommendations = this.generateRecommendations(results);
      
      // 7. Save comprehensive report
      const reportPath = path.join(process.cwd(), 'error-fixing-orchestrator-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      console.log(`✅ Error fixing orchestrator report saved to ${reportPath}`);
      
      // 8. Display results
      this.displayResults(results);
      
      const duration = Date.now() - startTime;
      console.log(`✅ Error fixing orchestration completed in ${duration}ms`);
      
      return results;
      
    } catch (error) {
      console.error('❌ Error fixing orchestration failed:', error.message);
      throw error;
    }
  }

  async assessProjectHealth() {
    const assessment = {
      timestamp: new Date().toISOString(),
      typescript: {},
      build: {},
      dependencies: {},
      security: {},
      quality: {},
      overall: 'unknown'
    };
    
    try {
      // Check TypeScript compilation
      console.log('  📝 Checking TypeScript compilation...');
      try {
        execSync('npm run type-check', { stdio: 'pipe' });
        assessment.typescript = { status: 'clean', errors: 0 };
      } catch (error) {
        const errorOutput = error.message;
        const errorCount = (errorOutput.match(/error TS\d+:/g) || []).length;
        assessment.typescript = { status: 'errors', errors: errorCount, details: errorOutput };
      }
      
      // Check build status
      console.log('  🏗️ Checking build status...');
      try {
        execSync('npm run build', { stdio: 'pipe' });
        assessment.build = { status: 'success' };
      } catch (error) {
        assessment.build = { status: 'failed', error: error.message };
      }
      
      // Check dependencies
      console.log('  📦 Checking dependencies...');
      try {
        const auditOutput = execSync('npm audit --json', { stdio: 'pipe' }).toString();
        const audit = JSON.parse(auditOutput);
        const vulnerabilities = audit.metadata?.vulnerabilities || {};
        const totalVulns = Object.values(vulnerabilities).reduce((sum, count) => sum + count, 0);
        
        assessment.dependencies = {
          status: totalVulns === 0 ? 'clean' : 'vulnerabilities',
          vulnerabilities: totalVulns,
          details: vulnerabilities
        };
      } catch (error) {
        assessment.dependencies = { status: 'error', error: error.message };
      }
      
      // Check security
      console.log('  🔒 Checking security...');
      const securityIssues = await this.checkSecurityIssues();
      assessment.security = securityIssues;
      
      // Check code quality
      console.log('  🧹 Checking code quality...');
      try {
        execSync('npm run lint', { stdio: 'pipe' });
        assessment.quality = { status: 'clean', issues: 0 };
      } catch (error) {
        assessment.quality = { status: 'issues', error: error.message };
      }
      
      // Calculate overall status
      assessment.overall = this.calculateOverallStatus(assessment);
      
    } catch (error) {
      assessment.overall = 'error';
      assessment.error = error.message;
    }
    
    return assessment;
  }

  async checkSecurityIssues() {
    const issues = [];
    
    try {
      // Check for sensitive files
      const sensitivePatterns = ['.env', '.env.local', 'secrets.json', 'config.json'];
      for (const pattern of sensitivePatterns) {
        if (fs.existsSync(pattern)) {
          issues.push(`Sensitive file found: ${pattern}`);
        }
      }
      
      // Check for hardcoded secrets in source code
      const srcPath = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcPath)) {
        const allFiles = this.getAllFiles(srcPath, ['.tsx', '.ts', '.jsx', '.js']);
        
        for (const file of allFiles) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const secretPatterns = [
              /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi,
              /password\s*[:=]\s*['"][^'"]+['"]/gi,
              /secret\s*[:=]\s*['"][^'"]+['"]/gi
            ];
            
            for (const pattern of secretPatterns) {
              if (pattern.test(content)) {
                issues.push(`Potential hardcoded secret in ${file}`);
                break;
              }
            }
          } catch (err) {
            // Skip files that can't be read
          }
        }
      }
      
    } catch (error) {
      issues.push(`Security check failed: ${error.message}`);
    }
    
    return {
      status: issues.length === 0 ? 'secure' : 'issues',
      issues: issues.length,
      details: issues
    };
  }

  async executeAutomations() {
    const results = [];
    
    // Sort automations by priority
    const sortedAutomations = this.automations.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    
    for (const automation of sortedAutomations) {
      try {
        console.log(`  🚀 Executing ${automation.name} (${automation.priority} priority)...`);
        
        const startTime = Date.now();
        execSync(`node ${automation.script}`, { stdio: 'pipe' });
        const duration = Date.now() - startTime;
        
        results.push({
          name: automation.name,
          status: 'success',
          duration,
          priority: automation.priority,
          description: automation.description
        });
        
        console.log(`    ✅ ${automation.name} completed successfully in ${duration}ms`);
        
      } catch (error) {
        console.log(`    ⚠️ ${automation.name} failed: ${error.message}`);
        
        results.push({
          name: automation.name,
          status: 'failed',
          error: error.message,
          priority: automation.priority,
          description: automation.description
        });
      }
    }
    
    return results;
  }

  calculateImprovements(initial, postFix) {
    const improvements = {
      typescript: {},
      build: {},
      dependencies: {},
      security: {},
      quality: {},
      overall: {}
    };
    
    // TypeScript improvements
    if (initial.typescript && postFix.typescript) {
      const initialErrors = initial.typescript.errors || 0;
      const postFixErrors = postFix.typescript.errors || 0;
      improvements.typescript = {
        errorsResolved: initialErrors - postFixErrors,
        improvement: initialErrors > 0 ? ((initialErrors - postFixErrors) / initialErrors * 100).toFixed(1) + '%' : '0%'
      };
    }
    
    // Build improvements
    if (initial.build && postFix.build) {
      improvements.build = {
        wasFixed: initial.build.status === 'failed' && postFix.build.status === 'success',
        status: postFix.build.status
      };
    }
    
    // Dependencies improvements
    if (initial.dependencies && postFix.dependencies) {
      const initialVulns = initial.dependencies.vulnerabilities || 0;
      const postFixVulns = postFix.dependencies.vulnerabilities || 0;
      improvements.dependencies = {
        vulnerabilitiesResolved: initialVulns - postFixVulns,
        improvement: initialVulns > 0 ? ((initialVulns - postFixVulns) / initialVulns * 100).toFixed(1) + '%' : '0%'
      };
    }
    
    // Security improvements
    if (initial.security && postFix.security) {
      const initialIssues = initial.security.issues || 0;
      const postFixIssues = postFix.security.issues || 0;
      improvements.security = {
        issuesResolved: initialIssues - postFixIssues,
        improvement: initialIssues > 0 ? ((initialIssues - postFixIssues) / initialIssues * 100).toFixed(1) + '%' : '0%'
      };
    }
    
    // Quality improvements
    if (initial.quality && postFix.quality) {
      improvements.quality = {
        wasFixed: initial.quality.status === 'issues' && postFix.quality.status === 'clean',
        status: postFix.quality.status
      };
    }
    
    // Overall improvements
    if (initial.overall && postFix.overall) {
      improvements.overall = {
        initialStatus: initial.overall,
        finalStatus: postFix.overall,
        improved: this.isStatusImproved(initial.overall, postFix.overall)
      };
    }
    
    return improvements;
  }

  isStatusImproved(initial, final) {
    const statusOrder = ['error', 'critical', 'poor', 'fair', 'good', 'excellent'];
    const initialIndex = statusOrder.indexOf(initial);
    const finalIndex = statusOrder.indexOf(final);
    return finalIndex > initialIndex;
  }

  calculateOverallStatus(assessment) {
    const scores = [];
    
    // TypeScript score
    if (assessment.typescript.status === 'clean') scores.push(100);
    else if (assessment.typescript.status === 'errors') {
      const errorCount = assessment.typescript.errors || 0;
      scores.push(Math.max(0, 100 - (errorCount * 10)));
    }
    
    // Build score
    if (assessment.build.status === 'success') scores.push(100);
    else if (assessment.build.status === 'failed') scores.push(0);
    
    // Dependencies score
    if (assessment.dependencies.status === 'clean') scores.push(100);
    else if (assessment.dependencies.status === 'vulnerabilities') {
      const vulnCount = assessment.dependencies.vulnerabilities || 0;
      scores.push(Math.max(0, 100 - (vulnCount * 20)));
    }
    
    // Security score
    if (assessment.security.status === 'secure') scores.push(100);
    else if (assessment.security.status === 'issues') {
      const issueCount = assessment.security.issues || 0;
      scores.push(Math.max(0, 100 - (issueCount * 15)));
    }
    
    // Quality score
    if (assessment.quality.status === 'clean') scores.push(100);
    else if (assessment.quality.status === 'issues') scores.push(50);
    
    if (scores.length === 0) return 'unknown';
    
    const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    
    if (averageScore >= 90) return 'excellent';
    else if (averageScore >= 75) return 'good';
    else if (averageScore >= 50) return 'fair';
    else if (averageScore >= 25) return 'poor';
    else return 'critical';
  }

  generateSummary(results) {
    const summary = {
      totalAutomations: results.automations.length,
      successfulAutomations: results.automations.filter(a => a.status === 'success').length,
      failedAutomations: results.automations.filter(a => a.status === 'failed').length,
      totalDuration: results.automations.reduce((sum, a) => sum + (a.duration || 0), 0),
      improvements: results.improvementMetrics
    };
    
    // Calculate total fixes applied
    let totalFixes = 0;
    if (results.improvementMetrics.typescript) {
      totalFixes += results.improvementMetrics.typescript.errorsResolved || 0;
    }
    if (results.improvementMetrics.dependencies) {
      totalFixes += results.improvementMetrics.dependencies.vulnerabilitiesResolved || 0;
    }
    if (results.improvementMetrics.security) {
      totalFixes += results.improvementMetrics.security.issuesResolved || 0;
    }
    
    summary.totalFixesApplied = totalFixes;
    
    return summary;
  }

  generateRecommendations(results) {
    const recommendations = [];
    
    // Check for failed automations
    const failedAutomations = results.automations.filter(a => a.status === 'failed');
    if (failedAutomations.length > 0) {
      recommendations.push(`Review and fix ${failedAutomations.length} failed automation(s): ${failedAutomations.map(a => a.name).join(', ')}`);
    }
    
    // Check for areas that still need improvement
    if (results.postFixAssessment) {
      if (results.postFixAssessment.typescript.status === 'errors') {
        recommendations.push('Continue fixing remaining TypeScript errors');
      }
      
      if (results.postFixAssessment.dependencies.status === 'vulnerabilities') {
        recommendations.push('Address remaining security vulnerabilities in dependencies');
      }
      
      if (results.postFixAssessment.security.status === 'issues') {
        recommendations.push('Review and resolve remaining security issues');
      }
      
      if (results.postFixAssessment.build.status === 'failed') {
        recommendations.push('Fix build configuration issues');
      }
    }
    
    // Performance recommendations
    const totalDuration = results.summary.totalDuration;
    if (totalDuration > 300000) { // 5 minutes
      recommendations.push('Consider optimizing automation performance - total execution time is high');
    }
    
    // General recommendations
    if (results.summary.totalFixesApplied > 0) {
      recommendations.push('Run the orchestration again to verify all issues are resolved');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Project is in excellent health - continue monitoring with regular orchestration runs');
    }
    
    return recommendations;
  }

  displayResults(results) {
    console.log('\n🎯 ERROR FIXING ORCHESTRATOR RESULTS');
    console.log('=====================================');
    console.log(`Timestamp: ${results.timestamp}`);
    
    console.log('\n📊 EXECUTION SUMMARY:');
    console.log(`Total Automations: ${results.summary.totalAutomations}`);
    console.log(`Successful: ${results.summary.successfulAutomations}`);
    console.log(`Failed: ${results.summary.failedAutomations}`);
    console.log(`Total Duration: ${(results.summary.totalDuration / 1000).toFixed(1)}s`);
    console.log(`Total Fixes Applied: ${results.summary.totalFixesApplied}`);
    
    console.log('\n🔍 IMPROVEMENT METRICS:');
    if (results.improvementMetrics.typescript) {
      console.log(`TypeScript: ${results.improvementMetrics.typescript.errorsResolved} errors resolved (${results.improvementMetrics.typescript.improvement} improvement)`);
    }
    if (results.improvementMetrics.dependencies) {
      console.log(`Dependencies: ${results.improvementMetrics.dependencies.vulnerabilitiesResolved} vulnerabilities resolved (${results.improvementMetrics.dependencies.improvement} improvement)`);
    }
    if (results.improvementMetrics.security) {
      console.log(`Security: ${results.improvementMetrics.security.issuesResolved} issues resolved (${results.improvementMetrics.security.improvement} improvement)`);
    }
    if (results.improvementMetrics.overall) {
      console.log(`Overall Status: ${results.improvementMetrics.overall.initialStatus} → ${results.improvementMetrics.overall.finalStatus} ${results.improvementMetrics.overall.improved ? '✅' : '❌'}`);
    }
    
    if (results.recommendations.length > 0) {
      console.log('\n💡 RECOMMENDATIONS:');
      results.recommendations.forEach(rec => console.log(`  📝 ${rec}`));
    }
    
    console.log('\n📈 NEXT STEPS:');
    if (results.summary.totalFixesApplied > 0) {
      console.log('  🔄 Run orchestration again to verify all fixes');
    } else {
      console.log('  ✅ All issues resolved - continue monitoring');
    }
  }

  getAllFiles(dirPath, extensions) {
    const files = [];
    
    function traverse(currentPath) {
      try {
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
      } catch (error) {
        // Skip directories that can't be accessed
      }
    }
    
    traverse(dirPath);
    return files;
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting error fixing orchestrator automation...');
  
  const orchestrator = new ErrorFixingOrchestrator();
  
  // Run immediately
  await orchestrator.runOrchestration();
  
  // Set up continuous execution
  setInterval(async () => {
    await orchestrator.runOrchestration();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🔄 Error fixing orchestrator will run every ${AUTOMATION_INTERVAL / 60000} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Error fixing orchestrator automation stopped');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Error fixing orchestrator automation stopped');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Fatal error in error fixing orchestrator:', error);
  process.exit(1);
});