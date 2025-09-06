import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
<<<<<<< HEAD
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescript from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
<<<<<<< HEAD
    files: ['**/*.{js,jsx,ts,tsx}'],
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
<<<<<<< HEAD
      '.next/**',
      'out/**',
      'dist/**',
      'node_modules/**',
      'temp_exclude/**',
      'src.disabled/**',
      'src.pages.disabled/**',
=======
      'coverage/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'scripts/**',
      'automation/**',
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      'backup-problematic-files/**',
      'src.disabled/**',
      'components.disabled/**',
      'pages.disabled/**',
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
      'api/**',
      'api-backup/**',
      'api-disabled/**',
      'api.disabled/**',
      'backup/**',
      'backups/**',
      'broken_files_backup/**',
      'corrupted-files-backup/**',
      'cypress_backup/**',
      'data_backup/**',
      'deployment/**',
      'e2e/**',
      'server/**',
      'temp_*/**',
      'test_build/**',
      'tests/**',
      '__tests__/**',
      'types/**',
      '*.cjs',
      '*.mjs',
      'supabase/**',
      'ultimate-*.cjs',
      'advanced-*.js',
      'comprehensive-*.js',
      'enhanced-*.js',
      'fix-*.js',
      'merge-*.js',
      'run-*.js',
      'test-*.js',
      '*.test.js',
      '*.spec.js',
      'aggressive-*.js',
      'batch-*.js',
      'clean-*.js',
      'critical-*.js',
      'execute-*.js',
      'final-*.js',
      'health-*.js',
      'improve-*.js',
      'maintenance-*.js',
      'monitoring-*.js',
      'optimized-*.js',
      'performance-*.js',
      'resolve-*.js',
      'seo-*.js',
      'simple-*.js',
      'structural-*.js',
      'system-*.js',
      'ultimate-*.js',
      '*.js'
    ],
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}', 'app/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
<<<<<<< HEAD
=======
        afterAll: 'readonly',
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      },
      parser: tsparser,
=======
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends('next/core-web-vitals'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
>>>>>>> main
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
<<<<<<< HEAD
          jsx: true
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
      'jsx-a11y': jsxA11y
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
=======
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
<<<<<<< HEAD
      'react': react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-unused-vars': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-debugger': 'warn',
<<<<<<< HEAD
      'no-trailing-spaces': 'error',
      'indent': 'off',
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-parens': ['error', 'as-needed'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'space-in-parens': ['error', 'never'],
      'func-call-spacing': ['error', 'never'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'camelcase': ['error', { properties: 'never' }],
      'eol-last': ['error', 'always'],
      'max-len': ['warn', { code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true }],
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'template-curly-spacing': ['error', 'never'],
      'space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-before-blocks': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-whitespace-before-property': 'error',
      'rest-spread-spacing': ['error', 'never'],
      'yield-star-spacing': ['error', 'after'],
      'generator-star-spacing': ['error', 'after'],
      'no-unneeded-ternary': 'error',
      'no-nested-ternary': 'warn',
      'no-mixed-operators': 'warn',
      'no-lonely-if': 'error',
      'no-else-return': 'error',
      'dot-location': ['error', 'property'],
      'no-extra-bind': 'error',
      'no-implicit-coercion': 'error',
      'no-invalid-this': 'error',
      'no-loop-func': 'error',
      'no-new-func': 'error',
      'no-return-assign': ['error', 'always'],
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'vars-on-top': 'error',
      'wrap-iife': ['error', 'outside'],
      'yoda': ['error', 'never'],
      'strict': ['error', 'global'],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error']
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: [
      "**/*.cjs",
      "**/scripts/**/*.js",
      "**/automation/**/*.js",
      "**/pm2/**/*.js"
    ],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        ...globals.node,
=======
      'coverage/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.ts'
    ],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsparser,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/aria-role': 'warn',
      'jsx-a11y/heading-has-content': 'warn',
      'jsx-a11y/img-redundant-alt': 'warn',
      'jsx-a11y/no-access-key': 'warn',
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
<<<<<<< HEAD
=======
  {
    files: ['**/*.js'],
    languageOptions: {
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
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
=======
      react,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
];