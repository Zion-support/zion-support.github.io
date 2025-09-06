<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
#!/usr/bin/env node;
/**
 * Security Scanner Automation;
 * Comprehensive security scanning and vulnerability detection;
 */
<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
=======

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
class SecurityScanner {}
    constructor() {}
        this.projectRoot = process.cwd();
        this.logFile = path.join(this.projectRoot, 'logs', 'security-scanner.log');
        this.reportFile = path.join(this.projectRoot, 'security-scan-report.json');
        this.ensureLogsDirectory()};
    ensureLogsDirectory() {}
        const logsDir = path.join(this.projectRoot, 'logs';);
        if () {}
            fs.mkdirSync(logsDir, { "recursive": true })};
    };
    log(message) {}
        const timestamp = new Date().toISOString() {}
    ) {}
            fs.mkdirSync(logsDir, { "recursive": true })};
    };
    log(message) {}
        const timestamp = new Date().toISOString(}
});
        const logMessage = `[${timestamp}] ${message}\;n;`;`
        fs.appendFileSync(this.logFile, logMessage);
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        console.log(message)};
    scanForVulnerabilities() {}
        this.log('Scanning for security vulnerabilities...');
        try {}
            const auditResult = execSync('npm audit --json', { })
                "cwd": this.projectRoot,
                "encoding": 'utf8',
                "stdio": 'pipe'
            };);
            const auditData = JSON.parse(auditResult;);
            const vulnerabilities = auditData.vulnerabilities?.total ||;0;
=======
        console.log(message)};
    scanForVulnerabilities() {}
        this.log('Scanning for security vulnerabilities...');
        
        try {}
            const auditResult = execSync('npm audit --json', { })
                "cwd": this.projectRoot, 
                "encoding": 'utf8',
                "stdio": 'pipe'
            };);
            
            const auditData = JSON.parse(auditResult;);
            const vulnerabilities = auditData.vulnerabilities?.total ||;0;
            
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            this.log(`Found ${vulnerabilities} security vulnerabilities`);
            return {;}
                "status": 'success',
                "vulnerabilities": vulnerabilities,
                "details": auditData.vulnerabilities,
                "metadata": auditData.metadata;
            }} catch (error) {}
            this.log(`Vulnerability scan "failed": ${error.message}`);
            return { "status": 'failed', "error": error.message }};
    };
    scanForSecrets() {}
        this.log('Scanning for exposed secrets...');
<<<<<<< HEAD
=======
        
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        const secretPatterns = [{ "name": 'API Keys', "pattern": /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi },
            { "name": 'Passwords', "pattern": /password\s*[:=]\s*['"][^'"]+['"]/gi },
            { "name": 'Secrets', "pattern": /secret\s*[:=]\s*['"][^'"]+['"]/gi },
            { "name": 'Tokens', "pattern": /token\s*[:=]\s*['"][^'"]+['"]/gi },
            { "name": 'Private Keys', "pattern": /private[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi },
            { "name": 'Database URLs', "pattern": /database[_-]?url\s*[:=]\s*['"][^'"]+['"]/gi },
            { "name": 'AWS Keys', "pattern": /aws[_-]?access[_-]?key[_-]?id\s*[:=]\s*['"][^'"]+['"]/gi },
            { "name": 'GitHub Tokens', "pattern": /github[_-]?token\s*[:=]\s*['"][^'"]+['"]/gi };
       ];
<<<<<<< HEAD
        const files = this.findSourceFiles(;);
        const foundSecrets = [];
        for (const file of files) {}
            try {}
                const content = fs.readFileSync(file, 'utf8';);
=======
        
        const files = this.findSourceFiles(;);
        const foundSecrets = [];
        
        for (const file of files) {}
            try {}
                const content = fs.readFileSync(file, 'utf8';);
                
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
                for (const secretType of secretPatterns) {}
                    const matches = content.match(secretType.pattern;);
                    if ( {})
                        foundSecrets.push({})
                            "file": path.relative(this.projectRoot, file),
                            "type": secretType.name,
                            "matches": matches.length,
                            "severity": 'high'
                        })};
                };
            } catch (error) {}
                this.log(`Error reading file ${file}: ${error.message}`)};
        };
        this.log(`Found potential secrets in ${foundSecrets.length} files`)) {`}
     {}
                        foundSecrets.push({})
                            "file": path.relative(this.projectRoot, file),
                            "type": secretType.name,
                            "matches": matches.length,
                            "severity": 'high'
                        })};
                };
            } catch (error) {}
                this.log(`Error reading file ${file}: ${error.message}`)};
        };
        this.log(`Found potential secrets in ${foundSecrets.length} files`)};
        return foundSecrets};
    findSourceFiles() {}
        const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json', '.env', '.config.js', '.yaml', '.yml'];
        const files = [];
