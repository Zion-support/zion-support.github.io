import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
<<<<<<< HEAD
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
=======
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
// import nextPlugin from '@next/eslint-plugin-next'; // Not needed for Vite project
import globals from 'globals';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
<<<<<<< HEAD
  allConfig: js.configs.all,
});

export default [
  ...compat.extends('next/core-web-vitals'),
  {
<<<<<<< HEAD
    rules: {
      'react/no-unescaped-entities': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': 'warn'
=======
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
=======
  allConfig: js.configs.all
});

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn'
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
    }
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
<<<<<<< HEAD
=======
      'build/**',
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'automation/**',
<<<<<<< HEAD
      'backup-problematic-files/**',
      'tests/**',
      '*.test.js',
      '*.test.ts',
      '*.test.tsx',
      '*.spec.js',
      '*.spec.ts',
      '*.spec.tsx',
      'src.corrupted/**',
      'src.pages.disabled/**',
      'src_backup/**',
      'src_backup_temp/**',
      'temp-backup/**',
      'temp_exclude/**',
      'temp_broken_files/**',
      'temp_components/**',
      'temp_conflicted_files/**',
      'tests.disabled/**',
      'zion-os.disabled/**',
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
      'ultimate-*.js',
      'ultimate-*.cjs',
      'ultimate-*.json',
      'syntax-*.js',
      'syntax-*.json',
      'structural-*.js',
      'test-*.js',
      'test-*.cjs',
      'test_build/**',
      'tools/**',
      'types/**',
      'utils/**',
      'zion-ai-assistant/**',
      'start-*.js',
      'start-*.sh',
      'stop-*.sh',
      'system-monitor.cjs',
      'supabase/**',
      'styles/**',
      'tailwind.config.js',
      'tsconfig.json',
      'vite.config.js',
      'vite.config.ts',
      'vitest.config.ts',
      'yarn.lock',
      'package-lock.json',
      'recovered-branches/**',
      'resolve-*.js',
      'resolve-*.cjs',
      'restore-*.js',
      'run-*.js',
      'run-*.cjs',
      'scripts/**',
      'security-*.cjs',
      'selective-*.js',
      'seo-*.js',
      'seo-*.cjs',
      'server/**',
      'services-broken.tsx',
      'services/**',
      'setupTests.ts',
      'simple-*.js',
      'simple-*.cjs',
      'solutions.disabled/**',
      'src.broken/**',
      'pages.disabled_full/**',
      'pages.old/**',
      'pages_api.disabled/**',
      'pages_backup/**',
      'pages_backup_before_cleanup/**',
      'pages_backup_conflict/**',
      'pages_backup_conflicts/**',
      'pages_disabled/**',
      'pages_minimal/**',
      'pm2-automation/**',
      'providers/**',
      'public/**',
      'quick-*.cjs',
      'rebuild-*.cjs',
      'performance-*.cjs',
      'performance-*.js',
      'playwright.config.ts',
      'pr-manager.cjs',
      'project-improvements.cjs',
      'pages.bak/**',
      'pages.blog.disabled/**',
      'pages.broken/**',
      'pages.corrupted.*/**',
      'pages.disabled.full/**',
      'pages.disabled/**',
      'pages.disabled_auto/**',
      'fix-*.js',
      'fix-*.cjs',
      'fix-*.mjs',
      'git-*.js',
      'git-*.cjs',
      'github-*.js',
      'health-*.js',
      'hooks.disabled/**',
      'hooks/**',
      'improve-*.cjs',
      'improve-*.js',
      'jest.*',
      'lib.broken/**',
      'lib.disabled/**',
      'lib/**',
      'lib_backup/**',
      'lint-target/**',
      'maintenance-*.js',
      'master-*.cjs',
      'mcp-*.js',
      'merge-*.js',
      'merge-*.cjs',
      'middleware.*',
      'monitoring-*.js',
      'netlify/**',
      'next.config.*',
      'optimize-*.js',
      'pages-backup/**',
      'pages-disabled/**',
      'pages-quarantine/**',
                  'pages.__backup/**',
                  'pages._archive_corrupted/**',
                  'pages._quarantine/**',
                  'data/**',
                  'data_backup/**',
                  'deployments/**',
                  'e2e/**',
                  'ecosystem.*.cjs',
                  'enhanced-*.cjs',
                  'execute-*.cjs',
                  'execute-*.js',
                  'final-*.cjs',
                  'final-*.js',
                  'fix_*.js',
                  'fix_*.ts',
                  'middleware/**',
                  'optimized-*.js',
                  'components/**',
                  'comprehensive-*.cjs',
                  'comprehensive-*.js',
                  'contracts.disabled/**',
                  'corrupted_backup/**',
                  'create-*.cjs',
                  'critical-*.js',
                  'csp-*.js',
                  'cypress/**',
                  'cypress_backup/**',
                  'dao/**',
                  'data.disabled/**',
                  'debug-*.js',
                  'deployment/**',
                  '__tests__/**',
                  'accessibility-*.cjs',
                  'advanced-*.cjs',
                  'advanced-*.js',
                  'aggressive-*.js',
                  'analyze-*.js',
                  'api-backup/**',
                  'api-documentation.tsx',
                  'api.tsx',
                  'api/**',
                  'app-enhancement-*.cjs',
                  'app-improvement-*.cjs',
                  'app-monitor.cjs',
                  'apps.backup/**',
                  'apps/**',
                  'automated-*.cjs',
                  'automation-runner.js',
                  'automation.tsx',
                  'automation_backup/**',
                  'backup-merge-conflicts/**',
                  'basic-test.js',
                  'batch-*.cjs',
                  'blockchain-solutions.tsx',
                  'blog/**',
                  'browserstack.config.ts',
                  'build-*.js',
                  'case-studies.tsx',
                  'check-and-merge-prs.js',
                  'clean-*.cjs',
                  'clean-*.js',
                  'cleanup-and-fix.cjs',
                  'code-quality-*.cjs',
                  'code-quality-*.js',
                  'commit-and-push.js',
                  'complete-*.cjs',
                  'complete-*.js',
                  'component-library.tsx',
                  'components.disabled/**',
                  'components.disabled_full/**',
                  'cypress.config.ts'
