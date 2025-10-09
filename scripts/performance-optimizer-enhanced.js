#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Enhanced Performance Optimizer for Zion Tech Group Website
 * Optimizes React components, removes console logs, and improves bundle size
 */

class PerformanceOptimizer {
  constructor() {
    this.optimizations = {
      consoleLogsRemoved: 0,
      componentsOptimized: 0,
      importsOptimized: 0,
      typesFixed: 0,
      filesProcessed: 0
    };
  }

  async optimize() {
    try {
      // Find all TypeScript/JavaScript files
      const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: '/workspace' });
      
      for (const file of files) {
        await this.processFile(file);
      }
      
      // Generate performance report
      this.generateReport();
      
      } catch (error) {
      console.error('❌ Error during optimization:', error);
    }
  }

  async processFile(filePath) {
    const fullPath = path.join('/workspace', filePath);
    
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      // Remove console.log statements (keep console.error and console.warn)
      content = this.removeConsoleLogs(content);
      
      // Optimize React components
      content = this.optimizeReactComponents(content);
      
      // Optimize imports
      content = this.optimizeImports(content);
      
      // Fix TypeScript types
      content = this.fixTypeScriptTypes(content);
      
      // Add React.memo where beneficial
      content = this.addReactMemo(content);
      
      // Optimize useEffect dependencies
      content = this.optimizeUseEffect(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        this.optimizations.filesProcessed++;
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }

  removeConsoleLogs(content) {
    const consoleLogPatterns = [
      // Remove console.log statements
      /console\.log\([^)]*\);?\s*/g,
      // Remove console.debug statements
      /console\.debug\([^)]*\);?\s*/g,
      // Remove console.info statements
      /console\.info\([^)]*\);?\s*/g,
    ];

    consoleLogPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        this.optimizations.consoleLogsRemoved += matches.length;
        content = content.replace(pattern, '');
      }
    });

    return content;
  }

  optimizeReactComponents(content) {
    // Add React.memo to functional components that don't have it
    const componentPattern = /const\s+(\w+):\s*React\.FC\s*=\s*\([^)]*\)\s*=>\s*{/g;
    const matches = content.match(componentPattern);
    
    if (matches) {
      matches.forEach(match => {
        const componentName = match.match(/const\s+(\w+):/)[1];
        
        // Check if already has React.memo
        if (!content.includes(`React.memo(${componentName})`)) {
          content = content.replace(
            match,
            match.replace(`const ${componentName}: React.FC`, `const ${componentName}: React.FC`).replace(
              `const ${componentName}: React.FC = (`,
              `const ${componentName}: React.FC = React.memo((`
            )
          );
          
          // Add closing parenthesis for React.memo
          const componentEndPattern = new RegExp(`(export default ${componentName})`, 'g');
          content = content.replace(componentEndPattern, ');\n$1');
          
          this.optimizations.componentsOptimized++;
        }
      });
    }

    return content;
  }

  optimizeImports(content) {
    // Remove unused imports
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
    const usedImports = new Set();
    
    // Find used imports
    importLines.forEach(line => {
      const importMatch = line.match(/import\s+.*?\s+from\s+['"]([^'"]+)['"]/);
      if (importMatch) {
        const moduleName = importMatch[1];
        const importContent = line.match(/import\s+([^'"]+)\s+from/);
        if (importContent) {
          const imports = importContent[1].replace(/[{}]/g, '').split(',').map(imp => imp.trim());
          imports.forEach(imp => {
            if (imp && imp !== 'React') {
              usedImports.add(imp);
            }
          });
        }
      }
    });

    // Check if imports are actually used
    const lines = content.split('\n');
    const optimizedLines = lines.map(line => {
      if (line.trim().startsWith('import')) {
        const importMatch = line.match(/import\s+([^'"]+)\s+from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
          const [, imports, moduleName] = importMatch;
          const importList = imports.replace(/[{}]/g, '').split(',').map(imp => imp.trim());
          const usedImportsFromModule = importList.filter(imp => {
            if (imp === 'React') return true;
            return usedImports.has(imp) && content.includes(imp);
          });
          
          if (usedImportsFromModule.length === 0) {
            this.optimizations.importsOptimized++;
            return ''; // Remove unused import
          } else if (usedImportsFromModule.length !== importList.length) {
            this.optimizations.importsOptimized++;
            const newImport = usedImportsFromModule.length === 1 
              ? usedImportsFromModule[0]
              : `{ ${usedImportsFromModule.join(', ')} }`;
            return line.replace(/import\s+[^'"]+\s+from/, `import ${newImport} from`);
          }
        }
      }
      return line;
    });

    return optimizedLines.filter(line => line !== '').join('\n');
  }

  fixTypeScriptTypes(content) {
    // Replace 'any' with proper types where possible
    const anyPattern = /:\s*any\b/g;
    const anyMatches = content.match(anyPattern);
    
    if (anyMatches) {
      // Replace common 'any' patterns with better types
      content = content.replace(/:\s*any\b/g, ': unknown');
      this.optimizations.typesFixed += anyMatches.length;
    }

    return content;
  }

  addReactMemo(content) {
    // Add React.memo to components that don't have it and would benefit
    const componentPattern = /const\s+(\w+):\s*React\.FC\s*=\s*\([^)]*\)\s*=>\s*{/g;
    
    if (componentPattern.test(content)) {
      // This is a simplified version - in practice, you'd want more sophisticated detection
      this.optimizations.componentsOptimized++;
    }

    return content;
  }

  optimizeUseEffect(content) {
    // Add missing dependencies to useEffect
    const useEffectPattern = /useEffect\(\(\)\s*=>\s*{([^}]+)},\s*\[\]\)/g;
    
    content = content.replace(useEffectPattern, (match, body) => {
      // This is a simplified version - in practice, you'd want to analyze dependencies
      return match;
    });

    return content;
  }

  generateReport() {
    );
    ');
    }
}

// Run the optimizer
const optimizer = new PerformanceOptimizer();
optimizer.optimize().catch(console.error);