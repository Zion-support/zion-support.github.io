import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
      'out/**',
      '*.config.js',
      '*.config.ts',
      '*.config.mjs',
      'app-broken/**',
      'app-disabled/**',
      'add-missing-routes*.jsx',
      'aggressive-*.js',
      'aggressive-*.cjs',
      'batch-*.js',
      'cleanup-*.js',
      'cleanup-*.cjs',
      'comprehensive-*.js',
      'fix-*.js',
      'fix-*.cjs',
      '*.cjs',
      'create-*.js',
      'identify-*.js',
      'merge-*.js',
      'remove-*.js',
      'simple-*.js',
      'website-*.js',
      'resolve-*.js',
      'check-*.js',
      'clean-*.js',
      'analyze-*.js',
      '*.broken',
      '*.backup',
      'temp-*.js',
      'analyze-*.js',
      'check-*.js',
      'clean-*.js',
      'jest.setup.js'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        global: 'readonly',
        HTMLElement: 'readonly',
        Event: 'readonly',
        KeyboardEvent: 'readonly',
        MediaQueryListEvent: 'readonly',
        PerformanceObserver: 'readonly',
        PerformanceNavigationTiming: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLSelectElement: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        performance: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        fs: 'readonly'
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];