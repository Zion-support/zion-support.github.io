const fs = require('fs');
const path = require('path');

// List of files with conflicts
const conflictedFiles = [
  'components/Footer.tsx',
  'components/Layout.tsx', 
  'components/layout/MainLayout.tsx',
  'pages/about.tsx',
  'pages/ai-services.tsx',
  'pages/api-docs.tsx',
  'pages/compliance.tsx',
  'pages/docs.tsx',
  'pages/guides.tsx',
  'pages/it-services.tsx',
  'pages/micro-saas.tsx',
  'pages/partners.tsx',
  'pages/security.tsx',
  'pages/sitemap.tsx',
  'pages/support.tsx',
  'pages/tutorials.tsx'
];

function resolveConflicts(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

<<<<<<< HEAD
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  resolveConflictsInFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return false;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has merge conflicts
      if (!content.includes('')) {
        return true; // No conflicts
      }

      this.log(`🔧 Resolving conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep HEAD version
      content = content
        .replace(/\n?/g, '')
        .replace(/.*?\n?/g, '')
        .replace(/        .replace(/<<<<<<< [^\n]+\n?/g, '')
        .replace(/.*?\n?/g, '')
        .replace(/
      // Clean up any remaining artifacts
      content = content
        .replace(/\n{3,}/g, '\n\n') // Remove excessive newlines
        .replace(/^\s*\n/gm, '') // Remove empty lines at start
        .trim();

      fs.writeFileSync(filePath, content);
      this.resolvedFiles.push(filePath);
      return true;
    } catch (error) {
      this.log(`❌ Failed to resolve ${filePath}: ${error.message}`);
      this.failedFiles.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async resolveAllConflicts() {
    this.log('🚀 Starting conflict resolution...');
    
    // Get all files with merge conflicts
    try {
      const result = execSync('grep -r "^" . --include="*.js" --include="*.cjs" --include="*.ts" --include="*.tsx" --include="*.jsx" --include="*.json" --include="*.md" --include="*.sh" -l', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const files = result.trim().split('\n').filter(f => f && !f.includes('node_modules'));
      this.totalFiles = files.length;
      
      this.log(`📊 Found ${this.totalFiles} files with conflicts`);
      
      for (const file of files) {
        this.resolveConflictsInFile(file);
      }
      
    } catch (error) {
      this.log(`⚠️ Error finding conflict files: ${error.message}`);
    }

    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles: this.totalFiles,
      resolvedFiles: this.resolvedFiles.length,
      failedFiles: this.failedFiles.length,
      successRate: this.totalFiles > 0 ? (this.resolvedFiles.length / this.totalFiles * 100).toFixed(2) : 0,
      resolved: this.resolvedFiles,
      failed: this.failedFiles
    };

    fs.writeFileSync('conflict-resolution-report.json', JSON.stringify(report, null, 2));
    
    this.log('\n📊 Conflict Resolution Summary:');
    this.log(`- Total files: ${this.totalFiles}`);
    this.log(`- Resolved: ${this.resolvedFiles.length}`);
    this.log(`- Failed: ${this.failedFiles.length}`);
    this.log(`- Success rate: ${report.successRate}%`);
    
    if (this.failedFiles.length > 0) {
      this.log('\n❌ Failed files:');
      this.failedFiles.forEach(f => this.log(`  - ${f.file}: ${f.error}`));
    }

    return report;
  }
}

// Run if called directly
if (require.main === module) {
  const resolver = new ConflictResolver();
  resolver.resolveAllConflicts().catch(console.error);
}

module.exports = ConflictResolver;
=======
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove merge conflict markers and keep HEAD version (our changes)
  content = content.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
  
  // Clean up any remaining artifacts
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  // Remove any remaining conflict markers
>>>>>>> pr-11914
