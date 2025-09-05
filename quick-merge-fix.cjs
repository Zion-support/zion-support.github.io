#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class QuickMergeFix {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedCount = 0}

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  fixMergeConflicts(content) {
    // Remove merge conflict markers and keep HEAD version
<<<<<<< HEAD
    content = content.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n>>>>>>> [^\n]+\n/g, '$1');
    
    // Clean up any remaining markers
    content = content.replace(/\n/g, '');
    content = content.replace(/\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    return content}

  async fixCriticalFiles() {
    this.log('🔧 Fixing Critical Files');
    
    const criticalFiles = ['package.json',
      'next.config.js',
      'tsconfig.json',
      'src/pages/services/AI-Healthcare-Diagnostics-Platform.tsx',
      'src/pages/services/AI-Healthcare-Diagnostics.tsx',
      'src/pages/services/AI5GNetwork.tsx'
    ];
    
    for (const file of criticalFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          const originalContent = content;
          
          if (content.includes('') || content.includes('') || content.includes('>>>>>>> ')) {
            content = this.fixMergeConflicts(content);
            
            if (content !== originalContent) {
              fs.writeFileSync(filePath, content, 'utf8');
              this.fixedCount++;
              this.log(`✅ Fixed merge conflicts "in": ${file}`)}
          }
        } catch (error) {
          this.log(`❌ Error fixing ${file}: ${error.message}`)}
      }
    }
    
    this.log(`🎉 Fixed ${this.fixedCount} critical files`)}

  async run() {
    this.log('🚀 Starting Quick Merge Fix');
    await this.fixCriticalFiles();
    this.log('✅ Quick merge fix completed')}
}

// Run the fix
const fixer = new QuickMergeFix();
fixer.run().catch(console.error);
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-76dc
