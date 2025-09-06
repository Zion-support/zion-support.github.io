
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
    this.startTime = Date.now(),;
  };
=======
    this.startTime = Date.now(),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,;
  log(message) {,;
    const timestamp = new Date().toISOString(),;
    const logMessage = `[${timestamp}] ${message}\n`,;
,;
    try {,;
      fs.appendFileSync(this.logFile, logMessage),;
    } catch (error) {,;
<<<<<<< HEAD
      console.error('Error writing to log:file:', error.message),;
    };
  };
,;
  async checkSEO() {,;
    try {,;
      this.log('🔍 Checking SEO...'),;
=======
      console.error('Error writing to log:file:', error.message),
}
};
,;
  async checkSEO() {,;
    try {,;
      this.log(' Checking SEO...'),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
        }),;
      };
    };
  };
=======
        }),
};
    }
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
          files.push(fullPath),;
        };
      }),;
    };
=======
          files.push(fullPath),
};
      }),
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class SEOAccessibility {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/seo-accessibility-report.json');
<<<<<<< HEAD
    this.startTime = Date.now();
};
;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    this.startTime = Date.now()
};
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
    };
  };
,
  async checkSEO() {,
    try {,
      this.log('🔍 Checking SEO...'),
=======
    }
};
,
  async checkSEO() {,
    try {,
      this.log(' Checking SEO...'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
      };
    };
  };
=======
      }
}
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
