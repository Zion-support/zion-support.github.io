import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';

export default [
  {ignores: ['dist', 'node_modules', '.next', 'out']},
  {
<<<<<<< HEAD
    files: ['**/*.{js,jsx,ts,tsx}'],
=======
    ignores: [
      'admin-api-disabled/**',
      'ai-customer-support-disabled/**',
      'ai-data-visualization-disabled/**',
      'ai-sales-automation-disabled/**',
      'ai-workflow-automation-disabled/**',
      'api-disabled/**',
      'api.disabled/**',
      'api-backup/**',
      'components-disabled/**',
      'components.disabled/**',
      'automation_backup/**',
      'backup*/**',
      '*-disabled/**',
      '*.disabled/**',
      '*.broken',
      '*.backup',
      'temp-files/**',
      'cache/**',
      'dist/**',
      'node_modules/**',
      'analyze-*.js',
      'check-*.js',
      'clean-*.js',
      'fix-*.js',
      '*.cjs',
      '*.js.broken',
      'jest.setup.js'
    ],
  },
  // Base JavaScript configuration
  {
    files: ['**/*.{js,jsx}'],
>>>>>>> cursor/delete-records-30ea
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react': react,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { 
          allowConstantExport: true, 
          allowExportNames: ['metadata', 'useAnalytics', 'AnalyticsProvider'] 
        },
      ],
      '@typescript-eslint/no-unused-vars': ['error', { 
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'off',
      'no-unused-vars': ['error', { 
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      }],
      'prefer-const': 'error',
      'no-var': 'error',
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}', '**/setupTests.{js,ts,jsx,tsx}', '**/jest.setup.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];