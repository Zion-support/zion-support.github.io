module.exports = {
  extends: [
    'next/core-web-vitals',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
  },
  ignorePatterns: [
    '**/*',
  ],
};