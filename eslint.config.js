import { fileURLToPath } from 'url';
import { dirname } from 'path';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  js.configs.recommended
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
  allConfig: js.configs.all
});

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn'
    }
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'scripts/**',
      'automation/**',
      'automation_backup/**',
      'apps.backup/**',
      'backup-problematic-files/**',
      'backup-merge-conflicts/**',
      'corrupted_backup/**',
      'corrupted-files-backup/**',
      'src.disabled/**',
      'components.disabled/**',
      'pages.disabled/**',
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
      'api-backup/**',
      'api-disabled/**',
      'api.disabled/**',
      'backup/**',
      'backups/**',
      'broken_files_backup/**',
      'cypress_backup/**',
      'data_backup/**',
      'deployment/**',
      'deployments/**',
      'dao/**',
      'e2e/**',
      'server/**',
      'temp_*/**',
      'test_build/**',
      'tests/**',
      '__tests__/**',
      'components/apps/extension/**',
      'lib.broken/**',
      'middleware/**',
      'netlify/**',
      'pm2-automation/**',
      'pm2-backups/**',
      'recovered-branches/**',
      'src.broken/**',
      'src_backup_temp/**',
      'test-next/**',
      'tools/**',
      'utils/**',
      '*.cjs',
      '*.mjs',
      'supabase/**',
      'ultimate-*.cjs',
      'advanced-*.js',
      'comprehensive-*.js',
      'enhanced-*.js',
      'fix-*.js',
      'merge-*.js',
      'run-*.js',
      'test-*.js',
      '*.test.js',
      '*.spec.js',
      'aggressive-*.js',
      'batch-*.js',
      'clean-*.js',
      'critical-*.js',
      'execute-*.js',
      'final-*.js',
      'health-*.js',
      'improve-*.js',
      'maintenance-*.js',
      'monitoring-*.js',
      'optimized-*.js',
      'performance-*.js',
      'resolve-*.js',
      'seo-*.js',
      'simple-*.js',
      'structural-*.js',
      'system-*.js',
      'ultimate-*.js',
      '.next/**out/**dist/**build/**node_modules/**.eslintrc.js*.config.js*.config.cjs*.config.mjsscripts/**automation/**backup-merge-conflicts/****/*.backup.***/*.old.***/*.disabled.***/*.broken.***/*.corrupted.***/*.temp.***/*.test.***/*.spec.***/test-utils.***/jest.setup.***/jest.config.***/vite.config.***/postcss.config.***/playwright.config.***/cypress.config.***/bundle-analyzer.config.***/csp-config.***/ecosystem.config.***/Dockerfile***/docker-compose*',
      '**/pm2-***/fix-***/clean-***/batch-***/merge-***/resolve-***/systematic-***/ultimate-***/structural-***/quick-***/comprehensive-***/enhanced-***/complete-***/app-optimizer.***/improve-***/find-***/git-ops.***/pr-manager.***/merge-strategy.***/resolve-and-merge-***/merge-all-***/merge-prs.***/pr-***/batch_***/check_***/commit-***/complete_***/deploy-***/fix_***/git_***/health-***/quick-*',
      '**/run-***/start-***/test-***/ultimate-***/utils/next-***/utils/performance-***/utils/rate-***/utils/input-***/utils/csrf-***/utils/dynamic-***/utils/env-***/utils/messageChannel***/utils/sanitize***/utils/seo-***/utils/testing-***/utils/accessibility-***/utils/api.***/utils/monitoring.***/utils/performance.***/utils/seo-optimizer.***/types/empty.***/types/index.***/types/service-***/supabase/****/src/main.***/src/data/****/src/utils/****/src/components/****/src/App.***/components/ui/****/components/layout/****/components/performance/**',
      '**/hooks/****/lib/****/api-backup/****/deployment/****/deployments/****/docs/****/e2e/****/content/****/data/****/config/****/__tests__/****/automation-reports/****/error-prevention-reports/****/performance-reports/****/link-reports/****/monitoring/****/pm2-automation/****/automation/logs/****/automation/backup/****/backup-merge-conflicts/****/temp_backup/****/temp_broken_components/****/temp_working/****/temp_*/****/ai-optimization-backups/****/ai-analysis-reports/****/optimization-reports/****/public/reports/****/pages_backup*/****/pages.*/****/pages-*/****/pages_disabled*/**',
      '**/pages.disabled*/****/pages.broken*/****/pages.corrupted*/****/pages.old*/****/pages._*/****/pages.__*/****/backup-pages/****/src.pages.disabled/****/lib_backup*/****/src_backup*/****/corrupted-files-backup*/****/performance-reports*/****/log-analysis-reports*/****/link-reports*/****/lint-target*/****/monitoring*/****/pm2-automation*/****/automation/logs*/****/automation/backup*/****/performance-*.json**/performance-*.js**/performance-*.cjs**/performance-*.sh**/performance-*.html**/performance-*.md**/performance-*.txt'
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error'
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn'
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        Blob: 'readonly',
        CustomEvent: 'readonly',
        Intl: 'readonly',
        performance: 'readonly',
        caches: 'readonly',
        Notification: 'readonly',
        ServiceWorker: 'readonly',
        ServiceWorkerRegistration: 'readonly',
        PushSubscription: 'readonly',
        NotificationPermission: 'readonly',
        process: 'readonly',
        global: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
    files: ['app/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      '*.js',
      'src_backup_temp/**',
      'temp-backup/**',
      'temp_exclude/**',
      'temp_components/**',
      'temp_broken_files/**',
      'temp_working/**',
      'zion-os.disabled/**',
      'zion-ai-assistant/**',
      'tools/**',
      'utils/**',
      'recovered-branches/**',
      'pages._archive_corrupted/**',
      'pages.bak/**',
      'pages.disabled_full/**',
      'pages_api.disabled/**',
      'pages_backup_conflicts/**',
      'pages_disabled/**',
      'src.pages.disabled/**',
      'vite.config-backup.ts'
    ]
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}', 'app/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        afterAll: 'readonly'
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin
      // '@next/next': nextPlugin, // Not needed for Vite project
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-unused-vars': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error'
      'no-debugger': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: ['**/*.js'],
        vi: 'readonly',
        Deno: 'readonly',
        React: 'readonly',
        require: 'readonly',
        module: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLParagraphElement: 'readonly',
        HTMLHeadingElement: 'readonly',
        HTMLAnchorElement: 'readonly',
        HTMLElement: 'readonly',
        MessageEvent: 'readonly',
        RequestInit: 'readonly',
        AbortController: 'readonly',
        Performance: 'readonly',
        PerformanceNavigationTiming: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'readonly'
      },
      parserOptions: {
        ecmaVersion: 'latest'
        sourceType: 'module'
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  }
  {
    files: ['**/*.cjs']
    languageOptions: {
      sourceType: 'commonjs'
      globals: {
    },
    rules: {
      'no-console': 'off'
    }
  }
      'no-console': 'off'
    }
  }
];
        // Node.js globals
        process: 'readonly'
        console: 'readonly'
        require: 'readonly'
        module: 'readonly'
        exports: 'readonly'
        __dirname: 'readonly'
        __filename: 'readonly'
        global: 'readonly'
        Buffer: 'readonly'
        setTimeout: 'readonly'
        clearTimeout: 'readonly'
        setInterval: 'readonly'
        clearInterval: 'readonly'
        setImmediate: 'readonly'
        clearImmediate: 'readonly'
      }
    }
  }
  {
    ignores: [
      // Node/build outputs
      '.next/**out/**dist/**build/**node_modules/**',
      // Public assets/scripts

      // Root-level noisy files
      '*.config.js*.config.cjs*.config.mjs*.backup.**.old.**.disabled.**.broken.**.corrupted.**.temp.*'
    ]
  }
],
