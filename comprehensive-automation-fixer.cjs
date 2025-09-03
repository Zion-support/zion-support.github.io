#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveAutomationFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedCount = 0;
    this.errors = [];
  }

  async fixAllScripts() {
    console.log('🔧 Starting comprehensive automation script fixes...');

    try {
      const files = fs.readdirSync(this.automationDir);
      const cjsFiles = files.filter(file => file.endsWith(`.cjs`));

      for (const file of cjsFiles) {
        await this.fixScript(file);
      }

      console.log(`✅ Fixed ${this.fixedCount} scripts`);
    } catch (error) { 
      console.error(`Error fixing scripts: `, error.message);
     }
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async fixScript(filename) {
    const filePath = path.join(this.automationDir, filename);

    try {
      let content = fs.readFileSync(filePath, `utf8`);
      let originalContent = content;

      // Fix all common syntax errors;
      content = this.fixAllErrors(content);

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Fixed: ${filename}`);
        this.fixedCount++;
      }
    } catch (error) { 
      console.error(`❌ Error fixing ${filename }:`, error.message);
    }

    this.log(`✅ Fixed ${fixedCount} additional test files`);
    return fixedCount;
  }

  fixAllErrors(content) {
    // Fix double quotes in path.join;
    content = content.replace(
      /path\.join\([^)]*``([^']+)''[^)]*\)/g,
      (match, pathPart) => {
        return match.replace(```${pathPart}```, ``${pathPart}``);
      }
    );

    // Fix malformed path.join calls;
    content = content.replace(
      /path\.join\(([^,]+),\s*'([^']+)',\s*'([^']+)'\)/g,
      "path.join($1, '$2', '$3')
    );

    // Fix arrays with malformed path.join calls;
    content = content.replace(
      /const dirs = \[([^\]]*path\.join[^\]]*)\]/g,
      (match, arrayContent) => {
        // Replace path.join calls in arrays with proper string paths;
        const fixedContent = arrayContent.replace(
          /path\.join\([^)]+\)/g,
          pathJoinMatch => {
            // Extract the path parts and create a proper string;
            const parts = pathJoinMatch.match(/path\.join\(([^)]+)\)/);
            if (parts && parts[1]) {
              const pathParts = parts[1]
                .split(',')
                .map(p => p.trim().replace(/[']/g, '`));
              return ``${pathParts.join('/')}``;
            }
            return pathJoinMatch;
          }
        );
        return `const dirs = [${fixedContent}]`;
      }
    );

    // Fix template literal syntax errors;
    content = content.replace(
      /console\.log\(([^`]+)`([^`]+)`([^)]*)\)/g,
      `console.log(`$1$2$3`)'
    );

    // Fix missing quotes in string literals;
    content = content.replace(
      /([a-zA-Z_][a-zA-Z0-9_]*\/[a-zA-Z0-9_\/\-\.]+)/g,
      match => {
        if (
          !match.includes("'") &&
          !match.includes('') &&
          !match.includes('path.join') &&
          !match.includes('require') &&
          !match.includes('process.') &&
          !match.includes('__dirname`)
        ) {
          return ``${match}``;
        }
        return match;
      }
    }

    return results;
  }

  async runPerformanceOptimization() {
    const performanceIssues = [];
    const srcDir = path.join(this.projectRoot, 'src');

    if (fs.existsSync(srcDir)) {
      const files = this.getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);

      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');

          // Check for performance issues
          if (
            content.includes('document.querySelectorAll') &&
            !content.includes('useMemo')
          ) {
            performanceIssues.push({
              file,
              issue: 'Potential N+1 query problem - consider using useMemo',
            });
          }

          if (
            content.includes('useEffect') &&
            content.includes('[]') &&
            content.includes('fetch')
          ) {
            performanceIssues.push({
              file,
              issue: 'Potential infinite re-render - check dependencies'
            });
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    );

    // Fix malformed require statements;
    content = content.replace(
      /require\(([^)]*[^`,\s][^)]*)\)/g,
      (match, requirePath) => {
        if (!requirePath.includes("'") && !requirePath.includes('"`)) {
          return `require(`${requirePath}`)`;
        }
      }
    );

    // Fix console.log with emojis and template literals;
    content = content.replace(
      /console\.log\(([^`]+)`([^`]+)`([^)]*)\)/g,
      `console.log(`$1$2$3`)`
    );

    // Fix specific patterns that cause syntax errors;
    content = content.replace(
      /console\.log\(📊 Running performance monitoring at \$\{new Date\(\)\.toISOString\(\)\}/g,
      `console.log(`📊 Running performance monitoring at ${new Date().toISOString()}``
    );

    return content;
  }
}

// Run the fixer;
const fixer = new ComprehensiveAutomationFixer();
fixer;
  .fixAllScripts()
  .then(() => {
    console.log(`🎉 Comprehensive automation script fixing completed!');
  })
  .catch(error => {
    console.error('💥 Error: ', error);
    process.exit(1);
  });
fixer.run()
  .then(report => {
    console.log('✅ Comprehensive Automation Fixer completed successfully');
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ Comprehensive Automation Fixer failed: ', error.message);
    process.exit(1);
  });
