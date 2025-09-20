module.exports = {
  extends: [
    "eslint:recommended",
    "@typescript-eslint/recommended"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_" }
    ],
    "no-explicit-any": "warn"
  }
};
