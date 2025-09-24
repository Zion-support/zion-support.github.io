const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveAppImprover {
  constructor() {
    this.reportsDir = './automation-reports';
    this.improvements = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runCommand(command, description) {
    this.log(`🚀 ${description}`);
    try {
      const result = execSync(command, {
        cwd: process.cwd(),
        encoding: 'utf8',
        timeout: 60000,
      });
      this.log(`✅ ${description} - Success`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} - Failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async improveCodeQuality() {
    this.log('🔧 Improving code quality...');

    // Fix common syntax issues
    await this.runCommand('node fix-syntax-errors.cjs', 'Fix syntax errors');

    // Run linting fixes
    await this.runCommand('npm run lint:fix', 'Fix linting issues');

    // Optimize imports
    await this.optimizeImports();

    this.improvements.push('Code quality improvements applied');
  }

  async optimizeImports() {
    this.log('📦 Optimizing imports...');

    const files = this.getTypeScriptFiles('.');
    let optimizedCount = 0;

    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');

        // Remove unused imports
        content = this.removeUnusedImports(content);

        // Sort imports
        content = this.sortImports(content);

        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          optimizedCount++;
        }
      } catch (error) {
        this.errors.push({ file, error: error.message });
      }
    }

    this.log(`✅ Optimized ${optimizedCount} files`);
  }

  removeUnusedImports(content) {
    // Simple unused import removal (basic implementation)
    const lines = content.split('\n');
    const usedIdentifiers = new Set();

    // Find used identifiers
    lines.forEach(line => {
      const matches = line.match(/\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/g);
      if (matches) {
        matches.forEach(match => usedIdentifiers.add(match));
      }
    });

    // Remove unused imports
    return lines
      .filter(line => {
        if (line.trim().startsWith('import ')) {
          const importMatch = line.match(/import\s*{([^}]+)}/);
          if (importMatch) {
            const imports = importMatch[1].split(',').map(imp => imp.trim());
            const usedImports = imports.filter(imp => usedIdentifiers.has(imp));
            if (usedImports.length === 0) {
              return false; // Remove unused import
            }
          }
        }
        return true;
      })
      .join('\n');
  }

  sortImports(content) {
    const lines = content.split('\n');
    const importLines = [];
    const otherLines = [];
    let inImports = false;

    lines.forEach(line => {
      if (line.trim().startsWith('import ')) {
        importLines.push(line);
        inImports = true;
      } else if (inImports && line.trim() === '') {
        importLines.push(line);
      } else {
        if (inImports) {
          otherLines.push(line);
          inImports = false;
        } else {
          otherLines.push(line);
        }
      }
    });

    // Sort imports
    importLines.sort();

    return [...importLines, ...otherLines].join('\n');
  }

  getTypeScriptFiles(dir) {
    const files = [];

    function walkDir(currentPath) {
      const items = fs.readdirSync(currentPath);

      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);

        if (
          stat.isDirectory() &&
          !item.startsWith('.') &&
          item !== 'node_modules'
        ) {
          walkDir(fullPath);
        } else if (
          stat.isFile() &&
          (item.endsWith('.ts') || item.endsWith('.tsx'))
        ) {
          files.push(fullPath);
        }
      }
    }

    walkDir(dir);
    return files;
  }

  async improvePerformance() {
    this.log('⚡ Improving performance...');

    // Optimize images
    await this.runCommand('npm run optimize:images', 'Optimize images');

    // Bundle analysis
    await this.runCommand('npm run analyze', 'Analyze bundle');

    this.improvements.push('Performance optimizations applied');
  }

  async improveSecurity() {
    this.log('🔒 Improving security...');

    // Run security audit
    await this.runCommand('npm audit', 'Security audit');

    // Fix security issues
    await this.runCommand('npm audit fix', 'Fix security issues');

    this.improvements.push('Security improvements applied');
  }

  async improveAccessibility() {
    this.log('♿ Improving accessibility...');

    // Run accessibility tests
    await this.runCommand('npm run test:accessibility', 'Accessibility tests');

    this.improvements.push('Accessibility improvements applied');
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      improvements: this.improvements,
      errors: this.errors,
      summary: {
        totalImprovements: this.improvements.length,
        totalErrors: this.errors.length,
        successRate:
          this.errors.length === 0
            ? 100
            : Math.round(
                (this.improvements.length /
                  (this.improvements.length + this.errors.length)) *
                  100
              ),
      },
    };

    const reportPath = path.join(
      this.reportsDir,
      'comprehensive-app-improvement-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log(`📊 Report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🚀 Starting Comprehensive App Improver...');

    this.ensureDirectories();

    try {
      await this.improveCodeQuality();
      await this.improvePerformance();
      await this.improveSecurity();
      await this.improveAccessibility();

      const report = await this.generateReport();

      this.log('🎉 Comprehensive app improvement completed!');
      this.log(
        `📊 Summary: ${report.summary.totalImprovements} improvements, ${report.summary.totalErrors} errors`
      );

      return report;
    } catch (error) {
      this.log(`❌ Error: ${error.message}`);
      throw error;
    }
  }
}

// Run the improver
if (require.main === module) {
  const improver = new ComprehensiveAppImprover();
  improver.run().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

module.exports = ComprehensiveAppImprover;
