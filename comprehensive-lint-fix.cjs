#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files to fix with their specific issues
const filesToFix = [
  {
    path: 'advanced-source-fixer.js',
    fixes: [
      { line: 1, add: '/* eslint-env node */' },
      { line: 8, replace: 'process', with: 'process' },
      { line: 14, replace: 'console', with: 'console' }
    ]
  },
  {
    path: 'aggressive-fix.js',
    fixes: [
      { line: 1, add: '/* eslint-env node */' },
      { line: 34, replace: '_error', with: 'error' },
      { line: 59, replace: '_error', with: 'error' },
      { line: 65, replace: 'cursor fix lint push and merge to main f3c1', with: '// cursor fix lint push and merge to main f3c1' }
    ]
  },
  {
    path: 'analyze-missing-pages.js',
    fixes: [
      { line: 1, add: '/* eslint-env node */' },
      { line: 61, replace: 'cursor fix lint push and merge to main f3c1', with: '// cursor fix lint push and merge to main f3c1' }
    ]
  }
];

// Function to add eslint-env comment to a file
function addEslintEnv(filePath, env = 'node') {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if eslint-env is already present
    if (!content.includes('eslint-env')) {
      content = `/* eslint-env ${env} */\n${content}`;
      fs.writeFileSync(filePath, content);
      console.log(`Added eslint-env to ${filePath}`);
    }
  } catch (error) {
    console.log(`Could not fix ${filePath}: ${error.message}`);
  }
}

// Function to fix specific files
function fixSpecificFiles() {
  for (const file of filesToFix) {
    if (fs.existsSync(file.path)) {
      try {
        let content = fs.readFileSync(file.path, 'utf8');
        let modified = false;
        
        for (const fix of file.fixes) {
          if (fix.add && !content.includes('eslint-env')) {
            content = `/* eslint-env node */\n${content}`;
            modified = true;
          }
          
          if (fix.replace && fix.with) {
            const lines = content.split('\n');
            if (lines[fix.line - 1]) {
              lines[fix.line - 1] = lines[fix.line - 1].replace(fix.replace, fix.with);
              content = lines.join('\n');
              modified = true;
            }
          }
        }
        
        if (modified) {
          fs.writeFileSync(file.path, content);
          console.log(`Fixed ${file.path}`);
        }
      } catch (error) {
        console.log(`Could not fix ${file.path}: ${error.message}`);
      }
    }
  }
}

// Function to add eslint-env to all JS files in root directory
function fixRootJsFiles() {
  const rootFiles = [
    'advanced-source-fixer.js',
    'aggressive-fix.js',
    'analyze-missing-pages.js',
    'automation-runner.js',
    'basic-test.js',
    'build-verification.js',
    'check-syntax.js',
    'clean-conflicts.js',
    'code-quality-checker.js',
    'code-quality-improvements.js',
    'commit-and-push.js',
    'comprehensive-automation.js',
    'comprehensive-fix.js',
    'comprehensive-syntax-fix.js',
    'critical-fix.js',
    'execute-automation.js',
    'final-fix.js',
    'fix-all-conflicts.js',
    'fix-all-remaining-errors.js',
    'fix-all-remaining-syntax.js',
    'fix-all-syntax-errors.js',
    'fix-all-typescript.js',
    'fix-and-run-automations.js',
    'fix-app-styles.js',
    'fix-automation-syntax.js',
    'fix-broken-tests.js',
    'fix-commas.js',
    'fix-conflicts.js',
    'fix-corrupted-files.js',
    'fix-critical-files.js',
    'fix-critical-syntax-errors.js',
    'fix-css-classes.js',
    'fix-final-errors.js',
    'fix-final-issues.js',
    'fix-final-syntax.js',
    'fix-html-entities.js',
    'fix-imports.js',
    'fix-incomplete-objects.js',
    'fix-integration-tests.js',
    'fix-links-and-remaining.js',
    'fix-lint-errors.js',
    'fix-merge-conflicts.js',
    'fix-missing-categories.js',
    'fix-missing-commas.js',
    'fix-project-errors.js',
    'fix-remaining-errors.js',
    'fix-remaining-errors-final.js',
    'fix-remaining-lint-errors.js',
    'fix-remaining-syntax.js',
    'fix-search-types.js',
    'fix-services-comprehensive.js',
    'fix-services-syntax.js',
    'fix-syntax-errors.js',
    'fix-syntax-errors-comprehensive.js',
    'fix-syntax-errors-v2.js',
    'fix-test-files.js',
    'fix-typescript-modules.js',
    'fix-typescript-tests.js',
    'fix-utils-files.js',
    'fix-variable-names.js',
    'health-endpoint.js',
    'improve-app.js',
    'maintenance-scheduler.js',
    'monitoring-system.js',
    'optimized-build.js',
    'performance-optimization.js',
    'performance-optimizations.js',
    'quick-merge-fix.js',
    'quick-syntax-fix.js',
    'quick-syntax-fixer.js',
    'resolve-conflicts.js',
    'resolve-merge-conflicts.js',
    'run-automation.js',
    'run-automation-safely.js',
    'run-automation-suite.js',
    'run-complete-automation.js',
    'simple-fix.js',
    'simple-syntax-fixer.js',
    'simple-test.js',
    'test-automation.js',
    'test-simple.js',
    'ultimate-build-fix.js',
    'ultimate-final-fix.js',
    'ultimate-fix.js',
    'ultimate-syntax-fix.js'
  ];
  
  for (const file of rootFiles) {
    if (fs.existsSync(file)) {
      addEslintEnv(file);
    }
  }
}

// Function to fix API files
function fixApiFiles() {
  const apiDir = 'api';
  if (fs.existsSync(apiDir)) {
    const files = fs.readdirSync(apiDir, { recursive: true });
    for (const file of files) {
      if (file.endsWith('.js')) {
        const filePath = path.join(apiDir, file);
        addEslintEnv(filePath, 'node');
      }
    }
  }
}

// Main execution
console.log('Starting comprehensive lint fixes...');

fixSpecificFiles();
fixRootJsFiles();
fixApiFiles();

console.log('Lint fixes completed!');