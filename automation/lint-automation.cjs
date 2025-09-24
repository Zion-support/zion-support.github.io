const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class LintAutomation {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'lint-automation.log');
    this.setupLogging();
  }

  setupLogging() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runLintFix() {
    try {
      this.log('Running automated lint fixes...');
      
      // Run ESLint with --fix flag
      execSync('npx eslint . --fix --ext .js,.jsx,.ts,.tsx', {
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      this.log('Lint fixes applied successfully');
      return true;
    } catch (error) {
      this.log(`Lint fix failed: ${error.message}`);
      return false;
    }
  }

  async checkLintStatus() {
    try {
      this.log('Checking lint status...');
      const result = execSync('npm run lint', {
        cwd: process.cwd(),
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.log('Lint check passed');
      return { success: true, output: result };
    } catch (error) {
      this.log(`Lint errors found: ${error.message}`);
      return { success: false, output: error.stdout || error.message };
    }
  }

  async processFiles() {
    try {
      this.log('Processing files for lint fixes...');
      
      // Find all JS/TS files
      const files = this.findSourceFiles();
      this.log(`Found ${files.length} files to process`);
      
      for (const file of files) {
        try {
          // Read file content
          let content = fs.readFileSync(file, 'utf8');
          
          // Apply basic fixes
          content = this.applyBasicFixes(content);
          
          // Write back if changed
          if (content !== fs.readFileSync(file, 'utf8')) {
            fs.writeFileSync(file, content);
            this.log(`Fixed: ${file}`);
          }
        } catch (error) {
          this.log(`Error processing ${file}: ${error.message}`);
        }
      }
      
      return true;
    } catch (error) {
      this.log(`File processing failed: ${error.message}`);
      return false;
    }
  }

  findSourceFiles() {
    const sourceDirs = ['pages', 'components', 'lib', 'scripts', 'automation'];
    const files = [];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        this.findFilesRecursive(dir, files);
      }
    }
    
    return files.filter(file => 
      file.endsWith('.js') || 
      file.endsWith('.jsx') || 
      file.endsWith('.ts') || 
      file.endsWith('.tsx')
    );
  }

  findFilesRecursive(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findFilesRecursive(fullPath, files);
      } else {
        files.push(fullPath);
      }
    }
  }

  applyBasicFixes(content) {
    // Fix common issues
    let fixed = content
      .replace(/\s+$/gm, '') // Remove trailing whitespace
      .replace(/\t/g, '  ') // Convert tabs to spaces
      .replace(/\n{3,}/g, '\n\n') // Remove excessive newlines
      .replace(/;\s*\n/g, ';\n') // Fix semicolon spacing
      .replace(/,\s*\n/g, ',\n') // Fix comma spacing
      .replace(/{\s*\n/g, '{\n') // Fix brace spacing
      .replace(/\n\s*}/g, '\n}') // Fix closing brace spacing
      .replace(/\s*\(\s*/g, ' (') // Fix parenthesis spacing
      .replace(/\s*\)\s*/g, ')') // Fix closing parenthesis spacing
      .replace(/\s*=>\s*/g, ' => ') // Fix arrow function spacing
      .replace(/\s*=\s*/g, ' = ') // Fix assignment spacing
      .replace(/\s*:\s*/g, ': ') // Fix colon spacing
      .replace(/\s*,\s*/g, ', ') // Fix comma spacing
      .replace(/\s*;\s*/g, '; ') // Fix semicolon spacing
      .replace(/\s*{\s*/g, ' {') // Fix opening brace spacing
      .replace(/\s*}\s*/g, ' }') // Fix closing brace spacing
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive blank lines
      .replace(/^\s+|\s+$/g, ''); // Trim lines
    
    return fixed;
  }

  async start() {
    this.log('Lint Automation started');
    
    // Run initial check and fix
    const status = await this.checkLintStatus();
    if (!status.success) {
      await this.processFiles();
      await this.runLintFix();
      
      // Check again after fixes
      const recheck = await this.checkLintStatus();
      if (recheck.success) {
        this.log('All lint issues resolved');
      } else {
        this.log('Some lint issues remain');
      }
    } else {
      this.log('No lint issues found');
    }
    
    // Set up periodic checks every 2 hours
    setInterval(async () => {
      await this.checkLintStatus();
    }, 2 * 60 * 60 * 1000);
  }
}

// Start the lint automation
const automation = new LintAutomation();
automation.start().catch(console.error);

module.exports = LintAutomation;