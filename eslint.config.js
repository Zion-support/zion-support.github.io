<<<<<<< HEAD
import js from '@eslint/js';
import react from 'eslint-plugin-react';
<<<<<<< HEAD
import reactHooks from 'eslint-plugin-react-hooks';
=======
<<<<<<< HEAD
<<<<<<< HEAD



import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";

import js from '@eslint/js';
      'coverage/**',

=======
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    files: ['src/App.tsx', 'src/main.tsx', 'src/components/Header.tsx', 'src/components/Footer.tsx', 'src/components/Sidebar.tsx', 'src/components/PerformanceMonitor.tsx', 'src/components/ErrorBoundary.tsx', 'src/pages/Home.tsx', 'src/pages/About.tsx', 'src/pages/Services.tsx', 'src/pages/Pricing.tsx', 'src/pages/Contact.tsx'],
    ignores: [
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'node_modules/**',
      'coverage/**',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
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

      '**/performance-*.txt'
=======
      '**/performance-*.txt',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
      '**/zion-os/**',
      '**/zion-website/**',
      '**/zion-academy/**',
      '**/zion-film/**',
      '**/zion-ai-assistant/**',
      '**/*.min.js',
      '**/*.bundle.js',
      '**/public/**',
      '**/static/**',

    ],
=======
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-5a8d
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
<<<<<<< HEAD
        // Browser globals

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

        // React
        React: 'readonly',
        // Jest/Testing globals
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2021,
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
<<<<<<< HEAD
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks
=======
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
<<<<<<< HEAD
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
=======
      ...jsxA11y.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: [
      '**/*.cjs',
      '**/scripts/**/*.js',
      '**/automation/**/*.js',
      '**/pm2/**/*.js',
    ],
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
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
=======
        ...globals.node,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
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
        PerformanceNavigationTiming: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        setImmediate: 'readonly',
        clearImmediate: 'readonly'
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
<<<<<<< HEAD
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
    }
<<<<<<< HEAD
=======
=======
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
=======
      'no-undef': 'error',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/anchor-is-valid': 'warn',
      'react/no-unescaped-entities': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-5a8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
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
      '*.nar'
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    ]
  }
];
<<<<<<< HEAD
=======



  }
];
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
  }
];
origin/automation-improvements-final

  }
];
  }
];
=======
  }
];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      'vite.config.*',
      'tailwind.config.*',
      'postcss.config.*',
      'public/**',
      'build/**',
      'coverage/**',
      '*.backup.*',
      'temp_*/**',
      'src_backup/**',
      'src.disabled/**',
      'src.broken/**',
    ],
  },
];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-5a8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
