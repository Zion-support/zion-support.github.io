import js from '@eslint/js';

import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescript from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';


import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';

import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';



import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';


import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import next from '@next/eslint-plugin-next';


export default [
  js.configs.recommended,
  {

    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'node_modules/**',
parser: typescriptParser,

  {
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "dist/",
      "build/",
      "coverage/",
      "*.config.js",
      "*.config.cjs",
      "*.config.mjs",
      "scripts/",
      "automation/",
      "pm2-automation/",
      "pages.disabled/",
      "pages.disabled_auto/",
      "pages.disabled_full/",
      "pages.corrupted.*/",
      "pages.broken/",
      "pages.bak/",
      "pages.blog.disabled/",
      "pages._archive_corrupted/",
      "pages._quarantine/",
      "pages-disabled/",
      "pages-quarantine/",
      "pages.__backup/",
      "pages-backup/",
      "tests.disabled/",
      "components.disabled/",
      "zion-os.disabled/",
      "zion_academy/",
      "temp_backup/",
      "temp_broken_files/",
      "test_build/",
      "temp_exclude/",
      "zion-os/",
      "zion-website/",
      "zion-ai-assistant/",
      "types/",
      "utils/",
      "ultimate-*.cjs",
      "*.test.js",
      "*.test.ts",
      "*.test.tsx",
      "*.spec.js",
      "*.spec.ts",
      "*.spec.tsx",
    ],
  },
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsparser,


import next from '@next/eslint-plugin-next';


export default [
  js.configs.recommended,
  {

    languageOptions: {
parser: typescriptParser,

      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
// Additional rules or overrides can be added here
    },
    settings: {
      react: {
},
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': typescript,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
version: 'detect'

        ...globals.browser,
        ...globals.node,
        React: 'readonly',

  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {


      },
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
export default [{
    "ignores": [
      'node_modules/',
      '.next/',
      'out/',
      'dist/',
      'build/',
      'coverage/',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
'.prettierrc.js',
      '.eslintrc.*',
      '*.min.js',
      '*.bundle.js',
      'scripts/',
      'automation/',
      'automation_backup/',
      'data_backup/',
      'pm2-automation/',
      '__tests__/',
      'pages.disabled/',
      'pages.corrupted.*/',
      'pages.broken/',
      'pages.bak/',
      'pages.blog.disabled/',
      'pages._archive_corrupted/',
      'pages._quarantine/',
      'pages-disabled/',
      'pages-quarantine/',
      'pages.__backup/',
      'pages-backup/',

      '*.test.js',
      '*.test.ts',
      '*.test.tsx',
      '*.spec.js',
      '*.spec.ts',


        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        Buffer: "readonly",
        global: "readonly"
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-undef': 'error'
    }
  }

];


        vi: 'readonly',
        Deno: 'readonly',
        React: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'readonly'
      },

      '.eslintrc.js',
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
      '**/test-utils.*',
      '**/jest.setup.*',
      '**/jest.config.*',
      '**/vite.config.*',
      '**/webpack.config.*',
      '**/rollup.config.*',
      '**/babel.config.*',
      '**/postcss.config.*',
      '**/tailwind.config.*',
      '**/next.config.*',
      '**/nuxt.config.*',
      '**/svelte.config.*',
      '**/astro.config.*',
      '**/remix.config.*',
      '**/vite.config.*',
      '**/vitest.config.*',
      '**/playwright.config.*',
      '**/cypress.config.*',
      '**/storybook.config.*',
      '**/docusaurus.config.*',
      '**/gatsby-config.*',
      '**/gridsome.config.*',
      '**/vue.config.*',
      '**/quasar.config.*',
      '**/nuxt.config.*',
      '**/sapper.config.*',
      '**/svelte-kit.config.*',
      '**/solid.config.*',
      '**/qwik.config.*',
      '**/hydrogen.config.*',
      '**/shopify.config.*',
      '**/windi.config.*',
      '**/unocss.config.*',
      '**/windicss.config.*',
      '**/twin.config.*',
      '**/stitches.config.*',
      '**/vanilla-extract.config.*',
      '**/emotion.config.*',
      '**/styled-components.config.*',
      '**/linaria.config.*',
      '**/goober.config.*',
      '**/stitches.config.*',
      '**/twin.config.*',
      '**/windicss.config.*',
      '**/unocss.config.*',
      '**/windi.config.*',
      '**/shopify.config.*',
      '**/hydrogen.config.*',
      '**/qwik.config.*',
      '**/solid.config.*',
      '**/svelte-kit.config.*',
      '**/sapper.config.*',
      '**/quasar.config.*',
      '**/vue.config.*',
      '**/gridsome.config.*',
      '**/gatsby-config.*',
      '**/docusaurus.config.*',
      '**/storybook.config.*',
      '**/cypress.config.*',
      '**/playwright.config.*',
      '**/vitest.config.*',
      '**/vite.config.*',
      '**/remix.config.*',
      '**/astro.config.*',
      '**/svelte.config.*',
      '**/nuxt.config.*',
      '**/next.config.*',
      '**/tailwind.config.*',
      '**/postcss.config.*',
      '**/babel.config.*',
      '**/rollup.config.*',
      '**/webpack.config.*',
      '**/vite.config.*',
      '**/jest.config.*',
      '**/jest.setup.*',
      '**/test-utils.*',
      '**/*.spec.*',
      '**/*.test.*',
      '**/*.temp.*',
      '**/*.corrupted.*',
      '**/*.broken.*',
      '**/*.disabled.*',
      '**/*.old.*',
      '**/*.backup.*',
      '**/backup-merge-conflicts/**',
      '**/automation/**',
      '**/scripts/**'
    ],
    languageOptions: {
      parser: typescriptParser,

      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
"plugins": {
      react,
      'react-hooks': reactHooks
    },
    "rules": {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  },
  {
    "files": ['**/*.{ts,tsx}'],
    "languageOptions": {
      parser: tsparser,
      "ecmaVersion": 2021,
      "sourceType": 'module',
      "globals": {
        window: 'readonly',
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import next from '@next/eslint-plugin-next';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
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
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        fetch: 'readonly',
        process: 'readonly',
        // DOM types
        Element: 'readonly',
        HTMLElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLSelectElement: 'readonly',
        HTMLDivElement: 'readonly',
        MouseEvent: 'readonly',
        KeyboardEvent: 'readonly',
        Node: 'readonly',
        PerformanceObserver: 'readonly',
        PerformanceNavigationTiming: 'readonly',
        PerformanceEventTiming: 'readonly',
        LayoutShift: 'readonly',
        performance: 'readonly',
        IntersectionObserver: 'readonly',
        IntersectionObserverEntry: 'readonly',
        // React
        React: 'readonly',
        // Jest/Testing globals
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
"document": 'readonly',
        "navigator": 'readonly',
        "localStorage": 'readonly',
        "sessionStorage": 'readonly',
        "console": 'readonly',
        "setTimeout": 'readonly',
        "setInterval": 'readonly',
        "clearTimeout": 'readonly',
        "clearInterval": 'readonly',
        "requestAnimationFrame": 'readonly',
        "cancelAnimationFrame": 'readonly',
        "fetch": 'readonly',
        "URL": 'readonly',
        "URLSearchParams": 'readonly',
        "Blob": 'readonly',
        "CustomEvent": 'readonly',
        "Intl": 'readonly',
        "performance": 'readonly',
        "caches": 'readonly',
        "Notification": 'readonly',
        "ServiceWorker": 'readonly',
        "ServiceWorkerRegistration": 'readonly',
        "PushSubscription": 'readonly',
        "NotificationPermission": 'readonly',
        "process": 'readonly',
        "global": 'readonly',
        "jest": 'readonly',
        "describe": 'readonly',
        "it": 'readonly',
        "test": 'readonly',
        "expect": 'readonly',
        "vi": 'readonly',
        "Deno": 'readonly',
        "React": 'readonly',
        "KeyboardEvent": 'readonly',
        "HTMLElement": 'readonly',
        "HTMLButtonElement": 'readonly',
        "HTMLAnchorElement": 'readonly',
        "MutationObserver": 'readonly',
        "RequestInit": 'readonly',
        "AbortController": 'readonly',
        "fs": 'readonly',
        "CodeQualityChecker": 'readonly'
      }

        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        fetch: 'readonly',
        process: 'readonly',
        // DOM types
        Element: 'readonly',
        HTMLElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLSelectElement: 'readonly',
        HTMLDivElement: 'readonly',
        MouseEvent: 'readonly',
        KeyboardEvent: 'readonly',
        Node: 'readonly',
        PerformanceObserver: 'readonly',
        PerformanceNavigationTiming: 'readonly',
        PerformanceEventTiming: 'readonly',
        LayoutShift: 'readonly',
        performance: 'readonly',
        IntersectionObserver: 'readonly',
        IntersectionObserverEntry: 'readonly',
        // React
        React: 'readonly',
        // Jest/Testing globals



        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
screen: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',

      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: react,

    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
      '@next/next': next
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...next.configs.recommended.rules,

      '@typescript-eslint/no-explicit-any': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        // Node.js globals
        process: 'readonly',
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        Buffer: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setImmediate: 'readonly',
        clearImmediate: 'readonly',
      },
    },
  },
  {
    ignores: [
      // Node/build outputs
      'node_modules/**',
      '.next/**',
      'dist/**',
      'out/**',
      'build/**',
      'coverage/**',
      '*.log',
      '*.tsbuildinfo',
      // Generated files
      '**/*.min.js',
      '**/*.bundle.js',
      '**/static/**',
      '**/public/**',
      '**/backup*/**',
      '**/backups/**',
      '**/cache/**',
      '**/temp/**',
      '**/tmp/**',
      // Build artifacts
      '**/ecosystem*.cjs',
      '**/comprehensive-*.cjs',
      '**/advanced-*.cjs',
      '**/enhanced-*.cjs',
      '**/automation/**',
      '**/scripts/**',
      '**/tools/**',
      '**/zion-os/**',
      '**/zion-website/**',
    ],
  },


      },
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
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
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
];





];


      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'no-undef': 'off',
      '@next/next/no-html-link-for-pages': 'warn'
    }
  }
];

