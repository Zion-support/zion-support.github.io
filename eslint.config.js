import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "*.config.js",
      "*.config.mjs",
      "*.cjs",
      "*.py",
      "*.sh",
      "*.md",
      "*.txt",
      "*.json",
      "*.html",
      "*.original",
      "*.backup*",
      "backup*/**",
      "backup-problematic*/**",
      "backup-unused-components/**",
      "corrupted-src-backup/**",
      "app-disabled/**",
      "app-broken/**",
      "temp-broken/**",
      "__tests__/**",
      "api/**",
      "analysis/**",
      "ci-cd-reports/**",
      "content/**",
      "contracts/**",
      "scripts/**",
      "public/**",
      "*.js",
      "*.cjs",
      "*.mjs"
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
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
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "no-undef": "off"
    },
  },
];