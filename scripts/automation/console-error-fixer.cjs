
#!/usr/bin/env node;
#!/usr/bin/env node
/**
 * Console Error Fixer Automation
 * Identifies and fixes console errors and warnings
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ConsoleErrorFixer {}
    constructor() {}
        this.projectRoot = process.cwd();
        this.logFile = path.join(this.projectRoot, 'logs', 'console-error-fixer.log');
        this.reportFile = path.join(this.projectRoot, 'console-error-fix-report.json');
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
const logMessage = `[${timestamp}] ${message}\;n;`;`;
        fs.appendFileSync(this.logFile, logMessage);
        console.log(message)};
        console.log(message)};
    findConsoleStatements() {}
        this.log('Finding console statements...');
        const files = this.findSourceFiles(;);
        const consoleStatements = [];
        console.log(message)};
    findConsoleStatements() {}"

        const files = this.findSourceFiles(;);
        const consoleStatements = [];
        
        
        for (const file of files) {}
            try {}

                const lines = content.split('\n';);
        for (const file of files) {}
            try {}

                const lines = content.split('\n;);

                
                for (let i = ;0; i < lines.length i++) {}
                    const line = lines[i];
                    const consoleMatch = line.match(/console\.(log|warn|error|info|debug)\s*\(/;g;);
                    
                for (let i = ;0; i < lines.length i++) {}
                    const line = lines[i];
                    const consoleMatch = line.match(/console\.(log|warn|error|info|debug)\s*\(/;g;);
                for (let i = ;0; i < lines.length i++) {}
                    const line = lines[i];
                    const consoleMatch = line.match(/console\.(log|warn|error|info|debug)\s*\(/;g;);
                for (let i = ;0; i < lines.length i++) {}
                
                for (let i = ;0; i < lines.length i++) {}
                    const line = lines[i];
                    const consoleMatch = line.match(/console\.(log|warn|error|info|debug)\s*\(/;g;);
                    
                    if ( {})
                        consoleStatements.push({})

        const files = [];

        const scanDirectory = (dir) => {}
            if () retu) {}
    ) retu}r;n;
            const items = fs.readdirSync(dir;);
            for (const item of items) {}
                const fullPath = path.join(dir, item;);
                const stat = fs.statSync(fullPath;);
                
                
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
    removeConsoleStatements() {}


        }};
        scanDirectory(this.projectRoot);
        return files};
    removeConsoleStatements() {}
        this.log('Removing console statements...');
        const files = this.findSourceFiles(;);
        let removedCount = ;0;
        const removals = [];
        
        const files = this.findSourceFiles(;);
        let removedCount = ;0;
        const removals = [];
        
        
        const files = this.findSourceFiles(;);
        let removedCount = ;0;
        const removals = [];
        
        
        const files = this.findSourceFiles(;);
        let removedCount = ;0;
        const removals = [];
        
        for (const file of files) {}
            try {}
                let content = fs.readFileSync(file, 'utf8';);
                let originalContent = conte;n;t;
                
                // Remove console statements;
                content = content.replace(/console\.(log|warn|error|info|debug)\s*\([^)]*\)\s*;?\s*/g, '');
                
                // Remove empty lines that might be left behind;
                content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
                // Remove console statements;
                content = content.replace(/console\.(log|warn|error|info|debug)\s*\([^)]*\)\s*;?\s*/g, );
                // Remove empty lines that might be left behind;
                content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
                
                
                if ( {})

                // Remove console statements;
                content = content.replace(/console\.(log|warn|error|info|debug)\s*\([^)]*\)\s*;?\s*/g, );
                // Remove empty lines that might be left behind;

                content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
                
                if ( {})
                    fs.writeFileSync(file, content)) {}
                    fs.writeFileSync(file, content)};
                    removedCount++;
                    removals.push({})
                        "file": file,
                        "action": 'removed_console_statements'
                    })};
            } catch (error) {}
                this.log(`Error processing file ${file}: ${error.message}`)};
        };
        this.log(`Removed console statements from ${removedCount} files`);
        return { removedCount, removals }};
    replaceWithLogger() {}
        this.log('Replacing console statements with logger...');

                
                // Replace console.log with logger.info;
                content = content.replace(/console\.log\s*\(/g, 'logger.info(');
                content = content.replace(/console\.warn\s*\(/g, 'logger.warn(');
                content = content.replace(/console\.error\s*\(/g, 'logger.error(');
                content = content.replace(/console\.info\s*\(/g, 'logger.info(');
                content = content.replace(/console\.debug\s*\(/g, 'logger.debug(');
                
                
        for (const file of files) {}
            try {}
                let content = fs.readFileSync(file, 'utf8';);
                let originalContent = conte;n;t;
                // Replace console.log with logger.info;
                content = content.replace(/console\.log\s*\(/g, 'logger.info(');
                content = content.replace(/console\.warn\s*\(/g, 'logger.warn(');
                content = content.replace(/console\.error\s*\(/g, 'logger.error(');
                content = content.replace(/console\.info\s*\(/g, 'logger.info(');
                content = content.replace(/console\.debug\s*\(/g, 'logger.debug(');
                
                
                if ( {})
                    // Add logger import if not present
                    if (!content.includes('import') || !content.includes('logger')) {}
                        const importStatement = "import { logger } from './utils/logge) {}
     {}
                    // Add logger import if not present
                    if (!content.includes('import') || !content.includes('logger')) {}
                        const importStatement = "import { logger } from './utils/logge}r;';\n"
                        content = importStatement + content}
                    fs.writeFileSync(file, content)
                    replacedCount++
                    replacements.push({})
                        "file": file,
                        "action": 'replaced_with_logger'
                if ( {})
                    // Add logger import if not present;
                    if (!content.includes('import') || !content.includes('logger')) {}
                        const importStatement = "import { logger } from './utils/logge) {}
     {}
                    // Add logger import if not present;
                    if (!content.includes('import') || !content.includes('logger')) {}
                        const importStatement = "import { logger } from './utils/logge}r;';\n";
                        content = importStatement + content};
                    fs.writeFileSync(file, content);
                    replacedCount++;
                    replacements.push({})
                        "file": file,
                        "action": 'replaced_with_logger'
                    })};
                    })}
            } catch (error) {}
                this.log(`Error processing file ${file}: ${error.message}`)};
        };
        this.log(`Replaced console statements in ${replacedCount} files`);
        return { replacedCount, replacements }};
    createLoggerUtility() {}
        this.log('Creating logger utility...');
        this.log('Creating logger utility...');
        const loggerPath = path.join(this.projectRoot, 'utils', 'logger.js';);
        const loggerDir = path.dirname(loggerPath;);
        
        const loggerPath = path.join(this.projectRoot, 'utils', 'logger.js';);
        const loggerDir = path.dirname(loggerPath;);
        
        if () {}
            fs.mkdirSync(loggerDir, { "recursive": true })};
