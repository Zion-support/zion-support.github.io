module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    '@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': 'off',
    'react/no-unescaped-entities': 'warn',
    'no-undef': 'off',
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'dist/',
    'build/',
    '*.config.js',
    '*.config.ts',
    '__tests__/**',
    '**/*.test.*',
    '**/*.spec.*',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off'
      }
    },
    {
      files: ['*.js', '*.jsx'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
      rules: {
        'no-undef': 'off'
      }
    }
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    dom: true
  },
  globals: {
    KeyboardEvent: 'readonly',
    HTMLElement: 'readonly',
    HTMLButtonElement: 'readonly',
    HTMLAnchorElement: 'readonly',
    MutationObserver: 'readonly',
    RequestInit: 'readonly',
    AbortController: 'readonly',
    fs: 'readonly',
    CodeQualityChecker: 'readonly',
  },
};