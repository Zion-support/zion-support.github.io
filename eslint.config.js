import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
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
<<<<<<< HEAD
      "resolve-all-conflicts.js",
      "**/app/**/*.tsx",
      "**/api/**/*.js",
      "**/__tests__/**/*.tsx"
    ]
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
<<<<<<< HEAD
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    ignores: [
      "dist", 
      "node_modules", 
      "*.config.js",
      "backup-*/**",
      "backup-problematic/**",
      "backup-unused-components/**",
      "App_clean.tsx",
      "api/onsite-request.js",
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
      "*.cjs",
      "cleanup-*.js",
      "fix-*.js",
      "fix-*.cjs",
      "create-*.js",
      "create-*.cjs",
      "comprehensive-*.js",
      "comprehensive-*.cjs",
      "aggressive-*.js",
      "aggressive-*.cjs",
      "batch-*.js",
      "batch-*.cjs",
      "auto-*.js",
      "auto-*.cjs",
      "complete-*.js",
      "complete-*.cjs",
      "check-*.js",
      "check-*.cjs",
      "close-*.js",
      "close-*.cjs",
      "*.sh",
      "*.py",
      "*.json",
      "backup/**"
    ]
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
);