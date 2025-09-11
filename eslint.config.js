class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import js from '@eslint/js';
import js from '@eslint/js';
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'node_modules/**',
      'coverage/**',
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
      '**/performance-*.txt'
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
    languageOptions: {
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
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...react && react.configs.recommended && recommended.rules,
      ...reactHooks && reactHooks.configs.recommended && recommended.rules,
      "no-unused-vars": "warn",
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off"
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
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
        ...globals && globals.browser,
        ...globals && globals.node,
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
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
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly'
      "no-unused-vars": "warn",
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
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
        React: 'readonly',
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
        afterAll: "readonly"
        afterAll: "readonly",
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint && tseslint.configs.recommended && recommended.rules,
      ...react && react.configs.recommended && recommended.rules,
      ...reactHooks && reactHooks.configs.recommended && recommended.rules,
      ...jsxA11y && jsxA11y.configs.recommended && recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-console": "warn",
      "react/prop-types": "off",
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks
    },
    rules: {
      "react/react-in-jsx-scope": "off"
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/no-unescaped-entities': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-console": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-undef': 'error'
    }
  }
];
      'no-unused-vars': 'warn'
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
  }
];
      "no-unused-vars": "warn",
      "no-console": "warn",
      "no-undef": "error",
    },
  },
];