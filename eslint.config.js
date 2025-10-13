import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
<<<<<<< HEAD
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  {,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
    ignores: [
      "dist",
      ".next",
      "backup-problematic/**",
      "backup-unused-components/**",
      "corrupted-src-backup/**",
      "src/**",
      "*.js",
      "scripts/**",
      "public/sw.js",
      "identify_missing_pages.js",
      "merge-with-conflict-resolution.js",
      "resolve-all-conflicts.js",
      "fix-unused-imports.cjs",
    ],
  },
<<<<<<< HEAD
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  {,
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
      files: ["**/*.{ts,tsx}"],
      languageOptions: {,
    ecmaVersion: 2020,
        globals: globals.browser,
    },
      plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
      rules: {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
);