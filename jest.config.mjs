import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__jest__/**/*.test.[jt]s?(x)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  modulePathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/automation/backups/',
    '/apps.backup/',
    '/backup-merge-conflicts/',
    '/backup-problematic-files/',
    '/recovered-branches/',
    '/__tests__/',
    '/tests/',
    '/ts_files_backup/',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/src.disabled/',
    '/components.disabled/',
    '/pages.disabled/',
    '/__tests__/',
    '/tests/',
    '/ts_files_backup/'
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig)