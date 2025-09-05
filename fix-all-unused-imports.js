const fs = require('fs');
const path = require('path');

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.next', 'out', 'dist', 'build', 'coverage', 'scripts', 'automation', 'automation_backup', 'pm2-automation', '__tests__', 'pages.disabled', 'pages.disabled_full', 'pages.old', 'pages.corrupted', 'pages.broken', 'pages.bak', 'pages.blog.disabled', 'pages._archive_corrupted', 'pages._quarantine', 'pages-disabled', 'pages-quarantine', 'pages.__backup', 'pages-backup', 'pages_backup', 'pages_api.disabled', 'pages.disabled_auto', 'pages.disabled.full', 'pages_disabled', 'src_backup', 'src.pages.disabled', 'src.disabled', 'src.broken', 'src.corrupted', 'components.disabled', 'components.disabled_full', 'components.corrupted', 'solutions.disabled', 'services-broken.tsx', 'services', 'server', 'pm2-backups', 'public', 'temp_backup', 'temp_broken_files', 'temp_working', 'temp_footer_start.tsx', 'tests.disabled', 'tests', 'test_build', 'test-', 'test-utils.js', 'supabase', 'zion-os.disabled', 'zion_academy', 'tools', 'types', 'utils', 'hooks', 'hooks.disabled', 'lib', 'lib.broken', 'lib.disabled', 'lib_backup', 'netlify', 'middleware', 'database', 'deployments', 'e2e', 'cypress_backup', 'contracts.disabled', 'corrupted-files-backup', 'data.disabled', 'ecosystem.', 'comprehensive-', 'critical-fix.js', 'execute-automation.js', 'final-', 'health-endpoint.js', 'improve-app.js', 'maintenance-scheduler.js', 'merge-', 'monitoring-system.js', 'optimized-', 'performance-', 'resolve-', 'run-', 'seo-', 'simple-', 'test-', 'ultimate-', 'ultimate-', 'systematic-merge.cjs', 'structural-fix.js', 'vite.config', 'ux-enhancer.cjs', 'fix-', 'git-', 'security-', 'quick-', 'intelligent-', 'master-', 'monitoring-', 'jest.', 'setupTests.ts', 'lint-stub.js', 'lint-target', 'next.config.', 'postcss.config-backup.js', 'pr-manager.cjs', 'playwright.config.ts', 'cypress.config.ts', 'eslint.config.disabled.js', '.test.js', '.test.ts', '.test.tsx', '.spec.js', '.spec.ts', '.spec.tsx', 'App.tsx', 'advanced-', 'aggressive-', 'ai-optimization-backups', 'analyze-', 'api-backup', 'api-disabled', 'api.disabled', 'api.disabled.temp', 'app-enhancement-', 'app-improvement-', 'app-monitor.cjs', 'app', 'automated-', 'automation-', 'backup', 'basic-test.js', 'batch-', 'broken_files_backup', 'build-verification.js', 'cache', 'clean-build', 'clean-conflicts.', 'clean-merge-', 'code-quality-', 'commit-and-push.js', 'complete-', 'create-', 'deployment-', 'deployment', 'ecosystem-', 'enhanced-', 'execute-', 'improve-app.cjs', 'merge-', 'monitoring', 'optimized-', 'performance-', 'resolve-', 'run-', 'seo-', 'simple-', 'targeted-', 'temp-backup', 'ultimate-', 'systematic-merge.cjs', 'structural-fix.js', 'vite.config', 'ux-enhancer.cjs', 'fix-', 'git-', 'security-', 'quick-', 'intelligent-', 'master-', 'monitoring-', 'netlify', 'middleware', 'hooks', 'hooks.disabled', 'lib', 'lib.broken', 'lib.disabled', 'lib_backup', 'pages.disabled_auto', 'pages.disabled.full', 'pages_disabled', 'jest.', 'setupTests.ts', 'lint-stub.js', 'lint-target', 'next.config.', 'postcss.config-backup.js', 'pr-manager.cjs', 'playwright.config.ts', 'cypress.config.ts', 'eslint.config.disabled.js'].some(skip => file.startsWith(skip) || file.includes(skip))) {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Function to fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Find all import statements
    const importRegex = /import\s+.*?from\s+['"]([^'"]+)['"];?/g;
    const imports = [];
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      imports.push(match[0]);
    }
    
    if (imports.length === 0) return false;
    
    // Find used identifiers in the file
    const usedIdentifiers = new Set();
    
    // Remove import statements to avoid false positives
    const withoutImports = content.replace(/import\s+.*?from\s+['"][^'"]+['"];?\n?/g, '');
    const withoutComments = withoutImports.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
    
    // Find JSX components
    const jsxRegex = /<([A-Z][a-zA-Z0-9]*)/g;
    while ((match = jsxRegex.exec(withoutComments)) !== null) {
      usedIdentifiers.add(match[1]);
    }
    
    // Find variable usage
    const varRegex = /\b[A-Z][a-zA-Z0-9]*\b/g;
    while ((match = varRegex.exec(withoutComments)) !== null) {
      usedIdentifiers.add(match[0]);
    }
    
    let hasChanges = false;
    let newContent = content;
    
    // Process each import statement
    for (const importStatement of imports) {
      if (importStatement.includes('lucide-react')) {
        // Parse lucide-react imports
        const lucideMatch = importStatement.match(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"]lucide-react['"];?/);
        if (!lucideMatch) continue;
        
        const imports = lucideMatch[1]
          .split(',')
          .map(imp => imp.trim())
          .filter(imp => imp.length > 0)
          .map(imp => {
            const parts = imp.split(' as ');
            return {
              original: parts[0].trim(),
              alias: parts[1] ? parts[1].trim() : parts[0].trim()
            };
          });
        
        // Find which imports are actually used
        const usedImports = imports.filter(imp => 
          usedIdentifiers.has(imp.alias) || usedIdentifiers.has(imp.original)
        );
        
        if (usedImports.length !== imports.length) {
          // Create new import statement
          const newImportStatement = usedImports.length > 0 
            ? `import { ${usedImports.map(imp => imp.original === imp.alias ? imp.original : `${imp.original} as ${imp.alias}`).join(', ')} } from 'lucide-react';`
            : '';
          
          // Replace the old import with the new one
          newContent = newContent.replace(importStatement, newImportStatement);
          hasChanges = true;
        }
      }
    }
    
    if (hasChanges) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting to fix unused imports...');

const files = findFiles('./pages').concat(findFiles('./components'));
let fixedCount = 0;

files.forEach(file => {
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
});

console.log(`Fixed unused imports in ${fixedCount} files.`);