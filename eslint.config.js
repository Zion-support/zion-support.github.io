<<<<<<< HEAD
import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
=======
import js from "@eslint/js
import globals from "globals
import reactHooks from "eslint-plugin-react-hooks
import reactRefresh from "eslint-plugin-react-refresh
import tseslint from "typescript-eslint
>>>>>>> 3e833c3ad2c3ddcb3543c60cbab89bd9bae51a20
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
=======
      "resolve-all-conflicts.js"
>>>>>>> main
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
)