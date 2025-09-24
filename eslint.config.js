import eslintJs from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import globals from 'globals'

export default [
	{
		ignores: [
			'node_modules/**',
			'.next/**',
			'out/**',
			'dist/**',
			'build/**',
			'public/**',
			'automation/**',
			'temp_*/**',
			'__tests__/**',
			'__mocks__/**',
			'backup/**',
			'backup-merge-conflicts/**',
			'recovered-branches/**',
			'zion-os/**',
			'zion-website/**',
			'zion-ai-assistant/**',
			'ts_files_backup/**',
			'src_backup_all/**',
			'utils.disabled/**',
			'temp_components.disabled/**',
			'temp_components/**',
			'temp_disabled/**',
			'**/*.min.js',
		],
	},
	eslintJs.configs.recommended,
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: { parser: typescriptParser },
		plugins: { '@typescript-eslint': typescriptEslintPlugin },
		rules: {},
	},
	{
		files: ['app/**/*.{js,jsx,ts,tsx}', 'pages/**/*.{js,jsx,ts,tsx}', 'src/**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			parser: typescriptParser,
			ecmaVersion: 2021,
			sourceType: 'module',
			globals: {
				...globals.browser,
				process: 'readonly',
				console: 'readonly',
			},
		},
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			'@typescript-eslint': typescriptEslintPlugin,
			import: importPlugin,
		},
		settings: { react: { version: 'detect' } },
		rules: {
			'react/react-in-jsx-scope': 'off',
			'no-console': 'warn',
			'import/order': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^(React|_)' },
			],
		},
	},
]
