import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint
    },
    rules: {
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  },
  // Relax certain rules only for TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // Prevent false positives on TS types like RequestInit, DOM globals, etc.
      'no-undef': 'off'
    }
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      '**/.next/**',
      'out/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.ts',
      'scripts/**',
      'automation/**',
      'public/**',
      'netlify/**',
      'ecosystem*.cjs',
      '**/*.cjs',
      'zion-os.disabled/**',
      'zion-website/.next/**',
      'zion-os/.next/**',
      'zion.app/**',
      'zion_academy/**',
      // Additional ignores to avoid linting backups/alt projects
      'ts_files_backup/**',
      'src.broken/**',
      'src-corrupted/**',
      'src.corrupted/**',
      'src.disabled/**',
      'src/pages_backup/**',
      'pages_backup/**',
      'tests/**',
      '__tests__/**',
      'test/**',
      'tests.disabled/**',
      'test_build/**',
      'types/**',
      'types.disabled/**',
      'utils.disabled/**',
      'zion-os/**',
      'zion-website/**',
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
      'src_backup/**',
      'src_backup_temp/**',
      'services_backup/**',
      'styles_backup/**',
      'workflow_backups/**',
      // Individual utility scripts that are not part of app linting
      'workbox-config.js',
      'verify-and-complete-merges.js',
      'ultimate-fix.js',
      'ultimate-merge-conflict-resolver.js',
      '**/static/**',
      '**/*.min.js'
    ]
  }
];