=======
<<<<<<< HEAD
      'backup-problematic-files/**',
=======
      'automation_backup/**',
      'apps.backup/**',
      'backup-problematic-files/**',
      'backup-merge-conflicts/**',
      'corrupted_backup/**',
      'corrupted-files-backup/**',
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
      'src.disabled/**',
      'components.disabled/**',
      'pages.disabled/**',
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
<<<<<<< HEAD
      'api/**',
=======
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
      'api-backup/**',
      'api-disabled/**',
      'api.disabled/**',
      'backup/**',
      'backups/**',
      'broken_files_backup/**',
<<<<<<< HEAD
      'corrupted-files-backup/**',
      'cypress_backup/**',
      'data_backup/**',
      'deployment/**',
=======
      'cypress_backup/**',
      'data_backup/**',
      'deployment/**',
      'deployments/**',
      'dao/**',
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
      'e2e/**',
      'server/**',
      'temp_*/**',
      'test_build/**',
      'tests/**',
      '__tests__/**',
<<<<<<< HEAD
      'types/**',
=======
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
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
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
<<<<<<< HEAD
      '*.js'
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
=======
      '*.js',
      'src_backup_temp/**',
      'temp-backup/**',
      'temp_exclude/**',
      'temp_components/**',
      'temp_broken_files/**',
      'temp_working/**',
      'zion-os.disabled/**',
      'zion-ai-assistant/**',
      'tools/**',
      'utils/**',
      'recovered-branches/**',
      'pages._archive_corrupted/**',
      'pages.bak/**',
      'pages.disabled_full/**',
      'pages_api.disabled/**',
      'pages_backup_conflicts/**',
      'pages_disabled/**',
      'src.pages.disabled/**',
      'vite.config-backup.ts'
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
    ]
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}', 'app/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
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
<<<<<<< HEAD
        afterAll: 'readonly',
=======
        afterAll: 'readonly'
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
<<<<<<< HEAD
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
=======
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin
      // '@next/next': nextPlugin, // Not needed for Vite project
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
      'react/display-name': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-unused-vars': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-debugger': 'warn',
      'react-hooks/rules-of-hooks': 'error',
<<<<<<< HEAD
      'react-hooks/exhaustive-deps': 'warn',
=======
      'react-hooks/exhaustive-deps': 'warn'
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly'
      }
    },
    rules: {
<<<<<<< HEAD
      'no-console': 'off',
    },
  },
=======
      'no-console': 'off'
    }
  }
<<<<<<< HEAD
=======
      'no-console': 'off'
    }
  }
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
];