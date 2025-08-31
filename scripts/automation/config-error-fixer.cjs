#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class ConfigErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.ensureDirectories();
    this.setupLogging();
  }

  ensureDirectories() {
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {
    this.logFile = path.join(this.logsDir, 'config-error-fixer.log');
    this.errorFile = path.join(this.logsDir, 'config-error-fixer-error.log');
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type}] ${message}`;
    
    console.log(logMessage);
    
    fs.appendFileSync(this.logFile, logMessage + '\n');
    
    if (type === 'ERROR') {
      fs.appendFileSync(this.errorFile, logMessage + '\n');
    }
  }

  async checkConfigurationFiles() {
    this.log('Checking configuration files...');
    
    const configs = [
      '.eslintrc.cjs',
      'tsconfig.json',
      'package.json',
      'vite.config.ts',
      'tailwind.config.js'
    ];
    
    const results = [];
    
    for (const config of configs) {
      const configPath = path.join(this.projectRoot, config);
      if (fs.existsSync(configPath)) {
        try {
          const content = fs.readFileSync(configPath, 'utf8');
          const isValid = this.validateConfig(config, content);
          results.push({ file: config, valid: isValid, issues: [] });
        } catch (error) {
          results.push({ file: config, valid: false, issues: [error.message] });
        }
      } else {
        results.push({ file: config, valid: false, issues: ['File not found'] });
      }
    }
    
    return results;
  }

  validateConfig(configName, content) {
    try {
      switch (configName) {
        case '.eslintrc.cjs':
          return this.validateESLintConfig(content);
        case 'tsconfig.json':
          return this.validateTSConfig(content);
        case 'package.json':
          return this.validatePackageJson(content);
        default:
          return true;
      }
    } catch (error) {
      return false;
    }
  }

  validateESLintConfig(content) {
    return content.includes('@typescript-eslint') && 
           content.includes('plugin:react') &&
           content.includes('@typescript-eslint/parser');
  }

  validateTSConfig(content) {
    const config = JSON.parse(content);
    return config.compilerOptions && 
           config.compilerOptions.target &&
           config.compilerOptions.module;
  }

  validatePackageJson(content) {
    const pkg = JSON.parse(content);
    return pkg.name && pkg.version && pkg.scripts;
  }

  async fixConfigurationIssues(configResults) {
    this.log('Fixing configuration issues...');
    
    let fixedCount = 0;
    
    for (const result of configResults) {
      if (!result.valid) {
        try {
          if (await this.fixConfigFile(result.file)) {
            fixedCount++;
          }
        } catch (error) {
          this.log(`Failed to fix ${result.file}: ${error.message}`, 'ERROR');
        }
      }
    }
    
    this.log(`Fixed ${fixedCount} configuration files`);
    return fixedCount;
  }

  async fixConfigFile(configName) {
    switch (configName) {
      case '.eslintrc.cjs':
        return await this.fixESLintConfig();
      case 'tsconfig.json':
        return await this.fixTSConfig();
      default:
        return false;
    }
  }

  async fixESLintConfig() {
    const configPath = path.join(this.projectRoot, '.eslintrc.cjs');
    const defaultConfig = `module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jsx-a11y',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};`;

    fs.writeFileSync(configPath, defaultConfig);
    this.log('ESLint configuration fixed');
    return true;
  }

  async fixTSConfig() {
    const configPath = path.join(this.projectRoot, 'tsconfig.json');
    const defaultConfig = {
      compilerOptions: {
        target: "ES2020",
        useDefineForClassFields: true,
        lib: ["ES2020", "DOM", "DOM.Iterable"],
        module: "ESNext",
        skipLibCheck: true,
        moduleResolution: "bundler",
        allowImportingTsExtensions: true,
        resolveJsonModule: true,
        isolatedModules: true,
        noEmit: true,
        jsx: "react-jsx",
        strict: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
        noFallthroughCasesInSwitch: true
      },
      include: ["src"],
      references: [{ path: "./tsconfig.node.json" }]
    };

    fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
    this.log('TypeScript configuration fixed');
    return true;
  }

  async generateReport(configResults, fixedCount) {
    const report = {
      timestamp: new Date().toISOString(),
      totalConfigs: configResults.length,
      validConfigs: configResults.filter(r => r.valid).length,
      invalidConfigs: configResults.filter(r => !r.valid).length,
      fixedConfigs: fixedCount,
      results: configResults
    };
    
    const reportPath = path.join(this.reportsDir, `config-health-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report saved to ${reportPath}`);
    return report;
  }

  startContinuousMonitoring() {
    this.log('Starting continuous configuration monitoring...');
    
    cron.schedule('0 12 * * *', async () => {
      this.log('Running scheduled configuration health check...');
      try {
        const results = await this.checkConfigurationFiles();
        const fixedCount = await this.fixConfigurationIssues(results);
        await this.generateReport(results, fixedCount);
      } catch (error) {
        this.log(`Scheduled check failed: ${error.message}`, 'ERROR');
      }
    });
    
    this.log('Continuous monitoring started (daily at noon)');
  }

  async start() {
    this.log('Configuration Error Fixer started');
    
    const results = await this.checkConfigurationFiles();
    const fixedCount = await this.fixConfigurationIssues(results);
    await this.generateReport(results, fixedCount);
    
    this.startContinuousMonitoring();
    
    setInterval(() => {
      this.log('Configuration error fixer heartbeat...');
    }, 60000);
  }
}

if (require.main === module) {
  const fixer = new ConfigErrorFixer();
  
  process.on('SIGINT', () => {
    fixer.log('Shutting down gracefully...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    fixer.log('Shutting down gracefully...');
    process.exit(0);
  });
  
  fixer.start().catch(error => {
    fixer.log(`Fatal error: ${error.message}`, 'ERROR');
    process.exit(1);
  });
}

module.exports = ConfigErrorFixer;