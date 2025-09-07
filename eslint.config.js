<<<<<<< HEAD
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
=======
<<<<<<< HEAD
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
import jsxA11y from 'eslint-plugin-jsx-a11y';
>>>>>>> origin/main
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  {
<<<<<<< HEAD
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2021,
=======
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
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
<<<<<<< HEAD
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
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
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
      '.next/**out/**dist/**build/**node_modules/**.eslintrc.js*.config.js*.config.cjs*.config.mjsscripts/**automation/**backup-merge-conflicts/****/*.backup.***/*.old.***/*.disabled.***/*.broken.***/*.corrupted.***/*.temp.***/*.test.***/*.spec.***/test-utils.***/jest.setup.***/jest.config.***/vite.config.***/postcss.config.***/playwright.config.***/cypress.config.***/bundle-analyzer.config.***/csp-config.***/ecosystem.config.***/Dockerfile***/docker-compose*',
      '**/pm2-***/fix-***/clean-***/batch-***/merge-***/resolve-***/systematic-***/ultimate-***/structural-***/quick-***/comprehensive-***/enhanced-***/complete-***/app-optimizer.***/improve-***/find-***/git-ops.***/pr-manager.***/merge-strategy.***/resolve-and-merge-***/merge-all-***/merge-prs.***/pr-***/batch_***/check_***/commit-***/complete_***/deploy-***/fix_***/git_***/health-***/quick-*',
      '**/run-***/start-***/test-***/ultimate-***/utils/next-***/utils/performance-***/utils/rate-***/utils/input-***/utils/csrf-***/utils/dynamic-***/utils/env-***/utils/messageChannel***/utils/sanitize***/utils/seo-***/utils/testing-***/utils/accessibility-***/utils/api.***/utils/monitoring.***/utils/performance.***/utils/seo-optimizer.***/types/empty.***/types/index.***/types/service-***/supabase/****/src/main.***/src/data/****/src/utils/****/src/components/****/src/App.***/components/ui/****/components/layout/****/components/performance/**',
      '**/hooks/****/lib/****/api-backup/****/deployment/****/deployments/****/docs/****/e2e/****/content/****/data/****/config/****/__tests__/****/automation-reports/****/error-prevention-reports/****/performance-reports/****/link-reports/****/monitoring/****/pm2-automation/****/automation/logs/****/automation/backup/****/backup-merge-conflicts/****/temp_backup/****/temp_broken_components/****/temp_working/****/temp_*/****/ai-optimization-backups/****/ai-analysis-reports/****/optimization-reports/****/public/reports/****/pages_backup*/****/pages.*/****/pages-*/****/pages_disabled*/**',
      '**/pages.disabled*/****/pages.broken*/****/pages.corrupted*/****/pages.old*/****/pages._*/****/pages.__*/****/backup-pages/****/src.pages.disabled/****/lib_backup*/****/src_backup*/****/corrupted-files-backup*/****/performance-reports*/****/log-analysis-reports*/****/link-reports*/****/lint-target*/****/monitoring*/****/pm2-automation*/****/automation/logs*/****/automation/backup*/****/performance-*.json**/performance-*.js**/performance-*.cjs**/performance-*.sh**/performance-*.html**/performance-*.md**/performance-*.txt'
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error'
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
=======
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import next from "@next/eslint-plugin-next";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn'
    },
    languageOptions: {
      ecmaVersion: 'latest',
>>>>>>> origin/main
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        Blob: 'readonly',
        CustomEvent: 'readonly',
        Intl: 'readonly',
        performance: 'readonly',
        caches: 'readonly',
        Notification: 'readonly',
        ServiceWorker: 'readonly',
        ServiceWorkerRegistration: 'readonly',
        PushSubscription: 'readonly',
        NotificationPermission: 'readonly',
        process: 'readonly',
        global: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
    files: ['app/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
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
    ]
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}', 'app/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
<<<<<<< HEAD
        ...globals.node},
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true}}},
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint},
=======
        ...globals.node,
