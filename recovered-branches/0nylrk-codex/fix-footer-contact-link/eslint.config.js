<<<<<<< HEAD
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import js from "@eslint/js",
import globals from "globals",
import reactHooks from "eslint-plugin-react-hooks",
import reactRefresh from "eslint-plugin-react-refresh",
import tseslint from "typescript-eslint",
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
export default tseslint.config(
  { ignores: ["dist"] }
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended]
    files: ["**/*.{ts,tsx}"]
    languageOptions: {
      ecmaVersion: 2020
      globals: globals.browser}
    plugins: {
      "react-hooks": reactHooks
      "react-refresh": reactRefresh}
    rules: {
      ...reactHooks.configs.recommended.rules
      "react-refresh/only-export-components": [

        "warn"
        { allowConstantExport: true }]
      "@typescript-eslint/no-unused-vars": "off"}}
<<<<<<< HEAD
)

),
<<<<<<< HEAD
;
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import js from "@eslint/js",;
import globals from "globals",;
import reactHooks from "eslint-plugin-react-hooks",;
import reactRefresh from "eslint-plugin-react-refresh",;
import tseslint from "typescript-eslint",;
export default tseslint.config(;
  { ignores: ["dist"] },;
  {;
    extends: [js.configs.recommended, ...tseslint.configs.recommended],;
    files: ["**/*.{ts,tsx}"],;
    languageOptions: {;
      ecmaVersion: 2020,;
      globals: globals.browser},;
    plugins: {;
      "react-hooks": reactHooks,;
      "react-refresh": reactRefresh},;
    rules: {;
      ...reactHooks.configs.recommended.rules,;
      "react-refresh/only-export-components": [;
        "warn",;
        { allowConstantExport: true }];
      "@typescript-eslint/no-unused-vars": "off"}}
);
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
