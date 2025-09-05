import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

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
      'scripts/',
      'automation/',
      'deployments/',
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
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];