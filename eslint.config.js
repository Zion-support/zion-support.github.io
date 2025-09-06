<<<<<<< HEAD
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
  {
    files: ['src/App.tsx', 'src/main.tsx', 'src/components/Header.tsx', 'src/components/Footer.tsx', 'src/components/Sidebar.tsx', 'src/components/PerformanceMonitor.tsx', 'src/components/ErrorBoundary.tsx', 'src/pages/Home.tsx', 'src/pages/About.tsx', 'src/pages/Services.tsx', 'src/pages/Pricing.tsx', 'src/pages/Contact.tsx'],
    ignores: [
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'node_modules/**',
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
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
<<<<<<< HEAD

      '**/performance-*.txt'
=======
      '**/performance-*.txt',
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
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

=======
      'temp_exclude/**',
      'temp_backup/**',
      'temp_broken_files/**',
      'temp_components/**',
      'temp_conflicts/**',
      'tests/**',
      'types/**',
      'utils/**',
      'ultimate-*.cjs',
      'zion-website/**',
      'zion_academy/**',
      'src_backup/**',
      'supabase/**',
      'start-dev.js',
      'structural-fix.js',
      'super-syntax-fixer.cjs',
      'system-monitor.cjs',
      'test-next.js',
      'types/service-variants.js',
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
    ],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
<<<<<<< HEAD
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
      'node_modules/**',
      '.eslintrc.js',
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
      'coverage/**',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      'backup-problematic-files/**'
      '**/performance-*.txt'
=======
      '**/performance-*.txt',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "readonly",
        jest: "readonly",
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        React: 'readonly',
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
<<<<<<< HEAD
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

      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
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
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
<<<<<<< HEAD
        { allowConstantExport: true }
      ],
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        { allowConstantExport: true },
      ],
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
  },
  {
    files: [
      '**/*.cjs',
      '**/scripts/**/*.js',
      '**/automation/**/*.js',
<<<<<<< HEAD
      '**/pm2/**/*.js'
=======
      '**/pm2/**/*.js',
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
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
<<<<<<< HEAD
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
      'no-undef': 'error'
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
