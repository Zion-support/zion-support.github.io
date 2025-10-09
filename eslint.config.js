import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Base JavaScript configuration
  {
    files: ['**/*.{js,jsx}'],
    ignores: [
      '.storybook/**',
      '__tests__/**',
      'admin-api-disabled/**',
      'api-disabled/**',
      'api.disabled/**',
      'api-backup/**',
      'accessibility-improvements.js',
      'advanced-app-improvements.js',
      'analyze-missing-pages.js',
      'analyze-website-comprehensive.js',
      '*.broken',
      '*.temp',
      'backup/**',
      'backup-*/**',
      'corrupted*/**',
      'disabled*/**',
      '*_disabled/**'
    ],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
  // TypeScript configuration
  {
    files: ['**/*.{ts,tsx}'],
    ignores: [
      '.storybook/**',
      '__tests__/**',
      'admin-api-disabled/**',
      'api-disabled/**',
      'api.disabled/**',
      'api-backup/**',
      'accessibility-improvements.js',
      'advanced-app-improvements.js',
      'analyze-missing-pages.js',
      'analyze-website-comprehensive.js',
      '*.broken',
      '*.temp',
      'backup/**',
      'backup-*/**',
      'corrupted*/**',
      'disabled*/**',
      '*_disabled/**'
    ],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'no-console': 'warn',
    },
  },
];
