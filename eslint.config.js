import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.js'],
    ignores: [
      'dist', 
      'node_modules',
      'zion-os.disabled/**',
      'zion-os/**',
      'zion.app/**',
      'zion_academy/**',
      'src_backup_temp/**',
      'temp_exclude/**',
      'test_build/**',
      '**/*.backup',
      '**/*.conflicted',
      '**/*.broken',
      '**/.next/**',
      '**/build/**',
      '**/coverage/**',
      '**/cache/**',
      '**/artifacts/**',
      '**/backup*/**',
      'automation-logs/**',
      'automation-reports/**',
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: [
      'dist', 
      'node_modules',
      'zion-os.disabled/**',
      'zion-os/**',
      'zion.app/**',
      'zion_academy/**',
      'src_backup_temp/**',
      'temp_exclude/**',
      'test_build/**',
      '**/*.backup',
      '**/*.conflicted',
      '**/*.broken',
      '**/.next/**',
      '**/build/**',
      '**/coverage/**',
      '**/cache/**',
      '**/artifacts/**',
      '**/backup*/**',
      'automation-logs/**',
      'automation-reports/**',
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: false,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
    },
  },
]