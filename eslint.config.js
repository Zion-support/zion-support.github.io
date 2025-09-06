import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import next from '@next/eslint-plugin-next';

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
          jsx: true,
        },
      },
      globals: {
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        Buffer: 'readonly',
        console: 'readonly',
        process: 'readonly',
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
        setImmediate: 'readonly',
        clearImmediate: 'readonly',
        PerformanceEntry: 'readonly',
        dataLayer: 'readonly',
        gtag: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      '@next/next': next,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...next.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@next/next/no-html-link-for-pages': 'warn',
      'no-console': 'warn',
      'no-unused-vars': 'off', // Use TypeScript version instead
      'no-undef': 'off', // TypeScript handles this
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'build/',
      'dist/',
      '*.config.js',
      '*.config.ts',
      'scripts/',
      'automation/',
      'netlify/',
      'src/',
      'apps/',
      'temp_*/',
      'corrupted_*/',
      'temp-exclude/',
      'temp_conflicts/',
      'apps.backup/',
      'pages_minimal/',
      '*.backup.*',
      '*.cjs',
      '*.js',
      '*.mjs',
    ],
  },
];