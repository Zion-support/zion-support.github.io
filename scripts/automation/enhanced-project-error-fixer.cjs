
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');
;
class EnhancedProjectErrorFixer {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(;
      this.projectRoot',automation/logs/enhanced-error-fixer.log'';
    );

    );
    this.fixesApplied = [];
    this.errorsFound = [];
    this.startTime = Date.now();

    // Ensure logs directory exists;
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {;
      fs.mkdirSync(logsDir { recursive: true })}
  }

  }
;
  async run() {})}
  }
;
  async ensureDependencies() {;
    this.log('📦 Ensuring dependencies are installed...');

        this.log('Installing dependencies...');
        execSync('npm install' { cwd: this.projectRoot, stdio: 'inherit' });
        this.fixesApplied.push('INSTALLED_DEPENDENCIES')}

    const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
;
    if (fs.existsSync(tsConfigPath)) {;
      try {;
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'))};
;
        fs.writeFileSync(tsConfigPath, JSON.stringify(updatedConfig, null, 2));

        )}
    }
  }

    // Fix the .eslintrc.js file;
    const eslintConfigPath = path.join(this.projectRoot, '.eslintrc.js');
;
    if (fs.existsSync(eslintConfigPath)) {;
      try {const eslintConfig = `module.exports = {;
  extends: [''next/core-web-vitals'', ''next/typescript''],;
  rules: {@typescript-'eslint/no-unused-vars'': 'warn',@typescript-'eslint/no-explicit-any'': 'warn'',react/react-in-jsx-scope'': 'off'',react/prop-types'': 'off',no-console': 'warn'},;
  ignorePatterns: ['node_modules/', '.next/', 'out/', 'dist/']};`;
;
        fs.writeFileSync(eslintConfigPath, eslintConfig);

        )}
    }
  }

      const files = glob.sync(pattern { cwd: this.projectRoot });
;
      for (const file of files) {;
        const filePath = path.join(this.projectRoot, 'file);
;
        try {;
          let content = fs.readFileSync(filePath', 'utf8');
          let modified = false;
;
          // Fix common TypeScript issues;


              content = "import React from 'react';\n" + content;
              modified = true}
          }

          )}
      }
    }
  }
;
  async fixReactErrors() {;
    this.log('🔧 Fixing 'React/JSX' errors...');
;
    const patterns = ['src/**/*.jsx', 'src/**/*.tsx', 'pages/**/*.jsx', 'pages/**/*.tsx', 'components/**/*.jsx', 'components/**/*.tsx', '];
;
    for (const pattern of patterns) {;
      const files = glob.sync(pattern { cwd: this.projectRoot });
;
      for (const file of files) {;
        const filePath = path.join(this.projectRoot, 'file);
;
        try {;
          let content = fs.readFileSync(filePath', 'utf8');
          let modified = false;
;
          // Fix common React issues;


          );
;
          if (modified) {;
            fs.writeFileSync(filePath, content);
            this.fixesApplied.push(`FIXED_REACT: ${file}`)}

          )}
      }
    }
  }
;
  async fixImportExportIssues() {;
    this.log('🔧 Fixing 'import/export' issues...');
;
    const patterns = ['src/**/*.{js', 'jsx', 'ts', 'tsx}', 'pages/**/*.{js, 'jsx', 'ts', 'tsx}', 'components/**/*.{js', 'jsx', 'ts', 'tsx}', '];
;
    for (const pattern of patterns) {;
      const files = glob.sync(pattern { cwd: this.projectRoot });
;
      for (const file of files) {;
        const filePath = path.join(this.projectRoot, 'file);
;
        try {;
          let content = fs.readFileSync(filePath', 'utf8');
          let modified = false}
              return match}
          );

          )}
      }
    }
  }

        );
        return (;
          content.includes('<') &&;
          content.includes('>') &&;
          content.includes('return');
        )});
;
    for (const file of jsFilesWithJSX) {;
      try {;
        const oldPath = path.join(this.projectRoot, 'file);

        );
;
        if (!fs.existsSync(newPath)) {;
          fs.renameSync(oldPath, newPath);
          this.fixesApplied.push(`RENAMED_JS_TO_JSX: ${file}`);this.log(`✅ Renamed ${file} to ${file.replace('.js', '.jsx')}`)}
      } catch (error) {  this.log(`Warning: Could not rename ${file  }: ${error.message}`, `WARN`)}
    }
  }

        });
        this.log('✅ Prettier formatting applied');
        this.fixesApplied.push(`PRETTIER_FORMATTING_APPLIED`)} catch (error) {  this.log(`Prettier issues: ${error.message  }`, `WARN`)}
    } catch (error) {  this.log(`Error in comprehensive fixes: ${error.message  }`, `ERROR`)}
  }
;
  async generateReport() {;
    const endTime = Date.now();
    const duration = endTime - this.startTime;
;
    const report = {;
      timestamp: new Date().toISOString(),duration: `${duration}ms`,;
      fixesApplied: this.fixesApplied,;
      errorsFound: this.errorsFound,;
      summary: {;
        totalFixes: this.fixesApplied.length,;
        totalErrors: this.errorsFound.length,;
        success: this.errorsFound.length === 0,},};
;
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));

      this.errorsFound.forEach((error, index) => {this.log(`  ${index + 1}. ${error.type}: ${error.message}`)})}
  }
}

// Run the error fixer;
const errorFixer = new EnhancedProjectErrorFixer();
errorFixer.run().catch(console.error);
