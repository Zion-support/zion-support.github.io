import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import next from '@next/eslint-plugin-next';

export default [
  js.configs.recommended,
  {_files: ['**/*.{js, _jsx, _ts, _tsx}'],
    languageOptions: {_parser: typescriptParser, _parserOptions: {
        ecmaVersion: 'latest', _sourceType: 'module', _ecmaFeatures: {
          jsx: true, },
      },
      globals: {_// Browser globals
        window: 'readonly', _document: 'readonly', _console: 'readonly', _localStorage: 'readonly', _sessionStorage: 'readonly', _setTimeout: 'readonly', _clearTimeout: 'readonly', _setInterval: 'readonly', _clearInterval: 'readonly', _fetch: 'readonly', _process: 'readonly', _// DOM types
        Element: 'readonly', _HTMLElement: 'readonly', _HTMLInputElement: 'readonly', _HTMLTextAreaElement: 'readonly', _HTMLSelectElement: 'readonly', _HTMLDivElement: 'readonly', _MouseEvent: 'readonly', _KeyboardEvent: 'readonly', _Node: 'readonly', _PerformanceObserver: 'readonly', _PerformanceNavigationTiming: 'readonly', _PerformanceEventTiming: 'readonly', _LayoutShift: 'readonly', _performance: 'readonly', _IntersectionObserver: 'readonly', _IntersectionObserverEntry: 'readonly', _// React
        React: 'readonly', _// Jest/Testing globals
        describe: 'readonly', _it: 'readonly', _test: 'readonly', _expect: 'readonly', _beforeEach: 'readonly', _afterEach: 'readonly', _beforeAll: 'readonly', _afterAll: 'readonly', _jest: 'readonly', },
    },
    plugins: {_'@typescript-eslint': typescript, _react: react, _'react-hooks': reactHooks, _'@next/next': next, },
    rules: {_...typescript.configs.recommended.rules, _...react.configs.recommended.rules, _...reactHooks.configs.recommended.rules, _...next.configs.recommended.rules, _'no-unused-vars': 'warn', _'no-console': 'warn', _'prefer-const': 'error', _'no-var': 'error', _'react/prop-types': 'off', _'react/react-in-jsx-scope': 'off', _'@typescript-eslint/no-unused-vars': 'warn', _'@typescript-eslint/no-explicit-any': 'warn', },
    settings: {_react: {
        version: 'detect', },
    },
  },
  {_files: ['**/*.cjs'], _languageOptions: {
      sourceType: 'commonjs', _globals: {
        // Node.js globals
        process: 'readonly', _console: 'readonly', _require: 'readonly', _module: 'readonly', _exports: 'readonly', __dirname: 'readonly', __filename: 'readonly', _global: 'readonly', _Buffer: 'readonly', _setTimeout: 'readonly', _clearTimeout: 'readonly', _setInterval: 'readonly', _clearInterval: 'readonly', _setImmediate: 'readonly', _clearImmediate: 'readonly', },
    },
  },
  {_ignores: [
      // Node/build outputs
      'node_modules/**', _'.next/**', _'dist/**', _'build/**', _'out/**', _'coverage/**', _// Large/legacy sources and disabled dirs
      'src/**/src.corrupted/**', _'src/**/src.disabled/**', _'src/**/src.broken/**', _'src/**/src.pages.disabled/**', _'solutions.disabled/**', _'components.disabled/**', _'components.corrupted/**', _'hooks/**/hooks.disabled/**', _'lib.disabled/**', _'lib/**/lib.corrupted/**', _'zion-os.disabled/**', _'zion_academy/**', _'contracts.disabled/**', _'corrupted-files-backup/**', _'corrupted_files_backup_2/**', _'cypress.disabled/**', _'cypress_backup/**', _'data/**', _'e2e/**', _'pages.disabled/**', _'pages.disabled_backup/**', _'pages_backup/**', _'supabase/**', _'types/**', _'types.disabled/**', _'utils/**', _// Tests and mocks
      '__tests__/**', _'tests/**', _'tests.disabled/**', _'*.test.*', _// Temp and backups
      'backup/**', _'backup-pages/**', _'pages-backup/**', _'lib_backup/**', _'data_backup/**', _'styles_backup/**', _'api-backup/**', _'automation_backup/**', _'ai-optimization-backups/**', _'ai-analysis-reports/**', _'optimization-reports/**', _'public/reports/**', _'temp_backup/**', _'temp_broken_components/**', _'temp_working/**', _'temp_*/**', _'backup-merge-conflicts/**', _'deployments/**', _'deployment/**', _'server/**', _'services/**', _// Scripts/configs and CJS files not intended for lint
      'scripts/**', _'automation/**', _'netlify/**', _'*.config.js', _'*.config.cjs', _'*.config.mjs', _'**/*.cjs', _// Public assets/scripts
      'public/**', _// Root-level noisy files
      'api/**', _'*.js', _'*.ts', _'*.tsx', _'*.jsx', _'jest.config.*', _'fix-*.js', _'fix-*.jsx', _// Misc root configs that were being linted
      '.eslintrc.js', _'.eslintrc.cjs', _'.eslintrc.disabled.js', _'.prettierrc.js', _// Page backups
      'pages.__backup/**', _'pages-disabled/**', _'pages.disabled_auto/**', _], },
];
