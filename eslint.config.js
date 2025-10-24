import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';

export default [
  // Global ignores
  {
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
      'components.disabled_full/**',
      'backup/**',
      'backup-merge-conflicts/**',
      'backup-pages/**',
      'backup-problematic/**',
      'backup-problematic-files/**',
      'corrupted-src-backup/**',
      'clean-build/**',
      'ci-cd-reports/**',
      'apps.backup/**',
      '.next/**',
      'out/**',
      '*.min.js',
      '*.min.css',
      'chunk-*.js',
      'comprehensive-*.js',
      'comprehensive_*.js',
      'automation-runner.js',
      'check_*.js',
      'cleanup-*.js',
      'close-*.js',
      'code-quality-*.js',
      'commit-and-*.js',
      'contracts/**'
    ]
  },
  // Base JavaScript configuration
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn'
    }
  },
  // TypeScript configuration
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': [
        'warn',
<<<<<<< HEAD
        {
          allowConstantExport: true, 
          allowExportNames: ['metadata', 'viewport', 'useAnalytics', 'AnalyticsProvider'] 
        }
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
    files: ['**/AnalyticsProvider.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off'
    }
  },
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}', '**/setupTests.{js,ts,jsx,tsx}', '**/jest.setup.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
=======
        { allowConstantExport: true }
      ],
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
<<<<<<< HEAD
    },
  },
<<<<<<< HEAD
];
>>>>>>> 29d49925dca88a534c75f2643000c6a1ecf43fea
=======
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-console': 'off',
      'no-unused-vars': 'off'
    }
  }
];
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
=======
];
>>>>>>> 1c3bcb5bf864
