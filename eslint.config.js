// Flat ESLint config for ESLint v9+
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsPlugin
    },
    rules: {
      'no-unused-vars': 'off',
      'no-empty': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
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
      'coverage/**',
      'public/**',
      'netlify/**',
      '**/*.config.*',
      'scripts/**',
      '.scripts/**',
      'automation/**',
      'apps/**',
      'apps.backup/**',
      'backup/**',
      'backups/**',
      'backup-merge-conflicts/**',
      'backup-problematic-files/**',
      'corrupted*/**',
      'recovered-branches/**',
      'ts_files_backup/**',
      'pages_backup/**',
      'pages-disabled/**',
      'pages.blog.disabled/**',
      'pages.__backup/**',
      'pages._archive_corrupted/**',
      'pages._quarantine/**',
      'services/**',
      'services_backup/**',
      'solutions/**',
      'solutions.disabled/**',
      'server/**',
      'supabase/**',
      'zion-os/**',
      'zion-website/**',
      'zion-ai-assistant/**',
      'zion.app/**',
      'zion_academy/**',
      'temp_*',
      'temp-*/**',
      'temp/**',
      'temp-backup/**',
      'temp_backup/**',
      'temp_backup_build/**',
      'temp_backup_runtime_fix/**',
      'temp_broken_files/**',
      'temp_components/**',
      'temp_components.disabled/**',
      'temp-disabled-pages/**',
      'temp_exclude/**',
      'temp-problematic-pages/**',
      'temp_working/**',
      'src.broken/**',
      'src-corrupted/**',
      'src.corrupted/**',
      'src.disabled/**',
      'src/pages_backup/**',
      'src_backup/**',
      'src_backup_temp/**',
      'types/**',
      'types.disabled/**',
      'utils/**',
      'utils.disabled/**',
      'workflow_backups/**',
      'tests/**',
      'test/**',
      'test_build/**',
      '**/jest.setup.*',
      'test-*.js',
      '**/static/**',
      '**/*.min.js'
    ]
  }
];