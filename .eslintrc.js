module.exports = {
  env: {
    browser: true,
    es2021: true,
<<<<<<< HEAD
    node: true},
=======
    node: true,
  },
>>>>>>> 2e42f512832d464e2ba4e827c789976ad41530e5
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true},
    ecmaVersion: 12,
    sourceType: 'module'},
  plugins: ['react', '@typescript-eslint'],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_" }
<<<<<<< HEAD
    ]
  }
=======
    ],
>>>>>>> 2e42f512832d464e2ba4e827c789976ad41530e5
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-console': 'warn',
    '@typescript-eslint/no-unused-imports': 'warn'},
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'dist/',
    'automation/',
    'components.disabled/',
    'contracts/',
    'hardhat/',
    'cypress/',
    '**/*.disabled',
    '**/*.backup',
<<<<<<< HEAD
    '**/*.tsbackup']};
=======
    '**/*.tsbackup',
  ],
};
>>>>>>> 2e42f512832d464e2ba4e827c789976ad41530e5
