import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "dist/**", 
      "node_modules/**", 
      "*.config.js", 
      "*.config.cjs",
      "backup/**",
      "backup-problematic/**",
      "backup-problematic-files/**",
      "backup-problematic-pages/**",
      "backup-unused-components/**",
      "corrupted-src-backup/**",
      "components/**",
      "contracts/**",
      "apps/**",
      "*.cjs",
      "*.js",
      "scripts/**",
      "add-missing-routes*.jsx",
      "cleanup-*.js",
      "comprehensive-*.js",
      "aggressive-*.js",
      "batch-*.js",
      "check-*.js",
      "auto-*.js"
    ]
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module"
      }
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn"
    }
  }
);