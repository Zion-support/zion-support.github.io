import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignore disabled directories
  {
    ignores: [
      'admin-api-disabled/**',
      'api-disabled/**',
      'api.disabled/**',
      'api-backup/**',
      'components-disabled/**',
      'components.disabled/**',
      'components.disabled_full/**',
      'automation_backup/**',
      'backup*/**',
      '*-disabled/**',
      '*.disabled/**',
      '*.broken',
      '*.backup',
      'temp-files/**',
      'cache/**',
      'dist/**',
      'node_modules/**',
      'analyze-*.js',
      'check-*.js',
      'clean-*.js',
      'fix-*.js',
      '*.cjs',
      '*.js.broken',
      'corrupted-*/**',
      'clean-build/**',
      'automation/backups/**',
      'apps.backup/**',
      'netlify/functions-backup/**',
      'comprehensive-*.js',
      'comprehensive_*.js',
      'chunk-*.js',
      'automation-runner.js',
      'check_open_prs*.js',
      'close-duplicate-prs.js',
      'code-quality-improvements.js',
      'commit-and-push.js',
      'cleanup-*.js',
      'config/meta-tags.js',
      'contracts/scripts/deploy.ts',
      'data/**',
      'data_backup/**',
      'disabled-api/**',
      'dao/**',
      'extension/**',
      'hooks/**',
      'lib/**',
      '*-fix*.js',
      '*-merger*.js',
      '*-pr*.js',
      '*-operations*.js',
      '*-processor*.js',
      '*-manager*.js',
      '*-script*.js',
      '*-improve*.js',
      '*-enhanced*.js',
      '*-focused*.js',
      '*-latest*.js',
      '*-final*.js',
      '*-execute*.js',
      '*-fetch*.js',
      '*-git*.js',
      '*-github*.js',
      'debug-*.js',
      'improve-*.js',
      'jest.setup.*',
      'execute-*.js',
      'final_*.js',
      'fix_*.js',
      'fix-*.js',
      'fix-*.jsx'
    ],
  },
  // Base JavaScript configuration
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
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
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
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
