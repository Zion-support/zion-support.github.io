import eslintJs from '@eslint/js'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

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
			'temp_*',
			'temp_*/**',
			'temp*/**',
			'tests/**',
			'__tests__/**',
			'__mocks__/**',
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
			'zion-os.disabled/**',
			'ts_files_backup/**',
			'ts_files_backup/**',
			'src_backup/**',
			'src_backup_all/**',
			'src_backup_temp/**',
			'utils.disabled/**',
			'temp_components.disabled/**',
			'temp_components/**',
			'temp_disabled/**',
			'test*/**',
			'components/2025-advanced-services-showcase.tsx',
			'components/2025-comprehensive-services-showcase-v2.tsx',
			'components/AI2025AdvancedAutomationShowcase.tsx',
			'components/AI2025AdvancedAnalyticsDashboard.tsx',
			'**/*.min.js']},
	eslintJs.configs.recommended,
	// Apply @typescript-eslint recommended configs
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: { parser: typescriptParser },
		plugins: { '@typescript-eslint': typescriptEslintPlugin },
		rules: {}
	},
	{
		files: ['app/**/*.{js,jsx,ts,tsx}', 'pages/**/*.{js,jsx,ts,tsx}', 'src/**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			parser: typescriptParser,
			ecmaVersion: 2021,
			sourceType: 'module',
			globals: {
				window: true,
				document: true,
				localStorage: true,
				setTimeout: true,
				clearTimeout: true,
				setInterval: true,
				clearInterval: true,
				requestAnimationFrame: true,
				cancelAnimationFrame: true,
				IntersectionObserver: true,
				HTMLSpanElement: true,
				HTMLImageElement: true,
				URL: true,
				console: true,
				process: true
			}},
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			'import': importPlugin,
			'@typescript-eslint': typescriptEslintPlugin},
		settings: { react: { version: 'detect' } },
		rules: {
			'react/react-in-jsx-scope': 'off',
			'no-console': 'warn',
			'no-unused-vars': 'off',
			'import/order': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^(React|_)' }]}}]
