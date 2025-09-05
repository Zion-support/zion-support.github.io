<<<<<<< HEAD
<<<<<<< HEAD
/* eslint-env node */
/* global module */
module.exports = {
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended'
  ],
=======
export default {
  extends: ['next/core-web-vitals', 'next/typescript'],
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'off',
    'no-undef': 'off',
<<<<<<< HEAD
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-explicit-any': 'warn'
  },
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  ignorePatterns: [
    'pages._archive_corrupted/**',
    'pages.disabled.full/**',
    'pages.disabled_auto/**',
    'pages_api.disabled/**',
    'pages_backup_conflict/**',
    'pages.blog.disabled/**',
    'pages.corrupted.*/**',
    'pages.broken/**',
    'pages.bak/**',
    'pages-quarantine/**',
    'pages-disabled/**',
    'pages.__backup/**',
    'temp_backup/**',
    'temp_broken_files/**',
    'temp_working/**',
    'tests.disabled/**',
    'lib_backup/**',
    'node_modules/**',
    '.next/**',
    'out/**',
    'dist/**',
    'build/**'
  ]
=======
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
  "extends": [
    "next/core-web-vitals",
    "next/typescript"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-console": "off",
    "no-undef": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-explicit-any": "warn"
  },
  "env": {
    "node": true,
    "browser": true,
    "es2021": true
  },
  "ignorePatterns": [
    "pages._archive_corrupted/**",
    "pages.disabled.full/**",
    "pages.disabled_auto/**",
    "pages_api.disabled/**",
    "pages_backup_conflict/**",
    "pages.blog.disabled/**",
    "pages.corrupted.*/**",
    "pages.broken/**",
    "pages.bak/**",
    "pages-quarantine/**",
    "pages-disabled/**",
    "pages.__backup/**",
    "temp_backup/**",
    "temp_broken_files/**",
    "temp_working/**",
    "tests.disabled/**",
    "lib_backup/**",
    "node_modules/**",
    ".next/**",
    "out/**",
    "dist/**",
    "build/**"
  ]
};
module.exports = {
<<<<<<< HEAD
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-useless-escape': 'warn'
  },
  env: {
    browser: true,
    es2021: true,
  },
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'no-unused-vars': 'warn',
    '@next/next/no-img-element': 'warn'
  }
<<<<<<< HEAD
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
};
=======
};
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
