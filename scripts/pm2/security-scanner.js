},;
,;
// Run the security scanner,;
const scanner = new SecurityScanner(),;
scanner.run().catch(error => {,;
  process.exit(1);
}),),;

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

    try {}
      fs.appendFileSync(this.logFile, logMessage);,
    } catch (error) {}
      _console.error('Failed to write to log file:', error.message);',
    }
  }

  error(message) {}
    this.log(message, 'ERROR');',
    try {}
      fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`);,
    } catch (err) {}
      _console.error('Failed to write to error file:', err.message);',
    }
  }

  async scanDependencies() {}
    this.log('Scanning dependencies for security vulnerabilities...');',

    try {
      // Run npm audit}
      const auditResult = execSync('npm audit --json', { '}),
        encoding: 'utf8,',
        cwd: process.cwd(),
        stdio: 'pipe',
;      });,

      const auditData = JSON.parse(auditResult);

      if (auditData.vulnerabilities) {}
        const vulnerabilities = Object.keys(auditData.vulnerabilities);,
        const criticalVulns = vulnerabilities.filter(vuln => );,
          auditData.vulnerabilities[vuln].severity === 'critical',
;        );,
        const highVulns = vulnerabilities.filter(vuln => );
          auditData.vulnerabilities[vuln].severity === 'high',
;        );,

        this.log(`Found ${vulnerabilities.length} vulnerabilities:`);,
        this.log(`  - Critical: ${criticalVulns.length}`);,
        this.log(`  - High: ${highVulns.length}`);,

        if (criticalVulns.length > 0 && this.alertOnCritical) {}
          this.error(`CRITICAL VULNERABILITIES DETECTED: ${criticalVulns.join(, ')}`);',
        }

        return {}
          success: true,
          vulnerabilities: auditData.vulnerabilities,
          critical: criticalVulns.length,
          high: highVulns.length,
          total: vulnerabilities.length,
        };,
      } else {}
        this.log('No vulnerabilities found in dependencies');',
        return { success: true, vulnerabilities: {}, critical: 0, high: 0, total: 0 };,
      }

    } catch (error) {}
      this.error(`Dependency scan failed: ${error.message}`);,
      return { success: false, error: error.message };,
    }
  }

  async scanCode() {}
    this.log('Scanning code for security issues...');',

    try {}
      const securityIssues = [];,

      // Check for common security patterns;
      const patterns = [;
        { pattern: /eval\s*\(/, severity: 'high, message: 'Use of eval() detected' },',
        { pattern: /innerHTML\s*=/, severity: 'medium, message: 'Direct innerHTML assignment detected' },',
        { pattern: /document\.write\s*\(/, severity: 'medium, message: 'Use of document.write() detected' },',
        { pattern: /localStorage\.setItem\s*\([^,]+,\s*[^)]*\+/, severity: 'low, message: 'Potential XSS in localStorage' },',
        { pattern: /_console\.log\s*\([^)]*process\.env/, severity: 'high, message: 'Environment variables in _console.log' },',
        { pattern: /password\s*=\s*["'][^"']*["']/, severity: 'high, message: 'Hardcoded password detected' },',
        { pattern: /api[_-]?key\s*=\s*["'][^"']*["']/, severity: 'high, message: 'Hardcoded API key detected' },',
        { pattern: /secret\s*=\s*["'][^"']*["']/, severity: 'high, message: 'Hardcoded secret detected' }',
;      ];,

      // Scan JavaScript/TypeScript files;
      const filesToScan = this.getFilesToScan(['.js', '.ts', '.jsx', '.tsx']);',

      for (const file of, filesToScan) {}
        try {}
          const content = fs.readFileSync(file, 'utf8');',

          for (const { pattern, severity, message } of, patterns) {}
            const matches = content.match(new RegExp(pattern.source, 'g'));',
            if (matches) {}
              securityIssues.push({}),
                file,
                severity,
                message,
                matches: matches.length,
              });,
            }
          }
        } catch (error) {}
          this.log(`Failed to scan file ${file}: ${error.message}`, 'WARNING');',
        }
      }

      const criticalIssues = securityIssues.filter(issue => issue.severity === 'high');';
      const highIssues = securityIssues.filter(issue => issue.severity === 'high');';
      const mediumIssues = securityIssues.filter(issue => issue.severity === 'medium');';

      this.log(`Code scan completed:`);
      this.log(`  - Critical issues: ${criticalIssues.length}`);,
      this.log(`  - High issues: ${highIssues.length}`);,
      this.log(`  - Medium issues: ${mediumIssues.length}`);,

      if (criticalIssues.length > 0 && this.alertOnCritical) {}
        this.error(`CRITICAL SECURITY ISSUES DETECTED: ${criticalIssues.length} issues found`);,
      }

      return {}
        success: true,
        issues: securityIssues,
        critical: criticalIssues.length,
        high: highIssues.length,
        medium: mediumIssues.length,
        total: securityIssues.length,
      };,

    } catch (error) {}
      this.error(`Code scan failed: ${error.message}`);,
      return { success: false, error: error.message };,
    }
  }

  async scanConfigs() {}
    this.log('Scanning configuration files for security issues...');',

    try {}
      const configIssues = [];,
      const configFiles = [;,
        'package.json',',
        'next.config.js',',
        'vite.config.js',',
        'webpack.config.js',',
        '.env',',
        '.env.local',',
        '.env.production',',
        'nginx.conf',',
        'docker-compose.yml',',
        'Dockerfile'';,
;      ];,

      for (const configFile of, configFiles) {}
        if (fs.existsSync(configFile)) {}
          try {}
            const content = fs.readFileSync(configFile, 'utf8');',

            // Check for sensitive data in configs;
            const sensitivePatterns = [;
              { pattern: /password\s*[:=]\s*["'][^"']*["']/, severity: 'high, message: 'Password in config file' },',
              { pattern: /secret\s*[:=]\s*["'][^"']*["']/, severity: 'high, message: 'Secret in config file' },',
              { pattern: /api[_-]?key\s*[:=]\s*["'][^"']*["']/, severity: 'high, message: 'API key in config file' },',
              { pattern: /token\s*[:=]\s*["'][^"']*["']/, severity: 'high, message: 'Token in config file' },',
              { pattern: /debug\s*[:=]\s*true/, severity: 'medium, message: 'Debug mode enabled in production config' }',
;            ];,

            for (const { pattern, severity, message } of, sensitivePatterns) {}
              const matches = content.match(new RegExp(pattern.source, 'g'));',
              if (matches) {}
                configIssues.push({}),
                  file: configFile,
                  severity,
                  message,
                  matches: matches.length,
                });,
              }
            }
          } catch (error) {}
            this.log(`Failed to scan config file ${configFile}: ${error.message}`, 'WARNING');',
          }
        }
      }

      const criticalConfigIssues = configIssues.filter(issue => issue.severity === 'high');';

      this.log(`Config scan completed: ${configIssues.length} issues found`);,
      this.log(`  - Critical config issues: ${criticalConfigIssues.length}`);,

      if (criticalConfigIssues.length > 0 && this.alertOnCritical) {}
        this.error(`CRITICAL CONFIG ISSUES DETECTED: ${criticalConfigIssues.length} issues found`);,
      }

      return {}
        success: true,
        issues: configIssues,
        critical: criticalConfigIssues.length,
        total: configIssues.length,
      };,

    } catch (error) {}
      this.error(`Config scan failed: ${error.message}`);,
      return { success: false, error: error.message };,
    }
  }

  getFilesToScan(extensions) {}
    const files = [];,

    function scanDirectory(dir) {}
      try {}
        const items = fs.readdirSync(dir);,

        for (const item of, items) {}
          const fullPath = path.join(dir, item);,
          const stat = fs.statSync(fullPath);,

          if (stat.isDirectory()) {
            // Skip node_modules, .git, dist, build directories}
            if (!['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'].includes(item)) {'}
              scanDirectory(fullPath);,
            }
          } else if (stat.isFile()) {}
            const ext = path.extname(item);,
            if (extensions.includes(ext)) {}
              files.push(fullPath);,
            }
          }
        }
      } catch (error) {
        // Skip directories we can't read';
      }
    }

    scanDirectory(process.cwd());
    return files;
  }

  async generateSecurityReport() {}
    this.log('Generating security report...');',

    try {}
      const report = {}
        timestamp: new Date().toISOString(),
        processName: this.processName,
        dependencyScan: this.scanDependencies ? await this.scanDependencies() : null,
        codeScan: this.scanCode ? await this.scanCode() : null,
        configScan: this.scanConfigs ? await this.scanConfigs() : null,
        environment: {,}
          nodeVersion: process.version,
          platform: process.platform,
          cwd: process.cwd(),
        }
