// Flat ESLint config for ESLint v9+
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      '**/.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'app/components/**',
      'public/**',
      'automation/**',
      'apps.backup/**',
      '.temp_backup_components/**',
      'backup/**',
      'backups/**',
      'backup-merge-conflicts/**',
      'backup-problematic-files/**',
      'recovered-branches/**',
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
      'components.disabled/**',
      'components.disabled_full/**',
      'styles_backup/**',
      'services_backup/**',
      'server/**',
      'services/**',
      'solutions/**',
      'solutions.disabled/**',
      'supabase/**',
      'zion-os/**',
      'zion-website/**',
      'zion-ai-assistant/**',
      '**/*.min.js',
      '**/*.cjs',
      '*.config.js',
      '*.config.ts'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['app/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}', 'pages/**/*.{js,jsx,ts,tsx}', 'src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    settings: { react: { version: 'detect' } },
    rules: {
      'no-empty': 'off',
      'no-console': 'warn',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  }
];