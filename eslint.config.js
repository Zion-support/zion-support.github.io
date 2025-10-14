import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'app-broken/**',
      'app-disabled/**',
      'dist/**',
      'node_modules/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      '*.cjs',
      'api/**',
      'scripts/**',
      'validate-jsx.js',
      'fix-lint-*.js',
      'fix-numeric-components.js'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        console: 'readonly',
        PerformanceObserver: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        jest: 'readonly',
        window: 'readonly',
        document: 'readonly',
        process: 'readonly',
        global: 'readonly',
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': ['error', { 
        "argsIgnorePattern": "^_", 
        "varsIgnorePattern": "^[A-Z]" 
      }],
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-undef': 'off', // TypeScript handles this
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-console': ['warn', { 'allow': ['warn', 'error'] }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['public/sw.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.serviceworker,
        self: 'readonly',
        caches: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        location: 'readonly',
        clients: 'readonly'
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'no-console': 'off'
    }
  },
  {
    files: ['jest.setup.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.jest,
        global: 'readonly',
        console: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly'
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-require-imports': 'off'
    }
  }
);