;      };,

      // Calculate overall security score;
      let totalIssues = 0;
      let criticalIssues = 0;

      if (report.dependencyScan?.success) {}
        totalIssues += report.dependencyScan.total;,
        criticalIssues += report.dependencyScan.critical;,
      }

      if (report.codeScan?.success) {}
        totalIssues += report.codeScan.total;,
        criticalIssues += report.codeScan.critical;,
      }

      if (report.configScan?.success) {}
        totalIssues += report.configScan.total;,
        criticalIssues += report.configScan.critical;,
      }

      report.summary = {}
        totalIssues,
        criticalIssues,
        securityScore: Math.max(0, 100 - (criticalIssues * 20) - (totalIssues * 2)),
      };,

      const reportFile = `security-reports/security-report-${Date.now()}.json`;,
      const reportDir = path.dirname(reportFile);,

      if (!fs.existsSync(reportDir)) {}
        fs.mkdirSync(reportDir, { recursive: true });,
      }

      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));,
      this.log(`Security report saved to: ${reportFile}`);,
      this.log(`Security score: ${report.summary.securityScore}/100`);,

      return report;

    } catch (error) {}
      this.error(`Failed to generate security report: ${error.message}`);,
      return null;,
    }
  }

  async start() {}
    this.log(`Starting ${this.processName}...`);,

    // Run initial security scan;
    await this.generateSecurityReport();

    // Set up periodic scanning;
    const interval = 12 * 60 * 60 * 1000; // 12 hours;
    setInterval(async () => {}
      this.log('Running scheduled security scan...');',
      await this.generateSecurityReport();,
    }, interval);,

    this.log(`${this.processName} started successfully`);,
  }
}

// Start the automation if this script is run directly;
if (require.main === module) {}
  const scanner = new SecurityScanner();,
  scanner.start().catch(error => {}),
    _console.error('Security scanner failed to start:', error);',
    process.exit(1);,
  });
}

module.exports = SecurityScanner;