<<<<<<< HEAD
=======
        React: "readonly",
        jest: "readonly",
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly"
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      "react-hooks": reactHooks
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": "warn",
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off"
    }
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        console: 'readonly',
        process: 'readonly',
        window: 'readonly',
        document: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        HTMLElement: 'readonly',
        HTMLAnchorElement: 'readonly',
        performance: 'readonly',
        module: 'readonly',
        require: 'readonly',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
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
<<<<<<< HEAD
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin
      // '@next/next': nextPlugin, // Not needed for Vite project
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
=======
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y
    },
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
<<<<<<< HEAD
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }],
      'no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }
      ],
      // '@typescript-eslint/no-explicit-any': 'warn', // Disabled due to plugin config issue
    }},
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.ts',
      'temp-disabled/**',
      'temp_backup/**',
      'temp_exclude/**',
      'src.disabled/**',
      'corrupted_backup/**',
      'backup-problematic-files/**',
      'recovered-branches/**',
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
      'zion-film/**',
      'test-next/**',
      'test-reports/**',
      'test-results/**',
      'automation_backup/**',
      'ai-optimization-backups/**',
      'pages.disabled_full/**',
      'pages_backup_before_cleanup/**',
      'solutions.disabled/**',
      'src.pages.disabled/**',
      'pages.broken/**',
      'pages.corrupted.*/**',
      'pages.disabled/**',
      'pages.disabled_auto/**',
      'pages.old/**',
      'pages_disabled/**',
      'pages_minimal/**',
      'pages._archive_corrupted/**',
      'pages._quarantine/**',
      'pages.bak/**',
      'pages-disabled/**',
      'pages-quarantine/**',
      'pages-backup/**',
      'data_backup/**',
      'deployments/**',
      'lib.broken/**',
      'lib.disabled/**',
      'lib_backup/**',
      'hooks/**',
      'middleware/**',
      'lint-target/**',
      'components/api/**',
      'components/apps/**',
      'components/auth/**',
      'components/automation/**',
      'components/automations/**',
      'components/backgrounds/**',
      'components/broken/**',
      'components/calls/**',
      'components/category/**',
      'components/context/**',
      'components/deploy/**',
      'components/developers/**',
      'components/disputes/**',
      'components/docs/**',
      'components/error/**',
      'components/events/**',
      'components/feedback/**',
      'components/forms/**',
      'components/foundation/**',
      'components/governance/**',
      'components/grants/**',
      'components/i18n/**',
      'components/learn/**',
      'components/main/**',
      'components/media/**',
      'components/monetization/**',
      'components/offworld/**',
      'components/onboarding/**',
      'components/partners/**',
      'components/performance/**',
      'components/products/**',
      'corrupted-files-backup/**',
      'cypress/**',
      'cypress_backup/**',
      'data/**',
      'lib/integrations/**',
      'automation/**',
      'backup-merge-conflicts/**',
      'broken_files_backup/**',
      'components-disabled/**',
      'components.disabled/**',
      'components.disabled_full/**',
      'apps.backup/**',
      'components/*.dynamic.jsx',
      'components/PageTransition.jsx',
      'components/browserstack.config.ts',
      'components/playwright.config.ts',
      'fix_typescript_syntax_errors.jsx',
      'pages.disabled.full/**',
      'scripts/**',
      'utils/**',
      'types/**',
      'tests/**',
      'src_backup/**',
      'src_backup_temp/**',
      'temp-backup/**',
      'vite.config-backup.ts',
      'zion/**',
      'components/reports/**',
      'components/sections/**',
      'components/services/**',
      'components/vendors/**',
      'components/wallet/**',
      'components/zion/**',
      'components/reviews/**',
      'components/search/**',
      'components/seo/**',
      'components/studio/**',
      'components/support/**',
      'components/token/**',
      'components/tokens/**',
      'components/layout/**',
      'components/ui/**',
      '*.cjs',
=======
      'scripts/',
      'ultimate-*.cjs',
      'automation/',
      'pm2-automation/',
      'pages.disabled/',
      'pages.disabled_auto/',
      'pages.disabled_full/',
      'pages.corrupted.*/',
      'pages.broken/',
      'pages.bak/',
      'pages.blog.disabled/',
      'pages._archive_corrupted/',
      'pages._quarantine/',
      'pages-disabled/',
      'pages-quarantine/',
      'pages.__backup/',
      'pages-backup/',
      'tests.disabled/',
      'components.disabled/',
      'zion-os.disabled/',
      'zion_academy/',
      'temp_backup/',
      'temp_broken_files/',
      'temp_exclude/',
      'test_build/',
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      '*.test.js',
      '*.test.ts',
      '*.test.tsx',
      '*.spec.js',
      '*.spec.ts',
<<<<<<< HEAD
      '*.spec.tsx',
      'pm2-automation/**',
      'services/**',
      '*.js',
      '*.ts',
      'public/sw*.js',
      'resolve-*.js',
      'run-complete-automation.js',
      'security-config.js',
      'seo-improvements.js';
      'simple-test.js';
      'syntax-fixer.js';
      'performance-monitor.js']}];
