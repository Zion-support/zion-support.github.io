<<<<<<< HEAD
/* eslint-env node */
module.exports = {
<<<<<<< HEAD
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
=======
  extends: ['next/core-web-vitals'],
>>>>>>> origin/automation/changelog
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'off',
    'no-undef': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-explicit-any': 'warn'
  },
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  ignorePatterns: [
<<<<<<< HEAD
    'pages._archive_corrupted/**',
    'pages.disabled.full/**',
    'pages.disabled_auto/**',
    'pages_api.disabled/**',
    'pages_backup_conflict/**',
    'pages.blog.disabled/**',
    'pages.corrupted.*/**',
    'pages.broken/**',
    'pages.bak/**',
    'pages-quarantine/**',
    'pages-disabled/**',
    'pages.__backup/**',
    'temp_backup/**',
    'temp_broken_files/**',
    'temp_working/**',
    'tests.disabled/**',
    'lib_backup/**',
    'node_modules/**',
    '.next/**',
    'out/**',
    'dist/**',
    'build/**'
=======
    'node_modules/',
    '.next/',
    'out/',
    'build/',
    'dist/',
    '*.config.js',
    '*.config.ts',
    'scripts/',
    'automation/',
    'netlify/',
    'src/',
    'apps/'
>>>>>>> origin/automation/changelog
  ]
};
=======
export default { extends: [ 'next/core-web-vitals','next/typescript' ],parser: '@typescript-eslint/parser',parserOptions: { ecmaFeatures: { jsx: true },ecmaVersion: 12,sourceType: 'module' },plugins: ['react','@typescript-eslint'],rules: { "react-hooks/rules-of-hooks": "error","react-hooks/exhaustive-deps": "warn","no-unused-vars": "off","@typescript-eslint/no-unused-vars": "warn","no-console": "off","no-undef": "off" },env: { node: true,browser: true,es2021: true } };
>>>>>>> origin/automation-improvements
