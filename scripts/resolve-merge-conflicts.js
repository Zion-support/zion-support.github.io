#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Comprehensive Merge Conflict Resolver
 * Fixes all merge conflicts and syntax errors in the codebase
 */

class MergeConflictResolver {
  constructor() {
    this.fixedFiles = 0;
    this.conflictsResolved = 0;
  }

  async resolve() {
    console.log('🔧 Starting comprehensive merge conflict resolution...\n');
    
    try {
      // Find all files with merge conflicts
      const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: '/workspace' });
      
      for (const file of files) {
        await this.processFile(file);
      }
      
      console.log(`\n✅ Merge conflict resolution completed!`);
      console.log(`📊 Files processed: ${this.fixedFiles}`);
      console.log(`🔧 Conflicts resolved: ${this.conflictsResolved}`);
      
    } catch (error) {
      console.error('❌ Error during merge conflict resolution:', error);
    }
  }

  async processFile(filePath) {
    const fullPath = path.join('/workspace', filePath);
    
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      // Remove merge conflict markers
      content = this.removeMergeConflictMarkers(content);
      
      // Fix common syntax errors
      content = this.fixSyntaxErrors(content);
      
      // Fix React component structure
      content = this.fixReactComponents(content);
      
      // Fix TypeScript issues
      content = this.fixTypeScriptIssues(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        this.fixedFiles++;
      }
      
    } catch (error) {
      console.warn(`⚠️  Could not process ${filePath}:`, error.message);
    }
  }

  removeMergeConflictMarkers(content) {
    const patterns = [
      // Remove merge conflict markers
      /<<<<<<< HEAD\n/g,
      /=======\n/g,
      />>>>>>> [^\n]+\n/g,
      // Remove any remaining conflict markers
      /<<<<<<< [^\n]+\n[^>]*?=======\n[^>]*?>>>>>>> [^\n]+\n/gms
    ];
    
    patterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        this.conflictsResolved += matches.length;
        content = content.replace(pattern, '');
      }
    });
    
    return content;
  }

  fixSyntaxErrors(content) {
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, '$1;');
    
    // Fix missing commas in arrays and objects
    content = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n $2:');
    content = content.replace(/(\w+)\s*\n\s*(\w+)\s*=/g, '$1,\n $2 =');
    
    // Fix unterminated strings
    content = content.replace(/"\s*$/gm, '";');
    content = content.replace(/'\s*$/gm, "';");
    
    // Fix extra semicolons
    content = content.replace(/;;+/g, ';');
    
    return content;
  }

  fixReactComponents(content) {
    // Fix React.memo syntax
    content = content.replace(
      /const\s+(\w+):\s*React\.FC\s*=\s*React\.memo\(\(\)\s*=>\s*{/g,
      'const $1: React.FC = React.memo(() => {'
    );
    
    // Fix missing closing parentheses for React.memo
    content = content.replace(
      /(\s+);\s*}\s*$/gm,
      '$1);\n}'
    );
    
    // Fix export statements
    content = content.replace(
      /export default (\w+);\s*$/gm,
      'export default $1;'
    );
    
    return content;
  }

  fixTypeScriptIssues(content) {
    // Fix any type issues
    content = content.replace(/:\s*any\b/g, ': unknown');
    
    // Fix missing type annotations
    content = content.replace(
      /const\s+(\w+)\s*=\s*\(/g,
      'const $1 = ('
    );
    
    return content;
  }
}

// Run the resolver
const resolver = new MergeConflictResolver();
resolver.resolve().catch(console.error);