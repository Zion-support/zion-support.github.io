import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';

export default [
  {ignores: [
    'dist', 
    'node_modules', 
    '.next', 
    'out',
    'automation*',
    'backup*',
    'corrupted*',
    'fix-*',
    'clean*',
    'merge*',
    'comprehensive*',
    'final*',
    'aggressive*',
    'analyze*',
    'chunk-*',
    'create*',
    'enhanced*',
    'fetch*',
    'generate*',
    'identify*',
    'improve*',
    'latest*',
    'process*',
    'resolve*',
    'setup*',
    'simple*',
    'smart*',
    'targeted*',
    'ultimate*',
    'website*',
    'accessibility*',
    'add-*',
    'check*',
    'close*',
    'middleware*',
    'performance*',
    'security*',
    'seo*',
    'site*',
    'vite*',
    'jest*',
    'tailwind*',
    'tsconfig*',
    'next*',
    'index.html',
    'index.css',
    'page_template*',
    '*.webmanifest',
    '*.toml',
    '*.example',
    '*.template',
    '*.txt',
    '*.json',
    '*.md',
    '*.mdx',
    '*.original',
    'automation_backup/**',
    'backup*/**',
    'corrupted*/**',
    'temp*/**',
    'src*/**',
    'pages*/**',
    'clean*/**',
    'problematic*/**',
    'recovered*/**',
    'ci-cd-reports/**',
    'analysis/**',
    'netlify/**',
    'zion-*/**',
    'hooks/**',
    'services/**',
    'scripts/**',
    'types/**',
    'utils/**',
    'lib.disabled/**',
    'lib/**',
    'config/**',
    'content/**',
    'contracts/**',
    'cypress/**',
    'data/**',
    'factories/**',
    'public/**',
    'tests/**',
    '__tests__/**',
    'api/**',
    'apps/**',
    'backend/**',
    'blog/**',
    'components/api/**',
    'components/apps/**'
  ]},
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react': react
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { 
          allowConstantExport: true,
          allowExportNames: ['metadata', 'viewport']
        },
      ],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'react/prop-types': 'off'
    }
  }
];