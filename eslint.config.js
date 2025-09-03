import js from '@eslint/js';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import next from '@next/eslint-plugin-next';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      '@typescript-eslint': tsEslint,
      react,
      'react-hooks': reactHooks,
      '@next/next': next
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
      react: { version: 'detect' }
    }
  },
  {
    files: ['**/*.cjs'],
    languageOptions: { sourceType: 'commonjs' }
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'out/**',
      'coverage/**',
      'public/**',
      // project trees with many generated/legacy files
      'src/**',
      'pages/**',
      'tests/**',
      '__tests__/**',
      'data/**',
      'lib/**',
      'utils/**',
      'types/**',
      'scripts/**',
      'components/**',
      'api/**',
      'automation/**',
      'hooks/**',
      'e2e/**',
      'netlify/**',
      'supabase/**',
      'public/**',
      // top-level misc files
      '*.js',
      '*.jsx',
      '*.ts',
      '*.tsx',
      'temp_*/**',
      'temp_backup/**',
      'temp_broken_components/**',
      'temp_working/**',
      // backups and disabled variants
      '*backup*/**',
      '*_backup/**',
      '*.backup/**',
      '*disabled*/**',
      '*.disabled/**',
      'pages.*/**',
      'src.*/**',
      // reports
      '**/*-report.json',
      '*.report.json',
      'reports/**',
      // misc scripts/configs
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      '*.config.ts',
      '*.cjs',
      '*.mjs',
      '*.test.*',
      '.eslintrc.*',
      'jest.config.*',
      'vitest.config.*',
      'vite.config.*',
      // supabase and academy
      'zion_academy/**'
    ]
  }
];