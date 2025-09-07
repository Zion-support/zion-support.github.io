const js = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');
const globals = require('globals');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'out/**',
      'build/**',
      'public/**',
      // backups and temp
      'backup/**',
      'backup-*/**',
      'broken*/**',
      'corrupted*/**',
      'recovered-branches/**',
      'temp*/**',
      'temp_*/*',
      'temp-*/**',
      '**/temp*/**',
      'pages.bak/**',
      'pages.broken/**',
      'pages.corrupted.*/**',
      'pages.disabled*/**',
      'pages.old/**',
      'pages_backup*/**',
      'pages_backup/**',
      'pages_backup_conflicts/**',
      'pages-quarantine/**',
      'pages._quarantine/**',
      // disabled variants
      'components.disabled*/**',
      'api.disabled/**',
      'api-disabled/**',
      'lib_backup/**',
      'lib.broken/**',
      'lib.disabled/**',
      'src.pages.disabled*/**',
      'src.broken/**',
      'src.corrupted/**',
      'src_backup*/**',
      'src.disabled/**',
      'src_disabled_*/**',
      // sibling projects
      'zion*/**',
      'zion-os/**',
      'zion-website/**',
      'zion-ai-assistant/**',
      // tests and generated
      '__tests__/**',
      'tests/**',
      'test-*/**',
      'test-minimal/**',
      'test-next/**',
      'test_build/**',
      // configs or non-source
      'pm2-automation/**',
      'automation/**',
      'scripts/**',
      // problematic file patterns
      '**/*.cjs',
      '**/*.mjs'
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: false,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
    },
  },
  {
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.jest,
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
    },
  },
];