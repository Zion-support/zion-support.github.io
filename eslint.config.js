<<<<<<< HEAD
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
=======

import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import js from '@eslint/js';
>>>>>>> origin/cursor/delete-old-data-records-6bba

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
<<<<<<< HEAD
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
=======
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
>>>>>>> origin/cursor/delete-old-data-records-6bba
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
<<<<<<< HEAD
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        location: 'readonly',
        performance: 'readonly',
        addEventListener: 'readonly',
        removeEventListener: 'readonly',
        requestAnimationFrame: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        // Node.js globals
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        global: 'readonly',
        // React
        React: 'readonly',
        JSX: 'readonly',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
<<<<<<< HEAD
      'out/**',
      'coverage/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'scripts/**',
      'automation/**',
      'backup-merge-conflicts/**',
      '**/*.backup.*',
      '**/*.old.*',
      '**/*.disabled.*',
      '**/*.broken.*',
      '**/*.corrupted.*',
      '**/*.temp.*',
      '**/*.test.*',
      '**/*.spec.*',
      '**/performance-*.txt',
      '**/zion-os/**',
      '**/zion-website/**',
      '**/zion-academy/**',
      '**/zion-film/**',
      '**/zion-ai-assistant/**',
      '**/*.min.js',
      '**/*.bundle.js',
      '**/public/**',
      '**/static/**',
    ],
  },
];
=======

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
