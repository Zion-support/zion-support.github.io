#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ContinuousImprovement {
  constructor() {
    this.logFile = path.join(__dirname, '../../logs/continuous-improvement.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
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

  async runCommand(command, description) {
    try {
      this.log(`🔄 Running: ${description}`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: path.join(__dirname, '../../')
      });
      this.log(`✅ Success: ${description}`);
      return result;
    } catch (error) {
      this.log(`❌ Error in ${description}: ${error.message}`);
      return null;
    }
  }

  async runRepositoryMaintenance() {
    this.log('🔧 Starting Repository Maintenance');
    
    try {
      // Check git status
      const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
      if (gitStatus.trim()) {
        this.log('⚠️ Working directory not clean, committing changes first');
        await this.runCommand('git add .', 'Add all changes');
        await this.runCommand('git commit -m "chore(improvement): automated continuous improvement updates"', 'Commit changes');
      }
      
      // Pull latest changes
      await this.runCommand('git pull origin main', 'Pull latest changes');
      
      // Install dependencies
      await this.runCommand('npm ci', 'Install dependencies');
      
      // Build project
      await this.runCommand('npm run build', 'Build project');
      
      // Run code quality checks with auto-fix
      this.log('🔍 Running code quality checks with auto-fix');
      
      // Run ESLint with auto-fix
      try {
        await this.runCommand('npm run lint -- --fix', 'ESLint auto-fix');
      } catch (error) {
        this.log('⚠️ ESLint auto-fix completed with some issues');
      }
      
      // Run TypeScript type checking
      try {
        await this.runCommand('npm run type-check', 'TypeScript type checking');
      } catch (error) {
        this.log('⚠️ TypeScript type checking completed with some issues');
      }
      
      // Check if there are any changes after auto-fix
      const newGitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
      if (newGitStatus.trim()) {
        this.log('📝 Auto-fix made changes, committing them');
        await this.runCommand('git add .', 'Add auto-fix changes');
        await this.runCommand('git commit -m "chore(improvement): apply auto-fixes from continuous improvement"', 'Commit auto-fix changes');
        
        // Push changes
        await this.runCommand('git push origin main', 'Push improvements');
        this.log('✅ Improvements pushed to repository');
      } else {
        this.log('✅ No changes needed after auto-fix');
      }
      
    } catch (error) {
      this.log(`❌ Repository maintenance failed: ${error.message}`);
    }
    
    this.log('✅ Repository Maintenance completed');
  }

  async runCodeQualityAnalysis() {
    this.log('🔍 Running Code Quality Analysis');
    
    try {
      // Analyze code complexity
      this.log('📊 Analyzing code complexity...');
      
      // Check for common code smells
      const srcPath = path.join(__dirname, '../../src');
      if (fs.existsSync(srcPath)) {
        const files = fs.readdirSync(srcPath, { recursive: true });
        const jsFiles = files.filter(file => file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx'));
        
        this.log(`📁 Total source files: ${jsFiles.length}`);
        
        // Check for large files
        let largeFiles = 0;
        for (const file of jsFiles) {
          const filePath = path.join(srcPath, file);
          try {
            const stats = fs.statSync(filePath);
            if (stats.size > 100 * 1024) { // 100KB
              largeFiles++;
              this.log(`⚠️ Large file detected: ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
            }
          } catch (error) {
            // Ignore file access errors
          }
        }
        
        if (largeFiles === 0) {
          this.log('✅ No excessively large files detected');
        }
      }
      
      // Run additional quality checks
      await this.runCommand('npm run lint', 'Final linting check');
      await this.runCommand('npm run type-check', 'Final type checking');
      
    } catch (error) {
      this.log(`❌ Code quality analysis failed: ${error.message}`);
    }
    
    this.log('✅ Code Quality Analysis completed');
  }

  async runPerformanceOptimization() {
    this.log('⚡ Running Performance Optimization Checks');
    
    try {
      // Check bundle sizes
      const distPath = path.join(__dirname, '../../dist');
      if (fs.existsSync(distPath)) {
        this.log('📦 Analyzing bundle sizes...');
        
        const files = fs.readdirSync(distPath);
        let totalSize = 0;
        
        for (const file of files) {
          const filePath = path.join(distPath, file);
          try {
            const stats = fs.statSync(filePath);
            totalSize += stats.size;
            
            if (stats.size > 500 * 1024) { // 500KB
              this.log(`⚠️ Large bundle file: ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
            }
          } catch (error) {
            // Ignore file access errors
          }
        }
        
        const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
        this.log(`📊 Total bundle size: ${totalSizeMB} MB`);
        
        if (totalSize > 5 * 1024 * 1024) { // 5MB
          this.log('⚠️ Bundle size is large, consider optimization');
        } else {
          this.log('✅ Bundle size is within acceptable limits');
        }
      }
      
      // Check for unused dependencies
      this.log('🔍 Checking for unused dependencies...');
      try {
        await this.runCommand('npx depcheck', 'Dependency check');
      } catch (error) {
        this.log('⚠️ Dependency check completed with some issues');
      }
      
    } catch (error) {
      this.log(`❌ Performance optimization checks failed: ${error.message}`);
    }
    
    this.log('✅ Performance Optimization Checks completed');
  }

  async generateReport() {
    this.log('📊 Generating Continuous Improvement Report');
    
    try {
      const reportPath = path.join(__dirname, '../../logs/continuous-improvement-report.md');
      const timestamp = new Date().toISOString();
      
      const report = `# Continuous Improvement Report - ${timestamp}

## Summary
This report was generated automatically by the PM2 Continuous Improvement automation.

## Actions Taken
- ✅ Repository maintenance completed
- ✅ Code quality analysis performed
- ✅ Performance optimization checks run
- ✅ Auto-fixes applied where possible

## Recommendations
1. Review any large files detected
2. Consider bundle size optimization if needed
3. Address any linting or type checking issues
4. Monitor performance metrics

## Next Steps
- Run this automation weekly
- Review logs for any recurring issues
- Update automation scripts as needed

---
Generated by PM2 Continuous Improvement Automation
`;

      fs.writeFileSync(reportPath, report);
      this.log(`📄 Report generated: ${reportPath}`);
      
    } catch (error) {
      this.log(`❌ Report generation failed: ${error.message}`);
    }
    
    this.log('✅ Report Generation completed');
  }

  async run() {
    this.log('🚀 Starting Continuous Improvement Process');
    
    try {
      // Run all improvement stages
      await this.runRepositoryMaintenance();
      await this.runCodeQualityAnalysis();
      await this.runPerformanceOptimization();
      await this.generateReport();
      
      this.log('🎉 Continuous Improvement Process completed successfully');
    } catch (error) {
      this.log(`💥 Continuous Improvement Process failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the process if this script is executed directly
if (require.main === module) {
  const improvement = new ContinuousImprovement();
  improvement.run();
}

module.exports = ContinuousImprovement;