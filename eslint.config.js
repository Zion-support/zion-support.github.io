import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        React: 'readonly',
        JSX: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn'
    }
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'out/**',
      'coverage/**',
      'build/**',
      '.next/**',
      'public/build/**',
      '*.config.js',
      '*.config.ts',
      'scripts/',
      'automation/',
      'public/reports/**',
      'netlify/',
      'ecosystem*.cjs',
      '**/*.cjs'
    ]
  }
];