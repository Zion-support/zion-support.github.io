<<<<<<< HEAD



import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";

import js from '@eslint/js';
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

      '**/performance-*.txt'
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

        window: "readonly",
        document: "readonly",
        console: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        fetch: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        location: "readonly",
        navigator: "readonly",
        performance: "readonly",
        addEventListener: "readonly",
        removeEventListener: "readonly",
        requestAnimationFrame: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        self: "readonly",
        // Node.js globals
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        global: "readonly",
        // DOM types
        Element: "readonly",
        HTMLElement: "readonly",
        HTMLInputElement: "readonly",
        HTMLTextAreaElement: "readonly",
        HTMLSelectElement: "readonly",
        HTMLDivElement: "readonly",
        MouseEvent: "readonly",
        KeyboardEvent: "readonly",
        Node: "readonly",
        PerformanceObserver: "readonly",
        PerformanceNavigationTiming: "readonly",
        PerformanceEventTiming: "readonly",
        LayoutShift: "readonly",
        IntersectionObserver: "readonly",
        IntersectionObserverEntry: "readonly",

        // React
        React: 'readonly',
        // Jest/Testing globals
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
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'coverage/**',
=======
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';

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
<<<<<<< HEAD
      'coverage/**',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      '.eslintrc.js',
      'coverage/**',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      '**/test-utils.*',
      '**/jest.setup.*',
      '**/jest.config.*',
      '**/vite.config.*',
      '**/postcss.config.*',
      '**/playwright.config.*',
      '**/cypress.config.*',
      '**/bundle-analyzer.config.*',
      '**/csp-config.*',
      '**/ecosystem.config.*',
      '**/Dockerfile*',
      '**/docker-compose*',
      '**/pm2-*',
      '**/fix-*',
      '**/clean-*',
      '**/batch-*',
      '**/merge-*',
      '**/resolve-*',
      '**/systematic-*',
      '**/ultimate-*',
      '**/structural-*',
      '**/quick-*',
      '**/comprehensive-*',
      '**/enhanced-*',
      '**/complete-*',
      '**/app-optimizer.*',
      '**/improve-*',
      '**/find-*',
      '**/git-ops.*',
      '**/pr-manager.*',
      '**/merge-strategy.*',
      '**/resolve-and-merge-*',
      '**/merge-all-*',
      '**/merge-prs.*',
      '**/pr-*',
      '**/batch_*',
      '**/check_*',
      '**/commit-*',
      '**/complete_*',
      '**/deploy-*',
      '**/fix_*',
      '**/git_*',
      '**/health-*',
      '**/quick-*',
      '**/run-*',
      '**/start-*',
      '**/test-*',
      '**/ultimate-*',
      '**/utils/next-*',
      '**/utils/performance-*',
      '**/utils/rate-*',
      '**/utils/input-*',
      '**/utils/csrf-*',
      '**/utils/dynamic-*',
      '**/utils/env-*',
      '**/utils/messageChannel*',
      '**/utils/sanitize*',
      '**/utils/seo-*',
      '**/utils/testing-*',
      '**/utils/accessibility-*',
      '**/utils/api.*',
      '**/utils/monitoring.*',
      '**/utils/performance.*',
      '**/utils/seo-optimizer.*',
      '**/types/empty.*',
      '**/types/index.*',
      '**/types/service-*',
      '**/supabase/**',
      '**/src/main.*',
      '**/src/data/**',
      '**/src/utils/**',
      '**/src/components/**',
      '**/src/App.*',
      '**/components/ui/**',
      '**/components/layout/**',
      '**/components/performance/**',
      '**/hooks/**',
      '**/lib/**',
      '**/api-backup/**',
      '**/deployment/**',
      '**/deployments/**',
      '**/docs/**',
      '**/e2e/**',
      '**/content/**',
      '**/data/**',
      '**/config/**',
      '**/__tests__/**',
      '**/automation-reports/**',
      '**/error-prevention-reports/**',
      '**/performance-reports/**',
      '**/link-reports/**',
      '**/monitoring/**',
      '**/pm2-automation/**',
      '**/automation/logs/**',
      '**/automation/backup/**',
      '**/backup-merge-conflicts/**',
      '**/temp_backup/**',
      '**/temp_broken_components/**',
      '**/temp_working/**',
      '**/temp_*/**',
      '**/ai-optimization-backups/**',
      '**/ai-analysis-reports/**',
      '**/optimization-reports/**',
      '**/public/reports/**',
      '**/pages_backup*/**',
      '**/pages.*/**',
      '**/pages-*/**',
      '**/pages_disabled*/**',
      '**/pages.disabled*/**',
      '**/pages.broken*/**',
      '**/pages.corrupted*/**',
      '**/pages.old*/**',
      '**/pages._*/**',
      '**/pages.__*/**',
      '**/backup-pages/**',
      '**/src.pages.disabled/**',
      '**/lib_backup*/**',
      '**/src_backup*/**',
      '**/corrupted-files-backup*/**',
      '**/performance-reports*/**',
      '**/log-analysis-reports*/**',
      '**/link-reports*/**',
      '**/lint-target*/**',
      '**/monitoring*/**',
      '**/pm2-automation*/**',
      '**/automation/logs*/**',
      '**/automation/backup*/**',
      '**/performance-*.json',
      '**/performance-*.js',
      '**/performance-*.cjs',
      '**/performance-*.sh',
      '**/performance-*.html',
      '**/performance-*.md',
      '**/performance-*.txt',
