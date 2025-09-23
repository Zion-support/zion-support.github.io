import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/',
    '<rootDir>/tests/',
    '<rootDir>/tests.disabled/',
    '<rootDir>/.temp_backup_components/',
    '<rootDir>/automation/backups/',
    '<rootDir>/**/*.backup*/',
    '<rootDir>/**/*backup*/',
    '<rootDir>/**/*corrupt*/',
    '<rootDir>/**/*conflict*/',
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
    '<rootDir>/pages.corrupted.*',
    '<rootDir>/recovered-branches/',
    '<rootDir>/ts_files_backup/',
    '<rootDir>/temp_exclude/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/e2e/',
  ],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig)