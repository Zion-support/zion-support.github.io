module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    '@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': 'off',
    'react/no-unescaped-entities': 'warn',
    'no-undef': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    dom: true,
  },
<<<<<<< HEAD
=======
  globals: {
    KeyboardEvent: 'readonly',
    HTMLElement: 'readonly',
    HTMLButtonElement: 'readonly',
    MutationObserver: 'readonly',
  },
>>>>>>> 146b7a4be41fed060524b530ce670bbbe649937d
};
