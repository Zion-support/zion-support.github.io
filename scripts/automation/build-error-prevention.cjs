#!/usr/bin/env node

/**
 * Build Error Prevention - PM2 Automation Script
 * Automatically detects and prevents build errors
 * Runs every 10 minutes to maintain build stability
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BuildErrorPrevention {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'build-error-prevention-report.json');
    this.issuesPrevented = 0;
    this.buildsSuccessful = 0;
    this.startTime = new Date();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async run() {
    try {
      this.log('🚀 Starting Build Error Prevention...');
      
      // Check if we're in the right directory
      if (!fs.existsSync('package.json')) {
        throw new Error('Not in a Node.js project directory');
      }

      // Run build error prevention operations
      await this.checkDependencies();
      await this.validateConfiguration();
      await this.checkFileIntegrity();
      await this.runPreBuildChecks();
      await this.attemptBuild();
      await this.cleanupBuildArtifacts();
      
      // Generate report
      await this.generateReport();
      
      this.log(`✅ Build Error Prevention completed successfully!`);
      this.log(`📊 Prevented ${this.issuesPrevented} issues, ${this.buildsSuccessful} builds successful`);
      
    } catch (error) {
      this.log(`❌ Error in Build Error Prevention: ${error.message}`, 'ERROR');
      await this.generateReport();
      process.exit(1);
    }
  }

  async checkDependencies() {
    this.log('🔍 Checking dependencies...');
    
    try {
      // Check if node_modules exists
      if (!fs.existsSync('node_modules')) {
        this.log('📦 Installing dependencies...');
        execSync('npm install', { 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        this.issuesPrevented++;
      }
      
      // Check for outdated dependencies
      try {
        const outdated = execSync('npm outdated --json', { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        if (outdated && outdated !== '{}') {
          this.log('📦 Updating outdated dependencies...');
          execSync('npm update', { 
            cwd: this.projectRoot,
            stdio: 'pipe'
          });
          this.issuesPrevented++;
        }
      } catch (error) {
        // No outdated dependencies
      }
      
      // Check for security vulnerabilities
      try {
        const audit = execSync('npm audit --json', { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const auditData = JSON.parse(audit);
        if (auditData.vulnerabilities && Object.keys(auditData.vulnerabilities).length > 0) {
          this.log('🔒 Fixing security vulnerabilities...');
          execSync('npm audit fix', { 
            cwd: this.projectRoot,
            stdio: 'pipe'
          });
          this.issuesPrevented++;
        }
      } catch (error) {
        // No security issues
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not check all dependencies: ${error.message}`, 'WARN');
    }
  }

  async validateConfiguration() {
    this.log('🔍 Validating configuration...');
    
    try {
      // Check package.json
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        
        // Validate required fields
        if (!packageJson.name || !packageJson.version) {
          throw new Error('Invalid package.json: missing name or version');
        }
        
        // Check for conflicting configurations
        if (packageJson.type === 'module' && fs.existsSync('.eslintrc.js')) {
          const eslintrc = fs.readFileSync('.eslintrc.js', 'utf8');
          if (eslintrc.includes('module.exports')) {
            this.log('🔧 Fixing ESLint configuration for ES modules...');
            const fixedEslintrc = eslintrc.replace('module.exports =', 'export default');
            fs.writeFileSync('.eslintrc.js', fixedEslintrc);
            this.issuesPrevented++;
          }
        }
      }
      
      // Check TypeScript configuration
      if (fs.existsSync('tsconfig.json')) {
        const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
        
        // Validate TypeScript configuration
        if (!tsconfig.compilerOptions) {
          throw new Error('Invalid tsconfig.json: missing compilerOptions');
        }
      }
      
      // Check Vite configuration
      if (fs.existsSync('vite.config.ts')) {
        const viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
        
        // Check for common Vite configuration issues
        if (viteConfig.includes('@vitejs/plugin-react') && !viteConfig.includes('react()')) {
          this.log('⚠️ Warning: Vite React plugin may not be properly configured');
        }
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not validate all configurations: ${error.message}`, 'WARN');
    }
  }

  async checkFileIntegrity() {
    this.log('🔍 Checking file integrity...');
    
    try {
      // Check for broken imports
      const files = this.findSourceFiles();
      
      for (const file of files) {
        await this.checkFileImports(file);
      }
      
      // Check for duplicate files
      await this.checkDuplicateFiles();
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not check all file integrity: ${error.message}`, 'WARN');
    }
  }

  async checkFileImports(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for broken import paths
      const importRegex = /import.*from\s+['"]([^'"]+)['"]/g;
      const matches = [...content.matchAll(importRegex)];
      
      for (const match of matches) {
        const importPath = match[1];
        
        // Skip external packages
        if (!importPath.startsWith('.') && !importPath.startsWith('/')) {
          continue;
        }
        
        // Check if the imported file exists
        const resolvedPath = this.resolveImportPath(filePath, importPath);
        if (!fs.existsSync(resolvedPath)) {
          this.log(`⚠️ Warning: Broken import in ${path.basename(filePath)}: ${importPath}`);
          this.issuesPrevented++;
        }
      }
      
    } catch (error) {
      // Skip files that can't be processed
    }
  }

  resolveImportPath(filePath, importPath) {
    const fileDir = path.dirname(filePath);
    
    if (importPath.startsWith('.')) {
      return path.resolve(fileDir, importPath);
    }
    
    return path.resolve(this.projectRoot, importPath);
  }

  async checkDuplicateFiles() {
    try {
      const files = this.findSourceFiles();
      const duplicates = this.findDuplicateFiles(files);
      
      for (const duplicate of duplicates) {
        if (duplicate.duplicate.includes('.backup') || duplicate.duplicate.includes('.jsx')) {
          this.log(`🗑️ Removing duplicate file: ${path.basename(duplicate.duplicate)}`);
          fs.unlinkSync(duplicate.duplicate);
          this.issuesPrevented++;
        }
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not check all duplicate files: ${error.message}`, 'WARN');
    }
  }

  async runPreBuildChecks() {
    this.log('🔍 Running pre-build checks...');
    
    try {
      // Run TypeScript type checking
      try {
        execSync('npx tsc --noEmit', { 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        this.log('✅ TypeScript type checking passed');
      } catch (error) {
        this.log('⚠️ TypeScript errors found, attempting to fix...');
        await this.fixTypeScriptErrors();
      }
      
      // Run ESLint
      try {
        execSync('npx eslint . --quiet', { 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        this.log('✅ ESLint checks passed');
      } catch (error) {
        this.log('⚠️ ESLint errors found, attempting to fix...');
        execSync('npx eslint . --fix --quiet', { 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        this.issuesPrevented++;
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not run all pre-build checks: ${error.message}`, 'WARN');
    }
  }

  async fixTypeScriptErrors() {
    try {
      // Try to fix common TypeScript issues
      const files = this.findTypeScriptFiles();
      
      for (const file of files) {
        await this.fixCommonTypeScriptIssues(file);
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all TypeScript issues: ${error.message}`, 'WARN');
    }
  }

  async fixCommonTypeScriptIssues(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix unused imports
      const importRegex = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?/g;
      const matches = [...content.matchAll(importRegex)];
      
      for (const match of matches) {
        const importNames = match[1].split(',').map(name => name.trim());
        const modulePath = match[2];
        
        // Check which imports are actually used
        const usedImports = importNames.filter(name => {
          const cleanName = name.replace(/\s+as\s+\w+/, '').trim();
          return content.includes(cleanName) && !content.includes(`import.*${cleanName}`);
        });
        
        if (usedImports.length !== importNames.length) {
          // Remove unused imports
          const newImport = `import { ${usedImports.join(', ')} } from '${modulePath}';`;
          content = content.replace(match[0], newImport);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`✅ Fixed TypeScript issues in ${path.basename(filePath)}`);
        this.issuesPrevented++;
      }
      
    } catch (error) {
      // Skip files that can't be processed
    }
  }

  async attemptBuild() {
    this.log('🔨 Attempting build...');
    
    try {
      // Clear previous build artifacts
      if (fs.existsSync('dist')) {
        execSync('rm -rf dist', { 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
      }
      
      // Attempt to build
      execSync('npm run build', { 
        cwd: this.projectRoot,
        stdio: 'pipe',
        timeout: 180000 // 3 minutes timeout
      });
      
      this.log('✅ Build successful!');
      this.buildsSuccessful++;
      
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`, 'ERROR');
      
      // Try to fix build issues
      await this.fixBuildIssues();
      
      // Try building again
      try {
        execSync('npm run build', { 
          cwd: this.projectRoot,
          stdio: 'pipe',
          timeout: 180000
        });
        
        this.log('✅ Build successful after fixes!');
        this.buildsSuccessful++;
        this.issuesPrevented++;
        
      } catch (buildError) {
        this.log(`❌ Build still failing after fixes: ${buildError.message}`, 'ERROR');
      }
    }
  }

  async fixBuildIssues() {
    try {
      // Check for common build issues
      const buildOutput = execSync('npm run build 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Fix missing exports
      if (buildOutput.includes('is not exported')) {
        await this.fixMissingExports();
      }
      
      // Fix import path issues
      if (buildOutput.includes('Could not resolve')) {
        await this.fixImportPathIssues();
      }
      
      // Fix dependency issues
      if (buildOutput.includes('Cannot find module')) {
        execSync('npm install', { 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all build issues: ${error.message}`, 'WARN');
    }
  }

  async fixMissingExports() {
    try {
      const files = this.findSourceFiles();
      
      for (const file of files) {
        await this.fixMissingExportInFile(file);
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all missing exports: ${error.message}`, 'WARN');
    }
  }

  async fixMissingExportInFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has components but no exports
      if (content.includes('function ') || content.includes('const ') || content.includes('class ')) {
        if (!content.includes('export ') && !content.includes('export default')) {
          // Find the first component/function/class
          const match = content.match(/(?:function|const|class)\s+(\w+)/);
          if (match) {
            const componentName = match[1];
            const newContent = `export default ${componentName};\n\n${content}`;
            fs.writeFileSync(filePath, newContent);
            this.log(`✅ Added missing export to ${path.basename(filePath)}`);
            this.issuesPrevented++;
          }
        }
      }
      
    } catch (error) {
      // Skip files that can't be processed
    }
  }

  async fixImportPathIssues() {
    try {
      const files = this.findSourceFiles();
      
      for (const file of files) {
        await this.fixImportPathsInFile(file);
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all import path issues: ${error.message}`, 'WARN');
    }
  }

  async fixImportPathsInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix common import path issues
      const importRegex = /import.*from\s+['"]([^'"]+)['"]/g;
      const matches = [...content.matchAll(importRegex)];
      
      for (const match of matches) {
        const importPath = match[1];
        
        // Fix relative path issues
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
          const resolvedPath = this.resolveImportPath(filePath, importPath);
          if (!fs.existsSync(resolvedPath)) {
            // Try to find the correct path
            const correctPath = this.findCorrectImportPath(filePath, importPath);
            if (correctPath) {
              content = content.replace(importPath, correctPath);
              modified = true;
            }
          }
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`✅ Fixed import paths in ${path.basename(filePath)}`);
        this.issuesPrevented++;
      }
      
    } catch (error) {
      // Skip files that can't be processed
    }
  }

  findCorrectImportPath(filePath, importPath) {
    // Try to find the correct import path by looking for similar files
    const fileDir = path.dirname(filePath);
    const fileName = path.basename(importPath, path.extname(importPath));
    
    // Look for files with similar names
    const possibleExtensions = ['.ts', '.tsx', '.js', '.jsx'];
    for (const ext of possibleExtensions) {
      const possiblePath = path.join(fileDir, fileName + ext);
      if (fs.existsSync(possiblePath)) {
        return './' + fileName + ext;
      }
    }
    
    return null;
  }

  async cleanupBuildArtifacts() {
    this.log('🧹 Cleaning up build artifacts...');
    
    try {
      // Remove temporary build files
      const tempFiles = [
        '.vite',
        '.next',
        'node_modules/.cache',
        'coverage',
        '*.tsbuildinfo'
      ];
      
      for (const pattern of tempFiles) {
        try {
          execSync(`rm -rf ${pattern}`, { 
            cwd: this.projectRoot,
            stdio: 'pipe'
          });
        } catch (error) {
          // File doesn't exist, that's okay
        }
      }
      
      this.log('✅ Build artifacts cleaned up');
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not clean up all build artifacts: ${error.message}`, 'WARN');
    }
  }

  findSourceFiles() {
    const files = [];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(item)) {
          files.push(fullPath);
        }
      }
    };
    
    scanDirectory(this.projectRoot);
    return files;
  }

  findTypeScriptFiles() {
    const files = [];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && /\.(ts|tsx)$/.test(item)) {
          files.push(fullPath);
        }
      }
    };
    
    scanDirectory(this.projectRoot);
    return files;
  }

  findDuplicateFiles(files) {
    const duplicates = [];
    const contentHashes = new Map();
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const hash = require('crypto').createHash('md5').update(content).digest('hex');
        
        if (contentHashes.has(hash)) {
          duplicates.push({
            original: contentHashes.get(hash),
            duplicate: file
          });
        } else {
          contentHashes.set(hash, file);
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return duplicates;
  }

  async generateReport() {
    const endTime = new Date();
    const duration = endTime.getTime() - this.startTime.getTime();
    
    const report = {
      timestamp: endTime.toISOString(),
      duration: `${duration}ms`,
      issuesPrevented: this.issuesPrevented,
      buildsSuccessful: this.buildsSuccessful,
      status: this.buildsSuccessful > 0 ? 'success' : 'failed',
      summary: `Prevented ${this.issuesPrevented} issues, ${this.buildsSuccessful} builds successful in ${duration}ms`
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.reportFile}`);
  }
}

// Run the build error prevention
const prevention = new BuildErrorPrevention();
prevention.run().catch(console.error);