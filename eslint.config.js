import js from '@eslint/js';
<<<<<<< HEAD
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  {
    ignores: [
=======
<<<<<<< HEAD
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
      },
=======
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
export default [{
    "ignores": [
>>>>>>> main
      'node_modules/',
      '.next/',
      'out/',
      'dist/',
      'build/',
      'coverage/',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
<<<<<<< HEAD
      'fix-critical-files.js',
      'fix-*.js',
      'fix-*.cjs',
      '*-fix*.cjs',
      '*-fix*.js',
      'advanced-*.cjs',
      'aggressive-*.cjs',
      'aggressive-*.js',
      'app-improvement-*.cjs',
      'analyze-*.cjs',
      'code-quality-*.js',
      'components',
      'test_build/',
      'tests.disabled/',
      'pages.disabled/',
      'src.disabled/',
      'components.disabled/',
      'hooks.disabled/',
      'types.disabled/',
      'contracts.disabled/',
      'solutions.disabled/',
      'zion-os.disabled/',
      'zion_academy/',
      'automation_backup/',
      'automation/backups/',
      'backup-pages/',
      'backup/',
      'lib_backup/',
      'data_backup/',
      'styles_backup/',
      'api-backup/',
      'temp_backup/',
      'corrupted_files_backup_2/',
      'ai-optimization-backups/',
      'optimization-reports/',
      'test-generation-reports/',
      'test-reports/',
      'test-results/',
      'security-reports/',
      'pages.__backup/',
      'pages-disabled/',
      'pages.disabled_auto/'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off',
    },
  },
=======
      '.prettierrc.js',
      '.eslintrc.*',
      '*.min.js',
      '*.bundle.js',
      'scripts/',
      'automation/',
      'automation_backup/',
      'data_backup/',
      'pm2-automation/',
      '__tests__/',
      'pages.disabled/',
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
      '*.test.js',
      '*.test.ts',
      '*.test.tsx',
      '*.spec.js',
      '*.spec.ts',
      '*.spec.tsx'
    ]
  },
  {
    "files": ['**/*.{js,jsx}'],
    "languageOptions": {
      ecmaVersion: 2021,
      "sourceType": 'module',
      "globals": {
        window: 'readonly',
        "document": 'readonly',
        "navigator": 'readonly',
        "localStorage": 'readonly',
        "sessionStorage": 'readonly',
        "console": 'readonly',
        "setTimeout": 'readonly',
        "setInterval": 'readonly',
        "clearTimeout": 'readonly',
        "clearInterval": 'readonly',
        "requestAnimationFrame": 'readonly',
        "cancelAnimationFrame": 'readonly',
        "fetch": 'readonly',
        "URL": 'readonly',
        "URLSearchParams": 'readonly',
        "Blob": 'readonly',
        "CustomEvent": 'readonly',
        "Intl": 'readonly',
        "performance": 'readonly',
        "caches": 'readonly',
        "Notification": 'readonly',
        "ServiceWorker": 'readonly',
        "ServiceWorkerRegistration": 'readonly',
        "PushSubscription": 'readonly',
        "NotificationPermission": 'readonly',
        "process": 'readonly',
        "global": 'readonly',
        "jest": 'readonly',
        "describe": 'readonly',
        "it": 'readonly',
        "test": 'readonly',
        "expect": 'readonly',
        "vi": 'readonly',
        "Deno": 'readonly',
        "React": 'readonly',
        "require": 'readonly',
        "module": 'readonly',
        "__dirname": 'readonly',
        "__filename": 'readonly',
        "exports": 'readonly'
      },
      "parserOptions": {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    "plugins": {
      react,
      'react-hooks': reactHooks
    },
    "rules": {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  },
  {
    "files": ['**/*.{ts,tsx}'],
    "languageOptions": {
      parser: tsparser,
      "ecmaVersion": 2021,
      "sourceType": 'module',
      "globals": {
        window: 'readonly',
        "document": 'readonly',
        "navigator": 'readonly',
        "localStorage": 'readonly',
        "sessionStorage": 'readonly',
        "console": 'readonly',
        "setTimeout": 'readonly',
        "setInterval": 'readonly',
        "clearTimeout": 'readonly',
        "clearInterval": 'readonly',
        "requestAnimationFrame": 'readonly',
        "cancelAnimationFrame": 'readonly',
        "fetch": 'readonly',
        "URL": 'readonly',
        "URLSearchParams": 'readonly',
        "Blob": 'readonly',
        "CustomEvent": 'readonly',
        "Intl": 'readonly',
        "performance": 'readonly',
        "caches": 'readonly',
        "Notification": 'readonly',
        "ServiceWorker": 'readonly',
        "ServiceWorkerRegistration": 'readonly',
        "PushSubscription": 'readonly',
        "NotificationPermission": 'readonly',
        "process": 'readonly',
        "global": 'readonly',
        "jest": 'readonly',
        "describe": 'readonly',
        "it": 'readonly',
        "test": 'readonly',
        "expect": 'readonly',
        "vi": 'readonly',
        "Deno": 'readonly',
        "React": 'readonly',
        "KeyboardEvent": 'readonly',
        "HTMLElement": 'readonly',
        "HTMLButtonElement": 'readonly',
        "HTMLAnchorElement": 'readonly',
        "MutationObserver": 'readonly',
        "RequestInit": 'readonly',
        "AbortController": 'readonly',
        "fs": 'readonly',
        "CodeQualityChecker": 'readonly'
      }
>>>>>>> main
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
<<<<<<< HEAD
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
=======
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
    }
>>>>>>> main
  },
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
        fireEvent: 'readonly',
        render: 'readonly',
        screen: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'dist/',
      '*.min.js',
      'build/',
      'coverage/',
    ],
  },
>>>>>>> main
];