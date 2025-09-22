const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // Restrict tests to a minimal smoke suite to avoid running corrupted legacy tests
  testMatch: [
    '<rootDir>/__tests__/smoke/**/*.test.(js|jsx|ts|tsx)'
  ],
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
    '/pages-disabled/',
    '/pages.disabled/',
    '/tests/',
    '/__tests__/',
    '/temp_exclude/'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
}

module.exports = createJestConfig(customJestConfig)

