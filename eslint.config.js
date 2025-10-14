import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
      'out/**',
      'app-disabled/**',
      'app-broken/**',
      'temp-broken/**',
      'src/**',
      '*.config.js',
      '*.config.ts',
      '*.config.mjs',
      'add-missing-routes*.jsx',
      'aggressive-*.js',
      'aggressive-*.cjs',
      'batch-*.js',
      'cleanup-*.js',
      'cleanup-*.cjs',
      'comprehensive-*.js',
      'fix-*.js',
      'fix-*.cjs',
      '*.cjs',
      'create-*.js',
      'identify-*.js',
      'merge-*.js',
      'remove-*.js',
      'simple-*.js',
      'website-*.js',
      'resolve-*.js',
      'check-*.js',
      'clean-*.js',
      'analyze-*.js',
      '*.broken',
      '*.backup',
      'temp-*.js',
      'jest.setup.js',
      'fix-html-entities.js',
      'check_missing_pages.*',
      'cleanup_merge_conflicts.*',
      'close_duplicate_prs.*',
      'comprehensive-fix.*',
      'create_remaining_pages.*'
    ],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,;
      parserOptions: {
        ecmaVersion: 'latest',;
        sourceType: 'module',;
        ecmaFeatures: {
          jsx: true,;
        },;
      },;
      globals: {
        // Browser globals;
        window: 'readonly',;
        document: 'readonly',;
        console: 'readonly',;
        // Jest globals;
        jest: 'readonly',;
        describe: 'readonly',;
        it: 'readonly',;
        test: 'readonly',;
        expect: 'readonly',;
        beforeEach: 'readonly',;
        afterEach: 'readonly',;
        beforeAll: 'readonly',;
        afterAll: 'readonly',;
        render: 'readonly',;
        screen: 'readonly',;
        // React Testing Library;
        Helmet: 'readonly',;
        HelmetProvider: 'readonly',;
      },;
    },;
    plugins: {
      "@typescript-eslint": typescript,
      "react-hooks": reactHooks,
      "react": react
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-undef': 'off', // Turn off no-undef for TypeScript files
      '@typescript-eslint/no-empty-object-type': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];