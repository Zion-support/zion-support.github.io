
#!/usr/bin/env node;
/**
 * PM2 Security Scanner Service;
 * Scans for security vulnerabilities and issues;
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class SecurityScanner {}
  constructor() {}
    this.processName = process.env.PM2_PROCESS_NAME || 'security-scanner';
    this.scanDependencies = process.env.SCAN_DEPENDENCIES === 'true';
    this.scanCode = process.env.SCAN_CODE === 'true';
    this.scanConfigs = process.env.SCAN_CONFIGS === 'true';
    this.alertOnCritical = process.env.ALERT_ON_CRITICAL === 'true';
    this.logFile = path.join(__dirname, '../../logs/pm2/security-scanner.log');
    this.ensureLogDir();
  };
  ensureLogDir() {}
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { recursive: true }
});
    };
  };
  log(message) {}
    const timestamp = new Date().toISOString();

    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;`
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  };
  async scanDependencies() {}
    if (!this.scanDependencies) {}
      this.log('Dependency scanning disabled');
      return { scanned: false };
    };
    try {}
      this.log('Scanning dependencies for vulnerabilities...');
      // Run npm audit;
      const auditResult = execSync('npm audit --json', { })
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd();
      }
});
      const auditData = JSON.parse(auditResult);
      const vulnerabilities = auditData.vulnerabilities || {};
      const criticalCount = Object.values(vulnerabilities).filter(v => v.severity === 'critical').length;
      const highCount = Object.values(vulnerabilities).filter(v => v.severity === 'high').length;
      const moderateCount = Object.values(vulnerabilities).filter(v => v.severity === 'moderate').length;
      this.log(`Found ${criticalCount} critical, ${highCount} high, ${moderateCount} moderate vulnerabilities`);
      if (criticalCount > 0 && this.alertOnCritical) {}
        this.log('ALERT: Critical vulnerabilities found!');
      };
      return {}
        scanned: true,
        critical: criticalCount,
        high: highCount,
        moderate: moderateCount,
        total: Object.keys(vulnerabilities).length,
        vulnerabilities;
      };
    } catch (error) {}
      this.log(`Dependency scan failed: ${error.message}`);
      return { scanned: false, error: error.message };
    };
  };
  async scanCode() {}
    if (!this.scanCode) {}
      this.log('Code scanning disabled');
      return { scanned: false };
    };
    try {}
      this.log('Scanning code for security issues...');
      // Check for common security issues;
      const securityIssues = [];
      // Check for hardcoded secrets;
      const secretPatterns = []
        /password\s*=\s*['"][^'"]+['"]/gi,
        /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
        /secret\s*=\s*['"][^'"]+['"]/gi,
        /token\s*=\s*['"][^'"]+['"]/gi;
      ];
      const sourceFiles = this.getSourceFiles();
      for (const file of sourceFiles) {}
        try {}
          const content = fs.readFileSync(file, 'utf8');
          for (const pattern of secretPatterns) {}
            const matches = content.match(pattern);
            if (matches) {}
              securityIssues.push({})
                file,
                type: 'hardcoded_secret',
                matches: matches.length,
                severity: 'high'
              }
});
            };
          };
        } catch (err) {}
          // Skip files that can't be read;
        };
      };
      this.log(`Found ${securityIssues.length} potential security issues in code`);
      return {}
        scanned: true,
        issues: securityIssues,
        totalIssues: securityIssues.length;
      };
    } catch (error) {}
      this.log(`Code scan failed: ${error.message}`);
      return { scanned: false, error: error.message };
    };
  };
  async scanConfigs() {}
    if (!this.scanConfigs) {}
      this.log('Config scanning disabled');
      return { scanned: false };
    };
    try {}
      this.log('Scanning configuration files...');
      const configFiles = []
        'package.json',
        'next.config.js',
        'vite.config.js',
        'webpack.config.js',
      ].filter(file => fs.existsSync(file));
      const configIssues = [];
      for (const file of configFiles) {}
        try {}
          const content = fs.readFileSync(file, 'utf8');
          // Check for unsafe configurations;
          if (content.includes('eval(') || content.includes('Function(')) {}
            configIssues.push({})
              file,
              type: 'unsafe_eval',
              severity: 'high'
            }
});
          };
          if (content.includes('process.env') && !content.includes('process.env.NODE_ENV')) {}
            configIssues.push({})
              file,
              type: 'env_exposure',
              severity: 'medium'
            }
});
          };
        } catch (err) {}
          // Skip files that can't be read;
        };
      };
      this.log(`Found ${configIssues.length} configuration security issues`);
      return {}
        scanned: true,
        issues: configIssues,
        totalIssues: configIssues.length;
      };
    } catch (error) {}
      this.log(`Config scan failed: ${error.message}`);
      return { scanned: false, error: error.message };
    };
  };
  getSourceFiles() {}
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte'];
    const sourceFiles = [];
    const scanDir = (dir) => {}
      try {}
        const files = fs.readdirSync(dir);
        for (const file of files) {}
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {}
            scanDir(filePath);
          } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {}
            sourceFiles.push(filePath);
          };
        };
      } catch (err) {}
        // Skip directories that can't be read;
      };
    };
    scanDir(process.cwd());
    return sourceFiles;
  };
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
      };
    };
    const reportFile = path.join(__dirname, '../../logs/pm2/security-scanner-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Security report generated: ${reportFile}`);
    return report;
  };
  async start() {}
    this.log(`${this.processName} started`);
    try {}
      const report = await this.generateReport();
      const totalIssues = (report.dependencyScan.total || 0) + 
                         (report.codeScan.totalIssues || 0) + 
                         (report.configScan.totalIssues || 0);
      if (totalIssues === 0) {}
        this.log('Security scan completed - no issues found');
      } else {}
        this.log(`Security scan completed - found ${totalIssues} issues`);
        if (report.dependencyScan.critical > 0 && this.alertOnCritical) {}
          this.log('ALERT: Critical vulnerabilities detected!');
        };
      };
    } catch (error) {}
      this.log(`Security scan error: ${error.message}`);
    };
  };
};
// Start the service;
if (require.main === module) {}
  const securityScanner = new SecurityScanner();
  securityScanner.start().catch(console.error);
};

