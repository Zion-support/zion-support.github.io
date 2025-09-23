// Flat ESLint config for ESLint v9+
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  // Global ignores for this monorepo-like workspace
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      '**/.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'automation/**',
      'backups/**',
      'backup/**',
      'backup-merge-conflicts/**',
      'backup-problematic-files/**',
      'api/**',
      'server/**',
      'public/**',
      'netlify/**',
      'app_backup/**',
      'app-disabled/**',
      'app-minimal/**',
      'apps.backup/**',
      'components.disabled/**',
      'components.disabled_full/**',
      'pages-disabled/**',
      'pages.bak/**',
      'pages_backup_before_cleanup/**',
      'pages.broken/**',
      'pages.corrupted*',
      'recovered-branches/**',
      'temp_backup/**',
      'temp_exclude/**',
      'tests.disabled/**',
      'ts_files_backup/**',
      'zion-os/**',
      'zion-os.*',
      'zion-website/**',
      'zion-ai-assistant/**',
      'zion_academy/**',
      'services/**',
      'solutions/**',
      'solutions.disabled/**',
      'src_backup/**',
      'src_backup_temp/**',
      'src/**/*.backup/**',
      'src/**/*.bak/**',
      'src/**/*.disabled/**',
      'styles_backup/**',
      'workflow_backups/**',
      'tests/**',
      'test/**',
      'test_build/**',
      '**/jest.setup.*',
      '**/*.min.js'
    ]
  },
  js.configs.recommended,
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
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      // TypeScript handles undefined types/identifiers; avoid false positives
      'no-undef': 'off'
    },
    settings: { react: { version: 'detect' } }
  }
];