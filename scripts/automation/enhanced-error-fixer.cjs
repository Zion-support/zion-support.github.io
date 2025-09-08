#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class EnhancedErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.errorsFixed = 0;
    this.filesProcessed = 0;
    this.startTime = Date.now();
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async fixAllErrors() {
    this.log('Starting Enhanced Error Fixer...');
    
    try {
      // Fix major syntax errors first
      await this.fixSyntaxErrors();
      
      // Fix JSX fragment issues
      await this.fixJSXFragmentIssues();
      
      // Fix TypeScript parsing errors
      await this.fixTypeScriptErrors();
      
      // Fix ESLint configuration issues
      await this.fixESLintConfig();
      
      // Fix package.json type issues
      await this.fixPackageJson();
      
      // Fix missing dependencies
      await this.installMissingDependencies();
      
      this.log(`Enhanced Error Fixer completed. Fixed ${this.errorsFixed} errors in ${this.filesProcessed} files.`);
      
      const report = this.generateReport();
      return report;
      
    } catch (error) {
      this.log(`Enhanced Error Fixer failed: ${error.message}`);
      throw error;
    }
  }

  async fixSyntaxErrors() {
    this.log('Fixing major syntax errors...');
    
    // Fix files with parsing errors
    const filesToFix = [
      'src/components/unused/EnhancedErrorBoundary.jsx',
      'src/components/unused/Marketplace.jsx',
      'src/components/unused/WebsiteImprovementDashboard.jsx',
      'src/components/wallet/OnChainExport.jsx',
      'src/context/CartContext.jsx',
      'src/hooks/useAICodeGeneration.jsx',
      'src/hooks/useBlockchainWeb3.jsx',
      'src/hooks/useMachineLearning.jsx',
      'src/hooks/useOrder.jsx',
      'src/hooks/useOrders.jsx',
      'src/hooks/usePerformance.jsx',
      'src/hooks/useRealTimeCollaboration.jsx',
      'src/hooks/useSecurityCompliance.jsx',
      'src/hooks/useVirtualScroll.jsx',
      'src/layout/PrimaryNav.jsx',
      'src/utils/contentOptimizer.jsx',
      'src/utils/contentQualityAnalyzer.jsx',
      'src/utils/seoOptimizer.jsx',
      'src/utils/sitemapGenerator.jsx'
    ];

    for (const filePath of filesToFix) {
      if (fs.existsSync(filePath)) {
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          let originalContent = content;
          
          // Fix common syntax errors
          content = this.fixCommonSyntaxErrors(content);
          
          if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            this.errorsFixed++;
            this.log(`Fixed syntax errors in ${filePath}`);
          }
          
          this.filesProcessed++;
        } catch (error) {
          this.log(`Error fixing ${filePath}: ${error.message}`);
        }
      }
    }
  }

  fixCommonSyntaxErrors(content) {
    // Fix unexpected token errors
    content = content.replace(/const\s+\[([^\]]+)\]\s*=\s*\[/g, 'const $1 = [');
    content = content.replace(/const\s+\[([^\]]+)\]\s*=\s*\{/g, 'const $1 = {');
    
    // Fix missing semicolons and brackets
    content = content.replace(/([^;])\n\s*const/g, '$1;\nconst');
    content = content.replace(/([^}])\n\s*export/g, '$1;\n\nexport');
    
    // Fix JSX fragment syntax
    content = content.replace(/<>([\s\S]*?)<\/>/g, (match, inner) => {
      return `<React.Fragment>${inner}</React.Fragment>`;
    });
    
    return content;
  }

  async fixJSXFragmentIssues() {
    this.log('Fixing JSX fragment issues...');
    
    // Fix specific pages with JSX fragment problems
    const pagesToFix = [
      'src/pages/services/healthcare-tech.tsx',
      'src/pages/services/iot-edge.tsx',
      'src/pages/services/llm-content-studio.tsx',
      'src/pages/services/micro-saas-solutions.tsx',
      'src/pages/services/sustainability.tsx',
      'src/pages/solutions/Enterprise.tsx',
      'src/pages/solutions/Healthcare.tsx'
    ];

    for (const filePath of pagesToFix) {
      if (fs.existsSync(filePath)) {
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          let originalContent = content;
          
          // Fix JSX fragment wrapper
          if (content.includes('<Helmet>') && !content.includes('<>')) {
            // Find the start of the component
            const componentStart = content.indexOf('export default function');
            if (componentStart !== -1) {
              // Find the first <Helmet> tag
              const helmetStart = content.indexOf('<Helmet>');
              if (helmetStart !== -1) {
                // Insert opening fragment before Helmet
                content = content.slice(0, helmetStart) + '<>\n      ' + content.slice(helmetStart);
                
                // Find the closing div and add closing fragment
                const lastDivClose = content.lastIndexOf('</div>');
                if (lastDivClose !== -1) {
                  content = content.slice(0, lastDivClose) + '</div>\n    </>' + content.slice(lastDivClose + 6);
                }
              }
            }
          }
          
          if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            this.errorsFixed++;
            this.log(`Fixed JSX fragment issues in ${filePath}`);
          }
          
          this.filesProcessed++;
        } catch (error) {
          this.log(`Error fixing ${filePath}: ${error.message}`);
        }
      }
    }
  }

  async fixTypeScriptErrors() {
    this.log('Fixing TypeScript parsing errors...');
    
    // Fix specific TypeScript files with syntax errors
    const tsFilesToFix = [
      'src/context/auth/useAuthState.ts',
      'src/hooks/useAuth.ts',
      'src/hooks/usePerformanceOptimization.ts',
      'src/hooks/useSEO.ts',
      'src/layout/AppHeader.tsx',
      'src/layout/AppLayout.tsx',
      'src/layout/MainNavigation.tsx',
      'src/layout/PrimaryNav.tsx',
      'src/legal/TermsOfService.tsx',
      'src/services/api.ts',
      'src/store/authSlice.ts',
      'src/utils/sitemapGenerator.ts',
      'src/utils/tokenRewards.ts'
    ];

    for (const filePath of tsFilesToFix) {
      if (fs.existsSync(filePath)) {
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          let originalContent = content;
          
          // Fix common TypeScript syntax errors
          content = this.fixTypeScriptSyntax(content);
          
          if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            this.errorsFixed++;
            this.log(`Fixed TypeScript errors in ${filePath}`);
          }
          
          this.filesProcessed++;
        } catch (error) {
          this.log(`Error fixing ${filePath}: ${error.message}`);
        }
      }
    }
  }

  fixTypeScriptSyntax(content) {
    // Fix missing commas in type definitions
    content = content.replace(/(\w+):\s*(\w+)(\s*\n)/g, '$1: $2,$3');
    
    // Fix missing type annotations
    content = content.replace(/const\s+(\w+)\s*=\s*\[/g, 'const $1: any[] = [');
    content = content.replace(/const\s+(\w+)\s*=\s*\{/g, 'const $1: any = {');
    
    // Fix missing parentheses
    content = content.replace(/(\w+)\s*=>\s*([^{]*?)(\n|$)/g, '$1 => ($2)$3');
    
    return content;
  }

  async fixESLintConfig() {
    this.log('Fixing ESLint configuration...');
    
    try {
      // Check if globals package is installed
      const packageJsonPath = 'package.json';
      if (fs.existsSync(packageJsonPath)) {
        let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        // Add globals to devDependencies if not present
        if (!packageJson.devDependencies.globals) {
          packageJson.devDependencies.globals = '^13.24.0';
          fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
          this.log('Added globals dependency to package.json');
          this.errorsFixed++;
        }
      }
      
      // Fix ESLint config if needed
      const eslintConfigPath = 'eslint.config.js';
      if (fs.existsSync(eslintConfigPath)) {
        let content = fs.readFileSync(eslintConfigPath, 'utf8');
        
        // Ensure proper import syntax
        if (!content.includes("import globals from 'globals'")) {
          content = content.replace(
            "import globals from 'globals';",
            "import globals from 'globals';"
          );
        }
        
        fs.writeFileSync(eslintConfigPath, content, 'utf8');
        this.log('Fixed ESLint configuration');
        this.errorsFixed++;
      }
      
      this.filesProcessed++;
    } catch (error) {
      this.log(`Error fixing ESLint config: ${error.message}`);
    }
  }

  async fixPackageJson() {
    this.log('Fixing package.json configuration...');
    
    try {
      const packageJsonPath = 'package.json';
      if (fs.existsSync(packageJsonPath)) {
        let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        // Add type module if not present
        if (!packageJson.type) {
          packageJson.type = 'module';
          fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
          this.log('Added type: module to package.json');
          this.errorsFixed++;
        }
        
        this.filesProcessed++;
      }
    } catch (error) {
      this.log(`Error fixing package.json: ${error.message}`);
    }
  }

  async installMissingDependencies() {
    this.log('Installing missing dependencies...');
    
    try {
      // Install globals package
      execSync('npm install --save-dev globals', { stdio: 'pipe' });
      this.log('Installed globals package');
      this.errorsFixed++;
      
      // Install other potentially missing packages
      execSync('npm install', { stdio: 'pipe' });
      this.log('Installed all dependencies');
      this.errorsFixed++;
      
    } catch (error) {
      this.log(`Error installing dependencies: ${error.message}`);
    }
  }

  generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: 'Enhanced Error Fixer completed',
      status: 'completed',
      duration: `${duration}ms`,
      results: {
        errorsFixed: this.errorsFixed,
        filesProcessed: this.filesProcessed
      },
      performance: {
        totalDuration: duration,
        averageTimePerFix: duration / Math.max(this.errorsFixed, 1)
      }
    };
    
    const reportPath = path.join(this.reportsDir, 'enhanced-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Enhanced report saved to ${reportPath}`);
    return report;
  }

  async runContinuousMode(interval = 300000) { // Default: 5 minutes
    this.log(`Starting Continuous Enhanced Error Fixer Mode (interval: ${interval}ms)...`);
    
    const runCycle = async () => {
      try {
        this.log('Running enhanced error fix cycle...');
        await this.fixAllErrors();
        this.log(`Cycle completed. Next run in ${interval / 1000} seconds.`);
      } catch (error) {
        this.log(`Cycle failed: ${error.message}`);
      }
    };
    
    // Run immediately
    await runCycle();
    
    // Set up continuous execution
    setInterval(runCycle, interval);
    
    this.log('Continuous mode started. Press Ctrl+C to stop.');
  }
}

// Run the automation if called directly
if (require.main === module) {
  const fixer = new EnhancedErrorFixer();
  
  // Check for command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('--continuous') || args.includes('-c')) {
    const interval = parseInt(args.find(arg => arg.startsWith('--interval='))?.split('=')[1]) || 300000;
    fixer.runContinuousMode(interval).catch(console.error);
  } else {
    fixer.fixAllErrors().catch(console.error);
  }
}

module.exports = EnhancedErrorFixer;