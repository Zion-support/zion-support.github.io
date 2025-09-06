#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomatedConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.resolvedCount = 0;
    this.skippedCount = 0;
    this.errorCount = 0;
    this.resolutionLog = [];
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
    this.resolutionLog.push(`[${timestamp}] ${message}`);
  }

  async resolveConflicts() {
    this.log('🚀 Starting Automated Conflict Resolution...');
    
    try {
      // Get list of conflicted files
      const conflictedFiles = this.getConflictedFiles();
      this.log(`Found ${conflictedFiles.length} files with conflicts`);
      
      // Resolve conflicts by priority
      await this.resolveByPriority(conflictedFiles);
      
      // Generate resolution report
      this.generateResolutionReport();
      
      this.log('✅ Conflict resolution completed successfully!');
      
    } catch (error) {
      this.log(`❌ Error during conflict resolution: ${error.message}`);
      throw error;
    }
  }

  getConflictedFiles() {
    try {
      const output = execSync('git status --porcelain', { encoding: 'utf8' });
      return output
        .split('\n')
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
        .map(line => line.substring(3).trim())
        .filter(file => file.length > 0);
    } catch (error) {
      this.log(`Error getting conflicted files: ${error.message}`);
      return [];
    }
  }

  async resolveByPriority(conflictedFiles) {
    // Priority 1: Configuration files
    const configFiles = conflictedFiles.filter(file => 
      file.includes('package.json') || 
      file.includes('tsconfig.json') || 
      file.includes('next.config.js') || 
      file.includes('tailwind.config.js') ||
      file.includes('eslint.config.js') ||
      file.includes('.gitignore')
    );
    
    // Priority 2: Source code files
    const sourceFiles = conflictedFiles.filter(file => 
      file.includes('src/') || 
      file.includes('components/') || 
      file.includes('pages/') || 
      file.includes('hooks/') ||
      file.includes('lib/') ||
      file.includes('utils/')
    );
    
    // Priority 3: Automation and scripts
    const scriptFiles = conflictedFiles.filter(file => 
      file.includes('automation/') || 
      file.includes('.cjs') || 
      file.includes('.js') && !file.includes('node_modules')
    );
    
    // Priority 4: Other files
    const otherFiles = conflictedFiles.filter(file => 
      !configFiles.includes(file) && 
      !sourceFiles.includes(file) && 
      !scriptFiles.includes(file)
    );

    this.log(`Resolving ${configFiles.length} config files...`);
    await this.resolveFileGroup(configFiles, 'config');
    
    this.log(`Resolving ${sourceFiles.length} source files...`);
    await this.resolveFileGroup(sourceFiles, 'source');
    
    this.log(`Resolving ${scriptFiles.length} script files...`);
    await this.resolveFileGroup(scriptFiles, 'script');
    
    this.log(`Resolving ${otherFiles.length} other files...`);
    await this.resolveFileGroup(otherFiles, 'other');
  }

  async resolveFileGroup(files, type) {
    for (const file of files) {
      try {
        await this.resolveFile(file, type);
        this.resolvedCount++;
      } catch (error) {
        this.log(`⚠️  Skipped ${file}: ${error.message}`);
        this.skippedCount++;
      }
    }
  }

  async resolveFile(filePath, type) {
    if (!fs.existsSync(filePath)) {
      throw new Error('File does not exist');
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has conflict markers
      return; // No conflicts in this file
    }

    let resolvedContent = content;
    
    // Apply resolution strategy based on file type
    switch (type) {
      case 'config':
        resolvedContent = this.resolveConfigFile(content, filePath);
        break;
      case 'source':
        resolvedContent = this.resolveSourceFile(content, filePath);
        break;
      case 'script':
        resolvedContent = this.resolveScriptFile(content, filePath);
        break;
      default:
        resolvedContent = this.resolveGenericFile(content, filePath);
    }

    // Write resolved content
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    this.log(`✅ Resolved conflicts in ${filePath}`);
  }

  resolveConfigFile(content, filePath) {
    // For config files, prefer the more complete version
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let headContent = [];
    let branchContent = [];
    let currentSection = 'head';

    for (const line of lines) {
      if (line.includes('')) {
        inConflict = true;
        currentSection = 'head';
        continue;
      } else if (line.includes('')) {
    currentSection = 'branch',
    continue
        inConflict = false;
        // Choose the longer/more complete version
        const headLength = headContent.join('\n').trim().length;
        const branchLength = branchContent.join('\n').trim().length;
        
        if (branchLength > headLength) {
          resolvedLines.push(...branchContent);
        } else {
          resolvedLines.push(...headContent);
        }
        
        headContent = [];
        branchContent = [];
        currentSection = 'head';
        continue;
      }

      if (inConflict) {
        if (currentSection === 'head') {
          headContent.push(line);
        } else {
          branchContent.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }

    return resolvedLines.join('\n');
  }

  resolveSourceFile(content, filePath) {
    // For source files, prefer the more recent/complete version
    return this.resolveGenericFile(content, filePath);
  }

  resolveScriptFile(content, filePath) {
    // For script files, prefer the working version
    return this.resolveGenericFile(content, filePath);
  }

  resolveGenericFile(content, filePath) {
    // Generic resolution: prefer the longer/more complete version
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let headContent = [];
    let branchContent = [];
    let currentSection = 'head';

    for (const line of lines) {
      if (line.includes('')) {
        inConflict = true;
        currentSection = 'head';
        continue;
      } else if (line.includes('')) {
    currentSection = 'branch',
    continue
        inConflict = false;
        // Choose the longer/more complete version
        const headLength = headContent.join('\n').trim().length;
        const branchLength = branchContent.join('\n').trim().length;
        
        if (branchLength > headLength) {
          resolvedLines.push(...branchContent);
        } else {
          resolvedLines.push(...headContent);
        }
        
        headContent = [];
        branchContent = [];
        currentSection = 'head';
        continue;
      }

      if (inConflict) {
        if (currentSection === 'head') {
          headContent.push(line);
        } else {
          branchContent.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }

    return resolvedLines.join('\n');
  }

  generateResolutionReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalConflicts: this.resolvedCount + this.skippedCount + this.errorCount,
        resolved: this.resolvedCount,
        skipped: this.skippedCount,
        errors: this.errorCount
      },
      log: this.resolutionLog
    };

    fs.writeFileSync(
      path.join(this.projectRoot, 'conflict-resolution-report.json'),
      JSON.stringify(report, null, 2)
    );

    this.log(`📊 Resolution Report Generated: `),
    this.log(`   - Resolved: ${this.resolvedCount}`);
    this.log(`   - Skipped: ${this.skippedCount}`);
    this.log(`   - Errors: ${this.errorCount}`);
  }
}

// Run the resolver
const resolver = new AutomatedConflictResolver();
resolver.resolveConflicts().catch(console.error);