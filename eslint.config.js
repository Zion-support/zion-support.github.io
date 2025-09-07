<<<<<<< HEAD
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-unescaped-entities': 'off',
      'no-console': 'warn',
      'prefer-template': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
      'out/**',
      '*.config.js',
      '*.config.mjs',
      '*.config.cjs',
      'types/**',
      'apps.backup/**',
      'netlify/**',
      'supabase/**',
      'cypress/**',
      'docs/**',
      'content/**',
      'data/**',
      'dao/**',
      'blog/**',
      'api/**',
      'components/**',
      'pages/**',
      'src/**',
      'utils/**',
      'zion-ai-assistant/**',
      'zion-os/**',
      'zion_academy/**',
    ],
  },
];
=======
module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    '@typescript-eslint/recommended'
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'prefer-const': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn'
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: ['node_modules/', '.next/', 'out/', 'dist/']
};
>>>>>>> cursor/automate-test-improve-and-merge-code-6af4
