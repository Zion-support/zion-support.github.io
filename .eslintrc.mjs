export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended' ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true },
    ecmaVersion: 2021,
    sourceType: 'module' },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint' ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'off',
    'no-console': 'warn',
    'no-undef': 'off' },
  settings: {
    react: {
      version: 'detect' } },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'dist/',
    'build/',
    'src/pages/services/',
    'src/pages/solutions/',
    'src/pages/talent/',
    'src/pages/terms.tsx',
    'src/pages/webinars.tsx',
    'src/pages/zion-hire-ai.tsx',
    'src/pages/services.tsx',
    'src/pages/solutions.tsx',
    'src/routes/',
    'src/services/',
    'src/store/',
    'src/test/',
    'src/types/',
    'src/utils/',
    '*.config.js',
    '*.config.ts',
    '*.config.cjs',
    '*.config.mjs' ] };