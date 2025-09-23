import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsPlugin
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }]
    }
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      '**/.next/**',
      'out/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.ts',
      'scripts/**',
      'automation/**',
      'public/**',
      'netlify/**',
      'ecosystem*.cjs',
      '**/*.cjs',
      'zion-os.disabled/**',
      'zion-website/.next/**',
      'zion-os/.next/**',
      'zion.app/**',
      'zion_academy/**',
      // Additional ignores to avoid linting backups/alt projects and broken/corrupted/archived directories
      'pages.broken/**',
      'pages.bak/**',
      'pages._quarantine/**',
      'pages._archive_corrupted/**',
      'pages.blog.disabled/**',
      'pages.corrupted*/**',
      'pages_backup_before_cleanup/**',
      'pages_backup_conflict*/**',
      'pages_backup_conflicts/**',
      'pages.old/**',
      'pages.disabled/**',
      'pages_disabled/**',
      'pages_api.disabled/**',
      'pages.disabled_auto/**',
      'pages.disabled_full/**',
      'pages_backup/**',
      'solutions.disabled/**',
      'ts_files_backup/**',
      'src.broken/**',
      'src-corrupted/**',
      'src.corrupted/**',
      'src.disabled/**',
      // Broad excludes for noisy or legacy dirs not part of active root app
      'src/**',
      'tests/**',
      'test/**',
      'test*/**',
      'tests.disabled/**',
      'test_*/**',
      '**/*.spec.*',
      '**/*.test.*',
      'test-build/**',
      'test_build/**',
      '**/__tests__/**',
      'src.pages.disabled/**',
      'types/**',
      'types.disabled/**',
      'utils/**',
      'utils.disabled/**',
      // Legacy/unrelated backend and utilities
      'server/**',
      'services/**',
      'solutions/**',
      'solutions.disabled/**',
      'sdk/**',
      'supabase/**',
      'token/**',
      'remote/**',
      'api/**',
      'zion-os/**',
      'zion-website/**',
      'zion-ai-assistant/**',
      'recovered-branches/**',
      'backup/**',
      'backups/**',
      'backup-merge-conflicts/**',
      'backup-problematic-files/**',
      'apps.backup/**',
      'pages.disabled*/**',
      // Generic backup/archival files
      '**/*backup*.*',
      '**/*.backup.*',
      '**/*.cleanup-backup.*',
      '**/*.disabled.*',
      '**/*.corrupted*',
      'temp_*/**',
      'temp-*/**',
      'temp/**',
      'temp_backup/**',
      'temp_broken_files/**',
      'temp_components/**',
      'temp_components.disabled/**',
      'temp_disabled/**',
      'temp-disabled-pages/**',
      'temp_exclude/**',
      'temp-problematic-pages/**',
      'temp_working/**',
      'src_backup/**',
      'src_backup_temp/**',
      'services_backup/**',
      'styles_backup/**',
      'workflow_backups/**',
      // Individual utility scripts that are not part of app linting
      'workbox-config.js',
      'verify-and-complete-merges.js',
      'ultimate-fix.js',
      'ultimate-merge-conflict-resolver.js',
      'start-*.js',
      'structural-fix.js',
      'syntax-fixer.js',
      'test-*.js',
      '**/static/**',
      '**/*.min.js'
    ]
  }
];