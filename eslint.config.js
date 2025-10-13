import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
<<<<<<< HEAD
    ignores: [
      "dist",
      ".next",
      "backup-problematic/**",
      "backup-unused-components/**",
      "corrupted-src-backup/**",
      "backup-unused-components/**",
      "src/**",
      "*.js",
      "scripts/**",
      "public/sw.js",
      "identify_missing_pages.js",
      "merge-with-conflict-resolution.js",
      "resolve-all-conflicts.js",
      "fix-unused-imports.cjs",
    ],
=======
//     ignores: [
//       "dist",
//       ".next",
//       "backup-problematic/**",
//       "corrupted-src-backup/**",
//       "src/**",
//       "*.js",
//       "scripts/**",
//       "public/sw.js",
      "identify_missing_pages.js",
//       "merge-with-conflict-resolution.js",
//       "resolve-all-conflicts.js",
//     ],
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  },
  {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
    },
    plugins: {
//       "react-hooks": reactHooks,
//       "react-refresh": reactRefresh,
    },
    rules: {
<<<<<<< HEAD
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-unused-vars": "warn",
=======
//       ...reactHooks.configs.recommended.rules,
//       "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-unused-vars": "error",
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
);