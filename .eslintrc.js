<<<<<<< HEAD
module.exports = { extends: [ 'next/core-web-vitals','eslint:recommended','@typescript-eslint/recommended',],parser: '@typescript-eslint/parser',plugins: ['@typescript-eslint'],rules: { '@typescript-eslint/no-unused-vars': 'warn','@typescript-eslint/no-explicit-any': 'warn','no-console': 'off','react/no-unescaped-entities': 'warn','no-undef': 'off',},overrides: [{ files: ['*.ts','*.tsx'],rules: { 'no-undef': 'off' } }],env: { browser: true,node: true,es6: true,dom: true },globals: { KeyboardEvent: 'readonly',HTMLElement: 'readonly',HTMLButtonElement: 'readonly',HTMLAnchorElement: 'readonly',MutationObserver: 'readonly',RequestInit: 'readonly',AbortController: 'readonly',fs: 'readonly',CodeQualityChecker: 'readonly',},};
=======
module.exports = {
<<<<<<< HEAD
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-useless-escape': 'warn'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
=======
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'no-unused-vars': 'warn',
    '@next/next/no-img-element': 'warn'
>>>>>>> main
  }
};
>>>>>>> main
