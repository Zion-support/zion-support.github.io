import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
<<<<<<< HEAD
import next from '@next/eslint-plugin-next';
=======
import globals from 'globals';

>>>>>>> main
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
      "*.spec.tsx",
    ],
  },
  js.configs.recommended,
  {
<<<<<<< HEAD
<<<<<<< HEAD
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'node_modules/**',
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
      'backup-problematic-files/**',
      'backup/**',
      'cache/**',
      'clean-build/**',
      'temp_conflicts/**',
      'temp_broken_files/**',
      'temp_backup/**',
      'zion-os/**',
      'zion-ai-assistant/**',
      'test-*.js',
      'test-*.cjs',
      'ultimate-*.js',
      'ultimate-*.cjs',
      'tools/**',
      'tests/**',
      '**/backup-problematic-files/**',
      '**/backup/**',
      '**/temp_*/**',
      '**/zion-*/**',
      '**/test-*/**',
      '**/ultimate-*/**',
      '**/tools/**',
      '**/tests/**'
    ],
=======
    files: ['**/*.{js,jsx,ts,tsx}'],
>>>>>>> c30116f715bd9316985a762a4f8b8486604309f2
=======
    files: ["**/*.{js,jsx}"],
>>>>>>> main
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
        afterAll: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
<<<<<<< HEAD
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
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
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
      '@typescript-eslint/no-explicit-any': 'warn',
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
  {
    ignores: [
      // Node/build outputs
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'out/**',
      'coverage/**',
      // Large/legacy sources and disabled dirs
      'src/**/src.corrupted/**',
      'src/**/src.disabled/**',
      'src/**/src.broken/**',
      'src/**/src.pages.disabled/**',
      'solutions.disabled/**',
      'components.disabled/**',
      'components.corrupted/**',
      'hooks/**/hooks.disabled/**',
      'lib.disabled/**',
      'lib/**/lib.corrupted/**',
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
      'supabase/**',
      'types/**',
      'types.disabled/**',
      'utils/**',
      // Tests and mocks
      '__tests__/**',
      'tests/**',
      'tests.disabled/**',
      '*.test.*',
      // Temp and backups
      'backup/**',
      'backup-pages/**',
      'pages-backup/**',
      'lib_backup/**',
      'data_backup/**',
      'styles_backup/**',
      'api-backup/**',
      'automation_backup/**',
      'ai-optimization-backups/**',
      'ai-analysis-reports/**',
      'optimization-reports/**',
      'public/reports/**',
      'temp_backup/**',
      'temp_broken_components/**',
      'temp_working/**',
      'temp_*/**',
      'backup-merge-conflicts/**',
      'deployments/**',
      'deployment/**',
      'server/**',
      'services/**',
      // Scripts/configs and CJS files not intended for lint
      'scripts/**',
      'automation/**',
      'netlify/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      '**/*.cjs',
      // Public assets/scripts
      'public/**',
      // Root-level noisy files
      'api/**',
      '*.js',
      '*.ts',
      '*.tsx',
      '*.jsx',
      'jest.config.*',
      'fix-*.js',
      'fix-*.jsx',
      // Misc root configs that were being linted
      '.eslintrc.js',
      '.eslintrc.cjs',
      '.eslintrc.disabled.js',
      '.prettierrc.js',
      // Page backups
      'pages.__backup/**',
      'pages-disabled/**',
      'pages.disabled_auto/**',
    ],
  },
];
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import next from '@next/eslint-plugin-next';
export default [;
  js.configs.recommended,;
  {;
    files: ['**/*.{js,jsx,ts,tsx}'],;
    ignores: [;
      '.next/**out/**dist/**build/**',;
      'node_modules/**.eslintrc.js*.config.js*.config.cjs',;
      '*.config.mjsscripts/**automation/**backup-merge-conflicts/**',;
      '**/*.backup.***/*.old.***/*.disabled.***/*.broken.*',;
      '**/*.corrupted.***/*.temp.***/*.test.***/*.spec.*',;
      '**/test-utils.***/jest.setup.***/jest.config.***/vite.config.*',;
      '**/postcss.config.***/playwright.config.***/cypress.config.***/bundle-analyzer.config.*',;
      '**/csp-config.***/ecosystem.config.***/Dockerfile***/docker-compose*',;
      '**/pm2-***/fix-***/clean-***/batch-*',;
      '**/merge-***/resolve-***/systematic-***/ultimate-*',;
      '**/structural-***/quick-***/comprehensive-***/enhanced-*',;
      '**/complete-***/app-optimizer.***/improve-***/find-*',;
      '**/git-ops.***/pr-manager.***/merge-strategy.***/resolve-and-merge-*',;
      '**/merge-all-***/merge-prs.***/pr-***/batch_*',;
      '**/check_***/commit-***/complete_***/deploy-*',;
      '**/fix_***/git_***/health-***/quick-*',;
      '**/run-***/start-***/test-***/ultimate-*',;
      '**/utils/next-***/utils/performance-***/utils/rate-***/utils/input-*',;
      '**/utils/csrf-***/utils/dynamic-***/utils/env-***/utils/messageChannel*',;
      '**/utils/sanitize***/utils/seo-***/utils/testing-***/utils/accessibility-*',;
      '**/utils/api.***/utils/monitoring.***/utils/performance.***/utils/seo-optimizer.*',;
      '**/types/empty.***/types/index.***/types/service-***/supabase/**',;
      '**/src/main.***/src/data/****/src/utils/****/src/components/**',;
      '**/src/App.***/components/ui/****/components/layout/****/components/performance/**',;
      '**/hooks/****/lib/****/api-backup/****/deployment/**',;
      '**/deployments/****/docs/****/e2e/****/content/**',;
      '**/data/****/config/****/__tests__/****/automation-reports/**',;
      '**/error-prevention-reports/****/performance-reports/****/link-reports/****/monitoring/**',;
      '**/pm2-automation/****/automation/logs/****/automation/backup/****/backup-merge-conflicts/**',;
      '**/temp_backup/****/temp_broken_components/****/temp_working/****/temp_*/**',;
      '**/ai-optimization-backups/****/ai-analysis-reports/****/optimization-reports/****/public/reports/**',;
      '**/pages_backup*/****/pages.*/****/pages-*/****/pages_disabled*/**',;
      '**/pages.disabled*/****/pages.broken*/****/pages.corrupted*/****/pages.old*/**',;
      '**/pages._*/****/pages.__*/****/backup-pages/****/src.pages.disabled/**',;
      '**/lib_backup*/****/src_backup*/****/corrupted-files-backup*/****/performance-reports*/**',;
      '**/log-analysis-reports*/****/link-reports*/****/lint-target*/****/monitoring*/**',;
      '**/pm2-automation*/****/automation/logs*/****/automation/backup*/****/performance-*.json',;
      '**/performance-*.js**/performance-*.cjs**/performance-*.sh**/performance-*.html',;
      '**/performance-*.md**/performance-*.txt';
    ],;
    languageOptions: {;
      parser: typescriptParser,;
      parserOptions: {;
        ecmaVersion: 'latest',;
        sourceType: 'module',;
        ecmaFeatures: {;
          jsx: true;
        }
      },;
      globals: {;
        // Browser globals;
        window: 'readonly',;
        document: 'readonly',;
        console: 'readonly',;
        localStorage: 'readonly',;
        sessionStorage: 'readonly',;
        setTimeout: 'readonly',;
        clearTimeout: 'readonly',;
        setInterval: 'readonly',;
        clearInterval: 'readonly',;
        fetch: 'readonly',;
        process: 'readonly',;
        // DOM types;
        Element: 'readonly',;
        HTMLElement: 'readonly',;
        HTMLInputElement: 'readonly',;
        HTMLTextAreaElement: 'readonly',;
        HTMLSelectElement: 'readonly',;
        HTMLDivElement: 'readonly',;
        MouseEvent: 'readonly',;
        KeyboardEvent: 'readonly',;
        Node: 'readonly',;
        PerformanceObserver: 'readonly',;
        PerformanceNavigationTiming: 'readonly',;
        PerformanceEventTiming: 'readonly',;
        LayoutShift: 'readonly',;
        performance: 'readonly',;
        IntersectionObserver: 'readonly',;
        IntersectionObserverEntry: 'readonly',;
        // React;
        React: 'readonly',;
        // Jest/Testing globals;
        describe: 'readonly',;
        it: 'readonly',;
        test: 'readonly',;
        expect: 'readonly',;
        beforeEach: 'readonly',;
        afterEach: 'readonly',;
        beforeAll: 'readonly',;
        afterAll: 'readonly',;
        jest: 'readonly',;
        // Node.js globals;
        require: 'readonly',;
        module: 'readonly',;
        exports: 'readonly',;
        __dirname: 'readonly',;
        __filename: 'readonly',;
        global: 'readonly',;
        Buffer: 'readonly';
      }
    },;
    plugins: {;
      '@typescript-eslint': typescript,;
      'react': react,;
      'react-hooks': reactHooks,;
      '@next/next': next;
    },;
    rules: {;
      ...typescript.configs.recommended.rules,;
      ...react.configs.recommended.rules,;
      ...reactHooks.configs.recommended.rules,;
      ...next.configs.recommended.rules,;
      'no-unused-vars': 'warnno-console': 'warnprefer-const': 'errorno-var': 'errorreact/prop-types': 'offreact/react-in-jsx-scope': 'off@typescript-eslint/no-unused-vars': 'warn@typescript-eslint/no-explicit-any': 'warn';
    },;
    settings: {;
      react: {;
        version: 'detect';
      }
    }
  },;
  {;
    files: ['**/*.cjs'],;
    languageOptions: {;
      sourceType: 'commonjs',;
      globals: {;
        // Node.js globals;
        process: 'readonly',;
        console: 'readonly',;
        require: 'readonly',;
        module: 'readonly',;
        exports: 'readonly',;
        __dirname: 'readonly',;
        __filename: 'readonly',;
        global: 'readonly',;
        Buffer: 'readonly',;
        setTimeout: 'readonly',;
        clearTimeout: 'readonly',;
        setInterval: 'readonly',;
        clearInterval: 'readonly',;
        setImmediate: 'readonly',;
        clearImmediate: 'readonly';
      }
    }
  },;
  {;
    ignores: [;
      // Node/build outputs;
      '.next/**out/**dist/**build/**',;
      'node_modules/**',;
      // Public assets/scripts;
      'public/**',;
      // Root-level noisy files;
      '*.config.js*.config.cjs*.config.mjs*.backup.*',;
      '*.old.**.disabled.**.broken.**.corrupted.*';
      '*.temp.*';
    ];
=======
    },
    plugins: {

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
>>>>>>> main
  }
];