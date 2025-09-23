import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "public/**",
      "automation/**",
      "apps.backup/**",
      "backup/**",
      "backups/**",
      "backup-merge-conflicts/**",
      "backup-problematic-files/**",
      "recovered-branches/**",
      "server/**",
      "zion-os/**",
      "zion-website/**",
      "zion-ai-assistant/**",
      "ts_files_backup/**",
      "src_backup/**",
      "src_backup_temp/**",
      "**/*.min.js",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    settings: { react: { version: "detect" } },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-console": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^(React|_)" },
      ],
      "no-undef": "off",
    },
  },
];
