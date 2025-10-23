module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
<<<<<<< HEAD
    "no-unused-vars": ["error", { varsIgnorePattern: "^_" }],
    "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_" }],
=======
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
    "no-console": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
<<<<<<< HEAD
    "@typescript-eslint/no-explicit-any": "off",
=======
    "@typescript-eslint/no-explicit-any": "warn",
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
    "@typescript-eslint/no-non-null-assertion": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "prefer-const": "error",
    "no-var": "error",
  },
  ignorePatterns: ["dist", "node_modules", "*.config.js", "*.config.ts"],
};
