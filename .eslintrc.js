module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "no-console": "off",
>>>>>>> origin/main
    "prefer-const": "error",
    "no-var": "error",
    "react/no-unescaped-entities": "off"
  },
  ignorePatterns: ["dist", "node_modules", "*.config.js", "*.config.ts"],
};