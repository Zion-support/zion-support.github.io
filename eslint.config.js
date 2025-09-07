import js from '@eslint/js';
<<<<<<< HEAD
=======
import { FlatCompat } from '@eslint/eslintrc';
>>>>>>> 3441e9d6a0ae777ba99028aadbff2beb86775349
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
<<<<<<< HEAD
import nextPlugin from '@next/eslint-plugin-next';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends('next/core-web-vitals'),
=======
// import nextPlugin from '@next/eslint-plugin-next'; // Not needed for Vite project
import globals from 'globals';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn'
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
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
      'react-hooks': reactHooks
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    }
  },
>>>>>>> 3441e9d6a0ae777ba99028aadbff2beb86775349
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '.next/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
<<<<<<< HEAD
      'scripts/**',
      'automation/**',
      'backup-problematic-files/**',
      'src.disabled/**',
      'components.disabled/**',
      'pages.disabled/**',
    ],
=======
      'scripts/',
      'automation/',
      'temp_*/',
      'tests/',
      'supabase/',
      '*.test.js',
      '*.test.ts',
      '*.test.tsx',
      '*.spec.js',
    ]
>>>>>>> 3441e9d6a0ae777ba99028aadbff2beb86775349
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
<<<<<<< HEAD
=======
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
>>>>>>> 3441e9d6a0ae777ba99028aadbff2beb86775349
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
<<<<<<< HEAD
      '@next/next': nextPlugin
=======
      '@typescript-eslint': typescript
>>>>>>> 3441e9d6a0ae777ba99028aadbff2beb86775349
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
<<<<<<< HEAD
=======
      'no-undef': 'off',
      'no-unused-vars': 'off',
>>>>>>> 3441e9d6a0ae777ba99028aadbff2beb86775349
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-img-element': 'off',
      'no-console': 'off',
      'no-undef': 'off',
    },
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
    ]
  }
];