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
    '<rootDir>/automation/',
    '<rootDir>/automation/backups/',
    '<rootDir>/apps.backup/',
    '<rootDir>/backup-merge-conflicts/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/backup/',
    '<rootDir>/backups/',
    '<rootDir>/recovered-branches/',
    '<rootDir>/server/',
    '<rootDir>/src.disabled/',
    '<rootDir>/components.disabled/',
    '<rootDir>/pages.disabled/',
    '<rootDir>/ts_files_backup/',
    '<rootDir>/tests/',
    '<rootDir>/test/',
    '<rootDir>/zion-os/',
    '<rootDir>/zion-os.disabled/',
    '<rootDir>/zion-ai-assistant/',
    '<rootDir>/src.broken/',
    '<rootDir>/temp_backup/',
    '<rootDir>/temp_components/',
    '<rootDir>/temp_disabled/',
    '<rootDir>/components/api/docs/',
    '<rootDir>/data/',
    '<rootDir>/__safe_tests__/',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '<rootDir>/automation/',
    '<rootDir>/automation/backups/',
    '<rootDir>/apps.backup/',
    '<rootDir>/backup-merge-conflicts/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/backup/',
    '<rootDir>/backups/',
    '<rootDir>/recovered-branches/',
    '<rootDir>/server/',
    '<rootDir>/src.disabled/',
    '<rootDir>/components.disabled/',
    '<rootDir>/pages.disabled/',
    '<rootDir>/ts_files_backup/',
    '<rootDir>/__tests__/',
    '<rootDir>/tests/',
    '<rootDir>/test/',
    '<rootDir>/zion-os/',
    '<rootDir>/zion-os.disabled/',
    '<rootDir>/zion-ai-assistant/',
    '<rootDir>/src.broken/',
    '<rootDir>/temp_backup/',
    '<rootDir>/temp_components/',
    '<rootDir>/temp_disabled/',
    '<rootDir>/components/api/docs/',
    '<rootDir>/data/',
    '<rootDir>/__safe_tests__/',
    '<rootDir>/App.test.ts',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig)