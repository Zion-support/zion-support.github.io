module.exports = {
<<<<<<< HEAD
  extends: [
    "next/core-web-vitals"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
=======
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    'react/no-unescaped-entities': 'warn'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    dom: true
  },
  globals: {
    KeyboardEvent: 'readonly',
>>>>>>> 205f16ce4ac3a8c2ac0b2e278708c4357550db22
