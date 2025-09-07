

<<<<<<< HEAD
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
/**
 * PM2 Security Scanner Service;
 * Scans for security vulnerabilities and issues;
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class SecurityScanner {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME ||security-scanner';
    this.scanDependencies = process.env.SCAN_DEPENDENCIES ===true;
    this.scanCode = process.env.SCAN_CODE ===true;
    this.scanConfigs = process.env.SCAN_CONFIGS ===true;
    this.alertOnCritical = process.env.ALERT_ON_CRITICAL ===true;
    this.logFile = path.join(__dirname,../../logs/pm2/security-scanner.log');
    this.ensureLogDir();
  };
  ensureLogDir() {}
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { recursive: true })
});
  log(message) {}
    const timestamp = new Date().toISOString();

    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;`
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  async scanDependencies() {}
    if (!this.scanDependencies) {}
      this.log('Dependency scanning disabled');
      return { scanned: false };
    try {}
<<<<<<< HEAD
      this.log('Scanning dependencies for vulnerabilities...');
=======
      this.log('Scanning dependencies for vulnerabilities...);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      // Run npm audit;
      const auditResult = execSync('npm audit --json, { })
        encoding: utf8,
        stdio: pipe,
        cwd: process.cwd();
      }
<<<<<<< HEAD

      const auditData = JSON.parse(auditResult);
      const vulnerabilities = auditData.vulnerabilities || {};
      const criticalCount = Object.values(vulnerabilities).filter(v => v.severity === 'critical').length;
      const highCount = Object.values(vulnerabilities).filter(v => v.severity === 'high').length;
      const moderateCount = Object.values(vulnerabilities).filter(v => v.severity === 'moderate').length;`;
=======
});

      const auditData = JSON.parse(auditResult);
      const vulnerabilities = auditData.vulnerabilities || {};
      const criticalCount = Object.values(vulnerabilities).filter(v => v.severity ===critical').length;
      const highCount = Object.values(vulnerabilities).filter(v => v.severity ===high').length;
      const moderateCount = Object.values(vulnerabilities).filter(v => v.severity ===moderate').length;
      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);

>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);
`;

      if (criticalCount > 0 && this.alertOnCritical) {}
<<<<<<< HEAD
        this.log('ALERT: Critical vulnerabilities found!');
=======
        this.log('ALERT: Critical vulnerabilities found!);
      };
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return {}
        scanned: true,
        critical: criticalCount,
        high: highCount,
        moderate: moderateCount,
        total: Object.keys(vulnerabilities).length,
        vulnerabilities;
<<<<<<< HEAD
    } catch (error) {}`;
      this.log(`Dependency scan failed: ${error.message}`);
=======
      };
    } catch (error) {}
      this.log(`Dependency scan failed: ${error.message});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return { scanned: false, error: error.message };
  async scanCode() {}
    if (!this.scanCode) {}
      this.log('Code scanning disabled');
<<<<<<< HEAD
      this.log('Scanning code for security issues...');
=======
      return { scanned: false };
    };
    try {}
      this.log('Scanning code for security issues...);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      // Check for common security issues;
      const securityIssues = [];
      
      // Check for hardcoded secrets;
      const secretPatterns = []
<<<<<<< HEAD
        /password\s*=\s*['"][^'"]+['"]/gi,""
        /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,""
        /secret\s*=\s*['"][^'"]+['"]/gi,""
        /token\s*=\s*['"][^'"]+['"]/gi;"
=======
        /password\s*=\s*["][^'"]+["]/gi,
        /api[_-]?key\s*=\s*["][^'"]+["]/gi,
        /secret\s*=\s*["][^'"]+["]/gi,
        /token\s*=\s*["][^'"]+["]/gi;"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      ];

      const sourceFiles = this.getSourceFiles();
      for (const file of sourceFiles) {}
        try {}"
<<<<<<< HEAD
          const content = fs.readFileSync(file, 'utf8');
=======
          const content = fs.readFileSync(file,utf8);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
          for (const pattern of secretPatterns) {}
            const matches = content.match(pattern);
            if (matches) {}
              securityIssues.push({})
                file,
                type: hardcoded_secret,
                matches: matches.length,
<<<<<<< HEAD
                severity: 'high
=======
                severity: high
              }
});
            };
          };
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
        } catch (err) {}
          // Skip files that can't be read;
      };`;
      this.log(`Found ${securityIssues.length} potential security issues in code`);

<<<<<<< HEAD
        issues: securityIssues,
        totalIssues: securityIssues.length;
      this.log(`Code scan failed: ${error.message}`);
  async scanConfigs() {}
    if (!this.scanConfigs) {}
      this.log('Config scanning disabled');
      this.log('Scanning configuration files...');
=======
      return {}
        scanned: true,
        issues: securityIssues,
        totalIssues: securityIssues.length;
      };
    } catch (error) {}
      this.log(`Code scan failed: ${error.message});
      return { scanned: false, error: error.message };
    };
  };
  async scanConfigs() {}
    if (!this.scanConfigs) {}
      this.log('Config scanning disabled');
      return { scanned: false };
    };
    try {}
      this.log('Scanning configuration files...);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      const configFiles = []
        'package.json,next.config.js,vite.config.js,webpack.config.js,].filter(file => fs.existsSync(file));

      const configIssues = [];

      for (const file of configFiles) {}
<<<<<<< HEAD
          // Check for unsafe configurations;
          if (content.includes('eval(') || content.includes('Function(')) {}
            configIssues.push({})
              type: 'unsafe_eval',
          if (content.includes('process.env') && !content.includes('process.env.NODE_ENV')) {}
              type: 'env_exposure',
              severity: 'medium
=======
        try {}
          const content = fs.readFileSync(file,utf8);
          // Check for unsafe configurations;
          if (content.includes('eval(') || content.includes('Function(')) {}
            configIssues.push({})
              file,
              type: unsafe_eval,
              severity: high
            }
});
          };
          if (content.includes('process.env') && !content.includes('process.env.NODE_ENV')) {}
            configIssues.push({})
              file,
              type: env_exposure,
              severity: medium
            }
});
          };
        } catch (err) {}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
          // Skip files that can't be read;
      this.log(`Found ${configIssues.length} configuration security issues`);

<<<<<<< HEAD
        issues: configIssues,
        totalIssues: configIssues.length;
      this.log(`Config scan failed: ${error.message}`);
=======
      return {}
        scanned: true,
        issues: configIssues,
        totalIssues: configIssues.length;
      };
    } catch (error) {}
      this.log(`Config scan failed: ${error.message});
      return { scanned: false, error: error.message };
    };
  };
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  getSourceFiles() {}
    const extensions = [.js,.jsx,.ts,.tsx,.vue,.svelte];
    const sourceFiles = [];

    const scanDir = (dir) => {}
        const files = fs.readdirSync(dir);
        for (const file of files) {}
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
<<<<<<< HEAD

          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {}
=======
'
          if (stat.isDirectory() && !file.startsWith('.) && file !==node_modules') {}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
            scanDir(filePath);
          } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {}
            sourceFiles.push(filePath);
        // Skip directories that can't be read;
<<<<<<< HEAD
=======
      };
    };
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

    scanDir(process.cwd());
    return sourceFiles;
  async generateReport() {}
    const report = {}
      timestamp: new Date().toISOString(),
      processName: this.processName,
      dependencyScan: await this.scanDependencies(),
      codeScan: await this.scanCode(),
      configScan: await this.scanConfigs(),
      environment: {}
        NODE_ENV: process.env.NODE_ENV,
        scanDependencies: this.scanDependencies,
        scanCode: this.scanCode,
        scanConfigs: this.scanConfigs,
        alertOnCritical: this.alertOnCritical;
<<<<<<< HEAD

    const reportFile = path.join(__dirname, '../../logs/pm2/security-scanner-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Security report generated: ${reportFile}`);
=======
      };
    };
'
    const reportFile = path.join(__dirname,../../logs/pm2/security-scanner-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Security report generated: ${reportFile});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    return report;
  async start() {}`;
    this.log(`${this.processName} started`);
    
      const report = await this.generateReport();
      
      const totalIssues = (report.dependencyScan.total || 0) + 
                         (report.codeScan.totalIssues || 0) + 
                         (report.configScan.totalIssues || 0);
      
      if (totalIssues === 0) {}
        this.log('Security scan completed - no issues found');
      } else {}`;
        this.log(`Security scan completed - found ${totalIssues} issues`);

        if (report.dependencyScan.critical > 0 && this.alertOnCritical) {}
<<<<<<< HEAD
          this.log('ALERT: Critical vulnerabilities detected!');
      this.log(`Security scan error: ${error.message}`);
=======
          this.log('ALERT: Critical vulnerabilities detected!);
        };
      };
    } catch (error) {}
      this.log(`Security scan error: ${error.message});
    };
  };
};
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
// Start the service;
if (require.main === module) {}
  const securityScanner = new SecurityScanner();
  securityScanner.start().catch(console.error);
<<<<<<< HEAD
=======
};

'
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
