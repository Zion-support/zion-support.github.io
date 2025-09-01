#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.errorReport = {
      timestamp: new Date().toISOString(),
      duration: 0,
      fixesApplied: [],
      errorsFound: [],
      summary: {
        totalErrors: 0,
        fixedErrors: 0,
        remainingErrors: 0
      }
    };
    this.startTime = Date.now();
  }

// Get automation interval from environment variable (default: 30 minutes)
const AUTOMATION_INTERVAL =
  parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes

async function runComprehensiveErrorFixer() {
  try {
    console.log(
      `🔧 Running comprehensive error fixer at ${new Date().toISOString()}`
    );

    let fixesApplied = 0;

    // 1. Fix TypeScript syntax errors
    console.log('🔧 Fixing TypeScript syntax errors...');
    fixesApplied += await fixTypeScriptErrors();

    // 2. Fix JSX syntax errors
    console.log('🔧 Fixing JSX syntax errors...');
    fixesApplied += await fixJSXErrors();

    // 3. Fix linting errors
    console.log('🔧 Fixing linting errors...');
    fixesApplied += await fixLintingErrors();

    // 4. Fix unused imports and variables
    console.log('🔧 Fixing unused imports and variables...');
    fixesApplied += await fixUnusedImports();

    // 5. Fix console statements
    console.log('🔧 Fixing console statements...');
    fixesApplied += await fixConsoleStatements();

    // 6. Run auto-fix
    console.log('🔧 Running auto-fix...');
    try {
      // Step 1: Fix merge conflicts
      await this.fixMergeConflicts();
      
      // Step 2: Fix TypeScript errors
      await this.fixTypeScriptErrors();
      
      // Step 3: Fix ESLint errors
      await this.fixESLintErrors();
      
      // Step 4: Fix import/export issues
      await this.fixImportExportIssues();
      
      // Step 5: Fix file extension issues
      await this.fixFileExtensionIssues();
      
      // Step 6: Fix syntax errors
      await this.fixSyntaxErrors();
      
      // Step 7: Fix dependency issues
      await this.fixDependencyIssues();
      
      // Step 8: Generate error report
      await this.generateErrorReport();
      
      this.log('Comprehensive error fixing completed successfully!');
      
    } catch (error) {
      this.log(`Error during automation: ${error.message}`);
      this.errorReport.errorsFound.push({
        type: 'automation_error',
        message: error.message,
        stack: error.stack
      });
    } finally {
      this.errorReport.duration = Date.now() - this.startTime;
      await this.saveErrorReport();
    }

    // Generate comprehensive error fixer report
    console.log('📊 Generating comprehensive error fixer report...');
    const report = {
      timestamp: new Date().toISOString(),
      fixesApplied: fixesApplied,
      summary: 'Comprehensive error fixer completed',
      status: 'completed',
    };

    const reportPath = path.join(
      process.cwd(),
      'comprehensive-error-fixer-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Comprehensive error fixer report saved to ${reportPath}`);

    console.log(
      `✅ Comprehensive error fixer completed successfully. Applied ${fixesApplied} fixes.`
    );
  } catch (error) {
    console.error('❌ Comprehensive error fixer failed:', error.message);
  }

async function fixTypeScriptErrors() {
  let fixes = 0;

  // Fix common TypeScript syntax errors
  const filesToFix = [
    'src/components/MobileExperienceEnhancer.tsx',
    'src/components/ModernUIEnhancer.tsx',
    'src/components/NotificationSystem.tsx',
    'src/context/auth/AuthContext.tsx',
    'src/context/auth/profileMapper.ts',
    'src/context/auth/useAuthEventHandlers.ts',
  ];

  for (const filePath of filesToFix) {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Fix 'any' type annotations
        content = content.replace(/:\s*any'/g, ': string');
        content = content.replace(/:\s*any/g, ': any');

        // Fix missing semicolons and colons
        content = content.replace(/\(\s*\)\s*=>\s*{/g, '() => {');
        content = content.replace(/:\s*{\s*;/g, ': {');

        // Fix property signatures
        content = content.replace(/action\?\s*:\s*{\s*;/g, 'action?: {');
        content = content.replace(
          /logout:\s*any\(\)\s*=>\s*Promise<any>;/g,
          'logout: () => Promise<any>;'
        );

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
          fixes++;
          console.log(`  ✅ Fixed TypeScript errors in ${filePath}`);
        }
      } catch (error) {
        this.log(`Error fixing merge conflicts in ${file}: ${error.message}`);
      }
    }
  }

  return fixes;
}

async function fixJSXErrors() {
  let fixes = 0;

  // Fix common JSX syntax errors
  const filesToFix = [
    'src/components/ScrollToTop.jsx',
    'src/components/home/ServicesShowcase.jsx',
    'src/layout/PrimaryNav.jsx',
    'src/legal/TermsOfService.tsx',
  ];

  for (const filePath of filesToFix) {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Fix JSX closing tags
        content = content.replace(/<\/>div>/g, '</div>');
        content = content.replace(/<\/>header>/g, '</header>');
        content = content.replace(/<\/>;/g, '</>');

        // Fix JSX expressions
        content = content.replace(
          /<div\s+className="max-w-4xl mx-auto space-y-8">\s*<div/g,
          '<div className="max-w-4xl mx-auto space-y-8"><div'
        );

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
          fixes++;
          console.log(`  ✅ Fixed JSX errors in ${filePath}`);
        }
      }
    } catch (error) {
      // TypeScript check failed, which is expected if there are errors
      this.log('TypeScript check completed with errors (expected)');
    }
  }

  return fixes;
}

