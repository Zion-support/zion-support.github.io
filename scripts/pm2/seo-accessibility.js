;
#!/usr/bin/env node,;
const fs = require('fs'),;
const path = require('path'),;
const { execSync } = require('child_process'),;
,;
class SEOAccessibility {,;
  constructor() {,;
    this.projectRoot = process.cwd(),;
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'),;
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'),;
    this.startTime = Date.now(),;
  };
,;
  log(message) {,;
    const timestamp = new Date().toISOString(),;
    const logMessage = `[${timestamp}] ${message}\n`,;
,;
    try {,;
      fs.appendFileSync(this.logFile, logMessage),;
    } catch (error) {,;
      console.error('Error writing to log:file:', error.message),;
    };
  };
,;
  async checkSEO() {,;
    try {,;
      this.log('🔍 Checking SEO...'),;
,;
      const seoIssues = [],;
      const pagesDir = path.join(this.projectRoot, 'pages'),;
,;
      if (fs.existsSync(pagesDir)) {,;
        const pageFiles = this.getPageFiles(pagesDir),;
,;
        pageFiles.forEach(file => {,;
          const content = fs.readFileSync(file, 'utf8'),;
          const seoChecks = this.analyzeSEO(file, content),;
          seoIssues.push(...seoChecks),;
        }),;
      };
    };
  };
,;
  getPageFiles(dir) {,;
    const files = [],;
,;
    const scanDirectory = (currentDir) => {,;
      const items = fs.readdirSync(currentDir),;
      items.forEach(item => {,;
        const fullPath = path.join(currentDir, item),;
        const stat = fs.statSync(fullPath),;
,;
        if (stat.isDirectory()) {,;
          scanDirectory(fullPath),;
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {,;
          files.push(fullPath),;
        };
      }),;
    };
;#!/usr/bin/env node;
#!/usr/bin/env node;

const fs = require('fs');
const path = require('path');

const { execSync } = require('child_process');
;
class SEOAccessibility {;
  constructor() {;

const { execSync } = require('child_process');

const { execSync } = require('child_process'),;
,;
class SEOAccessibility {,;
  constructor() {,;

          const content = fs.readFileSync(file, 'utf8'),;
          const seoChecks = this.analyzeSEO(file, content),;
          seoIssues.push(...seoChecks);
        });

      })
    },

ursor/fix-lint-push-and-merge-to-main-28da;

const { execSync } = require('child_process'),
,
class SEOAccessibility {,
  constructor() {,

        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {,
          files.push(fullPath)
        };
      })
    };

class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}

class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}

      });
    },;

      });
    },;

#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}

}
}
      });
    },;'`