const loggerContent = "/**;
 * Logger Utility;
 * Centralized logging for the application;
 */



class Logger {}
    constructor() {}"

        if () {}
            fs.mkdirSync(loggerDir, { "recursive": true })};
        const loggerContent = "/**
 * Logger Utility;
 * Centralized logging for the application;
 */



class Logger {}
    constructor() {}"


class Logger {}
    constructor() {}"




    log(level, message, ...args) {}
        if (this.isDevelopment) {}
            console[level](message, ...args)};
        // In production, you might want to send logs to a service;
    };
    info(message, ...args) {}
        this.log('info', message, ...args)};
    warn(message, ...args) {}
        this.log('warn', message, ...args)};
    error(message, ...args) {}
        this.log('error', message, ...args)};
    debug(message, ...args) {}
        this.log('debug', message, ...args)};
};
export const logger = new Logger) {}
    ) {}
            fs.mkdirSync(loggerDir, { "recursive": true })};
        const loggerContent = "/**
 * Logger Utility;
 * Centralized logging for the application;
 */

        fs.writeFileSync(loggerPath, loggerContent);
        this.log('Logger utility created');
        return { "status": 'success', "path": loggerPath }};
    generateErrorReport() {}
        this.log('Generating console error fix report...');

        fs.writeFileSync(loggerPath, loggerContent);
        this.log('Logger utility created');
        
        return { "status": 'success', "path": loggerPath }};
    generateErrorReport() {}
        this.log('Generating console error fix report...');
        

