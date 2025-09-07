#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'syntax-fix-reports');
    this.ensureDirectories();
    this.fixedFiles = [];
    this.errors = [];
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

    // Fix export statements with trailing commas
    if (content.includes('export interface')) {
      content = content.replace(
        /export interface (\w+) \{/g,

      );
      fixed = true;
    }
    
    return files;
  }

  fixFileSyntax(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Fix common syntax issues
      
      // Remove trailing commas and semicolons
      content = content.replace(/,\s*;$/gm, ';');
      content = content.replace(/,\s*,$/gm, ',');
      
      // Fix merge conflict markers
      content = content.replace(/<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> [^\n]+\n/g, '');
      content = content.replace(/<<<<<<< HEAD\n/g, '');
      content = content.replace(/=======\n/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n/g, '');
      
      // Fix malformed imports
      content = content.replace(/import\s+([^;]+),\s*;$/gm, 'import $1;');
      content = content.replace(/import\s+([^;]+),\s*$/gm, 'import $1;');
      
      // Fix malformed exports
      content = content.replace(/export\s+([^;]+),\s*;$/gm, 'export $1;');
      content = content.replace(/export\s+([^;]+),\s*$/gm, 'export $1;');
      
      // Fix object syntax
      content = content.replace(/\{\s*,\s*\}/g, '{}');
      content = content.replace(/\{\s*,\s*([^}]+)\}/g, '{$1}');
      
      // Fix array syntax
      content = content.replace(/\[\s*,\s*\]/g, '[]');
      content = content.replace(/\[\s*,\s*([^\]]+)\]/g, '[$1]');
      
      // Fix function syntax
      content = content.replace(/function\s*\(\s*\)\s*\{\s*,\s*\}/g, 'function() {}');
      content = content.replace(/\(\s*\)\s*=>\s*\{\s*,\s*\}/g, '() => {}');
      
      // Fix class syntax
      content = content.replace(/class\s+\w+\s*\{\s*,\s*\}/g, 'class $1 {}');
      
      // Fix malformed JSON
      if (filePath.endsWith('.json')) {
        content = content.replace(/,\s*}/g, '}');
        content = content.replace(/,\s*]/g, ']');
        content = content.replace(/;\s*}/g, '}');
        content = content.replace(/;\s*]/g, ']');
      }
      
      // Fix TypeScript/JSX syntax
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        content = content.replace(/,\s*;$/gm, ';');
        content = content.replace(/,\s*$/gm, '');
        content = content.replace(/;\s*;$/gm, ';');
      }
      
      // Fix JavaScript syntax
      if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
        content = content.replace(/,\s*;$/gm, ';');
        content = content.replace(/,\s*$/gm, '');
        content = content.replace(/;\s*;$/gm, ';');
      }
      
      // Remove empty lines with just commas or semicolons
      content = content.replace(/^\s*[,;]\s*$/gm, '');
      
      // Fix malformed strings
      content = content.replace(/'([^']*),\s*;$/gm, "'$1';");
      content = content.replace(/"([^"]*),\s*;$/gm, '"$1";');
      
      // Fix malformed template literals
      content = content.replace(/`([^`]*),\s*;$/gm, '`$1`;');
      
      // Fix malformed comments
      content = content.replace(/\/\*([^*]*),\s*;$/gm, '/*$1*/');
      content = content.replace(/\/\/([^\n]*),\s*;$/gm, '//$1');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed syntax in: ${path.relative(this.projectRoot, filePath)}`);
        return true;
      }
      
      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing syntax in ${filePath}: ${error.message}`);
      return false;
    }
  }

  fixSpecificFiles() {
    const criticalFiles = [
      'src/App.tsx',
      'src/main.tsx',
      'src/components/Header.tsx',
      'src/components/layout/Header.tsx',
      'src/components/layout/MainLayout.tsx',
      'src/components/layout/Sidebar.tsx',
      'src/components/ErrorBoundary.tsx',
      'src/components/FuturisticFooter.tsx',
      'src/components/PerformanceMonitor.tsx',
      'src/components/PerformanceOptimized.tsx',
      'hooks/useApi.ts',
      'hooks/useLocalStorage.ts',
      'hooks/usePerformanceMonitor.ts',
      'hooks/useResponsive.ts',
      'lib/analytics.ts',
      'lib/utils.ts',
      'utils/api.ts',
      'utils/messageChannelHandler.ts',
      'utils/next-link-shim.tsx',
      'utils/sanitizeHtml.ts',
      'utils/testing-system.tsx',
      'types/index.ts',
      'types/empty.ts',
      'services/layout.tsx',
      'services/page.tsx',
      'src/data/advancedMicroSaaS2026.ts',
      'src/data/enhancedServices.ts',
      'src/utils/performance.ts'
    ];

    for (const file of criticalFiles) {
      const fullPath = path.join(this.projectRoot, file);
      if (fs.existsSync(fullPath)) {
        this.fixFileSyntax(fullPath);
      }
    }
  }

    // Fix semicolon issues
    content = content.replace(/;\s*,/g, ';');
    content = content.replace(/,\s*;/g, ';');

    // Fix React component syntax
    content = content.replace(
      /const (\w+) = \(\) => \{/g,

    );
    
    this.log(`🎉 Syntax fixing completed`);
    this.log(`📊 Fixed ${fixedCount} files out of ${maxFiles} checked`);
    this.log(`❌ ${this.errors.length} errors encountered`);
    this.log(`📄 Report saved to: ${path.join(this.reportsDir, 'syntax-fix-report.json')}`);
    
    return report;
  }
}

// Run the syntax fixer
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = ComprehensiveSyntaxFixer;