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
      'dist/**',
      'build/**',
      '.next/**',
      'node_modules/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'scripts/**',
      'automation/**',
      'temp_exclude/**',
      'src.disabled/**',
      'src.pages.disabled/**',
      'pages-disabled/**',
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
      'zion-film/**',
      'zion-ai-assistant/**',
      'backup-problematic-files/**',
      'broken_files_backup/**',
      'corrupted-files-backup/**',
      'temp-backup/**',
      'temp_exclude/**',
      'src_backup/**',
      'src_backup_temp/**',
      'recovered-branches/**',
      'workflow_templates/**',
      'automation_logs/**',
      'automation_backup/**',
      'apps.backup/**',
      'apps.disabled/**',
      'api.disabled/**',
      'api.disabled.temp/**',
      'api.backup/**',
      'components.disabled/**',
      'components.disabled_full/**',
      'contracts.disabled/**',
      'cypress_backup/**',
      'cypress.disabled/**',
      'data_backup/**',
      'data.disabled/**',
      'tests.disabled/**',
      'zion-os.disabled/**',
      'temp_exclude/**',
      'test_build/**',
      'cache/**',
      'automation/**',
      'scripts/**',
      '*.backup.*',
      '*.disabled.*',
      '*.temp.*',
      '*.old.*',
      '*.bak.*',
      '*.backup',
      '*.disabled',
      '*.temp',
      '*.old',
      '*.bak'
    ]
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020
      },
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
      'jsx-a11y': jsxA11y
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];