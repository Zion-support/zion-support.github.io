import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
<<<<<<< HEAD
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
<<<<<<< HEAD
  recommendedConfig: js.configs.recommended,
});
=======
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
// import nextPlugin from '@next/eslint-plugin-next'; // Not needed for Vite project
import globals from 'globals';
>>>>>>> cursor/expand-services-advertise-and-build-project-e77d

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
=======
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': 'warn'
    }
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'automation/**',
      'backup-problematic-files/**',
      'tests/**',
      '*.test.js',
      '*.test.ts',
      '*.test.tsx',
      '*.spec.js',
      '*.spec.ts',
<<<<<<< HEAD
      '*.spec.tsx'
    ]
=======
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
=======
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
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
    ]
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}', 'app/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
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
        afterAll: 'readonly'
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
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
      'react/display-name': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-unused-vars': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-debugger': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
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
      'no-console': 'off'
    }
  }
<<<<<<< HEAD
      'no-console': 'off'
    }
>>>>>>> cursor/expand-services-advertise-and-build-project-e77d
  }
};
=======
];
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
