import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  // Only run unit tests in a controlled folder; skip noisy backups
  testMatch: ['<rootDir>/tests/unit/**/*.(spec|test).[jt]s?(x)'],
  // Keep Jest from traversing massive backup folders and nested app packages
  modulePathIgnorePatterns: [
    '<rootDir>/automation/',
    '<rootDir>/apps.backup/',
    '<rootDir>/components/apps/',
    '<rootDir>/recovered-branches/',
    '<rootDir>/backup/',
    '<rootDir>/backups/',
    '<rootDir>/backup-merge-conflicts/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/src_backup/',
    '<rootDir>/src_backup_temp/',
    '<rootDir>/.temp_backup_components/',
    '<rootDir>/src.broken/',
    '<rootDir>/components/api/docs/',
    '<rootDir>/data/api-docs/',
    '<rootDir>/temp_backup/',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    // Avoid scanning large backup and sample test dirs
    '<rootDir>/__tests__/',
    '<rootDir>/tests/',
    '<rootDir>/tests.disabled/',
    '<rootDir>/.temp_backup_components/',
    '<rootDir>/automation/backups/',
    '<rootDir>/src.disabled/',
    '<rootDir>/src_backup_temp/',
    '<rootDir>/src_backup/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/pages-disabled/',
    '<rootDir>/pages.bak/',
    '<rootDir>/components.disabled/',
    '<rootDir>/components.disabled_full/',
    '<rootDir>/pages.disabled/',
    '<rootDir>/pages.disabled_auto/',
    '<rootDir>/pages.disabled_full/',
    '<rootDir>/pages_backup_before_cleanup/',
    '<rootDir>/pages.broken/',
    '<rootDir>/pages.corrupted',
    '<rootDir>/recovered-branches/',
    '<rootDir>/ts_files_backup/',
    '<rootDir>/temp_exclude/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/e2e/',
  ],
  // Correct option name for Jest
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig)