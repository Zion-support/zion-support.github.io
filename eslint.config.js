import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '**/*.cjs',
      '**/*.mjs',
      '**/build-*.js',
      '**/check-*.js',
      '**/clean-*.js',
      '**/cleanup-*.js',
      '**/comprehensive-*.js',
      '**/final-*.js',
      '**/fix-*.js',
      '**/app-broken/**',
      '**/app-disabled/**',
      '**/__tests__/**',
      '**/src/**',
      '**/temp-disabled/**',
      '**/scripts/**',
      '**/*.setup.js',
      '**/resolve*.js',
      '**/tailwind.config.js',
      '**/vite-env.d.ts'
    ]
  },
  js.configs.recommended,
  {
    ignores: ['dist/**', 'node_modules/**', 'build/**', 'out/**'],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        // Jest globals
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        render: 'readonly',
        screen: 'readonly',
        // React Testing Library
        Helmet: 'readonly',
        HelmetProvider: 'readonly',
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      "react": react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-undef': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];