export const logger = new Logger}(;);
";"
        fs.writeFileSync(loggerPath, loggerContent);"
        this.log('Logger utility created');

        
        const consoleStatements = this.findConsoleStatements(;);
        const removals = this.removeConsoleStatements(;);
        const replacements = this.replaceWithLogger(;);
        const loggerCreation = this.createLoggerUtility(;);
        
        
        const report = {}

            "fixes": {}"
                consoleStatements: consoleStatements,"
                "removals": removals,
                "replacements": replacements,
                "removals": removals,
                "replacements": replacements,
                "loggerCreation": loggerCreation;
            },
            "recommendations": this.generateErrorRecommendations();
       };
        fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
        this.log("Console error fix report saved to ${this.reportFile}");

        fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
        this.log("Console error fix report saved to ${this.reportFile}");
        
        return report};

        return report}
        return report};
    generateErrorRecommendations() {}
        return [;]
            'Use a proper logging library like Winston or Pino',
            'Implement log levels for different environments',
            'Set up log aggregation for production monitoring',
            'Remove all console statements from production code',
            'Use structured logging for better debugging',
            'Implement log rotation to manage log file sizes',
            'Consider using a logging service for distributed applications'
        ]};
    async run() {}
        this.log('Console Error Fixer started');
        
        
        
        this.log('Console Error Fixer started');
        try {}
            const report = this.generateErrorReport(;)
            this.log('Console Error Fixer completed successfully')
            return report} catch (error) {}
            this.log("Console Error Fixer "failed": ${error.message}`);
                "loggerCreation": loggerCreation;"
            },"
            "recommendations": this.generateErrorRecommendations();"

        fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));"
        this.log("Console error fix report saved to ${this.reportFile}");"
        return report};
    generateErrorRecommendations() {}
        return [;]"

            throw error};
// Run the fixer if this script is executed directly;
    const fixer = new ConsoleErrorFixer) {}
    const fixer = new ConsoleErrorFixer}(;);
    fixer.run().catch(console.error)};
            throw error};
// Run the fixer if this script is executed directly;
    const fixer = new ConsoleErrorFixer) {}
    const fixer = new ConsoleErrorFixer}(;);
    fixer.run().catch(console.error)};

module.exports = ConsoleErrorFixer;
module.exports = ConsoleErrorFixer;
module.exports = ConsoleErrorFixer;


module.exports = ConsoleErrorFixer;
module.exports = ConsoleErrorFixer;



