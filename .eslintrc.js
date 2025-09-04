module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
  },
  ignorePatterns: [
    'components/**/*.test.ts',
    'components/**/*.test.js',
    'components/UI/**',
    'components/accessibility/**',
    'components/error/**',
    'components/layout/Enhanced*',
    'components/layout/Modern*',
    'components/performance/**',
    'components/seo/**',
    'components/ui/**',
    'lib/**',
  ],
};