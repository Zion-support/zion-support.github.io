module.exports = {
  extends: [
    'next/core-web-vitals'
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
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
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'dist/',
    'build/',
    'scripts/',
    'automation/',
    'public/reports/**',
    'netlify/',
    '**/*.cjs',
    '**/*.mjs'
  ]
};