=======
=======
      '*.spec.tsx'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        Deno: 'readonly',
        require: 'readonly',
        module: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLParagraphElement: 'readonly',
        HTMLHeadingElement: 'readonly',
        HTMLAnchorElement: 'readonly',
        HTMLElement: 'readonly',
        Performance: 'readonly',
        PerformanceNavigationTiming: 'readonly',
        MessageEvent: 'readonly',
        RequestInit: 'readonly',
        AbortController: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        Deno: 'readonly',
        HTMLElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLParagraphElement: 'readonly',
        HTMLHeadingElement: 'readonly',
        HTMLAnchorElement: 'readonly',
        Performance: 'readonly',
        PerformanceNavigationTiming: 'readonly',
        MessageEvent: 'readonly',
        RequestInit: 'readonly',
        AbortController: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly'
      },
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      ...jsxA11y.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-console': 'warn',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      'react/prop-types': 'off',
<<<<<<< HEAD
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
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
      'no-var': 'error'
      'no-debugger': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
=======
      'react/react-in-jsx-scope': 'off'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: ['**/*.js'],
        vi: 'readonly',
        Deno: 'readonly',
        React: 'readonly',
        require: 'readonly',
        module: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLParagraphElement: 'readonly',
        HTMLHeadingElement: 'readonly',
        HTMLAnchorElement: 'readonly',
        HTMLElement: 'readonly',
        MessageEvent: 'readonly',
        RequestInit: 'readonly',
        AbortController: 'readonly',
        Performance: 'readonly',
        PerformanceNavigationTiming: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
<<<<<<< HEAD
    },
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
=======
>>>>>>> origin/main
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
<<<<<<< HEAD
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        Blob: 'readonly',
        CustomEvent: 'readonly',
        Intl: 'readonly',
        performance: 'readonly',
        caches: 'readonly',
        Notification: 'readonly',
        ServiceWorker: 'readonly',
        ServiceWorkerRegistration: 'readonly',
        PushSubscription: 'readonly',
        NotificationPermission: 'readonly',
        process: 'readonly',
        global: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        Deno: 'readonly',
        React: 'readonly',
        HTMLElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLParagraphElement: 'readonly',
        HTMLHeadingElement: 'readonly',
        HTMLAnchorElement: 'readonly',
        MessageEvent: 'readonly',
        RequestInit: 'readonly',
        AbortController: 'readonly',
        Performance: 'readonly',
        PerformanceNavigationTiming: 'readonly'
=======
    },
    rules: {
<<<<<<< HEAD
      'no-console': 'off'
    }
  }
      'no-console': 'off'
    }
  }
];
        // Node.js globals
        process: 'readonly'
        console: 'readonly'
        require: 'readonly'
        module: 'readonly'
        exports: 'readonly'
        __dirname: 'readonly'
        __filename: 'readonly'
        global: 'readonly'
        Buffer: 'readonly'
        setTimeout: 'readonly'
        clearTimeout: 'readonly'
        setInterval: 'readonly'
        clearInterval: 'readonly'
        setImmediate: 'readonly'
        clearImmediate: 'readonly'
