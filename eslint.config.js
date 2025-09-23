<<<<<<< HEAD
<<<<<<< HEAD
// ESLint flat config for ESLint v9. Keep minimal to avoid crashes.
=======
// Flat ESLint config for ESLint v9+
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

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
=======
// Minimal ESLint flat config for ESLint v9: ignore non-app files and backups.
export default [
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-71e0
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      '**/.next/**',
      'out/**',
      'dist/**',
      'build/**',
<<<<<<< HEAD
      'coverage/**',
=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-71e0
      'public/**',
      'automation/**',
      'apps.backup/**',
<<<<<<< HEAD
=======
      'app/components/**',
      'app/**/*.disabled/**',
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-c0e1
      'backup/**',
      'backups/**',
      'backup-merge-conflicts/**',
      'backup-problematic-files/**',
<<<<<<< HEAD
<<<<<<< HEAD
      'api/**',
      'server/**',
      'netlify/**',
<<<<<<< HEAD
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
=======
      'recovered-branches/**',
      'server/**',
      'temp_*/**',
      'temp-*/**',
      'temp/**',
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-c0e1
      'temp_backup/**',
      'ts_files_backup/**',
      'zion-os/**',
<<<<<<< HEAD
      'zion-os.*',
      'zion-website/**',
      'zion-ai-assistant/**',
      'zion_academy/**',
      'services/**',
      'solutions/**',
      'solutions.disabled/**',
=======
      // Backups and temp content
      'automation/**',
      'apps.backup/**',
      '.temp_backup_components/**',
      'backup-problematic-files/**',
      'backup/**',
      'backups/**',
      'backup-merge-conflicts/**',
      'recovered-branches/**',
      'ts_files_backup/**',
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-71e0
      'src_backup/**',
      'src_backup_temp/**',
      'src/**/*.backup/**',
      'src/**/*.bak/**',
<<<<<<< HEAD
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
=======
      'temp_*/**',
      'temp-*/**',
      'temp/**',
      'temp_backup/**',
      'temp_broken_files/**',
      'temp_components/**',
      'temp_components.disabled/**',
      'temp_disabled/**',
      'temp-disabled-pages/**',
      'temp_exclude/**',
      'temp-problematic-pages/**',
      'temp_working/**',
      // Disabled/alt app trees
      'pages.disabled/**',
      'pages.bak/**',
      'pages_backup/**',
      'pages-backup/**',
      'pages.blog.disabled/**',
      'pages.__backup/**',
      'pages._archive_corrupted/**',
      'pages._quarantine/**',
      'pages*/**',
      'components.disabled/**',
      'components.disabled_full/**',
      'hooks.disabled/**',
      'lib.disabled/**',
      'lib_backup/**',
      'styles_backup/**',
      'services_backup/**',
      // Other projects and servers
      'server/**',
      'services/**',
      'solutions/**',
      'solutions.disabled/**',
      'supabase/**',
      'zion-os/**',
      'zion-os.broken/**',
      'zion-os.disabled/**',
      'zion-os.corrupted/**',
      'zion-website/**',
      'zion-ai-assistant/**',
      // Misc
      '**/*.min.js',
      '**/*.cjs',
      '*.config.js',
      '*.config.ts'
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-71e0
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
=======
      'zion-website/**'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['app/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    settings: { react: { version: 'detect' } },
    rules: {
      'no-unused-vars': 'off',
      'no-empty': 'off',
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-c0e1
  }
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2af7
];