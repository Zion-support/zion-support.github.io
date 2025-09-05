import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
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
      'pages.disabled_auto/'
    ]
  },
  js.configs.recommended,
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
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off',
    },
  },
];