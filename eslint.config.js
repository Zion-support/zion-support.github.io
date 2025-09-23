// ESLint flat config for ESLint v9+ with React and TypeScript support
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
	// Global ignores for generated, backup, and external directories
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
			'recovered-branches/**',
			'server/**',
			'zion-os/**',
			'zion-website/**',
			'zion-ai-assistant/**',
			'zion_academy/**',
			'token/**',
			'ts_files_backup/**',
			'temp_exclude/**',
			'workflow_backups/**',
			'test_build/**',
		]
	},
	js.configs.recommended,
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: { ecmaFeatures: { jsx: true } },
			globals: { ...globals.browser, ...globals.node }
		},
		plugins: {
			react,
			'react-hooks': reactHooks
		},
		settings: { react: { version: 'detect' } },
		rules: {
			'react/react-in-jsx-scope': 'off',
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-undef': 'off'
		}
	}
];