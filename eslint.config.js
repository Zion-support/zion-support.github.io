import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'automation/**',
      'backups/**',
      'backup/**',
      'apps.backup/**',
      'recovered-branches/**',
      'components.apps/**',
      'components.disabled/**',
      'zion-*/**',
      '**/*.backup.*',
      '**/*backup*',
      '**/*conflict*',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['app/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tseslint.parser,
    },
    rules: {},
  },
]