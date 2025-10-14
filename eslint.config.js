import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [;
  {
    ignores: ['app-broken/**', 'app-disabled/**', '__tests__/**', '**/*.test.tsx', '**/*.test.ts'],;
  },;
  js.configs.recommended,;
  {
    files: ['**/*.{ts,tsx,js,jsx}'],;
    languageOptions: {
      parser: typescriptParser,;
      parserOptions: {
        ecmaVersion: 'latest',;
        sourceType: 'module',;
        ecmaFeatures: {
          jsx: true,;
        },;
      },;
      globals: {
        // Browser globals;
        window: 'readonly',;
        document: 'readonly',;
        console: 'readonly',;
        // Jest globals;
        jest: 'readonly',;
        describe: 'readonly',;
        it: 'readonly',;
        test: 'readonly',;
        expect: 'readonly',;
        beforeEach: 'readonly',;
        afterEach: 'readonly',;
        beforeAll: 'readonly',;
        afterAll: 'readonly',;
        render: 'readonly',;
        screen: 'readonly',;
        // React Testing Library;
        Helmet: 'readonly',;
        HelmetProvider: 'readonly',;
      },;
    },;
    plugins: {
      "react-hooks": reactHooks,
      "react": react
    },
    rules: {
      ...typescript.configs.recommended.rules,;
      ...react.configs.recommended.rules,;
      ...reactHooks.configs.recommended.rules,;
      '@typescript-eslint/no-unused-vars': 'warn',;
      'react/react-in-jsx-scope': 'off',;
      'react/prop-types': 'off',;
      'no-undef': 'off', // Turn off no-undef for TypeScript files;
    },;
    settings: {
      react: {
        version: 'detect',;
      },;
    },;
  },;
];