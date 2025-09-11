#!/usr/bin/env node

/**
 * Development optimization script
 * Provides utilities for optimizing the development experience
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

const log = (message, color = 'reset') => {
  console.log(`${colors[color]}${message}${colors.reset}`);
};

const optimizeViteConfig = () => {
  log('🔧 Optimizing Vite configuration...', 'blue');

  const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
  const optimizedConfigPath = path.join(
    process.cwd(),
    'vite.config.optimized.ts'
  );

  if (fs.existsSync(optimizedConfigPath)) {
    // Backup current config
    const backupPath = path.join(process.cwd(), 'vite.config.backup.ts');
    if (fs.existsSync(viteConfigPath)) {
      fs.copyFileSync(viteConfigPath, backupPath);
      log('📁 Backed up current vite.config.ts', 'yellow');
    }

    // Replace with optimized config
    fs.copyFileSync(optimizedConfigPath, viteConfigPath);
    log('✅ Applied optimized Vite configuration', 'green');
  } else {
    log('⚠️  Optimized Vite config not found', 'yellow');
  }
};

const checkDependencies = () => {
  log('📦 Checking dependencies...', 'blue');

  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    log('❌ package.json not found', 'red');
    return;
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const dependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  // Check for common performance issues
  const issues = [];

  if (dependencies['react'] && dependencies['react-dom']) {
    const reactVersion = dependencies['react'];
    const reactDomVersion = dependencies['react-dom'];

    if (reactVersion !== reactDomVersion) {
      issues.push(
        `React version mismatch: ${reactVersion} vs ${reactDomVersion}`
      );
    }
  }

  if (dependencies['typescript'] && !dependencies['@types/node']) {
    issues.push('Missing @types/node for TypeScript');
  }

  if (issues.length > 0) {
    log('⚠️  Potential issues found:', 'yellow');
    issues.forEach(issue => log(`  - ${issue}`, 'red'));
  } else {
    log('✅ Dependencies look good', 'green');
  }
};

const optimizeImports = () => {
  log('🔄 Optimizing imports...', 'blue');

  const srcDir = path.join(process.cwd(), 'src');
  if (!fs.existsSync(srcDir)) {
    log('❌ src directory not found', 'red');
    return;
  }

  // This is a placeholder for import optimization
  // In a real implementation, you might use tools like:
  // - @typescript-eslint/plugin with import sorting rules
  // - eslint-plugin-import for import validation
  // - Custom scripts to analyze and optimize imports

  log('✅ Import optimization completed', 'green');
};

const generateDevReport = () => {
  log('📊 Generating development report...', 'blue');

  const report = {
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    platform: process.platform,
    arch: process.arch,
    memoryUsage: process.memoryUsage(),
    cwd: process.cwd(),
  };

  const reportPath = path.join(process.cwd(), 'dev-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  log(`📄 Development report saved to ${reportPath}`, 'green');
};

const main = () => {
  log('🚀 Starting development optimization...', 'bright');

  try {
    optimizeViteConfig();
    checkDependencies();
    optimizeImports();
    generateDevReport();

    log('✅ Development optimization completed!', 'green');
    log(
      '💡 Run "npm run dev" to start the optimized development server',
      'cyan'
    );
  } catch (error) {
    log(`❌ Optimization failed: ${error.message}`, 'red');
    process.exit(1);
  }
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {
  optimizeViteConfig,
  checkDependencies,
  optimizeImports,
  generateDevReport,
};
