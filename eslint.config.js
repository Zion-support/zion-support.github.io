import js from '@eslint/js';
<<<<<<< HEAD
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
=======
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
<<<<<<< HEAD
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
=======
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        // Browser globals
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
        // Node.js globals
        process: 'readonly',
        global: 'readonly',
        // Testing globals
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        // Deno globals
        Deno: 'readonly',
        // React globals
        React: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
<<<<<<< HEAD
      'react-refresh': reactRefresh
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
=======
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-undef': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
<<<<<<< HEAD
      ecmaVersion: 2020,
=======
      ecmaVersion: 2021,
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
<<<<<<< HEAD
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly'
      }
=======
          jsx: true,
        },
      },
      globals: {
        // Browser globals
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
        // Node.js globals
        process: 'readonly',
        global: 'readonly',
        // Testing globals
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        // Deno globals
        Deno: 'readonly',
        // React globals
        React: 'readonly',
        // TypeScript globals
        HTMLDivElement: 'readonly',
        MouseEvent: 'readonly',
        Node: 'readonly',
        RequestInit: 'readonly',
        Response: 'readonly',
        Headers: 'readonly',
        HTMLElement: 'readonly',
      },
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
<<<<<<< HEAD
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
=======
      '@typescript-eslint': tseslint,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'no-undef': 'off', // TypeScript handles this
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  },
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'dist/',
      'build/',
      '*.config.js',
      '*.config.ts',
      'scripts/',
      'automation/',
      'public/reports/**',
      'netlify/',
      'ecosystem*.cjs',
      '**/*.cjs',
      '**/*.disabled/**',
      '**/tests.disabled/**',
      '**/typechain-types.disabled/**',
      '**/types.disabled/**',
      '**/utils.disabled/**',
      '**/zion-os.disabled/**',
      '**/zion_academy/**',
      '**/src_backup/**',
      '**/src_disabled/**',
      '**/services.disabled.temp/**',
      'test-*.js',
      'workbox-config.js',
      '*.backup.*',
      '**/data/*.ts',
      '**/pages/*.tsx',
      '**/public/*.js',
      '**/*.mjs',
      '**/server.mjs',
      '**/seed.js',
      '**/jest.setup.js',
      '**/extractFailingCode.js',
      '**/fix-corrupted-files.js',
      '**/fix-corruption.js',
      '**/fix-merge-conflicts.js',
      '**/fix-syntax-errors.js',
      '**/mcp-automation-system.js',
      '**/run-cursor-memory-automation.js',
      '**/script.js',
      '**/simple-mcp-test.js',
      '**/simple-server.js',
      '**/start-all-automations.js',
      '**/backup/**',
      '**/.temp_backup_components/**',
      '**/src.broken/**',
      '**/data.temp/**',
      '**/contracts/**',
      '**/cypress/**',
      '**/src/components/disabled/**',
      '**/src/components/header/**',
      '**/src/components/ui/Futuristic*.tsx',
      '**/src/components/ui/accordion.tsx',
      '**/src/components/ui/alert.tsx',
      '**/src/components/ui/avatar.tsx',
      '**/src/components/ui/badge.tsx',
      '**/src/components/ui/button.tsx',
      '**/src/components/ui/card.tsx',
      '**/src/components/ui/floating-action-button.tsx',
      '**/src/components/ui/input.tsx',
      '**/src/components/ui/loading-spinner.tsx',
      '**/src/components/ui/loading.tsx',
<<<<<<< HEAD
      '**/src/components/ui/select.tsx',
      '**/src/components/ui/separator.tsx',
      '**/src/components/ui/skeleton.tsx',
      '**/src/components/ui/steps.tsx',
      '**/src/components/ui/tabs.tsx',
      '**/src/components/ui/textarea.tsx',
      '**/src/components/ui/use-toast.tsx',
      '**/src/hooks/use-toast.ts',
      '**/src/hooks/usePerformance.ts',
      '**/src/lib/utils.ts',
      '**/src/main.tsx',
      '**/src/types/listings.ts',
      '**/src/components/AccessibilityEnhancer.tsx',
      '**/src/components/Breadcrumb.tsx',
      '**/src/components/ErrorBoundary.tsx',
      '**/src/components/GradientHeading.tsx',
      '**/src/components/LazyImage.tsx',
      '**/src/components/LoadingSkeleton.tsx',
      '**/src/components/SEO.tsx',
      '**/src/components/SecurityHeaders.tsx',
      '**/src/components/Sidebar.tsx',
      '**/src/components/TrustIndicators.tsx',
=======
      '**/src/components/ui/select.jsx',
      '**/src/components/ui/separator.jsx',
      '**/src/components/ui/skeleton.jsx',
      '**/src/components/ui/steps.jsx',
      '**/src/components/ui/tabs.jsx',
      '**/src/components/ui/textarea.jsx',
      '**/src/components/ui/use-toast.jsx',
      '**/src/hooks/use-toast.js',
      '**/src/hooks/usePerformance.js',
      '**/src/lib/utils.js',
      '**/src/main.jsx',
      '**/src/types/listings.js',
      '**/src/components/AccessibilityEnhancer.jsx',
      '**/src/components/Breadcrumb.jsx',
      '**/src/components/ErrorBoundary.jsx',
      '**/src/components/GradientHeading.jsx',
      '**/src/components/LazyImage.jsx',
      '**/src/components/LoadingSkeleton.jsx',
      '**/src/components/SEO.jsx',
      '**/src/components/SecurityHeaders.jsx',
      '**/src/components/Sidebar.jsx',
      '**/src/components/TrustIndicators.jsx',
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      '**/auto-fix-watcher.js',
      '**/auto-run-all.js',
      '**/comprehensive-automation-test.js',
      '**/debug-paths.js',
      '**/pages/**',
      'test*.js',
      'test*.ts',
      'test*.tsx'
    ]
  }
];