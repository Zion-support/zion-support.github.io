export default {
  extends: [
    "next/core-web-vitals"
  ],
  ignorePatterns: [
    "pages.broken/**",
    "pages.corrupted.*/**",
    "pages.disabled/**",
    "pages.disabled_auto/**",
    "pages.old/**",
    "pages_disabled/**",
    "pages_minimal/**",
    "pm2-automation/**",
    "services/**",
    "*.js",
    "*.cjs",
    "*.mjs"
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
