import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
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
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  },

  // Chrome Extension files
  {
    files: ["extension/**/*.{js,ts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        chrome: "readonly"
      }
    },
    rules: {
      "no-console": "off"
    }
  },

  // Service Worker files
  {
    files: ["public/service-worker.js", "**/sw.js", "**/*service-worker*.js"],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        workbox: "readonly",
        importScripts: "readonly",
        self: "readonly",
        clients: "readonly",
        caches: "readonly"
      }
    },
    rules: {
      "no-console": "off",
      "no-redeclare": "off" // Allow workbox to be redeclared in service worker context
    }
  },

  // Jest setup files
  {
    files: ["tests/jest.setup.ts", "**/*jest.setup*"],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
        jest: "readonly",
        global: "readonly"
      }
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-undef': 'error'
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
      '**/*.cjs'
    ]
  }
];