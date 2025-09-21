#!/usr/bin/env node

/**
 * Build Validator for Zion App
 * Comprehensive build validation and quality assurance
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class BuildValidator {
  constructor() {
    this.validationResults = {
      passed: 0,
      failed: 0,
      warnings: 0,
      checks: []
    }}

  async validateBuild() {
    console.log('🔍 Starting comprehensive build validation...');
    
    try {
      // Run all validation checks
      await this.validateBuildOutput();
      await this.validateStaticFiles();
      await this.validatePerformance();
      await this.validateSEO();
      await this.validateAccessibility();
      await this.validateSecurity();
      
      // Generate validation report
      await this.generateValidationReport();
      
      console.log('✅ Build validation completed');
    } catch (error) {
      console.error('❌ Build validation failed:', error.message);
      process.exit(1);
    }
  }

  async validateBuildOutput() {
    console.log('📁 Validating build output...');
    
    const outDir = path.join(__dirname, '..', 'out');
    
    // Check if build output exists
    this.addCheck('Build output exists', fs.existsSync(outDir), 'critical');
    
    if (fs.existsSync(outDir)) {
      // Check for essential files
      const essentialFiles = ['index.html', 'robots.txt', 'sitemap.xml'];
      essentialFiles.forEach(file => {
        const exists = fs.existsSync(path.join(outDir, file));
        this.addCheck(`Essential file: ${file}`, exists, 'critical');
      });
      
      // Check for build artifacts
      const buildArtifacts = ['.next'];
      buildArtifacts.forEach(artifact => {
        const exists = fs.existsSync(path.join(__dirname, '..', artifact));
        this.addCheck(`Build artifact: ${artifact}`, exists, 'warning');
      });
      
      // Check for broken links
      await this.validateLinks(outDir);
    }
  }

  async validateStaticFiles() {
    console.log('📄 Validating static files...');
    
    const outDir = path.join(__dirname, '..', 'out');
    
    if (fs.existsSync(outDir)) {
      // Check HTML files
      await this.validateHTMLFiles(outDir);
      
      // Check CSS files
      await this.validateCSSFiles(outDir);
      
      // Check JavaScript files
      await this.validateJSFiles(outDir);
      
      // Check image files
      await this.validateImageFiles(outDir);
    }
  }

  async validateHTMLFiles(dir) {
    const htmlFiles = this.findFiles(dir, '.html');
    
    htmlFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for basic HTML structure
      const hasDoctype = content.includes('<!DOCTYPE html>');
      this.addCheck(`HTML doctype in ${path.basename(file)}`, hasDoctype, 'critical');
      
      const hasTitle = content.includes('<title>');
      this.addCheck(`HTML title in ${path.basename(file)}`, hasTitle, 'critical');
      
      const hasMetaDescription = content.includes('name="description"');
      this.addCheck(`Meta description in ${path.basename(file)}`, hasMetaDescription, 'warning');
      
      // Check for accessibility attributes
      const hasLang = content.includes('lang=');
      this.addCheck(`HTML lang attribute in ${path.basename(file)}`, hasLang, 'warning');
    });
  }

  async validateCSSFiles(dir) {
    const cssFiles = this.findFiles(dir, '.css');
    
    cssFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for CSS syntax issues
      const hasUnclosedBraces = (content.match(/\{/g) || []).length !== (content.match(/\}/g) || []).length;
      this.addCheck(`CSS syntax in ${path.basename(file)}`, !hasUnclosedBraces, 'critical');
      
      // Check for unused CSS (basic check)
      const hasUnusedSelectors = content.includes('* {') && content.includes('margin: 0;');
      this.addCheck(`CSS reset in ${path.basename(file)}`, hasUnusedSelectors, 'info');
    });
  }

  async validateJSFiles(dir) {
    const jsFiles = this.findFiles(dir, '.js');
    
    jsFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for basic JavaScript syntax
      const hasUnclosedBraces = (content.match(/\{/g) || []).length !== (content.match(/\}/g) || []).length;
      this.addCheck(`JavaScript syntax in ${path.basename(file)}`, !hasUnclosedBraces, 'critical');
      
      // Check for console.log statements (should be removed in production)
      const hasConsoleLogs = content.includes('console.log');
      this.addCheck(`No console.log in ${path.basename(file)}`, !hasConsoleLogs, 'warning');
    });
  }

  async validateImageFiles(dir) {
    const imageFiles = this.findFiles(dir, ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']);
    
    imageFiles.forEach(file => {
      const stats = fs.statSync(file);
      const sizeKB = stats.size / 1024;
      
      // Check image size
      const isReasonableSize = sizeKB < 500; // 500KB limit
      this.addCheck(`Image size reasonable for ${path.basename(file)}`, isReasonableSize, 'warning');
      
      // Check for alt text in HTML (this would require parsing HTML)
      this.addCheck(`Image file exists: ${path.basename(file)}`, true, 'info');
    });
  }

  async validateLinks(dir) {
    console.log('🔗 Validating links...');
    
    const htmlFiles = this.findFiles(dir, '.html');
    const brokenLinks = [];
    
    htmlFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const linkRegex = /href=["']([^"']+)["']/g;
      let match;
      
      while ((match = linkRegex.exec(content)) !== null) {
        const link = match[1];
        
        // Skip external links
        if (link.startsWith('http') || link.startsWith('mailto: ') || link.startsWith('tel:')) {
          continue}
        
        // Check if internal link exists
        const linkPath = path.join(dir, link);
        const exists = fs.existsSync(linkPath);
        
        if (!exists) {
          brokenLinks.push({ file: path.basename(file), link });
        }
      }
    });
    
    this.addCheck('No broken internal links', brokenLinks.length === 0, 'critical');
    
    if (brokenLinks.length > 0) {
      console.warn('⚠️  Broken links found: '),
      brokenLinks.forEach(({ file, link }) => {
        console.warn(`  • ${file}: ${link}`);
      });
    }
  }

  async validatePerformance() {
    console.log('⚡ Validating performance...');
    
    const outDir = path.join(__dirname, '..', 'out');
    
    if (fs.existsSync(outDir)) {
      // Check bundle size
      const bundleSize = this.calculateDirectorySize(outDir);
      const bundleSizeMB = bundleSize / 1024 / 1024;
      
      this.addCheck('Bundle size under 10MB', bundleSizeMB < 10, 'warning');
      this.addCheck('Bundle size under 5MB', bundleSizeMB < 5, 'info');
      
      // Check for large files
      const largeFiles = this.findLargeFiles(outDir, 1024 * 1024); // 1MB
      this.addCheck('No files larger than 1MB', largeFiles.length === 0, 'warning');
      
      if (largeFiles.length > 0) {
        console.warn('⚠️  Large files found: '),
        largeFiles.forEach(file => {
          const sizeMB = file.size / 1024 / 1024;
          console.warn(`  • ${file.name}: ${sizeMB.toFixed(2)}MB`);
        });
      }
    }
  }

  async validateSEO() {
    console.log('🔍 Validating SEO...');
    
    const outDir = path.join(__dirname, '..', 'out');
    
    if (fs.existsSync(outDir)) {
      const htmlFiles = this.findFiles(outDir, '.html');
      
      htmlFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for meta tags
        const hasMetaDescription = content.includes('name="description"');
        this.addCheck(`Meta description in ${path.basename(file)}`, hasMetaDescription, 'warning');
        
        const hasMetaKeywords = content.includes('name="keywords"');
        this.addCheck(`Meta keywords in ${path.basename(file)}`, hasMetaKeywords, 'info');
        
        // Check for Open Graph tags
        const hasOGTitle = content.includes('property="og: title"'),
        this.addCheck(`Open Graph title in ${path.basename(file)}`, hasOGTitle, 'info');
        
        // Check for structured data
        const hasStructuredData = content.includes('application/ld+json');
        this.addCheck(`Structured data in ${path.basename(file)}`, hasStructuredData, 'info');
      });
    }
  }

  async validateAccessibility() {
    console.log('♿ Validating accessibility...');
    
    const outDir = path.join(__dirname, '..', 'out');
    
    if (fs.existsSync(outDir)) {
      const htmlFiles = this.findFiles(outDir, '.html');
      
      htmlFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for alt attributes on images
        const hasImages = content.includes('<img');
        const hasAltAttributes = content.includes('alt=');
        this.addCheck(`Alt attributes on images in ${path.basename(file)}`, !hasImages || hasAltAttributes, 'warning');
        
        // Check for heading hierarchy
        const hasH1 = content.includes('<h1>');
        this.addCheck(`H1 tag in ${path.basename(file)}`, hasH1, 'warning');
        
        // Check for form labels
        const hasForms = content.includes('<form');
        const hasLabels = content.includes('<label');
        this.addCheck(`Form labels in ${path.basename(file)}`, !hasForms || hasLabels, 'warning');
      });
    }
  }

  async validateSecurity() {
    console.log('🔒 Validating security...');
    
    const outDir = path.join(__dirname, '..', 'out');
    
    if (fs.existsSync(outDir)) {
      const htmlFiles = this.findFiles(outDir, '.html');
      
      htmlFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for inline scripts (security risk)
        const hasInlineScripts = content.includes('<script>') && !content.includes('application/ld+json');
        this.addCheck(`No inline scripts in ${path.basename(file)}`, !hasInlineScripts, 'warning');
        
        // Check for external scripts without integrity
        const hasExternalScripts = content.includes('<script src=');
        const hasIntegrity = content.includes('integrity=');
        this.addCheck(`Script integrity in ${path.basename(file)}`, !hasExternalScripts || hasIntegrity, 'info');
      });
    }
  }

  findFiles(dir, extensions) {
    const files = [];
    const extArray = Array.isArray(extensions) ? extensions : [extensions];
    
    const findInDir = (dirPath) => {
      const items = fs.readdirSync(dirPath, { withFileTypes: true }),
      for (const item of items) {
        const fullPath = path.join(dirPath, item.name);
        
        if (item.isDirectory()) {
          findInDir(fullPath);
        } else if (item.isFile()) {
          const ext = path.extname(item.name).toLowerCase();
          if (extArray.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    };
    
    findInDir(dir);
    return files;
  }

  findLargeFiles(dir, minSize) {
    const largeFiles = [];
    
    const findInDir = (dirPath) => {
      const items = fs.readdirSync(dirPath, { withFileTypes: true }),
      for (const item of items) {
        const fullPath = path.join(dirPath, item.name);
        
        if (item.isDirectory()) {
          findInDir(fullPath);
        } else if (item.isFile()) {
          const stats = fs.statSync(fullPath);
          if (stats.size > minSize) {
            largeFiles.push({
              name: fullPath,
              size: stats.size
            })}
        }
      }
    };
    
    findInDir(dir);
    return largeFiles;
  }

  calculateDirectorySize(dir) {
    let totalSize = 0;
    
    const calculateSize = (dirPath) => {
      const items = fs.readdirSync(dirPath, { withFileTypes: true }),
      for (const item of items) {
        const fullPath = path.join(dirPath, item.name);
        
        if (item.isDirectory()) {
          calculateSize(fullPath);
        } else {
          const stats = fs.statSync(fullPath);
          totalSize += stats.size;
        }
      }
    };
    
    calculateSize(dir);
    return totalSize;
  }

  addCheck(name, passed, severity) {
    const check = {
      name,
      passed,
      severity,
      timestamp: new Date().toISOString()
    },
    this.validationResults.checks.push(check);
    
    if (passed) {
      this.validationResults.passed++;
      console.log(`✅ ${name}`);
    } else {
      if (severity === 'critical') {
        this.validationResults.failed++;
        console.error(`❌ ${name}`);
      } else {
        this.validationResults.warnings++;
        console.warn(`⚠️  ${name}`);
      }
    }
  }

  async generateValidationReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.validationResults.passed + this.validationResults.failed + this.validationResults.warnings,
        passed: this.validationResults.passed,
        failed: this.validationResults.failed,
        warnings: this.validationResults.warnings,
        successRate: Math.round((this.validationResults.passed / (this.validationResults.passed + this.validationResults.failed + this.validationResults.warnings)) * 100)
      },
      checks: this.validationResults.checks,
      recommendations: this.generateRecommendations()
    },
    // Save report
    const reportPath = path.join(__dirname, '..', 'build-validation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Log summary
    console.log('\n📊 Build Validation Report: '),
    console.log(`✅ Passed: ${report.summary.passed}`),
    console.log(`❌ Failed: ${report.summary.failed}`),
    console.log(`⚠️  Warnings: ${report.summary.warnings}`),
    console.log(`📈 Success Rate: ${report.summary.successRate}%`),
    if (report.recommendations.length > 0) {
      console.log('\n💡 Recommendations: '),
      report.recommendations.forEach(rec => console.log(`  • ${rec}`));
    }
    
    // Exit with error code if critical checks failed
    if (this.validationResults.failed > 0) {
      process.exit(1);
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    const failedChecks = this.validationResults.checks.filter(check => !check.passed);
    
    if (failedChecks.some(check => check.name.includes('Meta description'))) {
      recommendations.push('Add meta descriptions to all pages for better SEO');
    }
    
    if (failedChecks.some(check => check.name.includes('Alt attributes'))) {
      recommendations.push('Add alt attributes to all images for accessibility');
    }
    
    if (failedChecks.some(check => check.name.includes('Bundle size'))) {
      recommendations.push('Optimize bundle size by implementing code splitting');
    }
    
    if (failedChecks.some(check => check.name.includes('console.log'))) {
      recommendations.push('Remove console.log statements from production build');
    }
    
    return recommendations;
  }
}

// Run if called directly
if (import.meta.url === `file: //${__filename}`) {
  const validator = new BuildValidator(),
  validator.validateBuild().catch(console.error);
}

export default BuildValidator;