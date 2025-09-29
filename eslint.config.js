// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import cypressPlugin from "eslint-plugin-cypress/flat";
import tsParser from "@typescript-eslint/parser";

const browserGlobals = Object.fromEntries(
  Object.entries(globals.browser).map(([key, value]) => [key.trim(), value])
);
const nodeGlobals = Object.fromEntries(
  Object.entries(globals.node).map(([key, value]) => [key.trim(), value])
);
const serviceWorkerGlobals = Object.fromEntries(
  Object.entries(globals.serviceworker).map(([key, value]) => [key.trim(), value])
);

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.ts',
      'public/**',
      'coverage/**',
      'scripts/**',
      'backup/**',
      'backup-pages/**',
      'backup-merge-conflicts/**',
      'src.corrupted/**',
      'backup-problematic-files/**',
      'src.disabled/**',
      'src.pages.disabled/**',
      'automation/**',
      'temp_broken_files/**',
      'cypress_backup/**',
      '**/*.disabled.*',
      '**/*.backup.*',
      '**/*.broken.*',
      '**/*.corrupted.*',
      '**/*.temp.*'
    ]
  },
  {
    files: ["**/*.{js,cjs,mjs}"],
    rules: js.configs.recommended.rules,
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...nodeGlobals },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: { ...browserGlobals },
    },
    plugins: { "react-hooks": reactHooks, "react-refresh": reactRefresh },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
  {
    files: ["api/**/*.js", "pages/api/**/*.js", "src/utils/setupAnalyticsTables.js"],
    languageOptions: { sourceType: "module", globals: { ...nodeGlobals } },
  },
  {
    files: ["public/service-worker.js"],
    languageOptions: { globals: { ...serviceWorkerGlobals } },
  },
  {
    files: ["src/**/*.{ts,tsx}", "pages/**/*.{ts,tsx}"],
    languageOptions: {
      globals: { ...browserGlobals },
    },
    plugins: { "react-hooks": reactHooks, "react-refresh": reactRefresh },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
  {
    files: ["vite.config.ts", "tailwind.config.ts", "cypress.config.ts", "vitest.config.ts"],
    languageOptions: {
      globals: { ...nodeGlobals },
    },
  },
  {
    files: ["__tests__/**/*.{ts,tsx}"],
    languageOptions: {
      globals: { ...globals.jest, ...browserGlobals },
    },
  },
  {
    files: ["tests/**/*.{ts,tsx,js,jsx}"],
    ignores: ["tests/e2e/**"],
    languageOptions: {
      globals: { ...globals.jest, ...browserGlobals },
    },
  },
  {
    files: [
      ".storybook/**/*.ts",
      ".storybook/**/*.tsx",
      "src/**/*.stories.tsx",
      "src/**/*.stories.ts",
      "stories/**/*.stories.tsx",
      "stories/**/*.stories.ts",
    ],
    languageOptions: {
      globals: { ...browserGlobals },
    },
    rules: {
      "import/no-anonymous-default-export": "off",
      "react-refresh/only-export-components": "off",
    },
  },
  {
    files: ["supabase/functions/**/*.ts"],
    languageOptions: {
      globals: { ...nodeGlobals },
    },
  },
  {
    files: ["cypress/**/*.ts", "cypress/**/*.tsx"],
    languageOptions: {
      globals: { ...browserGlobals, ...nodeGlobals },
    },
    rules: {
      "@typescript-eslint/no-namespace": "off",
    }
  },
  {
    files: ["cypress/**/*.{js,ts,tsx}"],
    ...cypressPlugin.configs.recommended,
    rules: {
      ...cypressPlugin.configs.recommended.rules,
    }
  },
  {
    files: ["cypress/support/commands.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...(cypressPlugin.configs.recommended.languageOptions?.globals || {}),
        ...nodeGlobals,
      }
    }
  }
];
