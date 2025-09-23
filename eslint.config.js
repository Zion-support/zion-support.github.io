// Flat ESLint config for ESLint v9+
import eslintJs from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'src/**',
      'coverage/**',
      'automation/**',
      'backups/**',
      'backup/**',
      'backup-merge-conflicts/**',
      'backup-problematic-files/**',
      'api/**',
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
      'server/**',
      'temp_backup/**',
      'temp_exclude/**',
      'tests.disabled/**',
      'ts_files_backup/**',
      'zion-os/**',
      'zion-os.*',
    ],
  },
  eslintJs.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
    settings: { react: { version: 'detect' } },
  },
];