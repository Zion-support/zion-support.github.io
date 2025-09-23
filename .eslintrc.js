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
    'automation/',
    'scripts/',
    'apps/',
    'components.disabled/**',
    'pages.disabled/**',
    'pages-disabled/**',
    'pages.bak/**',
    'pages._archive_corrupted/**',
    'src.disabled/**',
    'src-disabled/**',
    'src_backup/**',
    'src_backup_temp/**',
    'src.broken/**',
    'src.corrupted/**',
    'backup-problematic-files/**',
    'temp_*/**',
  ],
  rules: {
    // Custom rules for better code quality
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-unused-vars': 'error',
    'react/no-unescaped-entities': 'off',
    'prefer-template': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error',
    'prefer-destructuring': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error',
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
    ],
    'react/no-unescaped-entities': 'off'
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
