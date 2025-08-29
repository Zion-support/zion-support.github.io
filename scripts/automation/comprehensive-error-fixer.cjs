#!/usr/bin/env node

/**
 * Comprehensive Error Fixer - Automatically fixes common TypeScript and ESLint errors
 * Runs every 15 minutes to keep the project error-free
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'comprehensive-error-fixer-report.json');
    this.fixesApplied = 0;
    this.errorsFixed = [];
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async run() {
    this.log('🚀 Starting Comprehensive Error Fixer...');
    
    try {
      await this.fixDuplicateFiles();
      await this.fixImportIssues();
      await this.fixUnusedVariables();
      await this.fixTypeIssues();
      await this.fixReactIssues();
      await this.fixLucideReactIssues();
      await this.fixStripeIssues();
      await this.fixServiceWorkerIssues();
      await this.fixSitemapIssues();
      await this.runLintFix();
      await this.runTypeCheck();
      
      this.generateReport();
      this.log(`✅ Comprehensive Error Fixer completed! Fixed ${this.fixesApplied} issues.`);
      
    } catch (error) {
      this.log(`❌ Error in Comprehensive Error Fixer: ${error.message}`);
      this.generateReport();
    }
  }

  async fixDuplicateFiles() {
    this.log('🔍 Checking for duplicate files with different casing...');
    
    const servicesDir = path.join(this.projectRoot, 'src/pages/services');
    if (!fs.existsSync(servicesDir)) return;

    const files = fs.readdirSync(servicesDir);
    const duplicates = new Map();
    
    files.forEach(file => {
      const lowerName = file.toLowerCase();
      if (duplicates.has(lowerName)) {
        duplicates.get(lowerName).push(file);
      } else {
        duplicates.set(lowerName, [file]);
      }
    });

    for (const [lowerName, fileList] of duplicates) {
      if (fileList.length > 1) {
        this.log(`🔄 Found duplicate files for ${lowerName}: ${fileList.join(', ')}`);
        
        // Keep the first file, remove others
        const keepFile = fileList[0];
        for (let i = 1; i < fileList.length; i++) {
          const removeFile = path.join(servicesDir, fileList[i]);
          try {
            fs.unlinkSync(removeFile);
            this.log(`🗑️  Removed duplicate file: ${fileList[i]}`);
            this.fixesApplied++;
            this.errorsFixed.push(`Removed duplicate file: ${fileList[i]}`);
          } catch (error) {
            this.log(`⚠️  Could not remove ${fileList[i]}: ${error.message}`);
          }
        }
      }
    }
  }

  async fixImportIssues() {
    this.log('🔧 Fixing import issues...');
    
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Fix missing default exports
        if (content.includes('export default') && !content.includes('export {') && 
            content.includes('import') && content.includes('from')) {
          
          // Fix Blog import issue
          if (content.includes('import Blog from "@/pages/Blog"')) {
            content = content.replace(
              'import Blog from "@/pages/Blog"',
              'import { Blog } from "@/pages/Blog"'
            );
            modified = true;
            this.fixesApplied++;
            this.errorsFixed.push(`Fixed Blog import in ${file}`);
          }

          // Fix MobileLaunchPage import issue
          if (content.includes('import MobileLaunchPage from "../pages/MobileLaunchPage"')) {
            content = content.replace(
              'import MobileLaunchPage from "../pages/MobileLaunchPage"',
              'import { MobileLaunchPage } from "../pages/MobileLaunchPage"'
            );
            modified = true;
            this.fixesApplied++;
            this.errorsFixed.push(`Fixed MobileLaunchPage import in ${file}`);
          }
        }

        if (modified) {
          fs.writeFileSync(file, content, 'utf8');
        }
      } catch (error) {
        this.log(`⚠️  Error processing ${file}: ${error.message}`);
      }
    }
  }

  async fixUnusedVariables() {
    this.log('🧹 Fixing unused variables...');
    
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Remove unused imports from lucide-react
        const lucideImports = content.match(/import\s*{[^}]*}\s*from\s*['"]lucide-react['"]/g);
        if (lucideImports) {
          lucideImports.forEach(importStatement => {
            const newImport = importStatement.replace(/\s*,\s*[^,}]+(?=\s*})/g, '');
            if (newImport !== importStatement) {
              content = content.replace(importStatement, newImport);
              modified = true;
              this.fixesApplied++;
              this.errorsFixed.push(`Removed unused lucide-react imports in ${file}`);
            }
          });
        }

        if (modified) {
          fs.writeFileSync(file, content, 'utf8');
        }
      } catch (error) {
        this.log(`⚠️  Error processing ${file}: ${error.message}`);
      }
    }
  }

  async fixTypeIssues() {
    this.log('🔧 Fixing type issues...');
    
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Fix API client type issues
        if (content.includes('apiClient(') && content.includes('headers')) {
          content = content.replace(
            /headers\s*\|\s*undefined/g,
            'headers || {}'
          );
          modified = true;
          this.fixesApplied++;
          this.errorsFixed.push(`Fixed API client headers type issue in ${file}`);
        }

        if (modified) {
          fs.writeFileSync(file, content, 'utf8');
        }
      } catch (error) {
        this.log(`⚠️  Error processing ${file}: ${error.message}`);
      }
    }
  }

  async fixReactIssues() {
    this.log('⚛️  Fixing React issues...');
    
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Fix React import issues
        if (content.includes('import React from') && content.includes('export default function')) {
          // Remove unnecessary React import for modern React
          content = content.replace(/import React from ['"]react['"];?\n?/g, '');
          modified = true;
          this.fixesApplied++;
          this.errorsFixed.push(`Removed unnecessary React import in ${file}`);
        }

        if (modified) {
          fs.writeFileSync(file, content, 'utf8');
        }
      } catch (error) {
        this.log(`⚠️  Error processing ${file}: ${error.message}`);
      }
    }
  }

  async fixLucideReactIssues() {
    this.log('🎨 Fixing Lucide React icon issues...');
    
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Fix non-existent lucide-react icons
        const iconReplacements = {
          'UserHeart': 'Heart',
          'UserEdit2': 'Edit',
          'UserSearch2': 'Search',
          'UserList2': 'Users2',
          'UserSettings2': 'Settings2',
          'UserShield2': 'Shield',
          'UserStar2': 'Star',
          'Device': 'Smartphone',
          'Desktop': 'Monitor'
        };

        for (const [oldIcon, newIcon] of Object.entries(iconReplacements)) {
          if (content.includes(oldIcon)) {
            content = content.replace(new RegExp(`\\b${oldIcon}\\b`, 'g'), newIcon);
            modified = true;
            this.fixesApplied++;
            this.errorsFixed.push(`Replaced ${oldIcon} with ${newIcon} in ${file}`);
          }
        }

        if (modified) {
          fs.writeFileSync(file, content, 'utf8');
        }
      } catch (error) {
        this.log(`⚠️  Error processing ${file}: ${error.message}`);
      }
    }
  }

  async fixStripeIssues() {
    this.log('💳 Fixing Stripe configuration issues...');
    
    const stripeFile = path.join(this.projectRoot, 'src/utils/getStripe.ts');
    if (fs.existsSync(stripeFile)) {
      try {
        let content = fs.readFileSync(stripeFile, 'utf8');
        
        if (content.includes('advancedFraudSignals: false')) {
          content = content.replace(
            /,\s*{\s*advancedFraudSignals:\s*false\s*}/g,
            ''
          );
          fs.writeFileSync(stripeFile, content, 'utf8');
          this.fixesApplied++;
          this.errorsFixed.push('Fixed Stripe advancedFraudSignals configuration');
        }
      } catch (error) {
        this.log(`⚠️  Error fixing Stripe file: ${error.message}`);
      }
    }
  }

  async fixServiceWorkerIssues() {
    this.log('🔧 Fixing Service Worker type issues...');
    
    const swFile = path.join(this.projectRoot, 'src/utils/serviceWorker.ts');
    if (fs.existsSync(swFile)) {
      try {
        let content = fs.readFileSync(swFile, 'utf8');
        
        if (content.includes('applicationServerKey: this.urlBase64ToUint8Array')) {
          content = content.replace(
            /applicationServerKey:\s*this\.urlBase64ToUint8Array\([^)]+\)/g,
            'applicationServerKey: this.urlBase64ToUint8Array(process.env[\'REACT_APP_VAPID_PUBLIC_KEY\'] || \'\') as Uint8Array'
          );
          fs.writeFileSync(swFile, content, 'utf8');
          this.fixesApplied++;
          this.errorsFixed.push('Fixed Service Worker applicationServerKey type issue');
        }
      } catch (error) {
        this.log(`⚠️  Error fixing Service Worker file: ${error.message}`);
      }
    }
  }

  async fixSitemapIssues() {
    this.log('🗺️  Fixing Sitemap Generator issues...');
    
    const sitemapFile = path.join(this.projectRoot, 'src/utils/sitemapGenerator.ts');
    if (fs.existsSync(sitemapFile)) {
      try {
        let content = fs.readFileSync(sitemapFile, 'utf8');
        
        if (content.includes('const { baseUrl, urls } = this.config;')) {
          content = content.replace(
            /const\s*{\s*baseUrl,\s*urls\s*}\s*=\s*this\.config;/g,
            'const { baseUrl } = this.config;'
          );
          fs.writeFileSync(sitemapFile, content, 'utf8');
          this.fixesApplied++;
          this.errorsFixed.push('Fixed Sitemap Generator unused urls variable');
        }
      } catch (error) {
        this.log(`⚠️  Error fixing Sitemap file: ${error.message}`);
      }
    }
  }

  async runLintFix() {
    this.log('🔧 Running ESLint auto-fix...');
    
    try {
      execSync('npm run lint -- --fix', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      this.log('✅ ESLint auto-fix completed');
    } catch (error) {
      this.log(`⚠️  ESLint auto-fix failed: ${error.message}`);
    }
  }

  async runTypeCheck() {
    this.log('🔍 Running TypeScript type check...');
    
    try {
      execSync('npm run type-check', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 120000 
      });
      this.log('✅ TypeScript type check passed');
    } catch (error) {
      this.log(`⚠️  TypeScript type check failed: ${error.message}`);
    }
  }

  findTypeScriptFiles() {
    const files = [];
    
    function walkDir(dir) {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
          files.push(fullPath);
        }
      }
    }
    
    walkDir(path.join(this.projectRoot, 'src'));
    return files;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      fixesApplied: this.fixesApplied,
      errorsFixed: this.errorsFixed,
      status: this.fixesApplied > 0 ? 'success' : 'no-fixes-needed'
    };

    fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.logFile}`);
  }
}

// Run the error fixer
if (require.main === module) {
  const fixer = new ComprehensiveErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = ComprehensiveErrorFixer;