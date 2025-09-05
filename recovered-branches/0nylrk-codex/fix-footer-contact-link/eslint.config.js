import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {_ignores: ["dist"]},
  {_extends: [js.configs.recommended, _...tseslint.configs.recommended], _files: ["**/*.{ts, _tsx}"],
    languageOptions: {_ecmaVersion: 2020, _globals: globals.browser},
    plugins: {_"react-hooks": reactHooks, _"react-refresh": reactRefresh},
    rules: {_...reactHooks.configs.recommended.rules, _"react-refresh/only-export-components": [
        "warn", _{ allowConstantExport: true}],
      "@typescript-eslint/no-unused-vars": "off"}}
);