class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}
      });
    },;

}
}
      });
    },;

    try {}
      fs.appendFileSync(this.logFile, logMessage);,
    } catch (error) {}'
      _console.error('Failed to write to log file:', error.message);',
    }
  }
  error(message) {}'
    this.log(message, 'ERROR');',
    try {}`
      fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`);,
    } catch (err) {}'
      _console.error('Failed to write to error file:', err.message);',
    }
  }
  async checkSEO() {}'
    this.log('Checking SEO metrics...');',
    try {}

      const seoIssues = [];,
      const seoScore = { total: 0, passed: 0, failed: 0 };,
      // Check for meta tags in HTML files;
      const htmlFiles = this.findHtmlFiles();

      const sitemapFiles = ['sitemap.xml', 'sitemap.txt', 'public/sitemap.xml'];',
      let sitemapExists = false;,
      for (const sitemap of, sitemapFiles) {}
        if (fs.existsSync(sitemap)) {}
          sitemapExists = true;,
          break;,

      // Calculate SEO score;
      const totalChecks = 10; // Adjust based on actual checks;
      const passedChecks = totalChecks - seoIssues.length;
      seoScore.total = totalChecks;
      seoScore.passed = passedChecks;

      this.log(`SEO check completed: ${passedChecks}/${totalChecks} checks passed`);,
      return {}
        success: true,
        issues: seoIssues,
        score: seoScore,

          message: 'Potential color contrast issue,',
          file: filePath;,
        });,
      }
    }
    return issues;
  }

    this.log('Checking performance metrics...');',
    try {}
      const perfIssues = [];,
      const perfScore = { total: 0, passed: 0, failed: 0 };,
      // Check for performance optimizations;
      const jsFiles = this.findJsFiles();

        const content = fs.readFileSync(file, 'utf8');',
        const fileIssues = this.analyzePerformanceContent(content, file);,
        perfIssues.push(...fileIssues);,
      }

      const buildDirs = ['dist', 'build', 'out', '.next'];',
      let buildExists = false;,
      let buildSize = 0;
      for (const dir of, buildDirs) {}
        if (fs.existsSync(dir)) {}
          buildExists = true;,
          buildSize = this.getDirectorySize(dir);,
          break;
        }
      }
      if (buildExists && buildSize > 10 * 1024 * 1024) { // 10MB}

          file: 'global',
        });,
      }
      // Calculate performance score;
      const totalChecks = 6; // Adjust based on actual checks;
      const passedChecks = totalChecks - perfIssues.length;
      perfScore.total = totalChecks;
      perfScore.passed = passedChecks;

      this.log(`Performance check completed: ${passedChecks}/${totalChecks} checks passed`);,
      return {}
        success: true,
        issues: perfIssues,
        score: perfScore,
        buildSize: buildSize,
        buildExists: buildExists,
      };,

      this.error(`Performance check failed: ${error.message}`);,
      return { success: false, error: error.message };,
    }
  }
  analyzePerformanceContent(content, filePath) {}
    const issues = [];,

        message: 'Console.log statement found in production code,',
        file: filePath;,
      });,
    }
    // Check for large functions (simplified);
    const functions = content.match(/function\s+\w+\s*\([^)]*\)\s*{[\s\S]*?}/g) || [];,

          message: `Function has ${lines} lines`,
          file: filePath,
        });,
      }
    }

        message: 'Synchronous file operations found,',
        file: filePath;,
      });,
    }
    return issues;
  }
  getDirectorySize(dirPath) {}
    let size = 0;,
    function calculateSize(dir) {}
      try {}
        const items = fs.readdirSync(dir);,
        for (const item of, items) {}
          const fullPath = path.join(dir, item);,
          const stat = fs.statSync(fullPath);,
          if (stat.isDirectory()) {}
            calculateSize(fullPath);,
          } else {}
            size += stat.size;,
          }
        }

        // Skip directories we can't read';
      }
    }
    calculateSize(dirPath);
    return size;
  }
  findHtmlFiles() {}
    const files = [];,
    function scanDirectory(dir) {}
      try {}
        const items = fs.readdirSync(dir);,
        for (const item of, items) {}
          const fullPath = path.join(dir, item);,
          const stat = fs.statSync(fullPath);,

            if (!['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'].includes(item)) {'}
              scanDirectory(fullPath);,
            }
          } else if (stat.isFile()) {}

            if (ext === '.html' || ext === '.htm') {'}
              files.push(fullPath);,
            }
          }
        }

        // Skip directories we can't read';
      }
    }
    scanDirectory(process.cwd());
    return files;
  }
  findJsFiles() {}
    const files = [];,
    function scanDirectory(dir) {}
      try {}
        const items = fs.readdirSync(dir);,
        for (const item of, items) {}
          const fullPath = path.join(dir, item);,
          const stat = fs.statSync(fullPath);,

            if (!['node_modules', '.git', 'dist', 'build', 'coverage', 'logs'].includes(item)) {'}
              scanDirectory(fullPath);,
            }
          } else if (stat.isFile()) {}

            if (['.js', '.ts', '.jsx', '.tsx'].includes(ext)) {'}
              files.push(fullPath);,
            }
          }
        }

        // Skip directories we can't read';
      }
    }
    scanDirectory(process.cwd());
    return files;
  }

    this.log('Generating SEO and accessibility report...');',
    try {}
      const report = {}
        timestamp: new Date().toISOString(),
        processName: this.processName,
        seoResults: this.checkSEO ? await this.checkSEO() : null,
        accessibilityResults: this.checkAccessibility ? await this.checkAccessibility() : null,
        performanceResults: this.checkPerformance ? await this.checkPerformance() : null,
        environment: {,}
          nodeVersion: process.version,
          platform: process.platform,
          cwd: process.cwd(),
        }
;      };,
      // Calculate overall score;
      let totalScore = 0;
      let totalChecks = 0;
      if (report.seoResults?.success) {}
        totalScore += report.seoResults.score.passed;,
        totalChecks += report.seoResults.score.total;,
      }
      if (report.accessibilityResults?.success) {}
        totalScore += report.accessibilityResults.score.passed;,
        totalChecks += report.accessibilityResults.score.total;,
      }
      if (report.performanceResults?.success) {}
        totalScore += report.performanceResults.score.passed;,
        totalChecks += report.performanceResults.score.total;,
      }

      const reportFile = `seo-a11y-reports/seo-accessibility-${Date.now()}.json`;,
      const reportDir = path.dirname(reportFile);,
      if (!fs.existsSync(reportDir)) {}
        fs.mkdirSync(reportDir, { recursive: true });,
      }

      this.error(`Failed to generate SEO and accessibility report: ${error.message}`);,
      return null;,
    }
  }

    this.log(`Starting ${this.processName}...`);,
    // Run initial SEO and accessibility check;
    await this.generateSEOAccessibilityReport();
    // Set up periodic checks;
    const interval = 4 * 60 * 60 * 1000; // 4 hours;

    this.log(`${this.processName} started successfully`);,
  }
}
// Start the automation if this script is run directly;
if (require.main === module) {}
  const scanner = new SEOAccessibilityScanner();,

    _console.error('SEO and accessibility scanner failed to start:', error);',
    process.exit(1);,
  });
}

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class SEOAccessibility {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json');
    this.startTime = Date.now();
};
;
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

