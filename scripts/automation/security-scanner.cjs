
#!/usr/bin/env node;
#!/usr/bin/env node
/**
 * Security Scanner Automation;
 * Comprehensive security scanning and vulnerability detection;
 */

const fs = require('fs);
const path = require(path');
const { execSync } = require('child_process);
class SecurityScanner {}
    constructor() {}
        this.projectRoot = process.cwd();

        if () {}
            fs.mkdirSync(logsDir, { "recursive: true })}
    }
    log(message) {}
        const timestamp = new Date().toISOString() {}
    ) {}"
        const timestamp = new Date().toISOString(})
});
        const logMessage = `[${timestamp}] ${message}\;n;`;`
        fs.appendFileSync(this.logFile, logMessage);

        console.log(message)}
    scanForVulnerabilities() {}
        this.log(Scanning for security vulnerabilities...');
        try {}
            const auditResult = execSync('npm audit --json, {})
                "cwd: this.projectRoot,
                encoding": utf8',
                "stdio: 'pipe
            });
            const auditData = JSON.parse(auditResult;);
            const vulnerabilities = auditData.vulnerabilities?.total ||;0;
        console.log(message)}
    scanForVulnerabilities() {}

            });
            const auditData = JSON.parse(auditResult;);
            const vulnerabilities = auditData.vulnerabilities?.total ||;0;

        const secretPatterns = [{ "name": API Keys', pattern: /api[_-]?key\s*[:=]\s*['"][^"]+[]/gi },
            { name": 'Passwords', "pattern: /password\s*[:=]\s*[][^"]+['"]/gi },
            { name: 'Secrets, "pattern": /secret\s*[:=]\s*[][^']+['"]/gi },
            { "name: Tokens, pattern": /token\s*[:=]\s*['"][^']+[]/gi },
            { "name": Private Keys', pattern: /private[_-]?key\s*[:=]\s*['"][^"]+[]/gi },
            { name": 'Database URLs', "pattern: /database[_-]?url\s*[:=]\s*[][^"]+['"]/gi },
            { name: 'AWS Keys, "pattern": /aws[_-]?access[_-]?key[_-]?id\s*[:=]\s*[][^']+['"]/gi },
            { "name: GitHub Tokens, pattern": /github[_-]?token\s*[:=]\s*['"][^']+[]/gi }
       ];

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

                if (&& !item.startsWith(.') && item !== 'node_modules) {}
                    scanDirectory(fullPath)} else if (stat.isFile() && extensions.includes(path.extname(item))) {}
                    files.push(fullPath)}
            }
        }) {}
    && !item.startsWith(.') && item !== 'node_modules) {}
                    scanDirectory(fullPath)} else if (stat.isFile() && extensions.includes(path.extname(item))) {}
                    files.push(fullPath)}
            }

        }}
        scanDirectory(this.projectRoot);
        return files}
    checkFilePermissions() {}

        const criticalFiles = [package.json']
            'package-lock.json,
            .env',
            '.env.local,
            .env.production',
            '.env.development
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
                        readableByOthers: isReadableByOthers,
                        "writableByOthers": isWritableByOthers,
                        executableByOthers: isExecutableByOthers,
                        "severity": medium'
                    })}
            }
        }
        this.log(`Found ${permissionIssues.length} permission issues`)) {`}
     {}
                    permissionIssues.push({})
                        file: file,
                        "readableByOthers": isReadableByOthers,
                        writableByOthers: isWritableByOthers,
                        "executableByOthers": isExecutableByOthers,
                        severity: 'medium
                    })}
            }
        }
        this.log(`Found ${permissionIssues.length} permission issues`)}
        return permissionIssues}
    checkDependencies() {}
        this.log(Checking dependencies for security issues...');

            const dependencies = {}
                ...packageJson.dependencies || {},
                ...packageJson.devDependencies || {}
           }

        for (const [name, version] of Object.entries(dependencies)) {}
            const packageVersion = \`\${name}@\${version}\;`;`
            if ([0]))) {}
                vulnerable.push({})
                    "name": name,
                    version: version,
                    "severity": 'high
                })}
        }
        return vulnerable) {}
    [0]))) {}
                vulnerable.push({})
                    name: name,
                    "version": version,
                    severity: high'
                })}
        }
        return vulnerable}}
    generateSecurityHeaders() {}
        this.log('Generating security headers configuration...);

        if () {}
            nextConfig = fs.readFileSync(nextConfigPath, utf8')}

        const vulnerable = [];
        for (const [name, version] of Object.entries(dependencies)) {}`;
            const packageVersion = \`\${name}@\${version}\;`;`
            if ([0]))) {}
                vulnerable.push({})

        // Add security headers if not already present;
        if (!nextConfig.includes('X-Frame-Options)) {}
            const securityHeaders = 
  // Security headers;
  async headers() {}
    return ) {}

  // Security headers;
    return }[;]

            // Insert security headers before the closing brace;
            const updatedConfig = nextConfig.replace(/(\s*)(module\.exports\s*=\s*nextConf;i;g;)/, "$1${securityHeaders}$1$2");
            fs.writeFileSync(nextConfigPath, updatedConfig);
            this.log(Security headers added to Next.js config')}
        return { status: 'success }}
    generateSecurityReport() {}
        this.log(Generating security scan report...');

        const report = {}
            "timestamp": new Date().toISOString(),
            project: this.projectRoot,
            "security": {}
                vulnerabilities: this.scanForVulnerabilities(),
                secrets: this.scanForSecrets(),
                "permissions": this.checkFilePermissions(),
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
                "headers": this.generateSecurityHeaders();
            },
            "recommendations": this.generateSecurityRecommendations();

        fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
        this.log("Security scan report saved to ${this.reportFile}");"
        return report}
    generateSecurityRecommendations() {}
        return [;]"

            throw error}
// Run the scanner if this script is executed directly;
    const scanner = new SecurityScanner) {}
    const scanner = new SecurityScanner}(;);
    scanner.run().catch(console.error)}


module.exports = SecurityScanner;

module.exports = SecurityScanner;
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
module.exports = SecurityScanner;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
