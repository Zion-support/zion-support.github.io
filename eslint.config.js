import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'out/**',
      'coverage/**',
      'public/**',
      'e2e/**',
      'cypress*/**',
      'automation/**',
      'scripts/**',
      'api.disabled/**',
      'api.disabled.temp/**',
      'backup/**',
      'pages_backup**/**',
      'pages_backup_conflict**/**',
      'pages_backup_conflicts**/**',
      'pages.broken/**',
      'pages.corrupted.*/**',
      'components-disabled/**',
      'components.disabled*/**',
      '**/*.backup.*',
      '**/*.bak.*',
      '**/*.orig.*',
      '**/*.tmp.*',
      '**/*.disabled.*',
      '**/*.corrupted.*'
    ]
  },
  {
    files: [
      'pages/**/*.{js,jsx,ts,tsx}',
      'app/**/*.{js,jsx,ts,tsx}',
      'components/**/*.{js,jsx,ts,tsx}',
      'lib/**/*.{js,jsx,ts,tsx}'
    ],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2021,
      sourceType: 'module'
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off'
    }
  }
];
