module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    '@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
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