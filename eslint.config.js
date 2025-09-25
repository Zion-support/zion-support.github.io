import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  // Ignore everything by default; we will opt-in only app and safe test files
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'coverage/**',
      '.cache/**',
      'automation/**',
      'automation_backup/**',
      'automation-logs/**',
      'automation-reports/**',
      'scripts/**',
      'server/**',
      'backend/**',
      'apps/**',
      'apps.backup/**',
      'app_backup/**',
      'app.disabled/**',
      'app-disabled/**',
      'generated-services/**',
      'backups/**',
      'backup*/**',
      'backup-problematic-files/**',
      'corrupted_backup/**',
      'temp_exclude/**',
      'temp_*/**',
      'ts_files_backup/**',
      '__tests__/**',
      'tests/**',
      '__jest__/**',
      '__mocks__/**',
      // Allow __safe_tests__ explicitly later
      'zion-os/**',
      'zion-website/**',
      'zion-ai-assistant/**',
      'zion_academy/**',
      'zion-film/**'
    ]
  },
  // Apply recommended base only to selected app/test files
  {
    ...js.configs.recommended,
    files: ['App.tsx', 'app/**/*.{ts,tsx,js,jsx}', '__safe_tests__/**/*.{ts,tsx,js,jsx}']
  },
  {
    files: ['App.tsx', 'app/**/*.{ts,tsx,js,jsx}', '__safe_tests__/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
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
      '@typescript-eslint': tseslint
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-unused-vars': 'off',
      'no-console': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  
];