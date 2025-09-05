import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [{
    "ignores": [
      'node_modules/',
      '.next/',
      'out/',
      'dist/',
      'build/',
      'coverage/',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
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
      '*.spec.tsx',
      'advanced-source-fixer.js',
      'aggressive-fixer.js',
      'analyze-missing-pages.js',
      'automation-runner.js',
      'basic-test.js',
      'build-verification.js',
      'check-syntax.js',
      'clean-conflicts.js',
      'code-quality-checker.js',
      'code-quality-improvements.js',
      'commit-and-push.js',
      '*.cjs',
      '*.mjs',
      'ecosystem.*.js',
      'jest.*.js',
      'netlify/functions/*.js'
    ]
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
      'coverage/**',
      '**/*.disabled',
      '**/*.backup',
      '**/*.bak',
      '**/*.old',
      '**/*.corrupted',
      '**/*.quarantine',
      '**/temp-backup/**',
      '**/temp_broken_files/**',
      '**/temp_working/**',
      '**/tests.disabled/**',
      '**/pages._quarantine/**',
      '**/pages.disabled/**',
      '**/components.disabled/**',
      '**/components.disabled_full/**',
      '**/src.disabled/**',
      '**/zion-os.disabled/**',
      '**/__tests__/**',
      '**/tests/**',
      '**/*.test.*',
      '**/*.spec.*'
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        HTMLElement: 'readonly',
        HTMLButtonElement: 'readonly',
        KeyboardEvent: 'readonly',
        MutationObserver: 'readonly',
        React: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        jest: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-undef': 'warn'
    }
  }
];
