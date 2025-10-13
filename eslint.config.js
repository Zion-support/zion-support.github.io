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
      "backup*",
      "cleanup*",
      "fix-*",
      "create-*",
      "comprehensive*",
      "aggressive*",
      "batch*",
      "auto*",
      "*.cjs",
      "*.js",
      "*.py",
      "*.sh",
      "*.txt",
      "*.md",
      "*.json",
      "*.html",
      "*.original",
      "*.backup*",
      "*.broken",
      "analysis/",
      "ci-cd-reports/",
      "content/",
      "contracts/",
      "corrupted-src-backup/",
      "scripts/",
      "src/"
    ],
  }
);