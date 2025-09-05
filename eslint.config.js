import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'dist/',
      'build/',
      'coverage/',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
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
      'pages.disabled_auto/',
      'automation/**',
      'automation_backup/**',
      'scripts/**',
      'pm2-automation/**',
      'pm2/**',
      'data_backup/**',
      'api-backup/**',
      'netlify/**',
      'tests/**',
      '__tests__/**',
      '*.js',
      '*.mjs',
      'pages._archive_corrupted/**',
      'pages.disabled.full/**',
      'ai-optimization-backups/**',
      'fix_typescript_syntax_errors.jsx'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.cjs', '**/scripts/**/*.js', '**/automation/**/*.js', '**/pm2/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        console: 'readonly',
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-undef': 'error'
    }
  },
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
      'react': react,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-undef': 'off',
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
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
    },
  }
];