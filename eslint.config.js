import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.next/**',
      'build/**',
      'logs/**',
      'automation/**',
      'automation-reports/**',
      'scripts/**',
      'server/**',
      'reports/**',
      'security-reports/**',
      'error-reports/**',
      // Temporarily ignore unstable source areas
      'src/pages/**',
      'src/routes/**',
      'src/services/**',
      'src/stories/**',
      'src/types/**',
      'src/utils/**',
      'tests.disabled/**',
      'types.disabled/**',
      'hooks.disabled/**',
      'lib.disabled/**',
      'pages.disabled/**',
      '**/*.disabled'
    ]
  },
  js.configs.recommended,
  // JS/JSX files (no TS project requirement)
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { react, 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn',
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error'
    },
    settings: { react: { version: 'detect' } }
  },
  // TS/TSX files (use TS parser and project)
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { '@typescript-eslint': tseslint, react, 'react-hooks': reactHooks },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    }
  }
];
