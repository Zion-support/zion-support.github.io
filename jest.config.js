const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/backups/',
    '<rootDir>/backup/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/backup-merge-conflicts/',
    '<rootDir>/components.disabled/',
    '<rootDir>/components-disabled/',
    '<rootDir>/pages-disabled/',
    '<rootDir>/pages.disabled/',
    '<rootDir>/pages.disabled_full/',
    '<rootDir>/src.disabled/',
    '<rootDir>/src_backup_temp/',
    '<rootDir>/temp_exclude/',
    '<rootDir>/corrupted_backup/',
  ],
  testMatch: [
    '<rootDir>/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)',
    '<rootDir>/tests/**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  maxWorkers: 2,
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'lib/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)