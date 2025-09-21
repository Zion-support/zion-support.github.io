import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
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
      'react-refresh': reactRefresh
    },
    rules: {
      'no-unused-vars': 'warn',
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
      '**/__tests__/**',
      '**/src_backup*/**',
      '**/apps.backup/**',
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
      '**/lib.broken/**',
      '**/offworld/**',
      '**/pages._archive_corrupted/**',
      '**/pages.bak/**',
      '**/remote/**',
      '**/solutions/**',
      '**/src-clean/**',
      '**/zion_academy/**',
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
      '**/cypress/**',
      '**/jest*.js',
      '**/next.config*.js',
      '**/start-dev.js'
    ]
  }
];