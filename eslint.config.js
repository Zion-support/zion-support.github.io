
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {

  },
  {
import js from '@eslint/js';
import next from 'eslint-config-next';

export default [
  // Include Next.js recommended flat config
  ...next,
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        PerformanceObserver: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'prefer-const': 'warn',
    },
    ignores: [
      'pages-*/**',
      'pages_*/**',
      'pages.*/*',
      'netlify/**',
      'pm2-automation/**',
      'protocol/**',
      'lint-target/**',
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',

      'vite.config.*',
      'tailwind.config.*',
      'postcss.config.*',
      'public/**',
      'build/**',
      'coverage/**',
      '*.backup.*',
      'temp_*/**',
      'src_backup/**',
      'src.disabled/**',
      'src.broken/**',
    ],
  },
];
      'out/**',
      'coverage/**',
    ],
  },
];

];
