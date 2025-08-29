#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'error-fixer-report.json');
    this.fixedErrors = [];
    this.errorCount = 0;
  }

  async run() {
    console.log('🔧 Starting comprehensive error fixing automation...');
    
    try {
      await this.fixTypeScriptErrors();
      await this.fixLintingErrors();
      await this.fixImportErrors();
      await this.fixUnusedVariables();
      await this.fixMissingExports();
      await this.fixDuplicateIdentifiers();
      await this.fixApiErrors();
      await this.generateReport();
      
      console.log('✅ Error fixing automation completed successfully!');
      console.log(`📊 Fixed ${this.errorCount} errors`);
      
    } catch (error) {
      console.error('❌ Error fixing automation failed:', error.message);
      await this.generateReport();
      process.exit(1);
    }
  }

  async fixTypeScriptErrors() {
    console.log('🔍 Fixing TypeScript errors...');
    
    // Fix missing exports
    await this.fixMissingDefaultExports();
    
    // Fix import/export issues
    await this.fixImportExportIssues();
    
    // Fix type issues
    await this.fixTypeIssues();
  }

  async fixMissingDefaultExports() {
    const filesToFix = [
      'src/pages/Blog.tsx',
      'src/pages/Sitemap.tsx',
      'src/pages/MobileLaunchPage.tsx'
    ];

    for (const file of filesToFix) {
      if (fs.existsSync(file)) {
        try {
          let content = fs.readFileSync(file, 'utf8');
          
          // Check if file has default export
          if (!content.includes('export default') && !content.includes('export {') && !content.includes('export const')) {
            // Add default export
            const componentName = path.basename(file, path.extname(file));
            content += `\n\nexport default ${componentName};`;
            fs.writeFileSync(file, content);
            this.recordFix('missing-default-export', file);
          }
        } catch (error) {
          console.warn(`⚠️ Could not fix ${file}:`, error.message);
        }
      }
    }
  }

  async fixImportExportIssues() {
    // Fix import statements that should be named imports
    const filesToCheck = [
      'src/routes/ContentRoutes.tsx',
      'src/routes/MobileAppRoutes.tsx'
    ];

    for (const file of filesToCheck) {
      if (fs.existsSync(file)) {
        try {
          let content = fs.readFileSync(file, 'utf8');
          let modified = false;

          // Fix Blog import
          if (content.includes("import Blog from '@/pages/Blog'")) {
            content = content.replace(
              "import Blog from '@/pages/Blog'",
              "import { Blog } from '@/pages/Blog'"
            );
            modified = true;
          }

          // Fix Sitemap import
          if (content.includes("import Sitemap from '@/pages/Sitemap'")) {
            content = content.replace(
              "import Sitemap from '@/pages/Sitemap'",
              "import { Sitemap } from '@/pages/Sitemap'"
            );
            modified = true;
          }

          // Fix MobileLaunchPage import
          if (content.includes("import MobileLaunchPage from '../pages/MobileLaunchPage'")) {
            content = content.replace(
              "import MobileLaunchPage from '../pages/MobileLaunchPage'",
              "import { MobileLaunchPage } from '../pages/MobileLaunchPage'"
            );
            modified = true;
          }

          if (modified) {
            fs.writeFileSync(file, content);
            this.recordFix('import-export-issue', file);
          }
        } catch (error) {
          console.warn(`⚠️ Could not fix ${file}:`, error.message);
        }
      }
    }
  }

  async fixTypeIssues() {
    // Fix API service type issues
    const apiFile = 'src/services/api.ts';
    if (fs.existsSync(apiFile)) {
      try {
        let content = fs.readFileSync(apiFile, 'utf8');
        let modified = false;

        // Fix headers type issue
        if (content.includes('headers: Record<string, string> | undefined')) {
          content = content.replace(
            /headers: Record<string, string> \| undefined/g,
            'headers: Record<string, string>'
          );
          modified = true;
        }

        // Fix unused apiRequest function
        if (content.includes('async function apiRequest<T>(')) {
          content = content.replace(
            'async function apiRequest<T>(',
            '// async function apiRequest<T>('
          );
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(apiFile, content);
          this.recordFix('api-type-issue', apiFile);
        }
      } catch (error) {
        console.warn(`⚠️ Could not fix ${apiFile}:`, error.message);
      }
    }

    // Fix Stripe configuration
    const stripeFile = 'src/utils/getStripe.ts';
    if (fs.existsSync(stripeFile)) {
      try {
        let content = fs.readFileSync(stripeFile, 'utf8');
        
        if (content.includes('advancedFraudSignals: false')) {
          content = content.replace(
            '{ advancedFraudSignals: false }',
            '{}'
          );
          fs.writeFileSync(stripeFile, content);
          this.recordFix('stripe-config-issue', stripeFile);
        }
      } catch (error) {
        console.warn(`⚠️ Could not fix ${stripeFile}:`, error.message);
      }
    }
  }

  async fixLintingErrors() {
    console.log('🔍 Fixing linting errors...');
    
    try {
      // Run ESLint with auto-fix
      execSync('npx eslint . --fix', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.recordFix('linting-errors', 'auto-fixed');
    } catch (error) {
      console.warn('⚠️ Some linting errors could not be auto-fixed');
    }
  }

  async fixImportErrors() {
    console.log('🔍 Fixing import errors...');
    
    // Fix lucide-react import errors
    const filesWithLucideErrors = [
      'src/pages/solutions/Enterprise.tsx'
    ];

    for (const file of filesWithLucideErrors) {
      if (fs.existsSync(file)) {
        try {
          let content = fs.readFileSync(file, 'utf8');
          let modified = false;

          // Remove non-existent lucide-react exports
          const invalidExports = [
            'UserHeart', 'UserEdit2', 'UserSearch2', 'UserList2', 
            'UserSettings2', 'UserShield2', 'UserStar2', 'Device', 'Desktop'
          ];

          for (const invalidExport of invalidExports) {
            const regex = new RegExp(`\\s*${invalidExport},?\\s*`, 'g');
            if (content.includes(invalidExport)) {
              content = content.replace(regex, '');
              modified = true;
            }
          }

          // Fix duplicate identifiers
          const duplicates = ['UserHeart', 'Eye', 'Smartphone', 'Database', 'HardDrive', 'Network', 'Wifi', 'Bluetooth', 'Radio', 'Signal', 'Antenna', 'Orbit', 'Star', 'Navigation', 'Moon', 'Sun', 'Binary', 'Lock', 'Brain'];
          
          for (const duplicate of duplicates) {
            const regex = new RegExp(`\\s*${duplicate},?\\s*`, 'g');
            const matches = content.match(regex);
            if (matches && matches.length > 1) {
              // Keep only the first occurrence
              content = content.replace(regex, (match, index) => {
                return index === 0 ? match : '';
              });
              modified = true;
            }
          }

          if (modified) {
            fs.writeFileSync(file, content);
            this.recordFix('import-errors', file);
          }
        } catch (error) {
          console.warn(`⚠️ Could not fix ${file}:`, error.message);
        }
      }
    }
  }

  async fixUnusedVariables() {
    console.log('🔍 Fixing unused variables...');
    
    // This would typically involve more sophisticated analysis
    // For now, we'll focus on obvious cases
    const filesToCheck = [
      'src/utils/sitemapGenerator.ts'
    ];

    for (const file of filesToCheck) {
      if (fs.existsSync(file)) {
        try {
          let content = fs.readFileSync(file, 'utf8');
          
          // Fix unused 'urls' variable
          if (content.includes('const { baseUrl, urls } = this.config;')) {
            content = content.replace(
              'const { baseUrl, urls } = this.config;',
              'const { baseUrl } = this.config;'
            );
            fs.writeFileSync(file, content);
            this.recordFix('unused-variable', file);
          }
        } catch (error) {
          console.warn(`⚠️ Could not fix ${file}:`, error.message);
        }
      }
    }
  }

  async fixMissingExports() {
    console.log('🔍 Fixing missing exports...');
    
    // Add missing exports to components
    const componentsToFix = [
      'src/pages/Blog.tsx',
      'src/pages/Sitemap.tsx',
      'src/pages/MobileLaunchPage.tsx'
    ];

    for (const file of componentsToFix) {
      if (fs.existsSync(file)) {
        try {
          let content = fs.readFileSync(file, 'utf8');
          const componentName = path.basename(file, path.extname(file));
          
          // Check if component is exported
          if (!content.includes(`export default ${componentName}`) && 
              !content.includes(`export { ${componentName} }`)) {
            
            // Find the main component
            const componentMatch = content.match(new RegExp(`(export\\s+)?(const|function)\\s+(${componentName})\\s*[=:]`, 'i'));
            if (componentMatch) {
              // Add default export
              content += `\n\nexport default ${componentName};`;
              fs.writeFileSync(file, content);
              this.recordFix('missing-export', file);
            }
          }
        } catch (error) {
          console.warn(`⚠️ Could not fix ${file}:`, error.message);
        }
      }
    }
  }

  async fixDuplicateIdentifiers() {
    console.log('🔍 Fixing duplicate identifiers...');
    
    // This is handled in fixImportErrors for lucide-react
    // Additional duplicate identifier fixes can be added here
  }

  async fixApiErrors() {
    console.log('🔍 Fixing API errors...');
    
    // Fix service worker type issues
    const swFile = 'src/utils/serviceWorker.ts';
    if (fs.existsSync(swFile)) {
      try {
        let content = fs.readFileSync(swFile, 'utf8');
        
        if (content.includes('applicationServerKey: this.urlBase64ToUint8Array')) {
          // Fix the type issue by adding proper type assertion
          content = content.replace(
            'applicationServerKey: this.urlBase64ToUint8Array(process.env[\'REACT_APP_VAPID_PUBLIC_KEY\'] || \'\')',
            'applicationServerKey: this.urlBase64ToUint8Array(process.env[\'REACT_APP_VAPID_PUBLIC_KEY\'] || \'\') as Uint8Array'
          );
          fs.writeFileSync(swFile, content);
          this.recordFix('service-worker-type', swFile);
        }
      } catch (error) {
        console.warn(`⚠️ Could not fix ${swFile}:`, error.message);
      }
    }
  }

  recordFix(type, file) {
    this.fixedErrors.push({
      type,
      file,
      timestamp: new Date().toISOString()
    });
    this.errorCount++;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalErrorsFixed: this.errorCount,
      fixes: this.fixedErrors,
      summary: `Fixed ${this.errorCount} errors across ${this.fixedErrors.length} files`
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`📄 Report saved to ${this.reportFile}`);
  }
}

// Run the error fixer
if (require.main === module) {
  const fixer = new ErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = ErrorFixer;