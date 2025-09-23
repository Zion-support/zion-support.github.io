// Flat ESLint config for ESLint v9+
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
	{
		ignores: [
			'node_modules/**',
			'.next/**',
			'out/**',
			'dist/**',
			'build/**',
			'coverage/**',
			'automation/**',
			'backups/**',
			'backup/**',
			'backup-merge-conflicts/**',
			'backup-problematic-files/**',
			'apps.backup/**',
			'.temp_backup_components/**',
			'recovered-branches/**',
			'server/**',
			'temp*/**',
			'temp_*/**',
			'temp-*/**',
			'tests/**',
			'__tests__/**',
			'tests.disabled/**',
			'ts_files_backup/**',
			'zion-os/**',
			'zion-ai-assistant/**',
			'utils.disabled/**',
		],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['zion-website/src/**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: { ecmaFeatures: { jsx: true } },
			globals: { ...globals.browser, ...globals.node },
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
		},
		settings: { react: { version: 'detect' } },
	},
];