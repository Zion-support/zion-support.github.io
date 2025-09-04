
module.exports = {
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-undef': 'off', // TypeScript handles this
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/no-unescaped-entities': 'off',
    'no-console': 'warn'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    React: 'readonly',
    JSX: 'readonly'
  }
};
