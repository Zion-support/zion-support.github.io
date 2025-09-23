import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  roots: ['<rootDir>/app'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/',
    '<rootDir>/tests/',
    '<rootDir>/tests.disabled/',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/automation/',
    '<rootDir>/automation/backups/',
    '<rootDir>/apps.backup/',
    '<rootDir>/backup/',
    '<rootDir>/backups/',
    '<rootDir>/backup-merge-conflicts/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/recovered-branches/',
    '<rootDir>/components/apps/',
    '<rootDir>/zion-os/',
    '<rootDir>/zion-website/',
    '<rootDir>/zion-ai-assistant/',
    '<rootDir>/server/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig)