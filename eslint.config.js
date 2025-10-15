import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  {
    ignores: [
      "dist",
      ".next",
      "backup-problematic/**",
      "corrupted-src-backup/**",
      "app-broken/**",
      "app-disabled/**",
      "src/**",
      "*.js",
      "scripts/**",
      "public/sw.js",
      "identify_missing_pages.js",
      "merge-with-conflict-resolution.js",
      "resolve-all-conflicts.js",
      "**/api/**/*.js",
      "**/__tests__/**/*.tsx",
      "App-backup.tsx",
      "App-minimal.tsx", 
      "App-optimized.tsx",
      "EnhancedFooter.tsx",
      "EnhancedHeader.tsx",
      "pages/**",
      "hooks/**",
      "utils/**",
      "main.tsx",
      "jest.setup.ts"
    ]
  },
  {
    ...js.configs.recommended,
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "off",
      ],
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": "off"
    },
  }
];