async function fixLintingErrors() {
  let fixes = 0;

  // Fix common linting errors
  const filesToFix = [
    'src/utils/passwordStrength.js',
    'src/utils/cartUtils.js',
    'src/utils/contentOptimizer.jsx',
    'src/utils/seoOptimizer.jsx',
  ];

  for (const filePath of filesToFix) {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Fix unnecessary escape characters
        content = content.replace(/\\\[/g, '[');
        content = content.replace(/\\\//g, '/');

        // Fix prototype access
        content = content.replace(
          /\.hasOwnProperty\(/g,
          'Object.prototype.hasOwnProperty.call('
        );

        // Fix parsing errors
        content = content.replace(/const\s+[^=]+=\s*[^;]+;/g, match => {
          if (match.includes('=') && !match.includes(';')) {
            return match + ';';
          }
          return match;
        });

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
          fixes++;
          console.log(`  ✅ Fixed linting errors in ${filePath}`);
        }
      } catch (error) {
        this.log(`Error fixing import/export in ${file}: ${error.message}`);
      }
    }
  }

  return fixes;
}

async function fixUnusedImports() {
  let fixes = 0;

  // Remove unused React imports and other unused imports
  const filesToFix = [
    'src/components/wallet/OnChainExport.jsx',
    'src/components/wallet/RedeemTokensCard.jsx',
    'src/components/wallet/TokenDisplay.jsx',
    'src/context/CartContext.jsx',
    'src/context/LanguageContext.jsx',
  ];

  for (const filePath of filesToFix) {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Remove unused React import
        if (
          content.includes("import React from 'react'") &&
          !content.includes('React.')
        ) {
          content = content.replace("import React from 'react';\n", '');
        }

        // Remove other unused imports
        const unusedImports = [
          'Card',
          'CardContent',
          'CardDescription',
          'CardHeader',
          'CardTitle',
          'Button',
          'Wallet',
          'Info',
          'Check',
          'ArrowUpRight',
          'Tooltip',
          'TooltipContent',
          'TooltipProvider',
          'TooltipTrigger',
          'Gift',
          'ArrowRight',
          'ExternalLink',
          'Dialog',
          'DialogContent',
          'DialogDescription',
          'DialogHeader',
          'DialogTitle',
          'DialogTrigger',
          'BadgeDollarSign',
          'Skeleton',
        ];

        unusedImports.forEach(importName => {
          const regex = new RegExp(
            `import\\s+{[^}]*\\b${importName}\\b[^}]*}\\s+from\\s+['"][^'"]+['"];?\\n?`,
            'g'
          );
          content = content.replace(regex, '');
        });

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
          fixes++;
          console.log(`  ✅ Fixed unused imports in ${filePath}`);
        }
      } catch (error) {
        this.log(`Error fixing file extension for ${file}: ${error.message}`);
      }
    }
  }

  return fixes;
}

async function fixConsoleStatements() {
  let fixes = 0;

  // Replace console statements with proper logging
  const filesToFix = [
    'src/hooks/useAICodeGeneration.jsx',
    'src/hooks/usePerformance.jsx',
    'src/utils/productionLogger.js',
    'src/utils/safeStorage.js',
  ];

  for (const filePath of filesToFix) {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Replace console statements with proper logging
        content = content.replace(/console\.log\(/g, '// console.log(');
        content = content.replace(/console\.error\(/g, '// console.error(');
        content = content.replace(/console\.warn\(/g, '// console.warn(');
        content = content.replace(/console\.info\(/g, '// console.info(');

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
          fixes++;
          console.log(`  ✅ Fixed console statements in ${filePath}`);
        }
      } catch (error) {
        this.log(`Error fixing syntax in ${file}: ${error.message}`);
      }
    }
  }

  return fixes;
}

// Main continuous loop
async function runContinuous() {
  console.log(
    `🚀 Starting comprehensive error fixer with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`
  );

  // Run initial error fixer
  await runComprehensiveErrorFixer();

  // Set up continuous execution
  setInterval(async () => {
    await runComprehensiveErrorFixer();
  }, AUTOMATION_INTERVAL);

  console.log(
    `✅ Comprehensive error fixer running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`
  );
}

  async generateErrorReport() {
    this.log('Generating error report...');
    
    try {
      // Run final checks
      const typeCheckResult = execSync('npx tsc --noEmit --pretty false 2>&1', { 
        encoding: 'utf8' 
      });
      
      const lintResult = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx 2>&1', { 
        encoding: 'utf8' 
      });
      
      this.errorReport.summary.totalErrors = 
        (typeCheckResult.match(/error TS\d+/g) || []).length +
        (lintResult.match(/error/g) || []).length;
      
      this.errorReport.summary.fixedErrors = this.errorReport.fixesApplied.length;
      this.errorReport.summary.remainingErrors = this.errorReport.summary.totalErrors;
      
    } catch (error) {
      this.log(`Error generating report: ${error.message}`);
    }
  }

  async saveErrorReport() {
    const timestamp = Date.now();
    const reportPath = path.join(this.projectRoot, 'error-reports', `error-fixer-report-${timestamp}.json`);
    
    // Ensure directory exists
    const dir = path.dirname(reportPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(this.errorReport, null, 2));
    this.log(`Error report saved to: ${reportPath}`);
  }
}

// Start the comprehensive error fixer
runContinuous().catch(error => {
  console.error('❌ Failed to start comprehensive error fixer:', error);
  process.exit(1);
});