<<<<<<< HEAD
      'backup-problematic-files/**'
      '**/performance-*.txt'
=======
      '**/performance-*.txt',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      'backup-problematic-files/**',
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      '**/zion-os/**',
      '**/zion-website/**',
      '**/zion-academy/**',
      '**/zion-film/**',
      '**/zion-ai-assistant/**',
      '**/*.min.js',
      '**/*.bundle.js',
      '**/public/**',
      '**/static/**',
<<<<<<< HEAD
<<<<<<< HEAD
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
        window: "readonly",
        document: "readonly",
        console: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        fetch: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        location: "readonly",
        navigator: "readonly",
        performance: "readonly",
        addEventListener: "readonly",
        removeEventListener: "readonly",
        requestAnimationFrame: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        self: "readonly",
        // Node.js globals
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        global: "readonly",
        // DOM types
        Element: "readonly",
        HTMLElement: "readonly",
        HTMLInputElement: "readonly",
        HTMLTextAreaElement: "readonly",
        HTMLSelectElement: "readonly",
        HTMLDivElement: "readonly",
        MouseEvent: "readonly",
        KeyboardEvent: "readonly",
        Node: "readonly",
        PerformanceObserver: "readonly",
        PerformanceNavigationTiming: "readonly",
        PerformanceEventTiming: "readonly",
        LayoutShift: "readonly",
        IntersectionObserver: "readonly",
        IntersectionObserverEntry: "readonly",
        // React
        React: 'readonly',
        // Jest/Testing globals
ursor/integrate-build-improve-and-re-verify-8f7d
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
origin/automation-improvements-final

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
origin/main
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
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
=======
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
      parser: tsparser,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
<<<<<<< HEAD
      }
    },
    plugins: {
      }
    },
    plugins: {
      }
    },
    plugins: {
      react,
      "react-hooks": reactHooks
    },
    rules: {
      ...react && react.configs.recommended && recommended.rules,
      ...reactHooks && reactHooks.configs.recommended && recommended.rules,
      "no-unused-vars": "warn",
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off"
    }
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        React: 'readonly',
        console: 'readonly',
        process: 'readonly',
        window: 'readonly',
        document: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        HTMLElement: 'readonly',
        HTMLAnchorElement: 'readonly',
        performance: 'readonly',
        module: 'readonly',
        require: 'readonly',
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly'
<<<<<<< HEAD

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
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';



export default [
  {

    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,

=======
    ],
    languageOptions: {
      parser: tsparser,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
<<<<<<< HEAD
          jsx: true
        }




        afterAll: "readonly"
        afterAll: "readonly"
origin/main
origin/automation-improvements-final
        afterAll: "readonly"
      },
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
=======
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
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
<<<<<<< HEAD
      'jsx-a11y': jsxA11y
    },
    rules: {
<<<<<<< HEAD
      ...tseslint && tseslint.configs.recommended && recommended.rules,
      ...react && react.configs.recommended && recommended.rules,
      ...reactHooks && reactHooks.configs.recommended && recommended.rules,
      ...jsxA11y && jsxA11y.configs.recommended && recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-console": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
      }
    },
    plugins: {
        jest: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
      }
    },
    plugins: {


      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks
    },
    rules: {
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
      'jsx-a11y': jsxA11y,
    },
    rules: {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off',
<<<<<<< HEAD
<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
<<<<<<< HEAD




      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-console": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off"

      "react/react-in-jsx-scope": "off"

origin/main
origin/automation-improvements-final
      "react/react-in-jsx-scope": "off"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
      "no-unused-vars": "warn",
      "no-console": "warn",

      "no-undef": "error"
    }
  }
];
      "no-undef": "error",
    },
  },;
];
      '@typescript-eslint': typescript,
      react: react,
      'react-hooks': reactHooks,
      '@next/next': next,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...next.configs.recommended.rules,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error'
    }
<<<<<<< HEAD

  }
];


      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/no-unescaped-entities': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off',
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



  }
];
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
  }
];
origin/automation-improvements-final

  }
];
  }
];
=======
  }
];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      'no-unused-vars': 'off',
      'no-console': 'warn',
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
    files: [
      '**/*.cjs',
      '**/scripts/**/*.js',
      '**/automation/**/*.js',
      '**/pm2/**/*.js',
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
        global: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-undef': 'error',
    },
  },
];
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
