import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
<<<<<<< HEAD
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescript from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import globals from 'globals';
=======
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';
import globals from 'globals';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3

export default [
  ...compat.extends('next/core-web-vitals'),
  {
<<<<<<< HEAD
    files: ['**/*.{js,jsx,ts,tsx}'],      'backup-problematic-files/**',
=======
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'scripts/**',
      'automation/**',
      'backup-problematic-files/**',
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
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
      '*.js',
      'src_backup_temp/**',
      'temp-backup/**',
      'tests.disabled/**',
      'tools/**',
      'utils/**',
      'zion-ai-assistant/**',
      'zion-os.disabled/**',
      'recovered-branches/**',
      'services-broken.tsx',
      'services/**',
      'setupTests.ts',
      'solutions.disabled/**',
      'src.broken/**',
      'src.corrupted/**',
      'src.pages.disabled/**',
      'src_backup/**',
      'vite.config-backup.ts',
      'vite.config.ts',
      'pages.disabled_full/**',
      'pages.old/**',
      'pages_api.disabled/**',
      'pages_backup/**',
      'pages_backup_before_cleanup/**',
      'pages_backup_conflict/**',
      'pages_backup_conflicts/**',
      'pages_disabled/**',
      'pages_minimal/**',
      'playwright.config.ts',
      'pm2-automation/**',
      'providers/**',
      'public/**',
      'pages.bak/**',
      'pages.blog.disabled/**',
      'pages.broken/**',
      'pages.corrupted.*/**',
      'pages.disabled.full/**',
      'pages.disabled_auto/**',
      'out/**',
      'pages-backup/**',
      'pages-disabled/**',
      'pages-quarantine/**',
      'pages.__backup/**',
      'pages._archive_corrupted/**',
      'pages._quarantine/**',
      'components/**',
      'content-hub.tsx',
      'contracts.disabled/**',
      'cypress.config.ts',
      'cypress/**',
      'dao/**',
      'data.disabled/**',
      'data/**',
      'deployments/**',
      'fix_typescript_syntax_errors.jsx',
      'fix_utils_files.ts',
      'hooks.disabled/**',
      'hooks/**',
      'jest.config.jsx',
      'jest.config.ts',
      'jest.setup.jsx',
      'lib.broken/**',
      'lib.disabled/**',
      'lib/**',
      'lib_backup/**',
      'lint-target/**',
      'middleware.security.ts',
      'middleware/**',
      'netlify/**',
      'next-env.d.ts',
      '.next/**',
      'App.smoke.test.tsx',
      'App.test.ts',
      'App.test.tsx',
      'App.tsx',
      'AppMinimal.test.tsx',
      'ai-optimization-backups/**',
      'api-documentation.tsx',
      'api.disabled.temp/**',
      'api.tsx',
      'apps.backup/**',
      'apps/**',
      'automation.tsx',
      'automation_backup/**',
      'blockchain-solutions.tsx',
      'blog/**',
      'browserstack.config.ts',
      'case-studies.tsx',
      'component-library.tsx',
      'components.disabled_full/**'
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
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
<<<<<<< HEAD
        beforeAll: 'readonly',      },
      parser: tsparser,      parserOptions: {
=======
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
      parser: typescriptParser,
      parserOptions: {
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
<<<<<<< HEAD
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
      'jsx-a11y': jsxA11y
=======
      '@typescript-eslint': typescript,
      react,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
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
      ],      'react/prop-types': 'off',
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
        ...globals.node,    },
    settings: {
      react: {
=======
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
        version: 'detect',
      },
    },
  },
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
<<<<<<< HEAD
  },];
=======
  },
];
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
