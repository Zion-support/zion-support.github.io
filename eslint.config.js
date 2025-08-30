import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
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
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        // Additional browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
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
        // Testing globals
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        vi: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-undef': 'error',
      'react/jsx-uses-react': 'off'
    },
    settings: {
      react: {
        version: 'detect',
      },
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
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
        clearInterval: 'readonly',
        // Additional browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
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
        // Testing globals
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        // TypeScript globals
        HTMLDivElement: 'readonly',
        MouseEvent: 'readonly',
        Node: 'readonly',
        RequestInit: 'readonly',
        Response: 'readonly',
        Headers: 'readonly',
        HTMLElement: 'readonly'
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
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
    }
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