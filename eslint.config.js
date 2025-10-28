import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['next-env.d.ts', '**/*.d.ts', '.next/**/*'],
  },
  {
    files: ['**/*.test.*', '**/*.spec.*', 'jest.setup.*', 'jest.config.*'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        jest: 'readonly',
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        PerformanceObserver: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
  },
  {
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
];