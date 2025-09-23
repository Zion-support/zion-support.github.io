import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  // Global ignores for this workspace
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
      'temp*/**',
      'temp_*/**',
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
      'pages.__backup/**',
      'pages._archive_corrupted/**',
      'pages._quarantine/**',
      'pages-disabled/**',
      'pages.bak/**',
      'pages*/**',
      'pages_backup_before_cleanup/**',
      'pages-backup/**',
      'pages.broken/**',
      'pages.corrupted*',
      'src/**',
      'src.pages.disabled/**',
      'src_backup/**',
      'src_backup_temp/**',
      'src.broken/**',
      'src-corrupted/**',
      'src.corrupted/**',
      'src/pages_backup/**',
      'src.disabled/**',
      'src/**/*.backup/**',
      'src/**/*.bak/**',
      'src/**/*.disabled/**',
      'src/data/**',
      'src/types/**',
      'src/routes/**',
      'ts_files_backup/**',
      'types/**',
      'types.disabled/**',
      'utils/**',
      'utils.disabled/**',
      'server/**',
      'services/**',
      'services_backup/**',
      'styles_backup/**',
      'workflow_backups/**',
      'zion-os/**',
      'zion-website/**',
      'zion-ai-assistant/**',
      'zion-os.disabled/**',
      'zion-website/.next/**',
      'zion-os/.next/**',
      '**/jest.setup.*',
      '**/static/**',
      '**/*.min.js',
      'tests/**',
      'test/**',
      'test_build/**',
      'test-*.js',
      '**/*.backup.*',
      '**/*.cleanup-backup.*',
      '**/*.disabled/**',
      '**/*.disabled*',
      '**/*.bak/**'
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