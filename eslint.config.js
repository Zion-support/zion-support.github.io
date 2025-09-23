// Minimal ESLint flat config for ESLint v9
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      '**/.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'public/**',
      // Backups and non-app content
      'automation/**',
      'apps.backup/**',
      '.temp_backup_components/**',
      'backup/**',
      'backups/**',
      'backup-merge-conflicts/**',
      'backup-problematic-files/**',
      'recovered-branches/**',
      'src_backup/**',
      'src_backup_temp/**',
      'ts_files_backup/**',
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
      'pages.disabled/**',
      'pages.bak/**',
      'pages_backup/**',
      'pages-backup/**',
      'pages.blog.disabled/**',
      'pages.__backup/**',
      'pages._archive_corrupted/**',
      'pages._quarantine/**',
      // Other projects or servers in repo
      'server/**',
      'services/**',
      'solutions/**',
      'solutions.disabled/**',
      'supabase/**',
      'zion-os/**',
      'zion-website/**',
      'zion-ai-assistant/**'
    ]
  },
  js.configs.recommended,
  {
    files: ['pages/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    settings: { react: { version: 'detect' } },
    rules: {
      'no-empty': 'off',
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  }
];

