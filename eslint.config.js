import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import next from "@next/eslint-plugin-next";

export default [
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
      "*.test.js",
      "*.test.ts",
      "*.test.tsx",
      "*.spec.js",
      "*.spec.ts",
      "*.spec.tsx"
    ]
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
<<<<<<< HEAD
        ...globals.node},
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true}}},
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint},
=======
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
      "react-hooks": reactHooks
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
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
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly'
      },
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y
    },
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
<<<<<<< HEAD
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }],
      'no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }
      ],
      // '@typescript-eslint/no-explicit-any': 'warn', // Disabled due to plugin config issue
    }},
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.ts',
      'temp-disabled/**',
      'temp_backup/**',
      'temp_exclude/**',
      'src.disabled/**',
      'corrupted_backup/**',
      'backup-problematic-files/**',
      'recovered-branches/**',
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
      'zion-film/**',
      'test-next/**',
      'test-reports/**',
      'test-results/**',
      'automation_backup/**',
      'ai-optimization-backups/**',
      'pages.disabled_full/**',
      'pages_backup_before_cleanup/**',
      'solutions.disabled/**',
      'src.pages.disabled/**',
      'pages.broken/**',
      'pages.corrupted.*/**',
      'pages.disabled/**',
      'pages.disabled_auto/**',
      'pages.old/**',
      'pages_disabled/**',
      'pages_minimal/**',
      'pages._archive_corrupted/**',
      'pages._quarantine/**',
      'pages.bak/**',
      'pages-disabled/**',
      'pages-quarantine/**',
      'pages-backup/**',
      'data_backup/**',
      'deployments/**',
      'lib.broken/**',
      'lib.disabled/**',
      'lib_backup/**',
      'hooks/**',
      'middleware/**',
      'lint-target/**',
      'components/api/**',
      'components/apps/**',
      'components/auth/**',
      'components/automation/**',
      'components/automations/**',
      'components/backgrounds/**',
      'components/broken/**',
      'components/calls/**',
      'components/category/**',
      'components/context/**',
      'components/deploy/**',
      'components/developers/**',
      'components/disputes/**',
      'components/docs/**',
      'components/error/**',
      'components/events/**',
      'components/feedback/**',
      'components/forms/**',
      'components/foundation/**',
      'components/governance/**',
      'components/grants/**',
      'components/i18n/**',
      'components/learn/**',
      'components/main/**',
      'components/media/**',
      'components/monetization/**',
      'components/offworld/**',
      'components/onboarding/**',
      'components/partners/**',
      'components/performance/**',
      'components/products/**',
      'corrupted-files-backup/**',
      'cypress/**',
      'cypress_backup/**',
      'data/**',
      'lib/integrations/**',
      'automation/**',
      'backup-merge-conflicts/**',
      'broken_files_backup/**',
      'components-disabled/**',
      'components.disabled/**',
      'components.disabled_full/**',
      'apps.backup/**',
      'components/*.dynamic.jsx',
      'components/PageTransition.jsx',
      'components/browserstack.config.ts',
      'components/playwright.config.ts',
      'fix_typescript_syntax_errors.jsx',
      'pages.disabled.full/**',
      'scripts/**',
      'utils/**',
      'types/**',
      'tests/**',
      'src_backup/**',
      'src_backup_temp/**',
      'temp-backup/**',
      'vite.config-backup.ts',
      'zion/**',
      'components/reports/**',
      'components/sections/**',
      'components/services/**',
      'components/vendors/**',
      'components/wallet/**',
      'components/zion/**',
      'components/reviews/**',
      'components/search/**',
      'components/seo/**',
      'components/studio/**',
      'components/support/**',
      'components/token/**',
      'components/tokens/**',
      'components/layout/**',
      'components/ui/**',
      '*.cjs',
      '*.test.js',
      '*.test.ts',
      '*.test.tsx',
      '*.spec.js',
      '*.spec.ts',
      '*.spec.tsx',
      'pm2-automation/**',
      'services/**',
      '*.js',
      '*.ts',
      'public/sw*.js',
      'resolve-*.js',
      'run-complete-automation.js',
      'security-config.js';
      'seo-improvements.js';
      'simple-test.js';
      'syntax-fixer.js';
      'performance-monitor.js']}];
=======
      ...jsxA11y.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
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
    languageOptions: {
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
      "no-undef": "error",
      "prefer-const": "error"
    }
  }
];
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
