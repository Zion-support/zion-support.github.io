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
      'app/**',
      'api/**',
      'utils/**',
      'components/**',
      'blog/**',
      'automation/**',
      'corrupted-src-backup/**',
      'contracts/**',
      'config/**',
      'automation-runner.js',
      'careful-jsx-fix.js',
      'check_*.js',
      'cleanup-*.js',
      'close-*.js',
      'code-quality-improvements.js',
      'commit-and-push.js',
      'comprehensive-*.js',
      'comprehensive_*.js',
      'data/**',
      'data_backup/**',
      'disabled-api/**',
      'dao/**',
      'extension/**',
      'create-*.js',
      'create_*.js',
      'critical-fix.js',
      'debug-*.js',
      'enhanced-*.js',
      'execute-*.js',
      'fetch-*.js',
      'final-*.js',
      'final_*.js',
      'fix-*.js',
      'fix_*.js',
      'App_minimal.tsx',
      'App_test.tsx',
      'SidebarNavigation.tsx',
      'add-missing-routes.js',
      'advanced-app-improvements.js',
      'fix-variable-names.jsx',
      'focused-*.js',
      'git-operations.js',
      'github-*.js',
      'hooks/**',
      'identify_*.js',
      'improve-*.js',
      'improvements-*.js',
      'jest.setup.*',
      'latest-*.js',
      'lib/**',
      'lint-target/**',
      'maintenance-*.js',
      'merge-*.js',
      'merge_*.js',
      'middleware*',
      'missing-*.js',
      'monitoring*.js',
      'netlify/**',
      'improve_codebase.js',
      'next-env.d.ts',
      'next.config.*',
      'optimized-build.js',
      'page_template.tsx',
      'pages_minimal/**',
      'performance-optimizer.js',
      'performance.config.ts',
      'public/**',
      'push-changes.js',
      'quick-*.js',
      'remove-*.js',
      'resolve-*.js',
      'restore-*.js',
      'run-*.js',
      'scripts/**',
      'security-*.ts',
      'security-*.js',
      'seo-*.js',
      'services/**',
      'simple-*.js',
      'src.corrupted/**',
      'src/**',
      'security.config.ts',
      'sync-*.js',
      'tailwind.config.ts',
      'targeted-*.js',
      'test-component.tsx',
      'types/**',
      'ultimate-*.js',
      'verify-*.js',
      'vite-env.d.ts',
      'vite.config.ts',
      'website-audit.js',
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
      'chunk-*.js'
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
];
