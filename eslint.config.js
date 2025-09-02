module.exports = {
  extends: [
    'next/core-web-vitals',
  ],
  rules: {
    // Disable some rules that might be too strict for this project
    'no-unused-vars': 'warn',
    'no-explicit-any': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};