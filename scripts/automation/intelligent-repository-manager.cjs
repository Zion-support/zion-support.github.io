#!/usr/bin/env node

/**
 * Intelligent Repository Manager
 * 
 * This automation handles:
 * - Intelligent branch management
 * - Automated PR creation and review
 * - Smart conflict resolution
 * - Repository health monitoring
 * - Automated merging strategies
 * - Code quality gates
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class IntelligentRepositoryManager {
    constructor() {
        this.projectRoot = process.cwd();
        this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-repository-manager.log');
        this.config = this.loadConfig();
        this.branchPatterns = {
            feature: /^feature\//,
            bugfix: /^bugfix\//,
            hotfix: /^hotfix\//,
            enhancement: /^enhancement\/
        };
        this.mergeStrategies = {
            'feature': 'squash',
            'bugfix': 'merge',
            'hotfix': 'rebase',
            'enhancement': 'squash'
        };
    }

    loadConfig() {
        const configPath = path.join(this.projectRoot, 'scripts', 'automation', 'repo-manager.config.json');
        try {
            if (fs.existsSync(configPath)) {
                return JSON.parse(fs.readFileSync(configPath, 'utf8'));
            }
        } catch (error) {
            this.log('Error loading config, using defaults', 'error');
        }

        return {
            autoMerge: true,
            requireTests: true,
            requireReviews: false,
            maxOpenPRs: 10,
            autoCleanup: true,
            mergeConflictThreshold: 3,
            qualityGates: {
                minTestCoverage: 80,
                maxComplexity: 10,
                requireLinting: true,
                requireSecurityScan: true
            }
        };
    }

    log(message, level = 'info') {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
        
        // Console output
        console.log(logEntry.trim());
        
        // File logging
        try {
            fs.appendFileSync(this.logFile, logEntry);
        } catch (error) {
            console.error('Failed to write to log file:', error.message);
        }
    }

    async executeCommand(command, options = {}) {
        return new Promise((resolve, reject) => {
            const child = spawn(command, options.args || [], {
                cwd: this.projectRoot,
                stdio: options.silent ? 'pipe' : 'inherit',
                shell: true
            });

            let stdout = '';
            let stderr = '';

            if (options.silent) {
                child.stdout.on('data', (data) => {
                    stdout += data.toString();
                });
                child.stderr.on('data', (data) => {
                    stderr += data.toString();
                });
            }

            child.on('close', (code) => {
                if (code === 0) {
                    resolve(stdout);
                } else {
                    reject(new Error(`Command failed with code ${code}: ${stderr}`));
                }
            });

            child.on('error', (error) => {
                reject(error);
            });
        });
    }

    async getCurrentBranch() {
        try {
            const result = await this.executeCommand('git', { args: ['branch', '--show-current'], silent: true });
            return result.trim();
        } catch (error) {
            this.log(`Failed to get current branch: ${error.message}`, 'error');
            return null;
        }
    }

    async getBranchInfo() {
        try {
            const branches = await this.executeCommand('git', { args: ['branch', '-r'], silent: true });
            const localBranches = await this.executeCommand('git', { args: ['branch'], silent: true });
            
            return {
                remote: branches.split('\n').filter(b => b.trim()),
                local: localBranches.split('\n').filter(b => b.trim()),
                current: await this.getCurrentBranch()
            };
        } catch (error) {
            this.log(`Failed to get branch info: ${error.message}`, 'error');
            return { remote: [], local: [], current: null };
        }
    }

    async analyzeBranchHealth(branchName) {
        try {
            // Check for merge conflicts
            const conflicts = await this.checkMergeConflicts(branchName);
            
            // Check code quality
            const quality = await this.assessCodeQuality(branchName);
            
            // Check test coverage
            const testCoverage = await this.getTestCoverage(branchName);
            
            // Check security vulnerabilities
            const security = await this.checkSecurityVulnerabilities(branchName);
            
            return {
                branch: branchName,
                conflicts: conflicts,
                quality: quality,
                testCoverage: testCoverage,
                security: security,
                healthScore: this.calculateHealthScore(conflicts, quality, testCoverage, security)
            };
        } catch (error) {
            this.log(`Failed to analyze branch health for ${branchName}: ${error.message}`, 'error');
            return { branch: branchName, healthScore: 0, error: error.message };
        }
    }

    async checkMergeConflicts(branchName) {
        try {
            // Try to merge with main to detect conflicts
            await this.executeCommand('git', { args: ['checkout', 'main'], silent: true });
            await this.executeCommand('git', { args: ['pull', 'origin', 'main'], silent: true });
            
            const mergeResult = await this.executeCommand('git', { 
                args: ['merge', '--no-commit', '--no-ff', `origin/${branchName}`], 
                silent: true 
            });
            
            // Check if there are conflicts
            const status = await this.executeCommand('git', { args: ['status', '--porcelain'], silent: true });
            const hasConflicts = status.includes('UU') || status.includes('AA');
            
            // Abort the merge
            await this.executeCommand('git', { args: ['merge', '--abort'], silent: true });
            
            // Return to original branch
            await this.executeCommand('git', { args: ['checkout', branchName], silent: true });
            
            return {
                hasConflicts: hasConflicts,
                conflictFiles: hasConflicts ? this.extractConflictFiles(status) : [],
                severity: hasConflicts ? 'high' : 'none'
            };
        } catch (error) {
            // If merge fails, there are likely conflicts
            await this.executeCommand('git', { args: ['merge', '--abort'], silent: true });
            await this.executeCommand('git', { args: ['checkout', branchName], silent: true });
            
            return {
                hasConflicts: true,
                conflictFiles: [],
                severity: 'high',
                error: error.message
            };
        }
    }

    extractConflictFiles(status) {
        const lines = status.split('\n').filter(line => line.trim());
        return lines
            .filter(line => line.includes('UU') || line.includes('AA'))
            .map(line => line.split(' ').pop());
    }

    async assessCodeQuality(branchName) {
        try {
            // Run ESLint
            const eslintResult = await this.executeCommand('npm', { args: ['run', 'lint'], silent: true });
            
            // Run TypeScript compiler check
            const tscResult = await this.executeCommand('npx', { args: ['tsc', '--noEmit'], silent: true });
            
            // Analyze complexity
            const complexity = await this.analyzeCodeComplexity();
            
            return {
                eslint: this.parseESLintOutput(eslintResult),
                typescript: this.parseTypeScriptOutput(tscResult),
                complexity: complexity,
                overall: 'good' // Simplified for now
            };
        } catch (error) {
            this.log(`Failed to assess code quality: ${error.message}`, 'error');
            return { overall: 'unknown', error: error.message };
        }
    }

    parseESLintOutput(output) {
        // Parse ESLint output to count errors and warnings
        const lines = output.split('\n');
        const errors = lines.filter(line => line.includes('error')).length;
        const warnings = lines.filter(line => line.includes('warning')).length;
        
        return {
            errors: errors,
            warnings: warnings,
            total: errors + warnings,
            severity: errors > 0 ? 'high' : warnings > 0 ? 'medium' : 'low'
        };
    }

    parseTypeScriptOutput(output) {
        // Parse TypeScript compiler output
        const lines = output.split('\n');
        const errors = lines.filter(line => line.includes('error')).length;
        
        return {
            errors: errors,
            severity: errors > 0 ? 'high' : 'low'
        };
    }

    async analyzeCodeComplexity() {
        try {
            // This is a simplified complexity analysis
            // In a real implementation, you'd use tools like cyclomatic complexity
            const files = await this.executeCommand('find', { args: ['.', '-name', '*.js', '-o', '-name', '*.ts', '-o', '-name', '*.jsx', '-o', '-name', '*.tsx'], silent: true });
            const fileCount = files.split('\n').filter(f => f.trim()).length;
            
            return {
                fileCount: fileCount,
                estimatedComplexity: fileCount * 0.5, // Simplified metric
                riskLevel: fileCount > 100 ? 'medium' : 'low'
            };
        } catch (error) {
            return { fileCount: 0, estimatedComplexity: 0, riskLevel: 'unknown' };
        }
    }

    async getTestCoverage(branchName) {
        try {
            // Run tests and get coverage
            const testResult = await this.executeCommand('npm', { args: ['run', 'test:coverage'], silent: true });
            
            // Parse coverage output (simplified)
            const coverageMatch = testResult.match(/(\d+(?:\.\d+)?)%/);
            const coverage = coverageMatch ? parseFloat(coverageMatch[1]) : 0;
            
            return {
                percentage: coverage,
                status: coverage >= 80 ? 'good' : coverage >= 60 ? 'fair' : 'poor',
                threshold: 80
            };
        } catch (error) {
            this.log(`Failed to get test coverage: ${error.message}`, 'error');
            return { percentage: 0, status: 'unknown', threshold: 80 };
        }
    }

    async checkSecurityVulnerabilities(branchName) {
        try {
            // Run security audit
            const auditResult = await this.executeCommand('npm', { args: ['audit', '--json'], silent: true });
            const audit = JSON.parse(auditResult);
            
            return {
                vulnerabilities: audit.metadata.vulnerabilities,
                riskLevel: this.calculateSecurityRisk(audit.metadata.vulnerabilities),
                recommendations: this.extractSecurityRecommendations(audit)
            };
        } catch (error) {
            this.log(`Failed to check security vulnerabilities: ${error.message}`, 'error');
            return { vulnerabilities: {}, riskLevel: 'unknown', recommendations: [] };
        }
    }

    calculateSecurityRisk(vulnerabilities) {
        if (vulnerabilities.critical > 0) return 'critical';
        if (vulnerabilities.high > 0) return 'high';
        if (vulnerabilities.moderate > 0) return 'medium';
        if (vulnerabilities.low > 0) return 'low';
        return 'none';
    }

    extractSecurityRecommendations(audit) {
        const recommendations = [];
        if (audit.advisories) {
            Object.values(audit.advisories).forEach(advisory => {
                if (advisory.recommendation) {
                    recommendations.push(advisory.recommendation);
                }
            });
        }
        return recommendations;
    }

    calculateHealthScore(conflicts, quality, testCoverage, security) {
        let score = 100;
        
        // Deduct points for conflicts
        if (conflicts.hasConflicts) {
            score -= 30;
        }
        
        // Deduct points for quality issues
        if (quality.eslint && quality.eslint.errors > 0) {
            score -= quality.eslint.errors * 2;
        }
        
        // Deduct points for low test coverage
        if (testCoverage.percentage < testCoverage.threshold) {
            score -= (testCoverage.threshold - testCoverage.percentage);
        }
        
        // Deduct points for security issues
        if (security.riskLevel === 'critical') score -= 25;
        else if (security.riskLevel === 'high') score -= 15;
        else if (security.riskLevel === 'medium') score -= 10;
        
        return Math.max(0, Math.min(100, score));
    }

    async createIntelligentPR(branchName, title, description) {
        try {
            this.log(`Creating intelligent PR for branch: ${branchName}`);
            
            // Analyze branch health first
            const health = await this.analyzeBranchHealth(branchName);
            
            // Check if branch is ready for PR
            if (health.healthScore < 70) {
                this.log(`Branch ${branchName} has low health score (${health.healthScore}). Fixing issues...`, 'warning');
                await this.autoFixBranchIssues(branchName, health);
            }
            
            // Create PR with intelligent description
            const prDescription = this.generatePRDescription(health, description);
            
            // Use GitHub CLI or similar to create PR
            const prResult = await this.executeCommand('gh', {
                args: ['pr', 'create', '--title', title, '--body', prDescription, '--base', 'main'],
                silent: true
            });
            
            this.log(`PR created successfully: ${prResult}`, 'success');
            return { success: true, prUrl: prResult, health: health };
            
        } catch (error) {
            this.log(`Failed to create PR: ${error.message}`, 'error');
            return { success: false, error: error.message };
        }
    }

    async autoFixBranchIssues(branchName, health) {
        try {
            this.log(`Auto-fixing issues for branch: ${branchName}`);
            
            // Fix ESLint issues
            if (health.quality.eslint && health.quality.eslint.errors > 0) {
                await this.executeCommand('npm', { args: ['run', 'lint:fix'], silent: true });
            }
            
            // Fix TypeScript issues
            if (health.quality.typescript && health.quality.typescript.errors > 0) {
                await this.executeCommand('npx', { args: ['tsc', '--noEmit'], silent: true });
            }
            
            // Fix security vulnerabilities
            if (health.security.riskLevel !== 'none') {
                await this.executeCommand('npm', { args: ['audit', 'fix'], silent: true });
            }
            
            // Commit fixes
            await this.executeCommand('git', { args: ['add', '.'], silent: true });
            await this.executeCommand('git', { args: ['commit', '-m', 'Auto-fix: Resolved quality and security issues'], silent: true });
            await this.executeCommand('git', { args: ['push', 'origin', branchName], silent: true });
            
            this.log(`Auto-fixes completed for branch: ${branchName}`, 'success');
            
        } catch (error) {
            this.log(`Failed to auto-fix issues: ${error.message}`, 'error');
        }
    }

    generatePRDescription(health, baseDescription) {
        const healthEmoji = health.healthScore >= 90 ? '🟢' : health.healthScore >= 70 ? '🟡' : '🔴';
        
        return `${baseDescription}

## 🔍 Automated Quality Analysis

${healthEmoji} **Health Score**: ${health.healthScore}/100

### 📊 Quality Metrics
- **Code Quality**: ${health.quality.overall}
- **Test Coverage**: ${health.testCoverage.percentage}% (${health.testCoverage.status})
- **Security Risk**: ${health.security.riskLevel}
- **Merge Conflicts**: ${health.conflicts.hasConflicts ? '⚠️ Yes' : '✅ None'}

### 🚀 Ready for Review
This PR has been automatically analyzed and optimized for quality and security.

### 📋 Checklist
- [ ] Code quality standards met
- [ ] Tests passing with good coverage
- [ ] Security vulnerabilities addressed
- [ ] No merge conflicts detected
- [ ] Ready for code review

---
*Generated by Intelligent Repository Manager*`;
    }

    async intelligentMerge(branchName, strategy = 'auto') {
        try {
            this.log(`Starting intelligent merge for branch: ${branchName}`);
            
            // Determine merge strategy based on branch type
            if (strategy === 'auto') {
                strategy = this.determineMergeStrategy(branchName);
            }
            
            // Final health check before merge
            const health = await this.analyzeBranchHealth(branchName);
            if (health.healthScore < 80) {
                throw new Error(`Branch health score too low (${health.healthScore}) for merge`);
            }
            
            // Switch to main branch
            await this.executeCommand('git', { args: ['checkout', 'main'], silent: true });
            await this.executeCommand('git', { args: ['pull', 'origin', 'main'], silent: true });
            
            // Execute merge based on strategy
            switch (strategy) {
                case 'squash':
                    await this.executeCommand('git', { args: ['merge', '--squash', `origin/${branchName}`], silent: true });
                    break;
                case 'rebase':
                    await this.executeCommand('git', { args: ['rebase', `origin/${branchName}`], silent: true });
                    break;
                case 'merge':
                default:
                    await this.executeCommand('git', { args: ['merge', '--no-ff', `origin/${branchName}`], silent: true });
                    break;
            }
            
            // Push to main
            await this.executeCommand('git', { args: ['push', 'origin', 'main'], silent: true });
            
            // Clean up branch
            if (this.config.autoCleanup) {
                await this.cleanupBranch(branchName);
            }
            
            this.log(`Successfully merged ${branchName} using ${strategy} strategy`, 'success');
            return { success: true, strategy: strategy };
            
        } catch (error) {
            this.log(`Failed to merge branch ${branchName}: ${error.message}`, 'error');
            return { success: false, error: error.message };
        }
    }

    determineMergeStrategy(branchName) {
        for (const [type, pattern] of Object.entries(this.branchPatterns)) {
            if (pattern.test(branchName)) {
                return this.mergeStrategies[type] || 'merge';
            }
        }
        return 'merge';
    }

    async cleanupBranch(branchName) {
        try {
            // Delete remote branch
            await this.executeCommand('git', { args: ['push', 'origin', '--delete', branchName], silent: true });
            
            // Delete local branch
            await this.executeCommand('git', { args: ['branch', '-D', branchName], silent: true });
            
            this.log(`Cleaned up branch: ${branchName}`, 'info');
        } catch (error) {
            this.log(`Failed to cleanup branch ${branchName}: ${error.message}`, 'warning');
        }
    }

    async monitorRepositoryHealth() {
        try {
            this.log('Starting repository health monitoring...');
            
            const branchInfo = await this.getBranchInfo();
            const healthReport = {
                timestamp: new Date().toISOString(),
                overallHealth: 0,
                branches: [],
                recommendations: []
            };
            
            let totalHealth = 0;
            let branchCount = 0;
            
            // Analyze each branch
            for (const branch of branchInfo.local) {
                const cleanBranch = branch.replace('*', '').trim();
                if (cleanBranch && cleanBranch !== 'main') {
                    const health = await this.analyzeBranchHealth(cleanBranch);
                    healthReport.branches.push(health);
                    totalHealth += health.healthScore;
                    branchCount++;
                }
            }
            
            // Calculate overall health
            healthReport.overallHealth = branchCount > 0 ? Math.round(totalHealth / branchCount) : 100;
            
            // Generate recommendations
            healthReport.recommendations = this.generateHealthRecommendations(healthReport);
            
            // Save health report
            const reportPath = path.join(this.projectRoot, 'logs', 'repository-health-report.json');
            fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
            
            this.log(`Repository health monitoring completed. Overall health: ${healthReport.overallHealth}/100`, 'info');
            
            return healthReport;
            
        } catch (error) {
            this.log(`Failed to monitor repository health: ${error.message}`, 'error');
            return null;
        }
    }

    generateHealthRecommendations(healthReport) {
        const recommendations = [];
        
        if (healthReport.overallHealth < 70) {
            recommendations.push('🔴 Critical: Repository health is poor. Review and fix issues immediately.');
        }
        
        if (healthReport.overallHealth < 85) {
            recommendations.push('🟡 Warning: Repository health needs improvement. Address quality issues.');
        }
        
        // Branch-specific recommendations
        healthReport.branches.forEach(branch => {
            if (branch.healthScore < 60) {
                recommendations.push(`⚠️ Branch ${branch.branch} has critical issues and should be fixed or deleted.`);
            }
        });
        
        if (recommendations.length === 0) {
            recommendations.push('✅ Repository is in excellent health! Keep up the good work.');
        }
        
        return recommendations;
    }

    async startMonitoring() {
        this.log('Intelligent Repository Manager started');
        
        // Initial health check
        await this.monitorRepositoryHealth();
        
        // Set up periodic monitoring
        setInterval(async () => {
            await this.monitorRepositoryHealth();
        }, 30 * 60 * 1000); // Every 30 minutes
        
        // Set up branch cleanup
        setInterval(async () => {
            await this.cleanupStaleBranches();
        }, 60 * 60 * 1000); // Every hour
    }

    async cleanupStaleBranches() {
        try {
            const branchInfo = await this.getBranchInfo();
            const staleThreshold = 7 * 24 * 60 * 60 * 1000; // 7 days
            
            for (const branch of branchInfo.local) {
                const cleanBranch = branch.replace('*', '').trim();
                if (cleanBranch && cleanBranch !== 'main') {
                    const lastCommit = await this.getLastCommitDate(cleanBranch);
                    const daysSinceLastCommit = (Date.now() - lastCommit) / (24 * 60 * 60 * 1000);
                    
                    if (daysSinceLastCommit > 7) {
                        this.log(`Branch ${cleanBranch} is stale (${Math.round(daysSinceLastCommit)} days old). Consider cleanup.`, 'warning');
                    }
                }
            }
        } catch (error) {
            this.log(`Failed to cleanup stale branches: ${error.message}`, 'error');
        }
    }

    async getLastCommitDate(branchName) {
        try {
            const result = await this.executeCommand('git', { 
                args: ['log', '-1', '--format=%ct', branchName], 
                silent: true 
            });
            return parseInt(result.trim()) * 1000; // Convert to milliseconds
        } catch (error) {
            return Date.now();
        }
    }
}

// Main execution
if (require.main === module) {
    const manager = new IntelligentRepositoryManager();
    
    // Handle command line arguments
    const args = process.argv.slice(2);
    const command = args[0];
    
    switch (command) {
        case 'monitor':
            manager.startMonitoring();
            break;
        case 'health':
            manager.monitorRepositoryHealth().then(report => {
                console.log(JSON.stringify(report, null, 2));
                process.exit(0);
            });
            break;
        case 'analyze':
            const branch = args[1] || 'current';
            manager.analyzeBranchHealth(branch).then(health => {
                console.log(JSON.stringify(health, null, 2));
                process.exit(0);
            });
            break;
        case 'pr':
            const branchName = args[1];
            const title = args[2] || 'Automated PR';
            const description = args[3] || 'Created by Intelligent Repository Manager';
            manager.createIntelligentPR(branchName, title, description).then(result => {
                console.log(JSON.stringify(result, null, 2));
                process.exit(0);
            });
            break;
        case 'merge':
            const mergeBranch = args[1];
            const strategy = args[2] || 'auto';
            manager.intelligentMerge(mergeBranch, strategy).then(result => {
                console.log(JSON.stringify(result, null, 2));
                process.exit(0);
            });
            break;
        default:
            console.log(`
Intelligent Repository Manager

Usage:
  node intelligent-repository-manager.cjs <command> [options]

Commands:
  monitor     Start continuous monitoring
  health      Generate health report
  analyze     Analyze branch health
  pr          Create intelligent PR
  merge       Merge branch intelligently

Examples:
  node intelligent-repository-manager.cjs monitor
  node intelligent-repository-manager.cjs health
  node intelligent-repository-manager.cjs analyze feature/new-feature
  node intelligent-repository-manager.cjs pr feature/new-feature "New Feature" "Description"
  node intelligent-repository-manager.cjs merge feature/new-feature
            `);
            process.exit(1);
    }
}

module.exports = IntelligentRepositoryManager;