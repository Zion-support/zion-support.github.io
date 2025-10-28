import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      'dist/**',
      '*.config.js',
      '*.config.mjs'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
        ...globals.jest,
        // Additional globals
        'process': 'readonly',
        'console': 'readonly',
        '__dirname': 'readonly',
        'clients': 'readonly',
        'NodeJS': 'readonly',
        'IntersectionObserverInit': 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-empty': 'warn',
      'react/no-unescaped-entities': 'warn',
      'react-refresh/only-export-components': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  // Configuration for test files
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}', '**/jest.setup.ts'],
    languageOptions: {
      globals: {
        ...globals.jest,
        'describe': 'readonly',
        'it': 'readonly',
        'test': 'readonly',
        'expect': 'readonly',
        'beforeEach': 'readonly',
        'afterEach': 'readonly',
        'beforeAll': 'readonly',
        'afterAll': 'readonly',
        'jest': 'readonly'
      }
    }
  },
  // Configuration for API files
  {
    files: ['**/api/**/*.{js,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
        'process': 'readonly'
      }
    }
  },
  // Configuration for scripts
  {
    files: ['**/scripts/**/*.{js,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
        'console': 'readonly',
        '__dirname': 'readonly',
        'process': 'readonly'
      }
    }
  },
  // Configuration for service worker
  {
    files: ['**/sw.js', '**/service-worker.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        'clients': 'readonly',
        'self': 'readonly'
      }
    }
  }
];