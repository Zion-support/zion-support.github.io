import nextJest from 'next/jest.js'

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
  modulePathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/automation/backups/',
    '/apps.backup/',
    '/backup-merge-conflicts/',
    '/backup-problematic-files/',
    '/recovered-branches/',
    '/components.disabled/',
    '/src.disabled/',
    '/src_backup/',
    '/src_backup_all/',
    '/src-corrupted/',
    '/src.broken/',
    '/tests.disabled/',
    '/__safe_tests__/',
    '/ts_files_backup/',
    '/services_backup/',
    '/styles_backup/',
    '/temp_components.disabled/',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/components.disabled/',
    '/src.disabled/',
    '/src_backup/',
    '/src_backup_all/',
    '/src-corrupted/',
    '/src.broken/',
    '/tests.disabled/',
    '/__safe_tests__/',
    '/ts_files_backup/',
    '/services_backup/',
    '/styles_backup/',
    '/temp_components.disabled/',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig)