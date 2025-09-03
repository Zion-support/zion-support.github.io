#!/usr/bin/env node

/**
 * Security Scanner for Zion Tech Group
 * Performs comprehensive security checks and vulnerability scanning
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Zion Tech Group - Security Scanner');
console.log('=====================================');

const securityReport = {
    timestamp: new Date().toISOString(),
    status: 'secure',
    checks: {},
    vulnerabilities: [],
    summary: {
        total: 0,
        passed: 0,
        failed: 0,
        warnings: 0,
        vulnerabilities: 0
    }
};

function runSecurityCheck(name, checkFunction) {
    securityReport.summary.total++;
    console.log(`\n🔍 Security Check: ${name}`);
    
    try {
        const result = checkFunction();
        if (result.status === 'pass') {
            securityReport.checks[name] = result;
            securityReport.summary.passed++;
            console.log(`✅ ${name}: ${result.message}`);
        } else if (result.status === 'warning') {
            securityReport.checks[name] = result;
            securityReport.summary.warnings++;
            console.log(`⚠️  ${name}: ${result.message}`);
        } else {
            securityReport.checks[name] = result;
            securityReport.summary.failed++;
            securityReport.summary.vulnerabilities++;
            securityReport.vulnerabilities.push({
                check: name,
                severity: result.severity || 'medium',
                message: result.message,
                recommendation: result.recommendation
            });
            console.log(`❌ ${name}: ${result.message}`);
        }
    } catch (error) {
        securityReport.checks[name] = {
            status: 'fail',
            message: `Error: ${error.message}`,
            error: error.toString()
        };
        securityReport.summary.failed++;
        console.log(`❌ ${name}: Error - ${error.message}`);
    }
}

// Check for sensitive data in files
runSecurityCheck('Sensitive Data Scan', () => {
    const sensitivePatterns = [
        { pattern: /password\s*[:=]\s*['"][^'"]+['"]/gi, name: 'Hardcoded Password' },
        { pattern: /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi, name: 'API Key' },
        { pattern: /secret\s*[:=]\s*['"][^'"]+['"]/gi, name: 'Secret' },
        { pattern: /token\s*[:=]\s*['"][^'"]+['"]/gi, name: 'Token' },
        { pattern: /private[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi, name: 'Private Key' }
    ];
    
    const filesToCheck = [
        'package.json',
        'next.config.js',
        '.env',
        '.env.local',
        '.env.production'
    ];
    
    const foundIssues = [];
    
    filesToCheck.forEach(file => {
        if (fs.existsSync(file)) {
            const content = fs.readFileSync(file, 'utf8');
            sensitivePatterns.forEach(({ pattern, name }) => {
                if (pattern.test(content)) {
                    foundIssues.push(`${name} found in ${file}`);
                }
            });
        }
    });
    
    if (foundIssues.length === 0) {
        return {
            status: 'pass',
            message: 'No sensitive data found in configuration files'
        };
    } else {
        return {
            status: 'fail',
            severity: 'high',
            message: `Sensitive data found: ${foundIssues.join(', ')}`,
            recommendation: 'Remove hardcoded credentials and use environment variables'
        };
    }
});

// Check for outdated dependencies
runSecurityCheck('Dependency Security', () => {
    try {
        if (!fs.existsSync('package.json')) {
            return {
                status: 'fail',
                message: 'package.json not found'
            };
        }
        
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
        
        // Check for known vulnerable packages
        const vulnerablePackages = [
            'lodash', // Known for prototype pollution
            'moment', // Deprecated, use date-fns or dayjs
            'request' // Deprecated
        ];
        
        const foundVulnerable = Object.keys(dependencies).filter(dep => 
            vulnerablePackages.includes(dep)
        );
        
        if (foundVulnerable.length === 0) {
            return {
                status: 'pass',
                message: 'No known vulnerable packages detected',
                packageCount: Object.keys(dependencies).length
            };
        } else {
            return {
                status: 'warning',
                message: `Potentially vulnerable packages: ${foundVulnerable.join(', ')}`,
                recommendation: 'Consider updating or replacing these packages'
            };
        }
    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not analyze dependencies'
        };
    }
});

// Check for security headers in Next.js config
runSecurityCheck('Security Headers', () => {
    try {
        if (!fs.existsSync('next.config.js')) {
            return {
                status: 'warning',
                message: 'next.config.js not found - security headers not configured'
            };
        }
        
        const configContent = fs.readFileSync('next.config.js', 'utf8');
        
        const securityHeaders = [
            'X-Frame-Options',
            'X-Content-Type-Options',
            'X-XSS-Protection',
            'Strict-Transport-Security',
            'Content-Security-Policy'
        ];
        
        const foundHeaders = securityHeaders.filter(header => 
            configContent.includes(header)
        );
        
        if (foundHeaders.length === securityHeaders.length) {
            return {
                status: 'pass',
                message: 'All recommended security headers are configured',
                headers: foundHeaders
            };
        } else {
            return {
                status: 'warning',
                message: `Only ${foundHeaders.length}/${securityHeaders.length} security headers configured`,
                recommendation: 'Add missing security headers to next.config.js'
            };
        }
    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not check security headers configuration'
        };
    }
});

// Check for environment file security
runSecurityCheck('Environment Security', () => {
    const envFiles = ['.env', '.env.local', '.env.production'];
    const issues = [];
    
    envFiles.forEach(file => {
        if (fs.existsSync(file)) {
            const content = fs.readFileSync(file, 'utf8');
            
            // Check if .env files are in .gitignore
            if (fs.existsSync('.gitignore')) {
                const gitignore = fs.readFileSync('.gitignore', 'utf8');
                if (!gitignore.includes(file)) {
                    issues.push(`${file} not in .gitignore`);
                }
            }
            
            // Check for weak passwords
            const weakPasswordPattern = /password\s*=\s*(123|password|admin|test)/gi;
            if (weakPasswordPattern.test(content)) {
                issues.push(`Weak password detected in ${file}`);
            }
        }
    });
    
    if (issues.length === 0) {
        return {
            status: 'pass',
            message: 'Environment files are properly secured'
        };
    } else {
        return {
            status: 'fail',
            severity: 'high',
            message: `Environment security issues: ${issues.join(', ')}`,
            recommendation: 'Fix environment file security issues'
        };
    }
});

// Check for HTTPS configuration
runSecurityCheck('HTTPS Configuration', () => {
    try {
        if (fs.existsSync('next.config.js')) {
            const configContent = fs.readFileSync('next.config.js', 'utf8');
            
            if (configContent.includes('https') || configContent.includes('SSL')) {
                return {
                    status: 'pass',
                    message: 'HTTPS configuration detected'
                };
            }
        }
        
        return {
            status: 'warning',
            message: 'HTTPS configuration not explicitly found',
            recommendation: 'Ensure HTTPS is properly configured for production'
        };
    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not check HTTPS configuration'
        };
    }
});

// Check for file permissions
runSecurityCheck('File Permissions', () => {
    try {
        const sensitiveFiles = ['.env', '.env.local', 'package.json'];
        const issues = [];
        
        sensitiveFiles.forEach(file => {
            if (fs.existsSync(file)) {
                const stats = fs.statSync(file);
                const mode = stats.mode & parseInt('777', 8);
                
                // Check if file is world-readable (should not be)
                if (mode & 4) {
                    issues.push(`${file} is world-readable`);
                }
            }
        });
        
        if (issues.length === 0) {
            return {
                status: 'pass',
                message: 'File permissions are secure'
            };
        } else {
            return {
                status: 'warning',
                message: `Permission issues: ${issues.join(', ')}`,
                recommendation: 'Restrict file permissions for sensitive files'
            };
        }
    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not check file permissions'
        };
    }
});

// Determine overall security status
if (securityReport.summary.failed > 0) {
    securityReport.status = 'vulnerable';
} else if (securityReport.summary.warnings > 0) {
    securityReport.status = 'needs_attention';
}

// Save security report
const reportPath = 'security-scan-report.json';
fs.writeFileSync(reportPath, JSON.stringify(securityReport, null, 2));

console.log('\n📊 Security Scan Summary');
console.log('========================');
console.log(`Total Checks: ${securityReport.summary.total}`);
console.log(`✅ Passed: ${securityReport.summary.passed}`);
console.log(`⚠️  Warnings: ${securityReport.summary.warnings}`);
console.log(`❌ Failed: ${securityReport.summary.failed}`);
console.log(`🚨 Vulnerabilities: ${securityReport.summary.vulnerabilities}`);
console.log(`\nOverall Status: ${securityReport.status.toUpperCase()}`);

if (securityReport.vulnerabilities.length > 0) {
    console.log('\n🚨 Security Issues Found:');
    securityReport.vulnerabilities.forEach((vuln, index) => {
        console.log(`${index + 1}. ${vuln.check}: ${vuln.message}`);
        if (vuln.recommendation) {
            console.log(`   💡 Recommendation: ${vuln.recommendation}`);
        }
    });
}

console.log(`\n📄 Report saved to: ${reportPath}`);

// Exit with appropriate code
if (securityReport.status === 'vulnerable') {
    process.exit(1);
} else if (securityReport.status === 'needs_attention') {
    process.exit(2);
} else {
    process.exit(0);
}