import js from '@eslint/js';
<<<<<<< HEAD
import next from 'eslint-config-next';
=======
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-a8e3

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
<<<<<<< HEAD
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
=======
        ...globals.browser,
        ...globals.node,
        "jest": 'readonly',
        "describe": 'readonly',
        "it": 'readonly',
        "test": 'readonly',
        "expect": 'readonly',
        "beforeEach": 'readonly',
        "afterEach": 'readonly',
        "beforeAll": 'readonly',
        "afterAll": 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { "argsIgnorePattern": '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-console': ['warn', { "allow": ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-debugger': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    },
    settings: {
      "react": {
        "version": 'detect'
      }
    }
  },
  {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-a8e3
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'out/**',
      'coverage/**',
    ],
  },
];

