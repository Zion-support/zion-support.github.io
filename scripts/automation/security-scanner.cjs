#!/usr/bin/env node

/**
 * Security Scanner Automation Script
 * Scans for security vulnerabilities and reports findings
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityScanner {
    constructor() {
        this.projectRoot = process.cwd();
        this.logFile = path.join(this.projectRoot, 'logs', 'security-scanner.log');
        this.reportFile = path.join(this.projectRoot, 'security-scan-report.json');
        this.ensureLogsDir();
    }

    ensureLogsDir() {
        const logsDir = path.dirname(this.logFile);
        if (!fs.existsSync(logsDir)) {
            fs.mkdirSync(logsDir, { recursive: true });
        }
    }

    log(message) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}\n`;
        console.log(logMessage.trim());
        fs.appendFileSync(this.logFile, logMessage);
    }

    async scanDependencies() {
        this.log('Scanning dependencies for vulnerabilities...');
        
        try {
            // Run npm audit
            const auditResult = execSync('npm audit --json', { 
                encoding: 'utf8',
                cwd: this.projectRoot,
                stdio: 'pipe'
            });
            
            const auditData = JSON.parse(auditResult);
            return {
                status: 'completed',
                vulnerabilities: auditData.vulnerabilities || {},
                summary: auditData.metadata || {}
            };
        } catch (error) {
            this.log(`Dependency scan error: ${error.message}`);
            return {
                status: 'error',
                error: error.message
            };
        }
    }

    async scanFiles() {
        this.log('Scanning files for security issues...');
        
        const securityIssues = [];
        const filesToCheck = [
            'package.json',
            'package-lock.json',
            '.env',
            '.env.local',
            '.env.production'
        ];

        for (const file of filesToCheck) {
            const filePath = path.join(this.projectRoot, file);
            if (fs.existsSync(filePath)) {
                try {
                    const content = fs.readFileSync(filePath, 'utf8');
                    
                    // Check for hardcoded secrets
                    const secretPatterns = [
                        /password\s*[:=]\s*["'][^"']+["']/gi,
                        /secret\s*[:=]\s*["'][^"']+["']/gi,
                        /key\s*[:=]\s*["'][^"']+["']/gi,
                        /token\s*[:=]\s*["'][^"']+["']/gi
                    ];

                    for (const pattern of secretPatterns) {
                        const matches = content.match(pattern);
                        if (matches) {
                            securityIssues.push({
                                file: file,
                                type: 'hardcoded_secret',
                                matches: matches.length,
                                severity: 'high'
                            });
                        }
                    }

                    // Check for dangerous dependencies
                    if (file === 'package.json') {
                        const packageData = JSON.parse(content);
                        const dangerousDeps = [
                            'eval',
                            'vm',
                            'child_process',
                            'fs'
                        ];

                        const allDeps = {
                            ...packageData.dependencies,
                            ...packageData.devDependencies
                        };

                        for (const [depName, depVersion] of Object.entries(allDeps)) {
                            if (dangerousDeps.some(dangerous => depName.includes(dangerous))) {
                                securityIssues.push({
                                    file: file,
                                    type: 'dangerous_dependency',
                                    dependency: depName,
                                    version: depVersion,
                                    severity: 'medium'
                                });
                            }
                        }
                    }

                } catch (error) {
                    this.log(`Error scanning ${file}: ${error.message}`);
                }
            }
        }

        return securityIssues;
    }

    async generateReport() {
        this.log('Generating security scan report...');
        
        const report = {
            timestamp: new Date().toISOString(),
            status: 'completed',
            dependencyScan: await this.scanDependencies(),
            fileScan: await this.scanFiles(),
            summary: {
                totalIssues: 0,
                highSeverity: 0,
                mediumSeverity: 0,
                lowSeverity: 0
            }
        };

        // Calculate summary
        if (report.dependencyScan.vulnerabilities) {
            report.summary.totalIssues += Object.keys(report.dependencyScan.vulnerabilities).length;
        }
        
        report.fileScan.forEach(issue => {
            report.summary.totalIssues++;
            if (issue.severity === 'high') {
                report.summary.highSeverity++;
            } else if (issue.severity === 'medium') {
                report.summary.mediumSeverity++;
            } else {
                report.summary.lowSeverity++;
            }
        });

        // Save report
        fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
        
        this.log(`Security scan completed. Found ${report.summary.totalIssues} issues.`);
        this.log(`High: ${report.summary.highSeverity}, Medium: ${report.summary.mediumSeverity}, Low: ${report.summary.lowSeverity}`);
        
        return report;
    }

    async run() {
        try {
            await this.generateReport();
            // Exit after successful completion
            setTimeout(() => {
                this.log('Security scan completed successfully, exiting...');
                process.exit(0);
            }, 1000);
        } catch (error) {
            this.log(`Fatal error: ${error.message}`);
            process.exit(1);
        }
    }
}

// Run if called directly
if (require.main === module) {
    const securityScanner = new SecurityScanner();
    securityScanner.run();
}

module.exports = SecurityScanner;