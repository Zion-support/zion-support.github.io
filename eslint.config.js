import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

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
      'clean-build/**',
      'ci-cd-reports/**',
      'apps.backup/**',
      '.next/**',
      'out/**',
      '*.min.js',
      '*.min.css',
      'chunk-*.js',
      'corrupted-src-backup/**',
      'corrupted_files_backup_2/**',
      'corrupted_files_backup/**',
      'corrupted_backup/**',
      'corrupted-services-backup/**',
      'corrupted-src-backup/**',
      'automation/**',
      'contracts/**',
      'deployments/**',
      'e2e/**',
      'factories/**',
      'middleware/**',
      'services/**',
      'comprehensive-*.js',
      'comprehensive_*.js',
      'automation-runner.js',
      'careful-jsx-fix.js',
      'code-quality-improvements.js',
      'commit-and-push.js',
      'config/**',
      'add-missing-routes.js',
      'api/onsite-request.js',
      'blog/**',
      'components/AppErrorBoundary.tsx',
      'components/PerformanceDashboard.tsx',
      'check_*.js',
      'cleanup-*.js',
      'close-*.js',
      'create-*.js',
      'create_*.js',
      'critical-*.js',
      'dao/**',
      'data/**',
      'data_backup/**',
      'debug-*.js',
      'disabled-api/**',
      'enhanced-*.js',
      'execute-*.js',
      'extension/**',
      'fetch-*.js',
      'final-*.js',
      'final_*.js',
      'fix-*.js',
      'fix_*.js',
      '*.js',
      '*.ts',
      'hooks/**',
      'lib/**',
      'netlify/**',
      'lint-target/**',
      'main.tsx',
      'jest.setup.jsx',
      'fix-variable-names.jsx',
      '.storybook/**',
      'App_*.tsx',
      'Enhanced*.tsx',
      'SidebarNavigation.tsx',
      '__tests__/**',
      'page_template.tsx',
      'pages_minimal/**',
      'public/**',
      'scripts/**',
      'src.corrupted/**',
      'test-component.tsx',
      'types/**',
      'utils/**'
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
      'no-console': 'off'
    }
  },
  // TypeScript configuration
  {
    files: ['app/**/*.{ts,tsx}', 'App.tsx'],
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
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
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
]
