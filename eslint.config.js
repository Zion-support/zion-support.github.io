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
      'app/components-disabled/**',
      'app/components.disabled/**',
      'app/config-disabled/**',
      'app/contexts-disabled/**',
      'app/pages-disabled/**',
      'app/*-disabled/**',
      'app/*.disabled/**',
      'app/main-disabled.tsx',
      'app/root-layout-disabled.tsx',
      'app/service-template-disabled.tsx',
      'components-disabled/**',
      'components.disabled/**',
      'automation_backup/**',
      'backup*/**',
      '**/*-disabled/**',
      '**/*.disabled/**',
      '**/components-disabled/**',
      '**/pages-disabled/**',
      '**/contexts-disabled/**',
      '**/config-disabled/**',
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
        { 
          allowConstantExport: true,
          allowExportNames: ['metadata', 'generateMetadata', 'generateStaticParams', 'useAnalytics', 'AnalyticsContext', 'createMock', 'mockFunction']
        }
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-console': 'off',
      'no-unused-vars': 'off'
    }
  }
];
