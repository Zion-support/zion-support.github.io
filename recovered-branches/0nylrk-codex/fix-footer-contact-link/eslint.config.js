import js from &quot;@eslint/js&quot;;
import globals from &quot;globals&quot;;
import reactHooks from &quot;eslint-plugin-react-hooks&quot;;
import reactRefresh from &quot;eslint-plugin-react-refresh&quot;;
import tseslint from &quot;typescript-eslint&quot;;

export default tseslint.config(
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
      &quot;@typescript-eslint/no-unused-vars&quot;: &quot;off&quot;}}
);
