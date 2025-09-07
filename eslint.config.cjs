const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "prefer-const": "warn"
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: true,
        es2021: true,
        node: true
      }
    }
  }
];