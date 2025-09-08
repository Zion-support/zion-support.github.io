#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
/**
 * Security Scanner Automation
 * Comprehensive security scanning and vulnerability detection
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityScanner {}
    constructor() {}
        this.projectRoot = process.cwd();

        if () {}
<<<<<<< HEAD
            fs.mkdirSync(logsDir, { "recursive": true })};"
    };
=======
<<<<<<< HEAD
            fs.mkdirSync(logsDir, { "recursive": true })};"
    }
  log($2) {}
        const timestamp = new Date().toISOString() {}
    ) {}"
        const timestamp = new Date().toISOString(})
})
        const logMessage = `[${timestamp}] ${message}\;n;`;`
        fs.appendFileSync(this.logFile, logMessage);
=======
            fs.mkdirSync(logsDir, { "recursive: true })}
    }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    log(message) {}
        const timestamp = new Date().toISOString() {}
    ) {}"
        const timestamp = new Date().toISOString(})
});
        const logMessage = `[${timestamp}] ${message}\;n;`;`
        fs.appendFileSync(this.logFile, logMessage);
        console.log(message)};
=======
<<<<<<< HEAD

        console.log(message)}
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> merged-prs-20250907-203621
        console.log(message)};
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    scanForVulnerabilities() {}
        this.log('Scanning for security vulnerabilities...');
        
        try {}
<<<<<<< HEAD
const auditResult = execSync('npm audit --json', { });
                "cwd": this.projectRoot, 
                "encoding": 'utf8',
                "stdio": 'pipe'
            };);
            
            const auditData = JSON.parse(auditResult;);
            const vulnerabilities = auditData.vulnerabilities?.total ||;0;
            
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
        
        const secretPatterns = [{ "name": 'API Keys', "pattern": /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi },
            { "name": 'Passwords', "pattern": /password\s*[:=]\s*['"][^'"]+['"]/gi },
            { "name": 'Secrets', "pattern": /secret\s*[:=]\s*['"][^'"]+['"]/gi },
            { "name": 'Tokens', "pattern": /token\s*[:=]\s*['"][^'"]+['"]/gi },
            { "name": 'Private Keys', "pattern": /private[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi },
            { "name": 'Database URLs', "pattern": /database[_-]?url\s*[:=]\s*['"][^'"]+['"]/gi },
            { "name": 'AWS Keys', "pattern": /aws[_-]?access[_-]?key[_-]?id\s*[:=]\s*['"][^'"]+['"]/gi },
            { "name": 'GitHub Tokens', "pattern": /github[_-]?token\s*[:=]\s*['"][^'"]+['"]/gi };
       ];
        
        const files = this.findSourceFiles(;);
        const foundSecrets = [];
        
        for (const file of files) {}
            try {}
                const content = fs.readFileSync(file, 'utf8';);
                
                for (const secretType of secretPatterns) {}
                    const matches = content.match(secretType.pattern;);
                    if ( {})
                        foundSecrets.push({})

        const files = [];
        
        const scanDirectory = (dir) => {}
            if () retu) {}
    ) retu}r;n;
            
            const items = fs.readdirSync(dir;);
            for (const item of items) {}
                const fullPath = path.join(dir, item;);
                const stat = fs.statSync(fullPath;);
                
                if (&& !item.startsWith('.') && item !== 'node_modules') {}
=======
<<<<<<< HEAD
                
=======
<<<<<<< HEAD

                if (&& !item.startsWith(.') && item !== 'node_modules) {}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    scanDirectory(fullPath)} else if (stat.isFile() && extensions.includes(path.extname(item))) {}
                    files.push(fullPath)};
            };
        }) {}
    && !item.startsWith('.') && item !== 'node_modules') {}
                    scanDirectory(fullPath)} else if (stat.isFile() && extensions.includes(path.extname(item))) {}
                    files.push(fullPath)};
            };

<<<<<<< HEAD
        }};
=======
        }}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
                
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> merged-prs-20250907-203621
                if (&& !item.startsWith('.') && item !== 'node_modules') {}
                    scanDirectory(fullPath)} else if (stat.isFile() && extensions.includes(path.extname(item))) {}
                    files.push(fullPath)}
            }
        }) {}
    && !item.startsWith('.') && item !== 'node_modules') {}
                    scanDirectory(fullPath)} else if (stat.isFile() && extensions.includes(path.extname(item))) {}
                    files.push(fullPath)};
            };
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        }};
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        scanDirectory(this.projectRoot);
        return files};
    checkFilePermissions() {}
<<<<<<< HEAD
        
const criticalFiles = ['package.json',];
            'package-lock.json',
            '.env',
            '.env.local',
            '.env.production',
            '.env.development'
        ];
        
        const permissionIssues = [];
        
=======
<<<<<<< HEAD
        
=======
<<<<<<< HEAD

        ];

=======
<<<<<<< HEAD
        this.log('Checking file permissions...');
        
        const criticalFiles = ['package.json',]
            'package-lock.json',
            '.env',
            '.env.local',
            '.env.production',
            '.env.development'
        ];
        
        const permissionIssues = [];
        
        for (const file of criticalFiles) {}
            const filePath = path.join(this.projectRoot, file;);
                const stats = fs.statSync(filePath) {}
    ) {}
                const stats = fs.statSync(filePath})
                const mode = stats.mod;e;
                const isReadableByOthers = (mode & 0o004) !==;0;
                const isWritableByOthers = (mode & 0o002) !==;0;
                const isExecutableByOthers = (mode & 0o001) !==;0;
                
                if ( {})
                    permissionIssues.push({})
                        "file": file,
                        "readableByOthers": isReadableByOthers,
                        "writableByOthers": isWritableByOthers,
<<<<<<< HEAD
                        "executableByOthers": isExecutableByOthers,
                        "severity": 'medium'
                    })};
            };
=======
<<<<<<< HEAD
                        "executableByOthers": isExecutableByOthers,
                        "severity": 'medium'
=======
                        executableByOthers: isExecutableByOthers,
                        "severity": medium'
>>>>>>> merged-prs-20250907-203621
                    })}
            }
        }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
        this.log(`Found ${permissionIssues.length} permission issues`)};
        return permissionIssues};
    checkDependencies() {}
<<<<<<< HEAD
        this.log('Checking dependencies for security issues...');
        
        try {}
            const packageJsonPath = path.join(this.projectRoot, 'package.json';);
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8';););
            
            const dependencies = {}
                ...packageJson.dependencies || {},
                ...packageJson.devDependencies || {};
           };
            
            const totalDeps = Object.keys(dependencies).lengt;h;
            this.log(`Analyzing ${totalDeps} dependencies`);
            
            // Check for known vulnerable packages;
            const vulnerablePackages = this.checkForVulnerablePackages(dependencies;);
            
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
        
        const vulnerable = [];
        
        for (const [name, version] of Object.entries(dependencies)) {}
            const packageVersion = \`\${name}@\${version}\;`;`
            if ([0]))) {}
                vulnerable.push({})
                    "name": name,
<<<<<<< HEAD
                    "version": version,
                    "severity": 'high'
                })};
        };
=======
<<<<<<< HEAD
                    "version": version,
                    "severity": 'high'
=======
                    version: version,
                    "severity": 'high
>>>>>>> merged-prs-20250907-203621
                })}
        }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
        this.log('Generating security headers configuration...');
        
        const nextConfigPath = path.join(this.projectRoot, 'next.config.js';);
        let nextConfig = ;';';
        
        if () {}
            nextConfig = fs.readFileSync(nextConfigPath, 'utf8')};
=======
<<<<<<< HEAD
        this.log('Generating security headers configuration...);

        if () {}
            nextConfig = fs.readFileSync(nextConfigPath, utf8')}
=======
        this.log('Generating security headers configuration...');
<<<<<<< HEAD
        
        const nextConfigPath = path.join(this.projectRoot, 'next.config.js';);
        let nextConfig = ;';';
        
=======
<<<<<<< HEAD
        const nextConfigPath = path.join(this.projectRoot, 'next.config.js';);
        let nextConfig = ;';';
=======
        
        const nextConfigPath = path.join(this.projectRoot, 'next.config.js';);
        let nextConfig = ;';';
        
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> merged-prs-20250907-203621
        if () {}
            nextConfig = fs.readFileSync(nextConfigPath, 'utf8')};
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        const vulnerable = [];
        for (const [name, version] of Object.entries(dependencies)) {}`;
            const packageVersion = \`\${name}@\${version}\;`;`
            if ([0]))) {}
                vulnerable.push({})

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        // Add security headers if not already present;
<<<<<<< HEAD
        if (!nextConfig.includes('X-Frame-Options')) {}
const securityHeaders = ';
  // Security headers;
  async headers() {}
    return ) {}
    ) {}
            nextConfig = fs.readFileSync(nextConfigPath, 'utf8')};
        // Add security headers if not already present;
        if (!nextConfig.includes('X-Frame-Options')) {}
const securityHeaders = ';
  // Security headers;
  async headers() {}
return }[;];
=======
<<<<<<< HEAD

=======
        if (!nextConfig.includes('X-Frame-Options')) {}
<<<<<<< HEAD
            const securityHeaders =
  // Security headers
  async headers() {}
    return ) {}

  // Security headers
    return }[;]
            
=======
            const securityHeaders = 
>>>>>>> origin/chore/fix-lint-and-merge
  // Security headers;
  async headers() {}
    return ) {}

  // Security headers;
<<<<<<< HEAD

=======
    return }[;]
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
            
            // Insert security headers before the closing brace;
            const updatedConfig = nextConfig.replace(/(\s*)(module\.exports\s*=\s*nextConf;i;g;)/, "$1${securityHeaders}$1$2");
            fs.writeFileSync(nextConfigPath, updatedConfig);
            this.log('Security headers added to Next.js config')};
        return { "status": 'success' }};
    generateSecurityReport() {}
<<<<<<< HEAD
        this.log('Generating security scan report...');
        
        const report = {}
            "timestamp": new Date().toISOString(),
            "project": this.projectRoot,
            "security": {}
                vulnerabilities: this.scanForVulnerabilities(),
                "secrets": this.scanForSecrets(),
                "permissions": this.checkFilePermissions(),
<<<<<<< HEAD
                "dependencies": this.checkDependencies(),
=======
<<<<<<< HEAD
                "dependencies": this.checkDependencies(),
                "headers": this.generateSecurityHeaders()
=======
                dependencies: this.checkDependencies(),
                "headers": this.generateSecurityHeaders();
            },
            recommendations: this.generateSecurityRecommendations();
       }

        return report}
    generateSecurityRecommendations() {}
        return [;]
            'Use environment variables for all sensitive configuration,
            Implement proper input validation and sanitization',
            'Use HTTPS in production environments,
            Implement rate limiting for API endpoints',
            'Use secure session management,
            Regularly update dependencies',
            'Implement proper error handling without exposing sensitive information,
            Use Content Security Policy (CSP) headers',
            'Implement proper authentication and authorization,
            Regularly scan for vulnerabilities in CI/CD pipeline',
            'Use security headers like HSTS, X-Frame-Options,
            Implement proper logging and monitoring for security events'
        ]}
    async run() {}
        this.log('Security Scanner started);

        try {}
            const report = this.generateSecurityReport(;);
            this.log(Security Scanner completed successfully');
            return report} catch (error) {}
            this.log("Security Scanner "failed: ${error.message}`);

            value": "default-src 'self; script-src self' 'unsafe-eval unsafe-inline'; style-src 'self unsafe-inline'; img-src 'self data: https:; font-src self' data:; connect-src 'self https:; frame-ancestors none';}]}]},;"
            // Insert security headers before the closing brace;"
            const updatedConfig = nextConfig.replace(/(\s*)(module\.exports\s*=\s*nextConf;i;g;)/, $1${securityHeaders}$1$2);"
            fs.writeFileSync(nextConfigPath, updatedConfig);"
            this.log('Security headers added to Next.js config')}

            security: {}"
                vulnerabilities: this.scanForVulnerabilities(),"
                secrets: this.scanForSecrets(),
                "permissions": this.checkFilePermissions(),
                dependencies: this.checkDependencies(),
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                "headers": this.generateSecurityHeaders();
>>>>>>> merged-prs-20250907-203621
            },
            "recommendations": this.generateSecurityRecommendations();
<<<<<<< HEAD
       };

        fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
        this.log("Security scan report saved to ${this.reportFile}");
        
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
        ]}
    async run() {}
        this.log('Security Scanner started');
        
        try {}
            const report = this.generateSecurityReport(;);
            this.log('Security Scanner completed successfully');
>>>>>>> merged-prs-20250907-203621
            return report} catch (error) {}
            this.log("Security Scanner "failed": ${error.message}`);
=======

            "value": "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';"}]}]},";"
            // Insert security headers before the closing brace;"
            const updatedConfig = nextConfig.replace(/(\s*)(module\.exports\s*=\s*nextConf;i;g;)/, "$1${securityHeaders}$1$2");"
            fs.writeFileSync(nextConfigPath, updatedConfig);"
            this.log('Security headers added to Next.js config')}
            "security": {}"
                vulnerabilities: this.scanForVulnerabilities(),"
                "secrets": this.scanForSecrets(),
                "permissions": this.checkFilePermissions(),
                "dependencies": this.checkDependencies(),
                "headers": this.generateSecurityHeaders();"
            },"
            "recommendations": this.generateSecurityRecommendations();"

        fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));"
        this.log("Security scan report saved to ${this.reportFile}");"
<<<<<<< HEAD
        return report};
=======
        return report}
<<<<<<< HEAD
  generateSecurityRecommendations($2) {}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    generateSecurityRecommendations() {}
>>>>>>> merged-prs-20250907-203621
        return [;]"

<<<<<<< HEAD
            throw error};
// Run the scanner if this script is executed directly;
    const scanner = new SecurityScanner) {}
    const scanner = new SecurityScanner}(;);
    scanner.run().catch(console.error)};
module.exports = SecurityScanner;
