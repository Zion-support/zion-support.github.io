import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
}

    ignores: [
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'node_modules/**',
      '.eslintrc.js',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'scripts/**',
      'automation/**',
      'backup-merge-conflicts/**',
      '**/*.backup.*',
      '**/*.old.*',
      '**/*.disabled.*',
      '**/*.broken.*',
      '**/*.corrupted.*',
      '**/*.temp.*',
      '**/*.test.*',
      '**/*.spec.*',
      '**/test-utils.*',
      '**/jest.setup.*',
      '**/jest.config.*',
      '**/vite.config.*',
      '**/postcss.config.*',
      '**/playwright.config.*',
      '**/cypress.config.*',
      '**/bundle-analyzer.config.*',
      '**/csp-config.*',
      '**/ecosystem.config.*',
      '**/Dockerfile*',
      '**/docker-compose*',
      '**/pm2-*',
      '**/fix-*',
      '**/clean-*',
      '**/batch-*',
      '**/merge-*',
      '**/resolve-*',
      '**/systematic-*',
      '**/ultimate-*',
      '**/structural-*',
      '**/quick-*',
      '**/comprehensive-*',
      '**/enhanced-*',
      '**/complete-*',
      '**/app-optimizer.*',
      '**/improve-*',
      '**/find-*',
      '**/git-ops.*',
      '**/pr-manager.*',
      '**/merge-strategy.*',
      '**/resolve-and-merge-*',
      '**/merge-all-*',
      '**/merge-prs.*',
      '**/pr-*',
      '**/batch_*',
      '**/check_*',
      '**/commit-*',
      '**/complete_*',
      '**/deploy-*',
      '**/fix_*',
      '**/git_*',
      '**/health-*',
      '**/quick-*',
      '**/run-*',
      '**/start-*',
      '**/test-*',
      '**/ultimate-*',
      '**/utils/next-*',
      '**/utils/performance-*',
      '**/utils/rate-*',
      '**/utils/input-*',
      '**/utils/csrf-*',
      '**/utils/dynamic-*',
      '**/utils/env-*',
      '**/utils/messageChannel*',
      '**/utils/sanitize*',
      '**/utils/seo-*',
      '**/utils/testing-*',
      '**/utils/accessibility-*',
      '**/utils/api.*',
      '**/utils/monitoring.*',
      '**/utils/performance.*',
      '**/utils/seo-optimizer.*',
      '**/types/empty.*',
      '**/types/index.*',
      '**/types/service-*',
      '**/supabase/**',
      '**/src/main.*',
      '**/src/data/**',
      '**/src/utils/**',
      '**/src/components/**',
      '**/src/App.*',
      '**/components/ui/**',
      '**/components/layout/**',
      '**/components/performance/**',
      '**/hooks/**',
      '**/lib/**',
      '**/api-backup/**',
      '**/deployment/**',
      '**/deployments/**',
      '**/docs/**',
      '**/e2e/**',
      '**/content/**',
      '**/data/**',
      '**/config/**',
      '**/__tests__/**',
      '**/automation-reports/**',
      '**/error-prevention-reports/**',
      '**/performance-reports/**',
      '**/link-reports/**',
      '**/monitoring/**',
      '**/pm2-automation/**',
      '**/automation/logs/**',
      '**/automation/backup/**',
      '**/backup-merge-conflicts/**',
      '**/temp_backup/**',
      '**/temp_broken_components/**',
      '**/temp_working/**',
      '**/temp_*/**',
      '**/ai-optimization-backups/**',
      '**/ai-analysis-reports/**',
      '**/optimization-reports/**',
      '**/public/reports/**',
      '**/pages_backup*/**',
      '**/pages.*/**',
      '**/pages-*/**',
      '**/pages_disabled*/**',
      '**/pages.disabled*/**',
      '**/pages.broken*/**',
      '**/pages.corrupted*/**',
      '**/pages.old*/**',
      '**/pages._*/**',
      '**/pages.__*/**',
      '**/backup-pages/**',
      '**/src.pages.disabled/**',
      '**/lib_backup*/**',
      '**/src_backup*/**',
      '**/corrupted-files-backup*/**',
      '**/performance-reports*/**',
      '**/log-analysis-reports*/**',
      '**/link-reports*/**',
      '**/lint-target*/**',
      '**/monitoring*/**',
      '**/pm2-automation*/**',
      '**/automation/logs*/**',
      '**/automation/backup*/**',
      '**/performance-*.json',
      '**/performance-*.js',
      '**/performance-*.cjs',
      '**/performance-*.sh',
      '**/performance-*.html',
      '**/performance-*.md',
      '**/performance-*.txt',
      'backup-problematic-files/**'
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        fetch: 'readonly',
        process: 'readonly',
        // DOM types
        Element: 'readonly',
        HTMLElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLSelectElement: 'readonly',
        HTMLDivElement: 'readonly',
        MouseEvent: 'readonly',
        KeyboardEvent: 'readonly',
        Node: 'readonly',
        PerformanceObserver: 'readonly',
        PerformanceNavigationTiming: 'readonly',
        PerformanceEventTiming: 'readonly',
        LayoutShift: 'readonly',
        performance: 'readonly',
        IntersectionObserver: 'readonly',
        IntersectionObserverEntry: 'readonly',
        // React
        React: 'readonly',
        // Jest/Testing globals
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "dist/",
      "build/",
      "coverage/",
      "*.config.js",
      "*.config.cjs",
      "*.config.mjs",
      "scripts/",
      "automation/",
      "pm2-automation/",
      "pages.disabled/",
      "pages.disabled_auto/",
      "pages.disabled_full/",
      "pages.corrupted.*/",
      "pages.broken/",
      "pages.bak/",
      "pages.blog.disabled/",
      "pages._archive_corrupted/",
      "pages._quarantine/",
      "pages-disabled/",
      "pages-quarantine/",
      "pages.__backup/",
      "pages-backup/",
      "tests.disabled/",
      "components.disabled/",
      "zion-os.disabled/",
      "zion_academy/",
      "temp_backup/",
      "temp_broken_files/",
      "test_build/",
      "*.test.js",
      "*.test.ts",
      "*.test.tsx",
      "*.spec.js",
      "*.spec.ts",
      "*.spec.tsx"
    ]
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
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
      },
      globals: {
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
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {

      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y

    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    files: [
      "**/*.cjs",
      "**/scripts/**/*.js",
      "**/automation/**/*.js",
      "**/pm2/**/*.js"
    ],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        ...globals.node,
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        Buffer: "readonly",
        global: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",

      "no-undef": "error"
    }
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-undef': 'error'
    }
      'no-unused-vars': 'warn'
    }
  },
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'build/',
      'dist/',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'src/pages/services/',
      'src/pages/solutions/',
      'src/pages/talent/',
      'src/routes/',
      'src/services/',
      'src/store/',
      'src/test/',
      'src/utils/',
      'tests/',
      'tests.disabled/',
      'types.disabled/',
      'zion-os.disabled/',
      'zion_academy/',
      'temp_working/',
      'test_build/',
      'supabase/',
      'working-automation-suite.cjs'
    ]
  }
];
