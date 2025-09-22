const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/out/',
    '/dist/',
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
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
}

module.exports = createJestConfig(customJestConfig)