>>>>>>> origin/main
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'out/**',
      'coverage/**',
      'src.corrupted/**',
      'src.disabled/**',
      'src.broken/**',
      'src.pages.disabled/**',
      'solutions.disabled/**',
      'components.disabled/**',
      'components.corrupted/**',
      'hooks.disabled/**',
      'lib.disabled/**',
      'lib.corrupted/**',
      'zion-os.disabled/**',
      'zion_academy/**',
      'contracts.disabled/**',
      'corrupted-files-backup/**',
      'corrupted_files_backup_2/**',
      'cypress.disabled/**',
      'cypress_backup/**',
      'data/**',
      'e2e/**',
      'pages.disabled/**',
      'pages.disabled_backup/**',
      'pages_backup/**',
      'pages.disabled_full/**',
      'pages_backup_before_cleanup/**',
      'pages_backup_conflicts/**',
      'pages.bak/**',
      'pages.broken/**',
      'pages.corrupted.*/**',
      'pages._quarantine/**',
      'pages._archive_corrupted/**',
      'pages-quarantine/**',
      'pages.blog.disabled/**',
      'pages.disabled_auto/**',
      'pages_api.disabled/**',
      'components.disabled_full/**',
      'components.broken/**',
      'backup-corrupted-files/**',
      'lib.broken/**',
      'data.disabled/**',
      'test_build/**',
      'server/**',
      'types/**',
      'next-env.d.ts',
      'jest.setup.jsx',
      'middleware.ts',
      'middleware.security.ts',
      'temp-backup/**',
      'temp_backup/**',
      'temp_broken_files/**',
      'temp_working/**',
      'tests.disabled/**',
      'supabase/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'vite.config.*',
      '**/*.cjs',
      'next.config.*',
      'playwright.config.ts',
      'vite.config-backup.ts',
      'public/**',
      '.venv/**',
      'api/**',
      'api.disabled/**',
      'api.disabled.temp/**',
      'disabled-api/**',
      'jest.config.*',
      'fix-*.js',
      'fix-*.jsx',
      '*.js',
      '*.cjs',
      '*.mjs',
      'deployments/**',
      'pages.__backup/**',
      'pages-disabled/**',
      'src/**',
      'automation/**',
      'automation_backup/**',
      'data_backup/**',
      'pm2-automation/**',
      'scripts/**',
      'tests/**',
      'test-results/**',
      'test-reports/**',
      '*.test.js',
      '*.test.jsx',
      '*.test.ts',
      '*.test.tsx',
      '*.spec.js',
      '*.spec.jsx',
      '*.spec.ts',
      '*.spec.tsx',
      '*.backup.js',
      '*.backup.jsx',
      '*.backup.ts',
      '*.backup.tsx',
      '*.broken.js',
      '*.broken.jsx',
      '*.broken.ts',
      '*.broken.tsx',
      '*.corrupted.js',
      '*.corrupted.jsx',
      '*.corrupted.ts',
      '*.corrupted.tsx',
      '*.disabled.js',
      '*.disabled.jsx',
      '*.disabled.ts',
      '*.disabled.tsx',
      '*.old.js',
      '*.old.jsx',
      '*.old.ts',
      '*.old.tsx',
      '*.temp.js',
      '*.temp.jsx',
      '*.temp.ts',
      '*.temp.tsx',
      '*.tmp.js',
      '*.tmp.jsx',
      '*.tmp.ts',
      '*.tmp.tsx',
      '*.bak.js',
      '*.bak.jsx',
      '*.bak.ts',
      '*.bak.tsx',
      '*.orig.js',
      '*.orig.jsx',
      '*.orig.ts',
      '*.orig.tsx',
      '*.rej.js',
      '*.rej.jsx',
      '*.rej.ts',
      '*.rej.tsx',
      '*.swp.js',
      '*.swp.jsx',
      '*.swp.ts',
      '*.swp.tsx',
      '*.swo.js',
      '*.swo.jsx',
      '*.swo.ts',
      '*.swo.tsx',
      '*.log',
      '*.pid',
      '*.seed',
      '*.pid.lock',
      '*.tgz',
      '*.tar.gz',
      '*.zip',
      '*.rar',
      '*.7z',
      '*.tar',
      '*.gz',
      '*.bz2',
      '*.xz',
      '*.lzma',
      '*.zst',
      '*.lz4',
      '*.lzop',
      '*.lrz',
      '*.lha',
      '*.lzh',
      '*.ace',
      '*.arj',
      '*.cab',
      '*.deb',
      '*.rpm',
      '*.msi',
      '*.dmg',
      '*.iso',
      '*.img',
      '*.bin',
      '*.exe',
      '*.app',
      '*.dll',
      '*.so',
      '*.dylib',
      '*.a',
      '*.lib',
      '*.o',
      '*.obj',
      '*.pyc',
      '*.pyo',
      '*.pyd',
      '*.class',
      '*.jar',
      '*.war',
      '*.ear',
      '*.sar',
      '*.nar',
      '*.zip',
      '*.rar',
      '*.7z',
      '*.tar',
      '*.gz',
      '*.bz2',
      '*.xz',
      '*.lzma',
      '*.zst',
      '*.lz4',
      '*.lzop',
      '*.lrz',
      '*.lha',
      '*.lzh',
      '*.ace',
      '*.arj',
      '*.cab',
      '*.deb',
      '*.rpm',
      '*.msi',
      '*.dmg',
      '*.iso',
      '*.img',
      '*.bin',
      '*.exe',
      '*.app',
      '*.dll',
      '*.so',
      '*.dylib',
      '*.a',
      '*.lib',
      '*.o',
      '*.obj',
      '*.pyc',
      '*.pyo',
      '*.pyd',
      '*.class',
      '*.jar',
      '*.war',
      '*.ear',
      '*.sar',
      '*.nar'
    ]
  }
<<<<<<< HEAD
];
=======
],
=======
      "no-unused-vars": "warn",
      "no-console": "warn",
      "no-undef": "error",
      "prefer-const": "error"
    }
  }
];
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
