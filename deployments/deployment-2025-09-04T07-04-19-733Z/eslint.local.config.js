<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
<<<<<<< HEAD
=======
const js from "@eslint/js"; import typescript from "@typescript-eslint/eslint-plugin"; import typescriptParser from "@typescript-eslint/parser"; import react from "eslint-plugin-react"; import reactHooks from "eslint-plugin-react-hooks"; import next from "@next/eslint-plugin-next"; export default [js.configs.recommended,{ files: ["**/*.{js,jsx,ts,tsx}"],languageOptions: { parser: typescriptParser,parserOptions: { ecmaVersion: "latest",sourceType: "module",ecmaFeatures: { jsx: true }},globals: { self: "readonly",caches: "readonly",fetch: "readonly",Response: "readonly",Request: "readonly",clients: "readonly"}},plugins: { "@typescript-eslint": typescript,react,"react-hooks": reactHooks,"@next/next": next},rules: { .typescript.configs.recommended.rules,.react.configs.recommended.rules,.reactHooks.configs.recommended.rules,.next.configs.recommended.rules,"react/prop-types": "off","react/react-in-jsx-scope": "off"}},{ ignores: ["node_modules/**",".next/**","dist/**","build/**","out/**","coverage/**",]},];'"'"
import js from '@eslint/js'; import typescript from '@typescript-eslint/eslint-plugin'; import typescriptParser from '@typescript-eslint/parser'; import react from 'eslint-plugin-react'; import reactHooks from 'eslint-plugin-react-hooks'; import next from '@next/eslint-plugin-next'; export default [js.configs.recommended,{ "files": ['**/*.{js,jsx,ts,tsx}'],"languageOptions": { parser: typescriptParser,"parserOptions": { ecmaVersion: 'latest,"sourceType": 'module',"ecmaFeatures": { jsx: true }},"globals": { self: 'readonly,"caches": 'readonly',"fetch": 'readonly',"Response": 'readonly',"Request": 'readonly',"clients": 'readonly'}},"plugins": { '@typescript-eslint': typescript,react,'react-hooks': reactHooks,'@next/next': next},"rules": { ...typescript.configs.recommended.rules,...react.configs.recommended.rules,...reactHooks.configs.recommended.rules,...next.configs.recommended.rules,'react/prop-types': 'off','react/react-in-jsx-scope': 'off'}},{ "ignores": ['node_modules/**','.next/**','dist/**','build/**','out/**','coverage/**',]},];
<<<<<<< HEAD
=======
>>>>>>> origin/main
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
