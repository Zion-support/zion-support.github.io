import js from '@eslint/js';
import next from 'eslint-config-next';

export default [
  // Include Next.js recommended flat config
  ...next,
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        PerformanceObserver: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'prefer-const': 'warn',
    },
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'out/**',
      'coverage/**',
    ],
  },
];

