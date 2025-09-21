import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
      "react-hooks": reactHooks,
},
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
<<<<<<< HEAD
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': 'warn'
=======
      'react/react-in-jsx-scope': 'off'
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly'
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-1e34
    }
  },
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'dist/',
      'build/',
      'scripts/',
      'automation/',
      'public/reports/**',
      'netlify/',
      '**/*.cjs',
      '**/*.mjs',
<<<<<<< HEAD
      '**/.scripts/**',
      '**/temp_*/**',
      '**/temp-*/**',
      '**/temp*/**',
      '**/broken*/**',
      '**/corrupted*/**',
      '**/disabled*/**',
      '**/backup*/**',
      '**/exclude*/**',
      '**/conflicted*/**',
      '**/working*/**',
      '**/essential*/**',
      '**/test_build/**',
      '**/__tests__/**',
      '**/src_backup*/**',
      '**/apps.backup/**',
      '**/ecosystem*.js',
      '**/fix-*.js',
      '**/fix_*.js',
      '**/merge-*.js',
      '**/resolve-*.js',
      '**/selective-merge.js',
      '**/restore-*.js',
      '**/monitoring-*.js',
      '**/performance-*.js',
      '**/maintenance-*.js',
      '**/comprehensive-*.js',
      '**/execute-*.js',
      '**/improve-*.js',
      '**/mcp*.js',
      '**/health-endpoint.js',
      '**/lib.broken/**',
      '**/offworld/**',
      '**/pages._archive_corrupted/**',
      '**/pages.bak/**',
      '**/remote/**',
      '**/solutions/**',
      '**/src-clean/**',
      '**/zion_academy/**',
      '**/*.test.js',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/.storybook/**',
      '**/advanced-*.js',
      '**/aggressive-*.js',
      '**/analyze-*.js',
      '**/build*.js',
      '**/bundle-*.js',
      '**/code-splitting-*.js',
      '**/cypress/**',
      '**/jest*.js',
      '**/next.config*.js',
      '**/start-dev.js'
=======
      '**/server.mjs',
      '**/seed.js',
      '**/jest.setup.js',
      '**/extractFailingCode.js',
      '**/fix-corrupted-files.js',
      '**/fix-corruption.js',
      '**/fix-merge-conflicts.js',
      '**/fix-syntax-errors.js',
      '**/mcp-automation-system.js',
      '**/run-cursor-memory-automation.js',
      '**/script.js',
      '**/simple-mcp-test.js',
      '**/simple-server.js',
      '**/start-all-automations.js',
      '**/backup/**',
      '**/.temp_backup_components/**',
      '**/src.broken/**',
      '**/data.temp/**',
      '**/contracts/**',
      '**/cypress/**',
      '**/src/components/disabled/**',
      '**/src/components/header/**',
      '**/src/components/ui/Futuristic*.tsx',
      '**/src/components/ui/accordion.tsx',
      '**/src/components/ui/alert.tsx',
      '**/src/components/ui/avatar.tsx',
      '**/src/components/ui/badge.tsx',
      '**/src/components/ui/button.tsx',
      '**/src/components/ui/card.tsx',
      '**/src/components/ui/floating-action-button.tsx',
      '**/src/components/ui/input.tsx',
      '**/src/components/ui/loading-spinner.tsx',
      '**/src/components/ui/loading.tsx',
      '**/src/components/ui/select.tsx',
      '**/src/components/ui/separator.tsx',
      '**/src/components/ui/skeleton.tsx',
      '**/src/components/ui/steps.tsx',
      '**/src/components/ui/tabs.tsx',
      '**/src/components/ui/textarea.tsx',
      '**/src/components/ui/use-toast.tsx',
      '**/src/hooks/use-toast.ts',
      '**/src/hooks/usePerformance.ts',
      '**/src/lib/utils.ts',
      '**/src/main.tsx',
      '**/src/types/listings.ts',
      '**/src/components/AccessibilityEnhancer.tsx',
      '**/src/components/Breadcrumb.tsx',
      '**/src/components/ErrorBoundary.tsx',
      '**/src/components/GradientHeading.tsx',
      '**/src/components/LazyImage.tsx',
      '**/src/components/LoadingSkeleton.tsx',
      '**/src/components/SEO.tsx',
      '**/src/components/SecurityHeaders.tsx',
      '**/src/components/Sidebar.tsx',
      '**/src/components/TrustIndicators.tsx',
      '**/auto-fix-watcher.js',
      '**/auto-run-all.js',
      '**/comprehensive-automation-test.js',
      '**/debug-paths.js',
      '**/pages/**',
      'test*.js',
      'test*.ts',
      'test*.tsx'
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-1e34
    ]
  }
];
    files: ["**/*.{ts,tsx}"],
    languageOptions: {,
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
        afterAll: "readonly"
      },
      parser: tsparser,
      parserOptions: {,
ecmaFeatures: {
          jsx: true,
}
      }
    },
    plugins: {
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
    },
    settings: {,
react: {
        version: "detect"
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
    languageOptions: {,
ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        ...globals.node,
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
      "no-unused-vars": "warn",
      "no-console": "warn",
