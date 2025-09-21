import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        process: 'readonly',
        console: 'readonly'
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn'
    }
  },
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'dist/',
      'build/',
      'scripts/',
      'automation/',
      'public/reports/**',
      'netlify/',
      '**/*.cjs',
      '**/*.mjs',
      '**/.scripts/**',
      '**/temp_*/**',
      '**/temp-*/**',
      '**/temp*/**',
      '**/broken*/**',
      '**/corrupted*/**',
      '**/disabled*/**',
      '**/backup*/**',
      '**/exclude*/**',
      '**/conflicted*/**',
      '**/working*/**',
      '**/essential*/**',
      '**/test_build/**',
      '**/tests/**',
      '**/utils/**',
      '**/token/**',
      '**/zion-hire-ai.tsx',
      '**/terms.tsx',
      '**/test-utils.jsx',
      '**/src_backup*/**',
      '**/supabase/**',
      '**/store/**',
      '**/stories/**',
      '**/talent/**',
      '**/__tests__/**',
      '**/components/**',
      '**/api/**',
      '**/server/**',
      '**/pages/**',
      '**/src/**',
      '**/apps.backup/**',
      '**/dao/**',
      '**/deployment/**',
      '**/deployments/**',
      '**/ecosystem*.js',
      '**/fix-*.js',
      '**/fix_*.js',
      '**/merge-*.js',
      '**/resolve-*.js',
      '**/selective-merge.js',
      '**/restore-*.js',
      '**/monitoring-*.js',
      '**/performance-*.js',
      '**/maintenance-*.js',
      '**/comprehensive-*.js',
      '**/execute-*.js',
      '**/improve-*.js',
      '**/mcp*.js',
      '**/health-endpoint.js',
      '**/hooks/**',
      '**/lib.broken/**',
      '**/offworld/**',
      '**/pages._archive_corrupted/**',
      '**/pages.bak/**',
      '**/public/**',
      '**/remote/**',
      '**/solutions/**',
      '**/src-clean/**',
      '**/zion_academy/**',
      '**/*.jsx',
      '**/*.test.js',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/.storybook/**',
      '**/advanced-*.js',
      '**/aggressive-*.js',
      '**/analyze-*.js',
      '**/build*.js',
      '**/bundle-*.js',
      '**/code-splitting-*.js',
      '**/config/**',
      '**/cypress/**',
      '**/jest*.js',
      '**/next.config*.js',
      '**/start-dev.js'
    ]
  }
];