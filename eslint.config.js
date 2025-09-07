module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended'
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'prefer-const': 'warn'
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
};