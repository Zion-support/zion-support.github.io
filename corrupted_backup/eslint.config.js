<<<<<<< HEAD:corrupted_backup/eslint.config.js
<<<<<<< HEAD
import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import next from '@next/eslint-plugin-next'
=======
import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import next from "@next/eslint-plugin-next";
=======
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import next from '@next/eslint-plugin-next';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5:eslint.config.js

>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
export default [
  js.configs.recommended,
  {
<<<<<<< HEAD
    files: ['**/*.{js,jsx,ts,tsx}'],
=======
    files: ["**/*.{js,jsx,ts,tsx}"],
>>>>>>> 3e0b5e734e328fa6b9be04237a4c9f63bf064ddb
    ignores: [
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'node_modules/**',
<<<<<<< HEAD
      '.eslintrc.js',
=======
      'coverage/**',
>>>>>>> 3e0b5e734e328fa6b9be04237a4c9f63bf064ddb
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
<<<<<<< HEAD
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
      '**/performance-*.txt'
=======
      '**/zion-os/**',
      '**/zion-website/**',
      '**/zion-academy/**',
      '**/zion-film/**',
      '**/zion-ai-assistant/**',
      '**/*.min.js',
      '**/*.bundle.js',
      '**/public/**',
      '**/static/**',
>>>>>>> 3e0b5e734e328fa6b9be04237a4c9f63bf064ddb
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
<<<<<<< HEAD
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
=======
        window: "readonly",
        document: "readonly",
        console: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        fetch: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        location: "readonly",
        navigator: "readonly",
        performance: "readonly",
        addEventListener: "readonly",
        removeEventListener: "readonly",
        requestAnimationFrame: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
<<<<<<< HEAD:corrupted_backup/eslint.config.js
        fetch: "readonly",
        process: "readonly",
=======
        self: "readonly",
        // Node.js globals
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        global: "readonly",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5:eslint.config.js
        // DOM types
        Element: "readonly",
        HTMLElement: "readonly",
        HTMLInputElement: "readonly",
        HTMLTextAreaElement: "readonly",
        HTMLSelectElement: "readonly",
        HTMLDivElement: "readonly",
        MouseEvent: "readonly",
        KeyboardEvent: "readonly",
        Node: "readonly",
        PerformanceObserver: "readonly",
        PerformanceNavigationTiming: "readonly",
        PerformanceEventTiming: "readonly",
        LayoutShift: "readonly",
        IntersectionObserver: "readonly",
        IntersectionObserverEntry: "readonly",
>>>>>>> 3e0b5e734e328fa6b9be04237a4c9f63bf064ddb
        // React
        React: 'readonly',
        // Jest/Testing globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
<<<<<<< HEAD:corrupted_backup/eslint.config.js
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
=======
        // Node.js globals
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        Buffer: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5:eslint.config.js
      'react-hooks': reactHooks,
      '@next/next': next,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...next.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
<<<<<<< HEAD:corrupted_backup/eslint.config.js
<<<<<<< HEAD
      '@typescript-eslint/no-explicit-any': 'warn'
=======
      '@typescript-eslint/no-explicit-any': 'warn',
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
=======
      '@typescript-eslint/no-explicit-any': 'warn',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5:eslint.config.js
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        // Node.js globals
        process: 'readonly',
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        Buffer: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setImmediate: 'readonly',
        clearImmediate: 'readonly',
      },
    },
  },
<<<<<<< HEAD
  {
    ignores: [
      // Node/build outputs
<<<<<<< HEAD:corrupted_backup/eslint.config.js
<<<<<<< HEAD
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      // Public assets/scripts
      'public/**',
      // Root-level noisy files
      '*.log',
      '*.md'
    ]
  }
]
=======
      "node_modules/**",
      ".next/**",
      "dist/**",
      "build/**",
      "out/**",
      "coverage/**",

      // Large/legacy sources and disabled dirs
      "src/**/src.corrupted/**src/**/src.disabled/**",
      "src/**/src.broken/**src/**/src.pages.disabled/**",
      "solutions.disabled/**components.disabled/**",
      "components.corrupted/**hooks/**/hooks.disabled/**",
      "lib.disabled/**lib/**/lib.corrupted/**",
      "zion-os.disabled/**zion_academy/**",
      "contracts.disabled/**corrupted-files-backup/**",
      "corrupted_files_backup_2/**cypress.disabled/**",
      "cypress_backup/**data/**",
      "e2e/**pages.disabled/**",
      "pages.disabled_backup/**pages_backup/**",
      "supabase/**types/**",
      "types.disabled/**utils/**",

      // Tests and mocks
      "__tests__/**tests/**",
      "tests.disabled/***.test.*",

      // Temp and backups
      "backup/**backup-pages/**",
      "pages-backup/**lib_backup/**",
      "data_backup/**styles_backup/**",
      "api-backup/**automation_backup/**",
      "ai-optimization-backups/**ai-analysis-reports/**",
      "optimization-reports/**public/reports/**",
      "temp_backup/**temp_broken_components/**",
      "temp_working/**temp_*/**",
      "backup-merge-conflicts/**deployments/**",
      "deployment/**server/**",
      "services/**",

      // Scripts/configs and CJS files not intended for lint
      "scripts/**automation/**",
      "netlify/***.config.js",
      "*.config.cjs*.config.mjs",
      "**/*.cjs",

      // Public assets/scripts
      "public/**",

      // Root-level noisy files
      "api/***.js",
      "*.ts*.tsx",
      "*.jsxjest.config.*",
      "fix-*.jsfix-*.jsx",

      // Misc root configs that were being linted
      ".eslintrc.js.eslintrc.cjs",
      ".eslintrc.disabled.js.prettierrc.js",

      // Page backups
      'pages.__backup/**',
      'pages-disabled/**',
      'pages.disabled_auto/**',
    ],
  },
];
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
=======
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'out/**',
      'coverage/**',
      '*.log',
      '*.tsbuildinfo',
      // Generated files
      '**/*.min.js',
      '**/*.bundle.js',
      '**/static/**',
      '**/public/**',
      '**/backup*/**',
      '**/backups/**',
      '**/cache/**',
      '**/temp/**',
      '**/tmp/**',
      // Build artifacts
      '**/ecosystem*.cjs',
      '**/comprehensive-*.cjs',
      '**/advanced-*.cjs',
      '**/enhanced-*.cjs',
      '**/automation/**',
      '**/scripts/**',
      '**/tools/**',
      '**/zion-os/**',
      '**/zion-website/**',
    ],
  },
=======
>>>>>>> 3e0b5e734e328fa6b9be04237a4c9f63bf064ddb
];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5:eslint.config.js
