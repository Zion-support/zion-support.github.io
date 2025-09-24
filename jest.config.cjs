/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/__safe_tests__'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      { presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'] }
    ]
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  // Run only safe tests
  testMatch: ['<rootDir>/__safe_tests__/**/*.(test|spec).(js|jsx|ts|tsx)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/out/',
    '/dist/',
    '/__tests__/',
    '/recovered-branches/',
    '/src_backup/',
    '/backup/',
    '/backup-problematic-files/',
    '/components.disabled/',
    '/components.disabled_full/',
    '/pages-disabled/',
    '/pages.disabled/',
    '/pages.disabled_auto/',
    '/pages.disabled_full/',
    '/pages_backup/',
    '/pages_backup_before_cleanup/',
    '/pages_backup_conflict/',
    '/pages_backup_conflicts/',
    '/pages.broken/',
    '/pages._archive_corrupted/',
    '/pages._quarantine/',
    '/pages-quarantine/',
    '/tests/',
    '/e2e/',
    '/temp_exclude/',
    '/ts_files_backup/'
  ],
  passWithNoTests: true
}