;
#!/usr/bin/env node,;
const fs = require('fs'),;
const path = require('path'),;
const { execSync } = require('child_process'),;
,;
class SEOAccessibility {,;
  constructor() {,;
    this.projectRoot = process.cwd(),;
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'),;
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'),;
    this.startTime = Date.now();
  },;
,;
  log(message) {,;
    const timestamp = new Date().toISOString(),;
    const logMessage = `[${timestamp}] ${message}\n`,;
,;
    try {,;
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {,;
      console.error('Error writing to log: file:', error.message);
    }
  },;
,;
  async checkSEO() {,;
    try {,;
      this.log('🔍 Checking SEO...'),;
,;
      const seoIssues = [],;
      const pagesDir = path.join(this.projectRoot, 'pages'),;
,;
      if (fs.existsSync(pagesDir)) {,;
        const pageFiles = this.getPageFiles(pagesDir),;
,;
        pageFiles.forEach(file => {,;
          const content = fs.readFileSync(file, 'utf8'),;
          const seoChecks = this.analyzeSEO(file, content),;
          seoIssues.push(...seoChecks);
        });
      }
    }
  },;
,;
  getPageFiles(dir) {,;
    const files = [],;
,;
    const scanDirectory = (currentDir) => {,;
      const items = fs.readdirSync(currentDir),;
      items.forEach(item => {,;
        const fullPath = path.join(currentDir, item),;
        const stat = fs.statSync(fullPath),;
,;
        if (stat.isDirectory()) {,;
          scanDirectory(fullPath);
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {,;
          files.push(fullPath);
        }
      })
    },

ursor/fix-lint-push-and-merge-to-main-28da
      });
    },;
ursor/automate-test-improve-and-merge-code-4094
module.exports = SEOAccessibilityScanner;
ursor/add-new-services-and-deploy-updates-0462

const fs = require('fs'),
const path = require('path'),
const { execSync } = require('child_process'),
,
class SEOAccessibility {,
  constructor() {,
    this.projectRoot = process.cwd(),
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'),
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'),
    this.startTime = Date.now()
  };
,
  log(message) {,
    const timestamp = new Date().toISOString(),
    const logMessage = `[${timestamp}] ${message}\n`,
,
    try {,
      fs.appendFileSync(this.logFile, logMessage)
    } catch (error) {,
      console.error('Error writing to log file:', error.message)
    };
  };
,
  async checkSEO() {,
    try {,
      this.log('🔍 Checking SEO...'),
,
      const seoIssues = [],
      const pagesDir = path.join(this.projectRoot, 'pages'),
,
      if (fs.existsSync(pagesDir)) {,
        const pageFiles = this.getPageFiles(pagesDir),
,
        pageFiles.forEach(file => {,
          const content = fs.readFileSync(file, 'utf8'),
          const seoChecks = this.analyzeSEO(file, content),
          seoIssues.push(...seoChecks)
        })
      };
    };
  };
,
  getPageFiles(dir) {,
    const files = [],
,
    const scanDirectory = (currentDir) => {,
      const items = fs.readdirSync(currentDir),
      items.forEach(item => {,
        const fullPath = path.join(currentDir, item),
        const stat = fs.statSync(fullPath),
,
        if (stat.isDirectory()) {,
          scanDirectory(fullPath)
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {,
          files.push(fullPath)
        };
      })
    };

class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}

class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}

      });
    },;

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}

}
}
      });
    },;
class SEOAccessibility {constructor() {; this.projectRoot = process.cwd(); this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log'); this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json'); this.startTime = Date.now()}; log(message) {const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; try {fs.appendFileSync(this.logFile, logMessage)} catch (error) {console.error('Error writing to log file: ', error.message)}}; async checkSEO() {try {; this.log('🔍 Checking SEO...'); const seoIssues = []; const pagesDir = path.join(this.projectRoot, 'pages'); if (fs.existsSync(pagesDir)) {; const pageFiles = this.getPageFiles(pagesDir); pageFiles.forEach(file = > {; const content = fs.readFileSync(file, 'utf8'); const seoChecks = this.analyzeSEO(file, content); seoIssues.push(...seoChecks)})}}}; getPageFiles(dir) {const files = []; const scanDirectory = (currentDir) = > {; const items = fs.readdirSync(currentDir); items.forEach(item = > {; const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; scanDirectory(fullPath)} else if (item.endsWith('.js') |item.endsWith('.jsx') |item.endsWith('.ts') |item.endsWith('.tsx')) {files.push(fullPath)}})}
      });
    },;

}
}
      });
    },;