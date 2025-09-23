import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '<rootDir>/src/**/*.(test|spec).(ts|tsx|js|jsx)'
  ],
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
    '/src.disabled/',
    '/components.disabled/',
    '/ts_files_backup/',
    '/backups/',
    '/backup/',
    '/src.broken/',
    '/temp_backup/',
    '/tests/',
    '/__tests__/',
    '/test/',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '<rootDir>/src.disabled/',
    '<rootDir>/components.disabled/',
    '<rootDir>/ts_files_backup/',
    '<rootDir>/backups/',
    '<rootDir>/backup/',
    '<rootDir>/src.broken/',
    '<rootDir>/temp_backup/',
    '<rootDir>/tests/',
    '<rootDir>/__tests__/',
    '<rootDir>/test/',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig)