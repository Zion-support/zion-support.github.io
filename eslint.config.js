import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'

export default [
  {
    ignores: [
      'dist', 
      'node_modules', 
      '.next', 
      'build', 
      'coverage', 
      '*.config.js', 
      '*.config.ts',
      'zion-os/**',
      'zion-website/**',
      'zion.app/**',
      'zion_academy/**',
      'backup-problematic-files/**',
      'recovered-branches/**',
      'deployments/**',
      'automation/**',
      'scripts/**',
      'src-corrupted/**',
      'src_backup_temp/**',
      'zion-os.disabled/**',
      'temp_conflicts/**',
      'temp_disabled/**',
      'temp_working/**',
      'test*/**',
      'tests/**',
      'token/**',
      'types/**',
      'utils/**',
      'store/**',
      'talent/**',
      '**/start-*.js',
      '**/syntax-*.js',
      '**/ultimate-*.js',
      '**/verify-*.js',
      '**/workbox-*.js',
      '**/vite.config-backup.*',
      '**/*.backup',
      '**/*.disabled',
      '**/*.corrupted',
      '**/*.test.*',
      '**/*.spec.*',
      '**/test-*',
      '**/*-test.*',
      '**/temp*',
      '**/backup*',
      '**/recovered*',
      '**/deployment*',
      '**/automation*',
      '**/scripts*'
    ]
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error'
    }
  }
]