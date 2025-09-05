<<<<<<< HEAD
import js from "@eslint/js",;
import globals from "globals",;
import reactHooks from "eslint-plugin-react-hooks",;
import reactRefresh from "eslint-plugin-react-refresh",;
import tseslint from "typescript-eslint",;
;
export default tseslint.config(;
  { ignores:["dist"] },;
  {;
    extends:[js.configs.recommended, ...tseslint.configs.recommended],;
    files:["**/*.{ts,tsx}"],;
    languageOptions:{;
      ecmaVersion:2020,;
      globals:globals.browser},;
    plugins:{;
      "react-hooks":reactHooks,;
      "react-refresh":reactRefresh},;
    rules:{;
      ...reactHooks.configs.recommended.rules,;
      "react-refresh/only-export-components":[;
        "warn",;
        { allowConstantExport:true }],;
      "@typescript-eslint/no-unused-vars":"off"}}
),;
=======
import js from "@eslint/js",
import globals from "globals",
import reactHooks from "eslint-plugin-react-hooks",
import reactRefresh from "eslint-plugin-react-refresh",
import tseslint from "typescript-eslint",export default tseslint.config(
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
      "@typescript-eslint/no-unused-vars": "off"}}
),
      &quot;@typescript-eslint/no-unused-vars&quot;: &quot;off&quot;}}
);
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
