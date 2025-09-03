module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "react-hooks/exhaustive-deps": "warn",
  },
  ignorePatterns: [
    "node_modules/", 
    ".next/", 
    "out/",
    "build/",
    "dist/",
    "*.config.js",
    "*.config.cjs",
    "*.config.mjs"
  ],
}
