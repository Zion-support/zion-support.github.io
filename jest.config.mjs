import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js|jsx)'],
  modulePathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/automation/backups/',
    '/apps.backup/',
    '/backup-merge-conflicts/',
    '/backup-problematic-files/',
    '/recovered-branches/',
    '/src.disabled/',
    '/components.disabled/',
    '/pages.disabled/',
    '/ts_files_backup/',
    '/backups/',
    '/backup/',
    '/src.broken/',
    '/temp_backup/',
    '/tests/',
    '/__tests__/',
    '/test/',
    '/__safe_tests__/'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/src.disabled/',
    '/components.disabled/',
    '/pages.disabled/',
    '/ts_files_backup/',
    '/src.broken/',
    '/__tests__/',
    '/tests/',
    '/test/',
    '/__safe_tests__/'
  ],
}

export default createJestConfig(customJestConfig)

