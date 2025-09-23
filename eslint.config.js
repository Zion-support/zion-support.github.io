// Flat ESLint config for ESLint v9+
import eslintJs from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  eslintJs.configs.recommended,
  {
    files: ['app/**/*.{js,jsx,ts,tsx}', '**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { react: reactPlugin, 'react-hooks': reactHooks },
    rules: { 'react/react-in-jsx-scope': 'off' },
    settings: { react: { version: 'detect' } },
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
      'app/**/*.disabled/**',
      'automation/**',
      'apps/**',
      'apps.backup/**',
      'backup/**',
      'backups/**',
      'backup-merge-conflicts/**',
      'backup-problematic-files/**',
      'api/**',
      'app_backup/**',
      'app-disabled/**',
      'app-minimal/**',
      'components.disabled/**',
      'components.disabled_full/**',
      'pages-disabled/**',
      'pages.bak/**',
      'pages_backup_before_cleanup/**',
      'pages.broken/**',
      'pages.corrupted*',
      'recovered-branches/**',
      'server/**',
      'temp*/**',
      'tests.disabled/**',
      'ts_files_backup/**',
      'zion-os/**',
      'zion-website/**',
      'zion-ai-assistant/**',
    ],
  },
];