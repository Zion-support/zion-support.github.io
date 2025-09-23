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
    'ts_files_backup/**',
    'temp-backup/**',
    'temp_backup/**',
    'temp_*/**',
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
    'types/**',
    'types.disabled/**',
    'utils/**',
    'utils.disabled/**',
    'zion-os/**',
    'zion-website/**',
    'zion-ai-assistant/**',
  ],
  rules: {
    // Custom rules for better code quality
    'prefer-const': 'warn',
    'no-var': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-unused-vars': 'error',
    'react/no-unescaped-entities': 'off',
    'prefer-template': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'warn',
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error',
    'prefer-destructuring': 'error',
    'react/no-unescaped-entities': 'off',
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
