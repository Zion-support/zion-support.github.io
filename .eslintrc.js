module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    '@typescript-eslint/recommended',
  ],
  ignorePatterns: [
    '__tests__/**/*',
    '**/*.test.js',
    '**/*.test.jsx',
    '**/*.test.ts',
    '**/*.test.tsx'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': 'off',
    'react/no-unescaped-entities': 'warn',
    'no-undef': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off'
      }
    },
    {
      files: ['*.js', '*.jsx'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        }
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