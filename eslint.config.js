import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
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
      'coverage/**',
      'public/**',
      'automation/**',
      'apps.backup/**',
      '.temp_backup_components/**',
      'backup/**',
      'backups/**',
      'backup-merge-conflicts/**',
      'backup-problematic-files/**',
      'recovered-branches/**',
      'temp*/**',
      'temp_*/**',
      'temp-*/**',
      'ts_files_backup/**',
      'src_backup*/**',
      'pages.disabled/**',
      'pages.bak/**',
      'components.disabled/**',
      'components.disabled_full/**',
      'server/**',
      'services/**',
      'solutions/**',
      'solutions.disabled/**',
      'supabase/**',
      'zion-os/**',
      'zion-website/**',
      'zion-ai-assistant/**',
      // Skip currently conflicted area
      'app/**'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: [
      'app/**/*.{js,jsx,ts,tsx}',
      'components/**/*.{js,jsx,ts,tsx}',
      'pages/**/*.{js,jsx,ts,tsx}',
      'src/**/*.{js,jsx,ts,tsx}'
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: { react, 'react-hooks': reactHooks },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn'
    }
  }
];