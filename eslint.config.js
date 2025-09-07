import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  js.configs.recommended,
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ),
  {
    ignores: [
      '**/temp_*/**',
      '**/temp-*/**',
      '**/temp*/**',
      '**/backup*/**',
      '**/corrupted*/**',
      '**/disabled*/**',
      '**/__backup*/**',
      '**/src_backup/**',
      '**/src.disabled/**',
      '**/pages.disabled*/**',
      '**/solutions.disabled/**',
      '**/zion-os.disabled/**',
      '**/zion_academy/**',
      '**/zion-website/**',
      '**/zion-os/**',
      '**/test*/**',
      '**/tests/**',
      '**/tools/**',
      '**/types/**',
      '**/utils/**',
      '**/supabase/**',
      '**/zion-ai-assistant/**',
      '**/dist/**',
      '**/build/**',
      '**/node_modules/**',
      '**/*.cjs',
      '**/*.js',
      '**/*.mjs',
      '**/start-dev.js',
      '**/syntax-fixer.js',
      '**/ultimate-fix.js',
      '**/ultimate-merge-conflict-resolver.js',
      '**/test-build.js',
      '**/test-next.js',
      '**/test-utils.jsx',
      '**/test_build/**',
      '**/test-cleanup-script.cjs',
      '**/test-suite.cjs',
      '**/test-all-automation.cjs',
      '**/system-monitor.cjs',
      '**/tools/repair-syntax.cjs',
      '**/ultimate-final-fix.cjs',
      '**/vite.config.ts',
      '**/vitest.config.ts',
      '**/tailwind.config.js',
      '**/postcss.config.js'
    ]
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/no-unescaped-entities': 'error',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error'
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
];