class ConsoleErrorFixer {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 900000; // 15 minutes
    this.maxRetries = parseInt(process.env.MAX_RETRIES) || 3;
    this.backoffMultiplier = parseFloat(process.env.BACKOFF_MULTIPLIER) || 2;
    this.retryCount = 0;
    this.fixHistory = [];
  }

  async start() {
    console.log('🔧 Console Error Fixer started');
    console.log(`📊 Fix interval: ${this.interval / 1000} seconds`);
    
    this.fixErrors();
    
    setInterval(() => {
      this.fixErrors();
    }, this.interval);
  }

  async fixErrors() {
    try {
      console.log(`\n🔧 [${new Date().toISOString()}] Starting console error fixing...`);
      
      // Reset retry count on successful run
      this.retryCount = 0;
      
      // Run error detection and fixing
      await this.detectConsoleErrors();
      await this.fixCommonIssues();
      await this.runBuildCheck();
      
      console.log('✅ Console error fixing completed successfully');
      
    } catch (error) {
      console.error('❌ Console error fixing failed:', error.message);
      await this.handleError(error);
    }
  }

  async detectConsoleErrors() {
    console.log('🔍 Detecting console errors...');
    
    try {
      const errors = [];
      
      // Check for console.log statements in production code
      const consoleLogs = this.findConsoleLogs();
      if (consoleLogs.length > 0) {
        errors.push({
          type: 'console_log',
          count: consoleLogs.length,
          locations: consoleLogs
        });
      }
      
      // Check for syntax errors
      const syntaxErrors = await this.checkSyntaxErrors();
      if (syntaxErrors.length > 0) {
        errors.push({
          type: 'syntax_error',
          count: syntaxErrors.length,
          errors: syntaxErrors
        });
      }
      
      // Check for build errors
      const buildErrors = await this.checkBuildErrors();
      if (buildErrors.length > 0) {
        errors.push({
          type: 'build_error',
          count: buildErrors.length,
          errors: buildErrors
        });
      }
      
      console.log(`🔍 Error detection: ${errors.length} error categories found`);
      
    } catch (error) {
      console.error('❌ Error detection failed:', error.message);
    }
  }

  async fixCommonIssues() {
    console.log('🔧 Fixing common issues...');
    
    try {
      const fixes = [];
      
      // Remove console.log statements
      const consoleLogFixes = await this.removeConsoleLogs();
      if (consoleLogFixes.length > 0) {
        fixes.push({
          type: 'console_log_removal',
          count: consoleLogFixes.length,
          fixes: consoleLogFixes
        });
      }
      
      // Fix syntax errors
      const syntaxFixes = await this.fixSyntaxErrors();
      if (syntaxFixes.length > 0) {
        fixes.push({
          type: 'syntax_fixes',
          count: syntaxFixes.length,
          fixes: syntaxFixes
        });
      }
      
      console.log(`🔧 Common fixes: ${fixes.length} fix categories applied`);
      
    } catch (error) {
      console.error('❌ Common fixes failed:', error.message);
    }
  }

  async runBuildCheck() {
    console.log('🏗️  Running build check...');
    
    try {
      const buildResult = await this.executeBuild();
      
      if (buildResult.success) {
        console.log('✅ Build check passed');
      } else {
        console.log('❌ Build check failed');
        console.log('Build errors:', buildResult.errors);
      }
      
    } catch (error) {
      console.error('❌ Build check failed:', error.message);
    }
  }

  findConsoleLogs() {
    const consoleLogs = [];
    const srcFiles = this.getSourceFiles();
    
    for (const file of srcFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (line.includes('console.log') || line.includes('console.error') || line.includes('console.warn')) {
            consoleLogs.push({
              file: file,
              line: i + 1,
              content: line.trim()
            });
          }
        }
      } catch (error) {
        console.error(`Error reading file ${file}:`, error.message);
      }
    }
    
    return consoleLogs;
  }

  async checkSyntaxErrors() {
    try {
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const scripts = packageJson.scripts || {};
        
        if (scripts['type-check']) {
          execSync('npm run type-check', { encoding: 'utf8', timeout: 300000 });
          return [];
        }
      }
      
      return [];
    } catch (error) {
      // TypeScript returns non-zero exit code when errors are found
      if (error.status === 1) {
        return this.parseTypeScriptErrors(error.stdout);
      }
      return [];
    }
  }

  async checkBuildErrors() {
    try {
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const scripts = packageJson.scripts || {};
        
        if (scripts.build) {
          execSync('npm run build', { encoding: 'utf8', timeout: 600000 });
          return [];
        }
      }
      
      return [];
    } catch (error) {
      // Build returns non-zero exit code when errors are found
      if (error.status === 1) {
        return this.parseBuildErrors(error.stdout);
      }
      return [];
    }
  }

  async removeConsoleLogs() {
    const fixes = [];
    const consoleLogs = this.findConsoleLogs();
    
    for (const log of consoleLogs) {
      try {
        const content = fs.readFileSync(log.file, 'utf8');
        const lines = content.split('\n');
        
        // Remove the console.log line
        lines.splice(log.line - 1, 1);
        
        // Write back to file
        fs.writeFileSync(log.file, lines.join('\n'));
        
        fixes.push({
          file: log.file,
          line: log.line,
          status: 'removed'
        });
      } catch (error) {
        fixes.push({
          file: log.file,
          line: log.line,
          status: 'failed',
          error: error.message
        });
      }
    }
    
    return fixes;
  }

  async fixSyntaxErrors() {
    // Implementation for fixing syntax errors
    return [];
  }

  async executeBuild() {
    try {
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const scripts = packageJson.scripts || {};
        
        if (scripts.build) {
          const output = execSync('npm run build', { encoding: 'utf8', timeout: 600000 });
          return { success: true, output: output };
        }
      }
      
      return { success: false, error: 'No build script found' };
    } catch (error) {
      return { success: false, error: error.message, errors: this.parseBuildErrors(error.stdout) };
    }
  }

  getSourceFiles() {
    const srcDir = path.join(process.cwd(), 'src');
    const files = [];
    
    if (fs.existsSync(srcDir)) {
      this.walkDirectory(srcDir, files);
    }
    
    return files.filter(file => 
      file.endsWith('.ts') || 
      file.endsWith('.tsx') || 
      file.endsWith('.js') || 
      file.endsWith('.jsx')
    );
  }

  walkDirectory(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.walkDirectory(fullPath, files);
      } else {
        files.push(fullPath);
      }
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/(.+):(\d+):(\d+)\s*-\s*(.+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4]
          });
        }
      }
    }
    
    return errors;
  }

  parseBuildErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('Error:') || line.includes('error:')) {
        errors.push({
          message: line.trim(),
          type: 'build_error'
        });
      }
    }
    
    return errors;
  }

  async handleError(error) {
    this.retryCount++;
    
    if (this.retryCount <= this.maxRetries) {
      const delay = this.interval * Math.pow(this.backoffMultiplier, this.retryCount - 1);
      console.log(`🔄 Retrying in ${delay / 1000} seconds... (Attempt ${this.retryCount}/${this.maxRetries})`);
      
      setTimeout(() => {
        this.fixErrors();
      }, delay);
    } else {
      console.error('❌ Max retries exceeded. Stopping automation.');
      process.exit(1);
    }
  }
}

// Start the automation
const errorFixer = new ConsoleErrorFixer();
errorFixer.start().catch(console.error);

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Console Error Fixer shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Console Error Fixer shutting down gracefully...');
  process.exit(0);
});
