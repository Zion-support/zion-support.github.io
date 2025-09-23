// ESLint v9 flat config
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      ".next",
      "dist",
      "build",
      "coverage",
      "node_modules",
      "automation/**",
      "backups/**",
      "backup/**",
      "backup-merge-conflicts/**",
      "backup-problematic-files/**",
      "apps.backup/**",
      "components.disabled/**",
      "src.disabled/**",
      "server/**",
      "recovered-branches/**",
      "zion-os/**",
      "zion-os.disabled/**",
      "zion-ai-assistant/**",
      "app.disabled/**",
      "app_backup/**",
      "app-disabled/**",
      "app.conflicted.*/**",
      "__tests__/**",
      "__safe_tests__/**",
      "e2e/**",
      "components/api/docs/**",
      "data/api-docs/**",
      "plugins/**",
      "dao/**",
      ".temp_backup_components/**",
      ".temp/**",
      "temp_backup/**",
      "temp_exclude/**",
      "pages.bak/**",
      "ts_files_backup/**",
      "**/*.disabled/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];