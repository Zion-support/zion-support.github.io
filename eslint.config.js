import js from '@eslint/js';

export default [
  js.configs.recommended,
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
        node: true,
        document: "readonly",
        window: "readonly",
        console: "readonly",
        PerformanceObserver: "readonly"
      }
    }
  }
];