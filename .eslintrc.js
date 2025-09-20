module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-undef": "off"
  },
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  ignorePatterns: [
    "**/*.ts",
    "**/*.tsx",
    "**/src/components.disabled/**",
    "**/src/data/**",
    "**/src/context/**",
    "**/src/hooks/**",
    "**/src/hoc/**",
    "**/src/layout/**",
    "**/src/legal/**",
    "**/src/lib/**",
    "**/src/main.js.jsx",
    "**/src/routes/**",
    "**/src/services/**",
    "**/src/store/**",
    "**/src/stories/**",
    "**/src/types/**",
    "**/src/integrations/**",
    "**/src/i18n/**",
    "**/src/config/**",
    "**/out/**",
    "**/.next/**",
    "**/node_modules/**"
  ]
};