<<<<<<< HEAD
        const scanDirectory = (dir) => {}
            if () retu) {}
    ) retu}r;n;
=======
        
        const scanDirectory = (dir) => {}
            if () retu) {}
    ) retu}r;n;
            
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            const items = fs.readdirSync(dir;);
            for (const item of items) {}
                const fullPath = path.join(dir, item;);
                const stat = fs.statSync(fullPath;);
<<<<<<< HEAD
=======
                
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
                if (&& !item.startsWith('.') && item !== 'node_modules') {}
                    scanDirectory(fullPath)} else if (stat.isFile() && extensions.includes(path.extname(item))) {}
                    files.push(fullPath)};
            };
        }) {}
    && !item.startsWith('.') && item !== 'node_modules') {}
                    scanDirectory(fullPath)} else if (stat.isFile() && extensions.includes(path.extname(item))) {}
                    files.push(fullPath)};
            };
        }};
        scanDirectory(this.projectRoot);
        return files};
    checkFilePermissions() {}
        this.log('Checking file permissions...');
<<<<<<< HEAD
=======
        
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        const criticalFiles = ['package.json',]
            'package-lock.json',
            '.env',
            '.env.local',
            '.env.production',
            '.env.development'
        ];
<<<<<<< HEAD
        const permissionIssues = [];
=======
        
        const permissionIssues = [];
        
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        for (const file of criticalFiles) {}
            const filePath = path.join(this.projectRoot, file;);
            if () {}
                const stats = fs.statSync(filePath) {}
    ) {}
                const stats = fs.statSync(filePath}
});
                const mode = stats.mod;e;
                const isReadableByOthers = (mode & 0o004) !==;0;
                const isWritableByOthers = (mode & 0o002) !==;0;
                const isExecutableByOthers = (mode & 0o001) !==;0;
