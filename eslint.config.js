// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Global ignores - ignore everything except src and app directories
  {
    ignores: [
      '**/*',
      '!src/**',
      '!app/**',
      'src/pages/blog-disabled/**',
      'src/components/**',
      'src/pages/**',
      'src/content/**',
      'src/data/**',
      'src/hooks/**',
      'src/types/**',
      'src/utils/**',
      'src/config/**',
    ],
  },
  // Base JavaScript configuration (limit to app source only)
  {
    files: ['src/**/*.{js,cjs,mjs}', '**/*.{js,jsx}'],
    languageOptions: {
      globals: { ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ...js.configs.recommended,
  },
  // Simplified TypeScript configuration (non type-aware)
  {
    files: [
      'src/**/*.{ts,tsx}',
      'pages/**/*.{ts,tsx}',
      'app/**/*.{ts,tsx}',
      '**/*.{ts,tsx}',
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: { ...globals.browser },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...(reactHooks.configs.recommended?.rules || {}),
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
