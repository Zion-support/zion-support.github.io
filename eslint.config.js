// Flat ESLint config for ESLint v9+
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
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
			'backup/**',
			'backups/**',
			'backup-merge-conflicts/**',
			'backup-problematic-files/**',
			'apps.backup/**',
			'app_backup/**',
			'app-disabled/**',
			'app-minimal/**',
			'components.disabled/**',
			'components.disabled_full/**',
			'pages-disabled/**',
			'pages.bak/**',
			'pages_backup_before_cleanup/**',
			'pages.broken/**',
			'pages.corrupted*',
			'recovered-branches/**',
			'server/**',
			'zion-os/**',
			'zion-website/**',
			'zion-ai-assistant/**',
			'ts_files_backup/**',
			'src_backup/**',
			'src_backup_temp/**',
			'src/**/*.backup/**',
			'src/**/*.bak/**',
			'src/**/*.disabled/**',
			'styles_backup/**',
			'workflow_backups/**',
			'tests.disabled/**'
		]
	},
	js.configs.recommended,
	{
		files: ['app/**/*.{js,jsx}', 'components/**/*.{js,jsx}', 'pages/**/*.{js,jsx}', 'src/**/*.{js,jsx}'],
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
			'no-console': 'warn',
			'react/react-in-jsx-scope': 'off'
		}
	}
];