// Flat ESLint config for ESLint v9+
// Keeps rules minimal and limits scope to project TS/TSX files
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  // Base JS recommendations (applied to TS as well)
  {
    ...js.configs.recommended,
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
      'out/**',
      'coverage/**',
      'public/**',
      '__tests__/**',
      'tests/**',
      'cypress/**',
      'e2e/**',
      '**/*.{test,spec}.{js,jsx,ts,tsx}',
      // noisy/unrelated top-level dirs in this monorepo-like workspace
      'apps/**',
      'automation/**',
      'infra/**',
      'monitoring/**',
      'netlify/**',
      'offworld/**',
      'prisma/**',
      'simulator/**',
      'stories/**',
      'supabase/**',
      'token/**',
      'universe/**',
      'vision/**',
      'wiki/**',
      'zion/**',
      'zion_*/**',
      'zion-*/**',
      // backups/disabled/temp
      '**/*.backup/**',
      '**/*.disabled/**',
      '**/*.temp/**',
      '**/*.old/**',
      'backup*/**',
      'temp_*/**',
      'recovered-branches/**',
    ],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        JSX: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      // general
      'no-unused-vars': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      // ts
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      // react
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
];

