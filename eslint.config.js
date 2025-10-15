import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

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
)