// Minimal flat ESLint config compatible with ESLint v9
import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "build/**",
      "out/**",
      "coverage/**",
      "**/*.min.js",
    ],
  },
  {
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // In browser code, these globals exist at runtime; avoid noisy errors
      "no-undef": "off",
      // Prefer warnings for unused vars to reduce CI friction
      "no-unused-vars": "warn",
    },
  },
];

