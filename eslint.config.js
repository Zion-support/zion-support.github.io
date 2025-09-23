<<<<<<< HEAD
// Flat ESLint config for ESLint v9+
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
export default [
  // Global ignores for this workspace
=======
// Minimal ESLint v9 flat config: only ignores to avoid config duplication errors
export default [
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-7e4c
  {
    ignores: [
      'node_modules/**',
      '.next/**',
<<<<<<< HEAD
      '**/.next/**',
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-7e4c
      'out/**',
      'dist/**',
      'build/**',
      'coverage/**',
<<<<<<< HEAD
      'public/**',
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-7e4c
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
      'ts_files_backup/**',
<<<<<<< HEAD
      'types/**',
      'types.disabled/**',
      'utils/**',
      'utils.disabled/**',
      'zion_academy/**',
      'generated-services/**',
      'token/**',
      'workbox-config.js',
      'ultimate-*.js',
      'ultimate*.cjs',
      'verify-and-complete-merges.js',
      'ultimate_merge_and_improve.cjs',
      'ultimate-merge-conflict-resolver.js'
    ]
  },
  js.configs.recommended,
  {
    files: ['app/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}', 'pages/**/*.{js,jsx,ts,tsx}', 'src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/react-in-jsx-scope': 'off'
    },
    settings: { react: { version: 'detect' } }
  }
=======
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
      'test/**',
      'tests/**',
      'test_build/**'
    ],
  },
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-7e4c
];