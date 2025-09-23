import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  {
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "dist/",
      "build/",
      "coverage/",
      "automation/",
      "components/",
      "hooks/",
      "backups/",
      "backup/",
      "backup-merge-conflicts/",
      "backup-problematic-files/",
      "src/**",
      "components/**",
      "hooks/**",
      "lib/**",
      "utils/**",
      "api/",
      "app_backup/",
      "app-disabled/",
      "app-minimal/",
      "apps.backup/",
      "components.disabled/",
      "components.disabled_full/",
      "pages-disabled/",
      "pages.bak/",
      "pages_backup_before_cleanup/",
      "pages.broken/",
      "pages.corrupted*",
      "recovered-branches/",
      "server/",
      "temp_backup/",
      "temp_exclude/",
      "tests.disabled/",
      "ts_files_backup/",
      "zion-os/",
      "zion-os.*",
    ],
  },
  ...tseslint.configs.recommended,
  js.configs.recommended,
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
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "no-undef": "off",
    },
  },
];
