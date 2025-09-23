<<<<<<< HEAD
// ESLint flat config for ESLint v9. Keep minimal to avoid crashes.
=======
// Flat ESLint config for ESLint v9+
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-0efa
export default [
<<<<<<< HEAD
	{
		ignores: [
			'node_modules/**',
			'.next/**',
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
=======
  // Global ignores for this workspace
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      '**/.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'public/**',
      'automation/**',
      'apps.backup/**',
      'backup/**',
      'backups/**',
      'backup-merge-conflicts/**',
      'backup-problematic-files/**',
<<<<<<< HEAD
      'api/**',
      'server/**',
      'netlify/**',
      'app_backup/**',
      'app-disabled/**',
      'app-minimal/**',
      'apps.backup/**',
      'components.disabled/**',
      'components.disabled_full/**',
      'pages-disabled/**',
      'pages.bak/**',
      'pages_backup_before_cleanup/**',
      'pages.broken/**',
      'pages.corrupted*',
      'recovered-branches/**',
      'temp_backup/**',
      'temp_exclude/**',
      'tests.disabled/**',
      'ts_files_backup/**',
      'zion-os/**',
      'zion-os.*',
      'zion-website/**',
      'zion-ai-assistant/**',
      'zion_academy/**',
      'services/**',
      'solutions/**',
      'solutions.disabled/**',
      'src_backup/**',
      'src_backup_temp/**',
      'src/**/*.backup/**',
      'src/**/*.bak/**',
      'src/**/*.disabled/**',
      'styles_backup/**',
      'workflow_backups/**',
      'tests/**',
      'test/**',
      'test_build/**',
      '**/jest.setup.*',
      '**/*.min.js'
=======
      'recovered-branches/**',
      'server/**',
      'zion-os/**',
      'zion-website/**',
      'zion-ai-assistant/**',
      'ts_files_backup/**',
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
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-0efa
    ]
  },
  js.configs.recommended,
  {
    files: ['app/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}', 'pages/**/*.{js,jsx,ts,tsx}', 'src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
<<<<<<< HEAD
      parser: tsParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node }
=======
      parserOptions: { ecmaFeatures: { jsx: true } }
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-0efa
    },
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    settings: { react: { version: 'detect' } },
    rules: {
<<<<<<< HEAD
      'no-empty': 'off',
      'no-console': 'warn',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
=======
      'react/react-in-jsx-scope': 'off'
    },
    settings: { react: { version: 'detect' } }
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-0efa
  }
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2af7
];