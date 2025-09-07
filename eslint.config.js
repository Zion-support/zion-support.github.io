import js from '@eslint/js';'
import typescript from '@typescript-eslint/eslint-plugin';'
import typescriptParser from '@typescript-eslint/parser';'
import react from 'eslint-plugin-react';'
import reactHooks from 'eslint-plugin-react-hooks';'
import globals from 'globals';'

export default [
  js.configs.recommended,
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node
        }
        "jest": 'readonly','
        "describe": 'readonly','
        "it": 'readonly','
        "test": 'readonly','
        "expect": 'readonly','
        "beforeEach": 'readonly','
        "afterEach": 'readonly','
        "beforeAll": 'readonly','
        "afterAll": 'readonly''
      },
      "parser": typescriptParser,
      "parserOptions": {
        }
        "ecmaFeatures": {
          }
          "jsx": true
        }
      }
    },
    "plugins": {
      '@typescript-eslint': typescript,'
      'react': react,'
      'react-hooks': reactHooks'
    },
    "rules": {
      'no-unused-vars': 'off','
      '@typescript-eslint/no-unused-vars': ['warn', { "argsIgnorePattern": '^_' }],'
      '@typescript-eslint/no-explicit-any': 'warn','
      '@typescript-eslint/ban-ts-comment': 'off','
      'no-console': ['warn', { "allow": ['warn', 'error'] }],'
      'prefer-const': 'error','
      'no-debugger': 'warn','
      'react/react-in-jsx-scope': 'off','
      'react/prop-types': 'off','
      'react-hooks/rules-of-hooks': 'error','
      'react-hooks/exhaustive-deps': 'warn''
    },
    "settings": {
      }
      "react": {
        }
        "version": 'detect''
      }
    }
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'scripts/**',
      'automation/**',
      'automation_backup/**',
      'apps.backup/**',
      'backup-problematic-files/**',
      'backup-merge-conflicts/**',
      'corrupted_backup/**',
      'corrupted-files-backup/**',
      'src.disabled/**',
      'components.disabled/**',
      'components-disabled/**',
      'components.disabled_full/**',
      'pages.disabled/**',
      'pages_backup/**',
      'pages_backup_*/**',
      'pages_backup_conflict/**',
      'pages_backup_conflicts/**',
      'pages_minimal/**',
      'pages.broken/**',
      'pages.corrupted.*/**',
      'pages.disabled*/**',
      'pages.disabled_*/**',
      'pages.disabled_full/**',
      'pages.old/**',
      'pages_api.disabled/**',
      'pages_disabled/**',
      'pages.__backup/**',
      'pages._archive_corrupted/**',
      'pages._quarantine/**',
      'pages.bak/**',
      'pages.blog.disabled/**',
      'solutions.disabled/**',
      'src.corrupted/**',
      'src.pages.disabled/**',
      'src_backup/**',
      'temp-backup/**',
      'tests.disabled/**',
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
      'zion-ai-assistant/**',
      'zion-os.disabled/**',
      'api/**',
      'api-backup/**',
      'api-disabled/**',
      'api.disabled/**',
      'backup/**',
      'backups/**',
      'broken_files_backup/**',
      'cypress_backup/**',
      'data_backup/**',
      'deployment/**',
      'deployments/**',
      'dao/**',
      'e2e/**',
      'server/**',
      'temp_*/**',
      'test_build/**',
      'tests/**',
      '__tests__/**',
      'components/apps/extension/**',
      'lib.broken/**',
      'middleware/**',
      'netlify/**',
      'pm2-automation/**',
      'pm2-backups/**',
      'recovered-branches/**',
      'src.broken/**',
      'src_backup_temp/**',
      'test-next/**',
      'tools/**',
      'utils/**',
      '*.cjs',
      '*.mjs',
      'supabase/**',
      'ultimate-*.cjs',
      'advanced-*.js',
      'comprehensive-*.js',
      'enhanced-*.js',
      'fix-*.js',
      'merge-*.js',
      'run-*.js',
      'test-*.js',
      '*.test.js',
      '*.spec.js',
      'aggressive-*.js',
      'batch-*.js',
      'clean-*.js',
      'critical-*.js',
      'execute-*.js',
      'final-*.js',
      'health-*.js',
      'improve-*.js',
      'maintenance-*.js',
      'monitoring-*.js',
      'optimized-*.js',
      'performance-*.js',
      'resolve-*.js',
      'seo-*.js',
      'simple-*.js',
      'structural-*.js',
      'system-*.js',
      'ultimate-*.js',
      '*.js',
      'public/**',
      'services-broken.tsx',
      'services/**/*.ts',
      'vitest.config.ts',
      'playwright.config.ts',
      'setupTests.ts',
      'components/**',
      'data/**',
      'hooks/**',
      'lib/**',
      'middleware*',
      'next.config.ts',
      'cypress.config.ts',
      'jest.*',
      'fix_typescript_syntax_errors.jsx',
      'contracts.disabled/**',
      'data.disabled/**',
      'hooks.disabled/**',
      'lib.disabled/**',
      'lib_backup/**',
      'lint-target/**',
      'pages-backup/**',
      'pages-disabled/**',
      'pages-quarantine/**',
      'app/**'
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
];
