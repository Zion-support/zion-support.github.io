const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testMatch: ['**/__smoke__/**/*.(test|spec).(js|jsx|ts|tsx)'],
  passWithNoTests: true,
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/out/',
    '<rootDir>/backups/',
    '<rootDir>/backup/',
    '<rootDir>/backup-merge-conflicts/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/components.disabled/',
    '<rootDir>/components-disabled/',
    '<rootDir>/components.disabled_full/',
    '<rootDir>/src.disabled/',
    '<rootDir>/src-disabled/',
    '<rootDir>/pages.disabled/',
    '<rootDir>/pages-disabled/',
    '<rootDir>/pages_backup/',
    '<rootDir>/temp_exclude/',
    '<rootDir>/corrupted_backup/',
  ],
  maxWorkers: 1,
  testTimeout: 30000,
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)