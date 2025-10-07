#!/usr/bin/env node

/**
 * Comprehensive Code Improvements Script
 * Automatically applies various code quality and performance improvements
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting comprehensive code improvements...\n');

// 1. Code Quality Improvements
console.log('📝 Applying code quality improvements...');

// Update package.json with better scripts
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add new scripts for better development experience
packageJson.scripts = {
  ...packageJson.scripts,
  'dev:analyze': 'NODE_OPTIONS="--max-old-space-size=4096" vite --host --open --mode analyze',
  'build:analyze': 'vite build --mode analyze && npx vite-bundle-analyzer dist/stats.html',
  'test:unit': 'jest --testPathPattern=src --passWithNoTests',
  'test:integration': 'jest --testPathPattern=app --passWithNoTests',
  'lint:fix-all': 'eslint . --ext .ts,.tsx,.js,.jsx --fix --max-warnings 0',
  'type-check:strict': 'tsc --noEmit --strict --noImplicitAny --noImplicitReturns',
  'format:all': 'prettier --write "**/*.{ts,tsx,js,jsx,json,css,md}"',
  'clean:all': 'rm -rf dist node_modules/.vite .next .turbo',
  'precommit': 'npm run type-check && npm run lint && npm run test:unit',
  'postinstall': 'npm run type-check',
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('✅ Updated package.json with improved scripts');

// 2. Create TypeScript configuration improvements
console.log('🔧 Improving TypeScript configuration...');

const tsConfigPath = path.join(__dirname, '..', 'tsconfig.json');
let tsConfig = {};

if (fs.existsSync(tsConfigPath)) {
  tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
}

// Enhanced TypeScript configuration
const improvedTsConfig = {
  ...tsConfig,
  compilerOptions: {
    ...tsConfig.compilerOptions,
    strict: true,
    noImplicitAny: true,
    noImplicitReturns: true,
    noImplicitThis: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    exactOptionalPropertyTypes: true,
    noImplicitOverride: true,
    noPropertyAccessFromIndexSignature: true,
    noUncheckedIndexedAccess: true,
    allowUnusedLabels: false,
    allowUnreachableCode: false,
    skipLibCheck: true,
    forceConsistentCasingInFileNames: true,
    resolveJsonModule: true,
    isolatedModules: true,
    verbatimModuleSyntax: true,
  },
  include: [
    'src/**/*',
    'app/**/*',
    '**/*.ts',
    '**/*.tsx',
  ],
  exclude: [
    'node_modules',
    'dist',
    'build',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.spec.ts',
    '**/*.spec.tsx',
  ],
};

fs.writeFileSync(tsConfigPath, JSON.stringify(improvedTsConfig, null, 2));
console.log('✅ Enhanced TypeScript configuration');

// 3. Create ESLint configuration improvements
console.log('🔍 Improving ESLint configuration...');

const eslintConfig = {
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/prefer-const': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
};

fs.writeFileSync(path.join(__dirname, '..', '.eslintrc.json'), JSON.stringify(eslintConfig, null, 2));
console.log('✅ Enhanced ESLint configuration');

// 4. Create Prettier configuration
console.log('💅 Setting up Prettier configuration...');

const prettierConfig = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  jsxSingleQuote: true,
  quoteProps: 'as-needed',
  bracketSameLine: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: false,
};

fs.writeFileSync(path.join(__dirname, '..', '.prettierrc.json'), JSON.stringify(prettierConfig, null, 2));
console.log('✅ Created Prettier configuration');

// 5. Create Vite configuration improvements
console.log('⚡ Improving Vite configuration...');

const viteConfigPath = path.join(__dirname, '..', 'vite.config.ts');
let viteConfig = '';

if (fs.existsSync(viteConfigPath)) {
  viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
}

// Enhanced Vite configuration
const improvedViteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    port: 3000,
    host: true,
    open: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
  },
});`;

fs.writeFileSync(viteConfigPath, improvedViteConfig);
console.log('✅ Enhanced Vite configuration');

// 6. Create performance monitoring setup
console.log('📊 Setting up performance monitoring...');

const performanceSetup = `// Performance monitoring setup
import { analytics } from './src/utils/analytics';
import { errorHandler } from './src/utils/errorHandler';
import performanceOptimizer from './src/utils/performanceOptimizer';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);
  
  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();
  
  // Monitor long tasks
  performanceOptimizer.monitorLongTasks((entries) => {
    entries.forEach((entry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
    });
  });
  
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
}

export { analytics, errorHandler, performanceOptimizer };`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'monitoring.ts'), performanceSetup);
console.log('✅ Created performance monitoring setup');

// 7. Create development utilities
console.log('🛠️ Creating development utilities...');

const devUtils = `/**
 * Development Utilities
 * Tools and helpers for development and debugging
 */

export const devLog = (message: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(\`[DEV] \${message}\`, data || '');
  }
};

export const devError = (message: string, error?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(\`[DEV ERROR] \${message}\`, error || '');
  }
};

export const devWarn = (message: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(\`[DEV WARN] \${message}\`, data || '');
  }
};

export const measurePerformance = (name: string, fn: () => void) => {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(\`[PERF] \${name}: \${(end - start).toFixed(2)}ms\`);
  } else {
    fn();
  }
};

export const createDebugger = (componentName: string) => ({
  log: (message: string, data?: any) => devLog(\`[\${componentName}] \${message}\`, data),
  error: (message: string, error?: any) => devError(\`[\${componentName}] \${message}\`, error),
  warn: (message: string, data?: any) => devWarn(\`[\${componentName}] \${message}\`, data),
  measure: (name: string, fn: () => void) => measurePerformance(\`[\${componentName}] \${name}\`, fn),
});

export default {
  devLog,
  devError,
  devWarn,
  measurePerformance,
  createDebugger,
};`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'utils', 'devUtils.ts'), devUtils);
console.log('✅ Created development utilities');

// 8. Run final checks
console.log('🔍 Running final checks...');

try {
  // Type check
  console.log('Running TypeScript check...');
  execSync('npm run type-check', { stdio: 'inherit' });
  console.log('✅ TypeScript check passed');

  // Lint check
  console.log('Running ESLint check...');
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('✅ ESLint check passed');

  // Build check
  console.log('Running build check...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build check passed');

} catch (error) {
  console.error('❌ Some checks failed:', error.message);
  process.exit(1);
}

console.log('\n🎉 Comprehensive improvements completed successfully!');
console.log('\n📋 Summary of improvements:');
console.log('  ✅ Enhanced package.json scripts');
console.log('  ✅ Improved TypeScript configuration');
console.log('  ✅ Enhanced ESLint configuration');
console.log('  ✅ Added Prettier configuration');
console.log('  ✅ Improved Vite configuration');
console.log('  ✅ Created performance monitoring setup');
console.log('  ✅ Added development utilities');
console.log('  ✅ All checks passed');
console.log('\n🚀 Your codebase is now optimized and ready for production!');