#!/usr/bin/env node

/**
 * Link Integrity Checker Script
 * Checks the integrity of links and assets
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔗 Link Integrity Checker Started');

class LinkIntegrityChecker {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.issues = [];
    this.checkedFiles = 0;
  }

  async checkIntegrity() {
    try {
      console.log('🔍 Checking link and asset integrity...');
      
      // Check HTML files for broken references
      await this.checkHtmlIntegrity();
      
      // Check CSS files for broken asset references
      await this.checkCssIntegrity();
      
      // Check JavaScript files for broken imports
      await this.checkJsIntegrity();
      
      // Check build artifacts
      await this.checkBuildArtifacts();
      
      // Generate integrity report
      await this.generateReport();
      
      console.log('✅ Link integrity check completed');
      
    } catch (error) {
      console.error('❌ Error during integrity check:', error.message);
    }
  }

  async checkHtmlIntegrity() {
    try {
      console.log('📄 Checking HTML integrity...');
      
      const htmlFiles = this.findFiles('.html');
      
      for (const file of htmlFiles) {
        this.checkedFiles++;
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for broken image references
        const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
        let match;
        
        while ((match = imgRegex.exec(content)) !== null) {
          const src = match[1];
          if (!this.isValidAsset(src, file)) {
            this.issues.push(`Broken image reference in ${file}: ${src}`);
          }
        }
        
        // Check for broken script references
        const scriptRegex = /<script[^>]+src=["']([^"']+)["']/g;
        while ((match = scriptRegex.exec(content)) !== null) {
          const src = match[1];
          if (!this.isValidAsset(src, file)) {
            this.issues.push(`Broken script reference in ${file}: ${src}`);
          }
        }
        
        // Check for broken stylesheet references
        const linkRegex = /<link[^>]+href=["']([^"']+)["']/g;
        while ((match = linkRegex.exec(content)) !== null) {
          const href = match[1];
          if (!this.isValidAsset(href, file)) {
            this.issues.push(`Broken stylesheet reference in ${file}: ${href}`);
          }
        }
      }
      
    } catch (error) {
      console.warn('⚠️  Could not check HTML integrity:', error.message);
    }
  }

  async checkCssIntegrity() {
    try {
      console.log('🎨 Checking CSS integrity...');
      
      const cssFiles = this.findFiles('.css');
      
      for (const file of cssFiles) {
        this.checkedFiles++;
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for broken image references in CSS
        const urlRegex = /url\(['"]?([^'")\s]+)['"]?\)/g;
        let match;
        
        while ((match = urlRegex.exec(content)) !== null) {
          const url = match[1];
          if (!this.isValidAsset(url, file)) {
            this.issues.push(`Broken asset reference in CSS ${file}: ${url}`);
          }
        }
      }
      
    } catch (error) {
      console.warn('⚠️  Could not check CSS integrity:', error.message);
    }
  }

  async checkJsIntegrity() {
    try {
      console.log('⚡ Checking JavaScript integrity...');
      
      const jsFiles = this.findFiles('.js');
      const tsFiles = this.findFiles('.ts');
      const allFiles = [...jsFiles, ...tsFiles];
      
      for (const file of allFiles) {
        this.checkedFiles++;
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for broken import statements
        const importRegex = /import\s+.*?from\s+['"]([^'"]+)['"]/g;
        let match;
        
        while ((match = importRegex.exec(content)) !== null) {
          const importPath = match[1];
          if (!this.isValidImport(importPath, file)) {
            this.issues.push(`Broken import in ${file}: ${importPath}`);
          }
        }
        
        // Check for broken require statements
        const requireRegex = /require\s*\(\s*['"]([^'"]+)['"]\s*\)/g;
        while ((match = requireRegex.exec(content)) !== null) {
          const requirePath = match[1];
          if (!this.isValidImport(requirePath, file)) {
            this.issues.push(`Broken require in ${file}: ${requirePath}`);
          }
        }
      }
      
    } catch (error) {
      console.warn('⚠️  Could not check JavaScript integrity:', error.message);
    }
  }

  async checkBuildArtifacts() {
    try {
      console.log('🔨 Checking build artifacts...');
      
      const distPath = path.join(this.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        this.issues.push('Build directory (dist) does not exist');
        return;
      }
      
      // Check for essential build files
      const essentialFiles = [
        'index.html',
        'css',
        'js',
        'assets'
      ];
      
      for (const file of essentialFiles) {
        const filePath = path.join(distPath, file);
        if (!fs.existsSync(filePath)) {
          this.issues.push(`Missing essential build file: ${file}`);
        }
      }
      
      // Check for broken internal links in build
      const indexHtmlPath = path.join(distPath, 'index.html');
      if (fs.existsSync(indexHtmlPath)) {
        const content = fs.readFileSync(indexHtmlPath, 'utf8');
        
        // Check for broken asset references
        const assetRegex = /(src|href)=["']([^"']+)["']/g;
        let match;
        
        while ((match = assetRegex.exec(content)) !== null) {
          const assetPath = match[2];
          if (assetPath.startsWith('./') || assetPath.startsWith('/')) {
            const fullPath = path.join(distPath, assetPath.replace(/^\.?\//, ''));
            if (!fs.existsSync(fullPath)) {
              this.issues.push(`Broken asset reference in build: ${assetPath}`);
            }
          }
        }
      }
      
    } catch (error) {
      console.warn('⚠️  Could not check build artifacts:', error.message);
    }
  }

  isValidAsset(assetPath, sourceFile) {
    // Skip external URLs
    if (assetPath.startsWith('http://') || assetPath.startsWith('https://')) {
      return true;
    }
    
    // Skip data URLs
    if (assetPath.startsWith('data:')) {
      return true;
    }
    
    // Handle relative paths
    if (assetPath.startsWith('./') || assetPath.startsWith('../')) {
      const sourceDir = path.dirname(sourceFile);
      const fullPath = path.resolve(sourceDir, assetPath);
      return fs.existsSync(fullPath);
    }
    
    // Handle absolute paths from project root
    if (assetPath.startsWith('/')) {
      const fullPath = path.join(this.projectRoot, assetPath.substring(1));
      return fs.existsSync(fullPath);
    }
    
    // Handle relative paths from project root
    const fullPath = path.join(this.projectRoot, assetPath);
    return fs.existsSync(fullPath);
  }

  isValidImport(importPath, sourceFile) {
    // Skip external packages
    if (!importPath.startsWith('.') && !importPath.startsWith('/')) {
      return true;
    }
    
    // Handle relative imports
    if (importPath.startsWith('./') || importPath.startsWith('../')) {
      const sourceDir = path.dirname(sourceFile);
      const fullPath = path.resolve(sourceDir, importPath);
      
      // Check for .js, .ts, .tsx, .jsx extensions
      const extensions = ['.js', '.ts', '.tsx', '.jsx', ''];
      return extensions.some(ext => {
        const testPath = ext ? `${fullPath}${ext}` : fullPath;
        return fs.existsSync(testPath);
      });
    }
    
    // Handle absolute imports from project root
    if (importPath.startsWith('/')) {
      const fullPath = path.join(this.projectRoot, importPath.substring(1));
      const extensions = ['.js', '.ts', '.tsx', '.jsx', ''];
      return extensions.some(ext => {
        const testPath = ext ? `${fullPath}${ext}` : fullPath;
        return fs.existsSync(testPath);
      });
    }
    
    return false;
  }

  findFiles(extension) {
    const files = [];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDirectory(fullPath);
          } else if (stat.isFile() && item.endsWith(extension)) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories we can't read
      }
    };
    
    scanDirectory(this.projectRoot);
    return files;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        checkedFiles: this.checkedFiles,
        issues: this.issues.length
      },
      issues: this.issues,
      recommendations: this.generateRecommendations()
    };
    
    // Save report to file
    const reportPath = path.join(this.projectRoot, 'logs', 'link-integrity-report.json');
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      console.log(`📊 Report saved to: ${reportPath}`);
    } catch (error) {
      console.warn('⚠️  Could not save report:', error.message);
    }
    
    // Display summary
    console.log('\n📋 Integrity Check Summary:');
    console.log('─'.repeat(50));
    console.log(`📁 Files checked: ${this.checkedFiles}`);
    console.log(`⚠️  Issues found: ${this.issues.length}`);
    
    if (this.issues.length > 0) {
      console.log('\n🔍 Issues:');
      this.issues.forEach((issue, index) => {
        console.log(`   ${index + 1}. ${issue}`);
      });
    } else {
      console.log('\n🎉 All links and assets are valid!');
    }
    
    console.log('─'.repeat(50));
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.issues.length > 0) {
      recommendations.push('Fix broken asset references and imports');
      recommendations.push('Verify all file paths are correct');
      recommendations.push('Check for typos in import statements');
      recommendations.push('Ensure build process generates all required assets');
    } else {
      recommendations.push('Continue monitoring for new issues');
      recommendations.push('Consider adding automated integrity checks to CI/CD');
    }
    
    return recommendations;
  }
}

// Run the link integrity checker
const checker = new LinkIntegrityChecker();
checker.checkIntegrity().then(() => {
  console.log('🔗 Link Integrity Checker Completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Link Integrity Checker Failed:', error);
  process.exit(1);
});