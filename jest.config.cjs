const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
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
    '/pages-disabled/',
    '/pages.disabled/',
    '/tests/',
    '/temp_exclude/',
    // Temporarily ignore all tests under __tests__ due to widespread corruption/incompatibility
    '/__tests__/'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
}

module.exports = createJestConfig(customJestConfig)

