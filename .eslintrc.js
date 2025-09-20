module.exports = {
  extends: [
    "next/core-web-vitals"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-no-undef": "off"
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  }
<<<<<<< HEAD
};
=======
}
>>>>>>> 3354b621683b5dbd53991e6ca60f957ffccef787
