
module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react-hooks/rules-of-hooks': 'errorreact-hooks/exhaustive-deps': 'warn@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
    ],
    '@typescript-eslint/no-explicit-any': 'warn@typescript-eslint/no-empty-object-type': 'warn@next/next/no-html-link-for-pages': 'warn'
  },
  ignorePatterns: [
    'node_modules/.next/',
    'out/build/',
    'dist/*.config.js',
    '*.config.tsscripts/',
    'automation/netlify/',
    'src/apps/'
  ]
},
,
