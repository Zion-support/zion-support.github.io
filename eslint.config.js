import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
// import eslintConfigNext from 'eslint-config-next';

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
      "*.spec.tsx",
      "**/performance-*.json",
      "**/performance-*.js",
      "**/performance-*.cjs",
      "**/performance-*.sh",
      "**/performance-*.html",
      "**/performance-*.md",
      "**/performance-*.txt",
      "backup-problematic-files/**",
      "src.pages.disabled/",
      "src.disabled/",
      "src.broken/",
      "src.corrupted/",
      "src_backup/",
      "pages/",
      "pages_*/",
      "pages_api.disabled/",
      "pages_minimal/",
      "services/",
      "solutions.disabled/",
      "providers/",
      "public/",
      "server/",
      "data_backup/",
      "hooks.disabled/",
      "hooks/",
      "lib.broken/",
      "lib/",
      "lib_backup/",
      "lint-target/",
      "netlify/",
      "pages.old/",
      "components/",
      "contracts.disabled/",
      "cypress/",
      "cypress_backup/",
      "dao/",
      "data.disabled/",
      "data/",
      "temp_*/",
      "temp_conflicts/",
      "temp_exclude/",
      "temp_components/",
      "temp_backup/",
      "types/",
      "utils/",
      "zion-os/",
      "zion-website/",
      "zion-ai-assistant/",
      "supabase/",
      "**/*.backup.*",
      "**/*.old.*",
      "**/*.disabled.*",
      "**/*.broken.*",
      "**/*.corrupted.*",
      "**/*.temp.*",
      "**/*.test.*",
      "**/*.spec.*",
      "**/fix-*",
      "**/clean-*",
      "**/batch-*",
      "**/merge-*",
      "**/resolve-*",
      "**/systematic-*",
      "**/ultimate-*",
      "**/structural-*",
      "**/quick-*",
      "**/comprehensive-*",
      "**/enhanced-*",
      "**/complete-*",
      "**/app-optimizer.*",
      "**/improve-*",
      "**/find-*",
      "**/git-ops.*",
      "**/pr-manager.*",
      "**/merge-strategy.*",
      "**/resolve-and-merge-*",
      "**/merge-all-*",
      "**/merge-prs.*",
      "**/pr-*",
      "**/batch_*",
      "**/check_*",
      "**/commit-*",
      "**/complete_*",
      "**/deploy-*",
      "**/fix_*",
      "**/git_*",
      "**/health-*",
      "**/quick-*",
      "**/run-*",
      "**/start-*",
      "**/test-*",
      "**/ultimate-*",
      "**/super-*",
      "**/system-*",
      "**/ultimate-*"
    ]
  },

  // eslintConfigNext,

  // Fallback for problematic files (non-type-aware TS linting)
  {
    files: ["**/*.{js,jsx}"],
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
        afterAll: "readonly"
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
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
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
      "react/react-in-jsx-scope": "off"
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
      "no-undef": "error"
    }
  }
];