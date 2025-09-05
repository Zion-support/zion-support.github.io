module.exports = {
  "extends": ['next/core-web-vitals',
    '"eslint": recommended',
    '@typescript-eslint/recommended',
  ],
<<<<<<< HEAD:.eslintrc.cjs
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_" }
    ],
    "react/no-unescaped-entities": "off"
  }
};
=======
  "parser": '@typescript-eslint/parser',
  "plugins": ['@typescript-eslint'],
  "rules": {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': 'off',
    'react/no-unescaped-entities': 'warn',
    'no-undef': 'off'},
  "overrides": [{
      files: ['*.ts', '*.tsx'],
      "rules": {
        'no-undef': 'off'}},
  ],
  "env": {
    browser: true,
    "node": true,
    "es6": true,
    "dom": true},
  "globals": {
    KeyboardEvent: 'readonly',
    "HTMLElement": 'readonly',
    "HTMLButtonElement": 'readonly',
    "HTMLAnchorElement": 'readonly',
    "MutationObserver": 'readonly',
    "RequestInit": 'readonly',
    "AbortController": 'readonly',
    "fs": 'readonly',
    "CodeQualityChecker": 'readonly'}};
module.exports = { extends: [ 'next/core-web-vitals','eslint:recommended','@typescript-eslint/recommended',],parser: '@typescript-eslint/parser',plugins: ['@typescript-eslint'],rules: { '@typescript-eslint/no-unused-vars': 'warn','@typescript-eslint/no-explicit-any': 'warn','no-console': 'off','react/no-unescaped-entities': 'warn','no-undef': 'off',},overrides: [{ files: ['*.ts','*.tsx'],rules: { 'no-undef': 'off' } }],env: { browser: true,node: true,es6: true,dom: true },globals: { KeyboardEvent: 'readonly',HTMLElement: 'readonly',HTMLButtonElement: 'readonly',HTMLAnchorElement: 'readonly',MutationObserver: 'readonly',RequestInit: 'readonly',AbortController: 'readonly',fs: 'readonly',CodeQualityChecker: 'readonly',},};
>>>>>>> main:.eslintrc.js
