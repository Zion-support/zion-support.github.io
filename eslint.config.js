// Flat ESLint config for ESLint v9+
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    // Limit linting to main app sources; ignore backups/other projects
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'public/**',
      'automation/**',
      'apps.backup/**',
      'backup/**',
      'backups/**',
      'backup-merge-conflicts/**',
      'backup-problematic-files/**',
      'recovered-branches/**',
      'server/**',
      'zion-os/**',
      'zion-website/**',
      'zion-ai-assistant/**',
      'zion_academy/**',
      'zion.app/**',
      'ts_files_backup/**',
      'src_backup/**',
      'src_backup_temp/**',
      '**/*.min.js',
      'zion-os.broken/**',
      'zion-os.disabled/**',
      'zion-os.corrupted/**',
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
      '__tests__/**',
      'tests/**',
      '__mocks__/**',
      'test/**',
      'plugins/wallet-connector/cypress/**',
      'components/api/docs/**',
      'data/api-docs/**',
      'e2e/**',
    ],
  },
  {
    files: [
      'app/**/*.{js,jsx,ts,tsx}'
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
      parser: tseslint.parser
    },
    plugins: { react, 'react-hooks': reactHooks, '@typescript-eslint': tseslint.plugin },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^(React|_)' }
      ]
    }
  }
];

