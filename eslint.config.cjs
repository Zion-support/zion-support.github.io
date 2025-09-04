module.exports = [
  {
    files: [
      "automation/**/*.{js,jsx,ts,tsx}",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        process: "readonly",
        React: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "prefer-const": "warn",
      "no-var": "warn",
      "no-undef": "warn",
    },
  },
  {
    ignores: ["**"],
  },
];
