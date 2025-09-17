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
      'build',
      'coverage',
      '**/.next/**',
      '**/cypress/**',
      '**/__tests__/**',
      '**/*.test.*',
      '**/*.spec.*',
      '**/generated/**',
      '**/artifacts/**',
      '**/backup/**',
      '**/backups/**',
      '**/automation/**',
      '**/dao/**',
      '**/server/**',
      '**/zion-*/**',
      '**/token/**',
      '**/temp_*/**',
      '**/temp-*/**',
      '**/test*/**',
      '**/tests*/**',
      '**/utils.disabled/**',
      '**/ultimate-*/**',
      '**/verify-*/**',
      '**/workbox-*/**',
      '**/src_backup_temp/**',
      '**/temp-backup/**',
      '**/temp-problematic-pages/**',
      '**/utils/**',
      '**/store/**',
      '**/tailwind.config.ts',
      '**/src_backup/**',
      '**/src/pages/**',
      '**/src/routes/**',
      '**/src/services/**',
      '**/src/setupTests.ts',
      '**/src/stubs/**',
      '**/src/components/**',
      '**/src/data/**',
      '**/api.disabled/**',
      '**/api/**',
      '**/app-disabled/**',
      '**/app-minimal/**',
      '**/app-optimizer.js',
      '**/src.disabled/**',
      '**/zion_academy/**',
      '**/zion.app/**',
      '**/zion-os/**',
      '**/zion-website/**',
      '**/zion_academy/**',
      '**/test-*.js',
      '**/ultimate-*.js',
      '**/ultimate-*.cjs',
      '**/systematic-*.cjs',
      '**/start-*.js',
      '**/syntax-*.js',
      '**/verify-*.js',
      '**/workbox-*.js',
      '**/vite.config-backup.ts',
      '**/vitest.config.ts',
      '**/types/**',
      '**/start-all-automations.js',
      '**/test-app.tsx',
      '**/test-layout.tsx'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
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
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    }
  }
]