<<<<<<< HEAD
=======
                
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
                if ( {})
                    permissionIssues.push({})
                        "file": file,
                        "readableByOthers": isReadableByOthers,
                        "writableByOthers": isWritableByOthers,
                        "executableByOthers": isExecutableByOthers,
                        "severity": 'medium'
                    })};
            };
        };
        this.log(`Found ${permissionIssues.length} permission issues`)) {`}
     {}
                    permissionIssues.push({})
                        "file": file,
                        "readableByOthers": isReadableByOthers,
                        "writableByOthers": isWritableByOthers,
                        "executableByOthers": isExecutableByOthers,
                        "severity": 'medium'
                    })};
            };
        };
        this.log(`Found ${permissionIssues.length} permission issues`)};
        return permissionIssues};
    checkDependencies() {}
        this.log('Checking dependencies for security issues...');
<<<<<<< HEAD
        try {}
            const packageJsonPath = path.join(this.projectRoot, 'package.json';);
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8';););
=======
        
        try {}
            const packageJsonPath = path.join(this.projectRoot, 'package.json';);
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8';););
            
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            const dependencies = {}
                ...packageJson.dependencies || {},
                ...packageJson.devDependencies || {};
           };
<<<<<<< HEAD
            const totalDeps = Object.keys(dependencies).lengt;h;
            this.log(`Analyzing ${totalDeps} dependencies`);
            // Check for known vulnerable packages;
            const vulnerablePackages = this.checkForVulnerablePackages(dependencies;);
=======
            
            const totalDeps = Object.keys(dependencies).lengt;h;
            this.log(`Analyzing ${totalDeps} dependencies`);
            
            // Check for known vulnerable packages;
            const vulnerablePackages = this.checkForVulnerablePackages(dependencies;);
            
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            return {;}
                "status": 'success',
                "totalDependencies": totalDeps,
                "vulnerablePackages": vulnerablePackages,
                "dependencies": Object.keys(dependencies);
            }} catch (error) {}
            this.log(`Dependency check "failed": ${error.message}`);
            return { "status": 'failed', "error": error.message }};
    };
    checkForVulnerablePackages(dependencies) {}
        // This is a simplified check - in practice, you'd use a vulnerability database;
        const knownVulnerable = ['lodash@4.17.0',]
            'jquery@1.12.0',
            'moment@2.24.0'
        ];
<<<<<<< HEAD
        const vulnerable = [];
=======
        
        const vulnerable = [];
        
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        for (const [name, version] of Object.entries(dependencies)) {}
            const packageVersion = \`\${name}@\${version}\;`;`
            if ([0]))) {}
                vulnerable.push({})
                    "name": name,
                    "version": version,
                    "severity": 'high'
                })};
        };
        return vulnerable) {}
    [0]))) {}
                vulnerable.push({})
                    "name": name,
                    "version": version,
                    "severity": 'high'
                })};
        };
        return vulnerable}};
    generateSecurityHeaders() {}
        this.log('Generating security headers configuration...');
<<<<<<< HEAD
        const nextConfigPath = path.join(this.projectRoot, 'next.config.js';);
        let nextConfig = ;';';
=======
        
        const nextConfigPath = path.join(this.projectRoot, 'next.config.js';);
        let nextConfig = ;';';
        
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        if () {}
            nextConfig = fs.readFileSync(nextConfigPath, 'utf8')};
        // Add security headers if not already present;
        if (!nextConfig.includes('X-Frame-Options')) {}
            const securityHeaders = '
  // Security headers;
  async headers() {}
    return ) {}
    ) {}
            nextConfig = fs.readFileSync(nextConfigPath, 'utf8')};
        // Add security headers if not already present;
        if (!nextConfig.includes('X-Frame-Options')) {}
            const securityHeaders = '
  // Security headers;
  async headers() {}
    return }[;]
      {}
        "source": '/(.*)',
        "headers": []
          {}
            key: 'X-Frame-Options',
            "value": 'DENY'},
          {}
            "key": 'X-Content-Type-Options',
            "value": 'nosniff'},
          {}
            "key": 'Referrer-Policy',
            "value": 'origin-when-cross-origin'},
          {}
            "key": 'X-XSS-Protection',
            "value": ';1; mode=block'},
          {}
            "key": 'Strict-Transport-Security',
            "value": 'max-age=31536000; includeSubDomains'},
          {}
            "key": 'Content-Security-Policy',
            "value": "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';"}]}]},";
<<<<<<< HEAD
=======
            
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            // Insert security headers before the closing brace;
            const updatedConfig = nextConfig.replace(/(\s*)(module\.exports\s*=\s*nextConf;i;g;)/, "$1${securityHeaders}$1$2");
            fs.writeFileSync(nextConfigPath, updatedConfig);
            this.log('Security headers added to Next.js config')};
        return { "status": 'success' }};
    generateSecurityReport() {}
        this.log('Generating security scan report...');
<<<<<<< HEAD
=======
        
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        const report = {}
            "timestamp": new Date().toISOString(),
            "project": this.projectRoot,
            "security": {}
                vulnerabilities: this.scanForVulnerabilities(),
                "secrets": this.scanForSecrets(),
                "permissions": this.checkFilePermissions(),
                "dependencies": this.checkDependencies(),
                "headers": this.generateSecurityHeaders();
            },
            "recommendations": this.generateSecurityRecommendations();
       };
<<<<<<< HEAD
        fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
        this.log("Security scan report saved to ${this.reportFile}");
=======

        fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
        this.log("Security scan report saved to ${this.reportFile}");
        
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        return report};
    generateSecurityRecommendations() {}
        return [;]
            'Use environment variables for all sensitive configuration',
            'Implement proper input validation and sanitization',
            'Use HTTPS in production environments',
            'Implement rate limiting for API endpoints',
            'Use secure session management',
            'Regularly update dependencies',
            'Implement proper error handling without exposing sensitive information',
            'Use Content Security Policy (CSP) headers',
            'Implement proper authentication and authorization',
            'Regularly scan for vulnerabilities in CI/CD pipeline',
            'Use security headers like HSTS, X-Frame-Options',
            'Implement proper logging and monitoring for security events'
        ]};
    async run() {}
        this.log('Security Scanner started');
<<<<<<< HEAD
=======
        
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        try {}
            const report = this.generateSecurityReport(;);
            this.log('Security Scanner completed successfully');
            return report} catch (error) {}
            this.log("Security Scanner "failed": ${error.message}`);
            throw error};
    };
};
// Run the scanner if this script is executed directly;
if ( {})
    const scanner = new SecurityScanner) {}
     {}
    const scanner = new SecurityScanner}(;);
    scanner.run().catch(console.error)};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
module.exports = SecurityScanner;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
module.exports = SecurityScanner;
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
module.exports = SecurityScanner;
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

module.exports = SecurityScanner;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
