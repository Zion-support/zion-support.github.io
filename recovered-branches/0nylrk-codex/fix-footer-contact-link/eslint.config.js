<<<<<<< HEAD
import js from "@eslint/js",
import globals from "globals",
import reactHooks from "eslint-plugin-react-hooks",
import reactRefresh from "eslint-plugin-react-refresh",
import tseslint from "typescript-eslint",
=======
import js from &quot;@eslint/js&quot;;
import globals from &quot;globals&quot;;
import reactHooks from &quot;eslint-plugin-react-hooks&quot;;
import reactRefresh from &quot;eslint-plugin-react-refresh&quot;;
import tseslint from &quot;typescript-eslint&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default tseslint.config(
<<<<<<< HEAD
  { ignores: [&quot;dist&quot;] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: [&quot;**/*.{ts,tsx}&quot;],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser},
    plugins: {
      &quot;react-hooks&quot;: reactHooks,
      &quot;react-refresh&quot;: reactRefresh},
    rules: {
      ...reactHooks.configs.recommended.rules,
      &quot;react-refresh/only-export-components&quot;: [
        &quot;warn&quot;,
        { allowConstantExport: true }],
<<<<<<< HEAD
=======
  {_ignores: ["dist"]},
  {_extends: [js.configs.recommended, _...tseslint.configs.recommended], _files: ["**/*.{ts, _tsx}"],
    languageOptions: {_ecmaVersion: 2020, _globals: globals.browser},
    plugins: {_"react-hooks": reactHooks, _"react-refresh": reactRefresh},
    rules: {_...reactHooks.configs.recommended.rules, _"react-refresh/only-export-components": [
        "warn", _{ allowConstantExport: true}],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      "@typescript-eslint/no-unused-vars": "off"}}
),
=======
      &quot;@typescript-eslint/no-unused-vars&quot;: &quot;off&quot;}}
);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
