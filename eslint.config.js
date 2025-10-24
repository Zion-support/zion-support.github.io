<<<<<<< HEAD
import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
export default [
  js.configs.recommended
  {
    files: ['**/*.{js,jsx,ts,tsx}']
    ignores: [
      'node_modules/**'
      'dist/**'
      'build/**'
      '.next/**'
      'out/**'
      '*.config.js'
      '*.config.ts'
      '*.config.mjs'
      'add-missing-routes*.jsx'
      'aggressive-*.js'
      'aggressive-*.cjs'
      'batch-*.js'
      'cleanup-*.js'
      'cleanup-*.cjs'
      'comprehensive-*.js'
      'fix-*.js'
      'fix-*.cjs'
      '*.cjs'
      'create-*.js'
      'identify-*.js'
      'merge-*.js'
      'remove-*.js'
      'simple-*.js'
      'website-*.js'
      'resolve-*.js'
      'check-*.js'
      'clean-*.js'
      'analyze-*.js'
      '*.broken'
      '*.backup'
      'temp-*.js'
      'analyze-*.js'
      'check-*.js'
      'clean-*.js'
      'jest.setup.js'
      'app-broken/**',
    'app-disabled/**'
  ]
    languageOptions: {,
    ecmaVersion: 'latest'
      sourceType: 'module',
    globals: {
        window: 'readonly',
    document: 'readonly'
        console: 'readonly',
    process: 'readonly'
        global: 'readonly',
    HTMLElement: 'readonly'
        Event: 'readonly',
    KeyboardEvent: 'readonly'
        MediaQueryListEvent: 'readonly',
    PerformanceObserver: 'readonly'
        PerformanceNavigationTiming: 'readonly',
        PerformanceEntry: 'readonly',
        PerformanceResourceTiming: 'readonly',
        Performance: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLSelectElement: 'readonly',
        HTMLImageElement: 'readonly',
        Element: 'readonly',
        IntersectionObserver: 'readonly',
        IntersectionObserverEntry: 'readonly',
        IntersectionObserverInit: 'readonly',
        Image: 'readonly',
        Storage: 'readonly',
        Headers: 'readonly',
        Response: 'readonly',
        fetch: 'readonly',
        navigator: 'readonly',
        gtag: 'readonly',
        requestAnimationFrame: 'readonly',
        NodeJS: 'readonly',
        jest: 'readonly',
        Console: 'readonly',
        Window: 'readonly',
        setTimeout: 'readonly',
    clearTimeout: 'readonly'
        setInterval: 'readonly',
    clearInterval: 'readonly'
        performance: 'readonly',
    require: 'readonly'
        module: 'readonly',
    exports: 'readonly'
        fs: 'readonly'}
      parser: typescriptParser,
    parserOptions: {
        ecmaFeatures: {,
    jsx: true}
      }
    }
    plugins: {
  '@typescript-eslint': typescript
      'react': react
      'react-hooks': reactHooks
      'react-refresh': reactRefresh
}
    rules: {
      'no-console': 'off'
      'no-unused-vars': 'off'
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }]
      'react/react-in-jsx-scope': 'off'
      'react/prop-types': 'off'
      'react-hooks/rules-of-hooks': 'error'
      'react-hooks/exhaustive-deps': 'warn'
      'react-refresh/only-export-components': 'warn'
    }
    settings: {,
    react: {
        version: 'detect'}
    },
    }
  ]
=======
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
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react': react,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true, 
          allowExportNames: ['metadata', 'viewport', 'useAnalytics', 'AnalyticsProvider'] 
        }
      ],
      '@typescript-eslint/no-unused-vars': ['error', { 
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'off',
      'no-unused-vars': ['error', { 
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      }],
      'prefer-const': 'error',
      'no-var': 'error',
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['**/AnalyticsProvider.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off'
    }
  },
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}', '**/setupTests.{js,ts,jsx,tsx}', '**/jest.setup.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
>>>>>>> 29d49925dca88a534c75f2643000c6a1ecf43fea
