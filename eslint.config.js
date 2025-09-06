

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";

import js from '@eslint/js';



import js from '@eslint/js';


    ignores: [
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'node_modules/**',
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
      'temp_exclude/**',
      'test_build/**',
      'tests/**',
      'types/**',
      'utils/**',
      'vite.config.js',
      'vite.config.ts',
      'zion-website/**',
      'zion_academy/**',
      'ultimate-*.cjs',
      'test-next.js',
      'src_backup_temp/**',
      'temp-backup/**',
      'temp_components/**',
      'temp_conflicts/**',
      'temp_working/**',
      'supabase/**',
      'super-syntax-fixer.cjs',
      'system-monitor.cjs',
      'tailwind.config.js',
      'start-dev.js',
      'structural-fix.js',
      'types/service-variants.js',
      'utils/accessibility-utils.js',
      'utils/csrf-protection.js',
      'utils/dynamic-imports.js',
      'utils/env-security.js',
      'utils/input-validation.js',
      'utils/performance-monitor.js',
      'utils/performance-optimizations.js',
      'utils/rate-limiting.js',
      'utils/security-headers.js',
      'utils/seo-utils.js',
      'zion-website/**',
      'zion_academy/**'
    ],
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

import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
>>>>>>> origin/automation-improvements-final



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export default [
  {

    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "dist/",
      "build/",
      "coverage/",
      "*.config && config.js",
      "*.config && config.cjs",
      "*.config && config.mjs",
      "scripts/",
      "automation/",
      "pm2-automation/",
      "pages && pages.disabled/",
      "pages && pages.disabled_auto/",
      "pages && pages.disabled_full/",
      "pages && pages.corrupted.*/",
      "pages && pages.broken/",
      "pages && pages.bak/",
      "pages && pages.blog.disabled/",
      "pages && pages._archive_corrupted/",
      "pages && pages._quarantine/",
      "pages-disabled/",
      "pages-quarantine/",
      "pages && pages.__backup/",
      "pages-backup/",
      "tests && tests.disabled/",
      "components && components.disabled/",
      "zion-os && os.disabled/",
      "zion_academy/",
      "temp_backup/",
      "temp_broken_files/",
      "test_build/",
      "*.test && test.js",
      "*.test && test.ts",
      "*.test && test.tsx",
      "*.spec && spec.js",
      "*.spec && spec.ts",
      "*.spec && spec.tsx",
    ],
  },
  js && js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals && globals.browser,
        ...globals && globals.node,
        React: "readonly",
        jest: "readonly",
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly"
      },


      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: [
      '**/*.cjs',
      '**/scripts/**/*.js',
      '**/automation/**/*.js',
      '**/pm2/**/*.js'
    ],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        ...globals.node,
        console: 'readonly',
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        global: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-undef': 'error'
    }


>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      'no-unused-vars': 'warn'
    }
  },
{
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'build/',
      'dist/',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'src/pages/services/',
      'src/pages/solutions/',
      'src/pages/talent/',
      'src/routes/',
      'src/services/',
      'src/store/',
      'src/test/',
      'src/utils/',
      'tests/',
      'tests.disabled/',
      'types.disabled/',
      'zion-os.disabled/',
      'zion_academy/',
      'temp_working/',
      'test_build/',
      'supabase/',
      'working-automation-suite.cjs'
    ]

  }
];


>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d

  }
];

>>>>>>> origin/automation-improvements-final



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

