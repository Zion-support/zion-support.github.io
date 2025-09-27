import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
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
        window: "readonly",
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        navigator: 'readonly',
        PerformanceObserver: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        JSX: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'warn',
      'no-undef': 'off',
      'no-extra-semi': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    ignores: [
      "node_modules/**",
      'dist/**',
      'build/**',
      '.next/**',
      'temp-broken-components/**',
      '**/*.min.js',
      '**/*.bundle.js',
      'app_disabled/**',
      'app-disabled/**',
      'app.disabled/**',
      'components.disabled/**',
      'components_disabled/**',
      'pages.disabled/**',
      'recovered-branches/**',
      'coverage/**',
      'scripts/**',
      'services/**',
      'data/**',
      'broken_components/**',
      'zion-website/**',
      'zion-os/**',
      'zion-os.disabled/**',
      'zion_academy/**',
      'zion.app/**',
      'public/**',
      'next-env.d.ts',
      'tailwind.config.js',
      'app.conflicted.*/**',
      'pages/**',
      'cypress/**',
      'server/**',
      'src/pages.disabled/**',
      'components/layout/**',
      'components/main/**',
      'components/sections/**',
      'components/ui/**'
    ]
  }
];