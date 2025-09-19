import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}', 'App.tsx', 'main.tsx', 'index.tsx'],
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
      'out/**',
      'public/**',
      'zion-os/**',
      'zion-website/**',
      'zion.app/**',
      'zion_academy/**',
      'automation/**',
      'backup/**',
      'backups/**',
      '**/*.backup.*',
      '**/*.disabled.*',
      '**/*.config.*',
      '**/*.log',
      '**/*.lock',
      '**/static/**',
      '**/chunks/**',
      '**/server/**',
      '**/*.cjs',
      '**/*.mjs',
      '**/scripts/**',
      '**/temp_*/**',
      '**/recovered-branches/**'
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
        process: 'readonly',
        React: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];