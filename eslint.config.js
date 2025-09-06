import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactPlugin from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'build/',
      'dist/',
      '*.config.js',
      '*.config.ts',
      'scripts/',
      'automation/',
      'netlify/',
      'src/',
      'apps/'
    ]
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        KeyboardEvent: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'react-hooks': reactHooksPlugin,
      'react': reactPlugin,
      '@next/next': nextPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@next/next/no-html-link-for-pages': 'warn',
      'no-undef': 'off',
      'no-console': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'warn'
    }
  }
];