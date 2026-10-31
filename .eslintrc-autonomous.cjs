'use strict';

/**
 * Flat configuration for the existing Custom ESLint workflow (-c path).
 * The filename stays stable; ESLint 10 requires a flat array even for .cjs.
 * All enabled checks are syntax based, so a TypeScript project is unnecessary.
 * This avoids constructing the entire generated project merely to lint a file.
 */
const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const nextPlugin = require('@next/eslint-plugin-next');
const globals = require('globals');
const autonomous = require('./eslint-rules/autonomous.cjs');

module.exports = [
  {
    ignores: [
      '**/node_modules/**', '**/.next/**', '**/out/**', '**/dist/**', '**/build/**',
      '**/coverage/**', '**/.hermes/**', 'automation/reports/**',
      '**/*.config.js', '**/*.config.cjs', 'scripts/automation/**',
      'automation/**/*.cjs', 'eslint-rules/**',
    ],
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node, ...globals.es2022 },
    },
    plugins: {
      '@typescript-eslint': typescript,
      '@next/next': nextPlugin,
      'zion-autonomous': autonomous,
    },
    settings: { next: { rootDir: __dirname } },
    rules: {
      ...typescript.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      // Preserve the established eslint.config.mjs policy for this static site.
      // The upstream route rule also throws on literal '(' in generated slugs.
      '@next/next/no-html-link-for-pages': 'off',
      'no-eval': 'error',
      'no-new-func': 'error',
      'zion-autonomous/no-inner-html': 'error',
      'zion-autonomous/require-async-try-catch': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: false, ignoreRestArgs: false }],
      'require-await': 'warn',
      // This maintained TS rule reports both unused imports and variables.
      // No undeclared unused-imports dependency or duplicate diagnostics.
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', {
        vars: 'all', args: 'after-used', argsIgnorePattern: '^_',
      }],
      camelcase: ['error', { properties: 'always' }],
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'variable', format: ['camelCase', 'UPPER_CASE'], leadingUnderscore: 'allow' },
        { selector: 'function', format: ['camelCase'] },
        { selector: 'parameter', format: ['camelCase'] },
        { selector: 'property', format: ['camelCase', 'snake_case', 'UPPER_CASE'] },
        { selector: 'memberLike', format: ['camelCase'] },
        { selector: 'typeLike', format: ['PascalCase'] },
      ],
      complexity: ['warn', 20],
      curly: ['error', 'all'],
      'no-magic-numbers': ['warn', {
        ignoreArrayIndexes: true,
        ignore: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 24, 48, 60, 100, 1024, 86400],
      }],
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: { sourceType: 'commonjs' },
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },
  {
    files: ['test/**/*.ts', '**/*.test.ts', '**/*.spec.ts'],
    rules: { 'no-console': 'off', '@typescript-eslint/no-explicit-any': 'off' },
  },
];
