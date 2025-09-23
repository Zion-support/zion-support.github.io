import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
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
      'temp_backup/**',
      'temp_exclude/**',
      'tests.disabled/**',
      'ts_files_backup/**',
      'pages.__backup/**',
      'pages._archive_corrupted/**',
      'pages._quarantine/**',
      'pages-disabled/**',
      'pages.bak/**',
      'pages_backup_before_cleanup/**',
      'pages.broken/**',
      'pages.corrupted*',
      'zion-os/**',
      'zion-website/**',
      'zion.app/**',
      'zion_academy/**',
      'supabase/**',
      'src/pages_backup/**',
      'src_backup/**',
      'src_backup_temp/**',
      'src/**/*.backup/**',
      'src/**/*.bak/**',
      'src/**/*.disabled/**',
      'src.broken/**',
      'src-corrupted/**',
      'src.corrupted/**',
      'src.disabled/**',
      'server/**',
      'types/**'
    ],
  },
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
    settings: { react: { version: 'detect' } },
    rules: {
      'no-unused-vars': 'off',
      'no-empty': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  }
];