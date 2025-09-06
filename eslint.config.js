import js from '@eslint/js';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf6c
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
>>>>>>> origin/main
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  js.configs.recommended,
  {
<<<<<<< HEAD
    files: ['src/**/*.{js,jsx,ts,tsx}', '*.{js,jsx,ts,tsx}'],
    ignores: ['dist/**', 'node_modules/**', 'build/**'],
=======
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      '.next/**',
      'out/**',
      'dist/**',
      'node_modules/**',
      'temp_exclude/**',
      'src.disabled/**',
      'src.pages.disabled/**',
      'backup-problematic-files/**',
      'zion-os.disabled/**',
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
      'zion-ai-assistant/**',
      'utils/**',
      'vite.config.js',
      'vite.config.ts',
      'src_backup_temp/**',
      'temp_backup/**',
      'temp_broken_files/**',
      'temp_components/**',
      'temp_conflicts/**',
      'temp_exclude/**',
      'temp_working/**',
      'test_build/**',
      'tests/**',
      'types/**',
      '*.cjs',
      '*.js',
      '*.mjs',
      'supabase/**',
      'start-dev.js',
      'structural-fix.js',
      'system-monitor.cjs',
      'tailwind.config.js',
      'test-next.js',
      'ultimate-*.cjs'
    ],
>>>>>>> origin/main
    languageOptions: {
<<<<<<< HEAD
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
      },
      parser: tsparser,
=======
      parser: typescriptParser,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf6c
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        performance: 'readonly',
        Performance: 'readonly',
        PerformanceNavigationTiming: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        KeyboardEvent: 'readonly',
        reportError: 'readonly',
        __REACT_DEVTOOLS_GLOBAL_HOOK__: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
<<<<<<< HEAD
      ...tseslint.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
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
=======
      // Additional rules or overrides can be added here
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf6c
    },
    settings: {
      react: {
<<<<<<< HEAD
        version: 'detect',
      },
    },
  },
=======
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
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
<<<<<<< HEAD
=======
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf6c
];