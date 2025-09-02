/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    "next/core-web-vitals"
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

module.exports = config;
