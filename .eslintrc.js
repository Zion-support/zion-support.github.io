module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended'
  ],
  plugins: ['testing-library', 'jest-dom'],
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'build/',
    'dist/',
    // Ignore large, experimental, or archived areas that contain malformed files
    'components/**',
    'components.disabled/**',
    'components-disabled/**',
    'components.disabled_full/**',
    'pages-disabled/**',
    'pages.disabled/**',
    'api.disabled/**',
    'api-disabled/**',
    'backup/**',
    'backups/**',
    'recovered-branches/**',
  ],
  rules: {
    // Custom rules for better code quality
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-unused-vars': 'warn',
    'prefer-template': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error',
    'prefer-destructuring': 'warn',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error',
    // Reduce noisy rule firing for static content pages
    'react/no-unescaped-entities': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always'
      }
    ]
  },
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.test.*', '**/*.spec.*'],
      env: {
        jest: true
      },
      rules: {
        'no-console': 'off'
      }
    }
  ]
};
