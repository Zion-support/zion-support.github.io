import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
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
      'react-refresh': reactRefresh
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
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
      '**/static/**',
      '**/*.min.js',
      // Additional ignores to avoid linting non-root projects and backup/corrupted files
      'zion-os/**',
      'zion-website/**',
      'zion-ai-assistant/**',
      'utils/**',
      'utils.disabled/**',
      // Exclude legacy src trees and backups
      'src/**',
      'src.pages.disabled/**',
      'src_backup/**',
      'src_backup_temp/**',
      'src.broken/**',
      'src-corrupted/**',
      'src.corrupted/**',
      'src/pages_backup/**',
      'src.disabled/**',
      'ts_files_backup/**',
      'types/**',
      'types.disabled/**',
      'temp-*',
      'temp_*',
      'temp/**',
      'temp-backup/**',
      'temp_backup/**',
      'temp_backup_build/**',
      'temp_backup_runtime_fix/**',
      'temp_broken_files/**',
      'temp_components/**',
      'temp_components.disabled/**',
      'temp-disabled-pages/**',
      'temp_exclude/**',
      'temp-problematic-pages/**'
    ]
  }
];