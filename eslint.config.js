import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  // Global ignores (flat config)
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      '**/.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'automation/**',
      'apps.backup/**',
      '.temp_backup_components/**',
      'backup-problematic-files/**',
      'recovered-branches/**',
      'server/**',
      'zion-os/**',
      'zion-os.broken/**',
      'zion-os.disabled/**',
      'zion-os.corrupted/**',
      'ts_files_backup/**',
      'temp_exclude/**',
      'corrupted_backup/**',
      'pages.disabled/**',
      'pages.bak/**',
      'components.disabled/**',
      'components.disabled_full/**',
      'pages.disabled_auto/**',
      'pages.disabled_full/**',
      'pages_backup_before_cleanup/**',
      'pages.broken/**',
      'pages.corrupted',
      'pages.corrupted.*',
      'dao/**',
      'tests.disabled/**',
      'src.disabled/**',
      'src_backup_temp/**',
      'src_backup/**',
      'plugins/wallet-connector/cypress/**',
      'components/api/docs/**',
      'data/api-docs/**',
      'e2e/**',
    ],
  },
  js.configs.recommended,
  {
    files: [
      'pages/**/*.{js,jsx,ts,tsx}',
      'components/**/*.{js,jsx,ts,tsx}',
      'styles/**/*.{js,jsx,ts,tsx}',
      'providers/**/*.{js,jsx,ts,tsx}'
    ],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
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
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsPlugin
    },
    rules: {
      'no-unused-vars': 'off',
      'no-empty': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      // TypeScript handles undefined types/identifiers; avoid false positives
      'no-undef': 'off'
    }
  }
];

