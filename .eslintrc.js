module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    '@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/no-unescaped-entities': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn'
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'dist/',
    'src.disabled/',
    'components.disabled/',
    'pages.disabled/',
    '*.config.js',
    '*.config.cjs'
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  }
};
