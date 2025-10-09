import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'next-env.d.ts',
      '**/zion-website_disabled/**',
      '_app_disabled/**',
      'app_disabled/**',
      '_conflicted_disabled/**',
      '_pages_api_disabled/**',
      '_pages_disabled/**',
      'admin-api-disabled/**',
      'api-disabled/**',
      'api.disabled/**',
      'api.disabled.temp/**',
      'api-backup/**',
      'apps.backup/**',
      'automation_backup/**',
      'ai-optimization-backups/**',
      'automation_logs/**',
      'all-automations-reports/**',
      'accessibility-reports/**',
      'corrupted-files-backup/**',
      'corrupted_backup/**',
      'corrupted_files_backup_2/**',
      'content/**',
      'contracts/**',
      'components_backup/**',
      'data/**',
      'data_backup/**',
      'dao/**',
      'deployments/**',
      'disabled-api/**',
      'e2e/**',
      'factories/**',
      'hooks/**',
      'lib_backup/**',
      'services/**',
      'middleware/**',
      'automation/**',
      '**/*.test.js.skip',
      '**/*.broken',
      '**/*.bak',
      '**/*.backup',
      '**/zion-os/**',
      '**/zion-website/**',
      '**/corrupted-src-backup/**',
      '**/temp-files/**',
      '*.cjs',
      '*.js',
      '*.mjs',
      '*.test.tsx',
      '*.test.ts',
      '*.test.js',
      '*.test.jsx',
      '__tests__/**'
    ]
  },
  // Base JavaScript configuration
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
  // TypeScript configuration
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
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
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'no-console': 'warn',
    },
  },
];