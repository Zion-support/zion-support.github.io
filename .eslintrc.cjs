module.exports = {

  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended' ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn' { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unescaped-entities': 'off' },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'dist/',
    'api-backup/',
    'pages.disabled/',
    'backup-pages/',
    '.backup/',
    '.disabled/',
    'automation/backups/',
    'automation_backup/',
    'broken_files_backup/',
    'contracts/',
    'hardhat/' ] };
