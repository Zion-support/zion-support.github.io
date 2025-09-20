module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
  },
  ignorePatterns: [
    'zion-os/',
    'zion-website/',
    'zion.app/',
    'zion_academy/',
    'recovered/',
    'pages*/',
    'temp*/',
    '*.backup.*',
    '*.disabled/',
    '*.broken/',
    '*.corrupted/',
    '*.disabled',
    'dist/',
    'node_modules/',
  ],
};