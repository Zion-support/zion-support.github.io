// Flat ESLint config replacing deprecated .eslintignore usage
import eslintJs from "@eslint/js";
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";

export default [
  {
    ...eslintJs.configs.recommended,
    files: [
      "src/**/*.{js,jsx,ts,tsx}",
      "app/**/*.{js,jsx,ts,tsx}",
      "components/**/*.{js,jsx,ts,tsx}",
    ],
    ignores: [
      // dependencies and builds
      "node_modules/**",
      "dist/**",
      "build/**",
      ".next/**",
      "out/**",
      "public/**",
      // tests and reports
      "__tests__/**",
      "tests/**",
      "cypress/**",
      "e2e/**",
      "**/*.test.*",
      "**/*.spec.*",
      // backups / disabled / temp
      "**/*.backup/**",
      "**/*.disabled/**",
      "**/*.temp/**",
      "**/*.old/**",
      "backup*/**",
      "temp_*/**",
      "temp-backup/**",
      "temp_disabled/**",
      "recovered-branches/**",
      "public-backup/**",
      "pages-backup/**",
      "components-disabled/**",
      "components.disabled/**",
      // large/unrelated directories
      "apps/**",
      "automation/**",
      "infra/**",
      "monitoring/**",
      "netlify/**",
      "offworld/**",
      "prisma/**",
      "simulator/**",
      "solutions.disabled/**",
      "stories/**",
      "supabase/**",
      "token/**",
      "universe/**",
      "vision/**",
      "wiki/**",
      "zion/**",
      "zion_*/**",
      "zion-*/**",
    ],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "readonly",
        JSX: "readonly",
        jest: "readonly",
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: eslintReact,
      "react-hooks": eslintReactHooks,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "off",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-debugger": "warn",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/no-unescaped-entities": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];