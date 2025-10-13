import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
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
    },
  },
  {
    ignores: [
      "dist", 
      "node_modules", 
      "*.config.js",
      "backup*/**",
      "backup-problematic*/**",
      "backup-unused-components/**",

      "corrupted-src-backup/**",


      "cleanup-*.cjs",
      "comprehensive-*.cjs",
      "fix-*.cjs",
      "fix-*.js",
      "create-*.cjs",
      "create-*.js",
      "scripts/**",
      "src/**",
      "utils/**",
      "*.cjs",

      "*.js",
      "*.py",
      "*.sh",
      "*.md",
      "*.txt",
      "*.json",
      "*.html",
      "*.original",
      "*.backup*",
      "__tests__/**",
      "api/**",
      "analysis/**",
      "ci-cd-reports/**",
      "content/**",
      "contracts/**"
    ],
  }
);
