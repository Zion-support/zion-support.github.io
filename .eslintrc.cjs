module.exports = {
  extends: [
    'next/core-web-vitals'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': 'warn'
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'dist/',
    'build/',
    '*.config.js',
    '*.config.ts',
    'scripts/',
<<<<<<< HEAD
    'automation/',
    'netlify/',
    'apps/',
    // Exclude large or archived areas with known invalid code/tests
    '__tests__/**',
    'tests/**',
    'backups/**',
    'backup*/**',
    'backup-problematic-files/**',
    'corrupted_backup/**',
    'temp_exclude/**',
    'temp_*/**',
    'ts_files_backup/**',
    // Consolidated ignores from both branches
    'components/**',
    'components.disabled/**',
    'components.browserstack.config.ts',
    'pages.disabled/**',
    'pages_backup/**',
    'pages.bak/**',
    'pages._archive_corrupted/**',
    'pages-disabled/**',
    'src.disabled/**',
    'src-disabled/**',
    'src_backup/**',
    'src_backup_all/**',
    'src_backup_temp/**',
    'src.broken/**',
    'src.corrupted/**',
    'components.disabled_full/**',
    'pages.disabled_full/**',
    'apps.backup/**',
    'app_backup/**',
    // Additional problematic directories
    '.temp_backup_components/**',
    'src.corrupted/**',
    'src/**',
    'lib/**',
    'backend/**',
    'server/**',
    'zion-os/**',
    'zion-website/**',
    'zion-ai-assistant/**',
  ],
};
=======
    'automation/'
  ]
};
>>>>>>> cursor/check-fix-push-and-merge-to-main-2dca
