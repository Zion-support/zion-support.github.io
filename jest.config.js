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
    '<rootDir>/components.disabled/',
    '<rootDir>/components-disabled/',
    '<rootDir>/components.disabled_full/',
    '<rootDir>/src-disabled/',
    '<rootDir>/src.disabled/',
    '<rootDir>/src_backup/',
    '<rootDir>/src_backup_temp/',
    '<rootDir>/src.broken/',
    '<rootDir>/src.corrupted/',
    '<rootDir>/pages.disabled/',
    '<rootDir>/pages-disabled/',
    '<rootDir>/pages.disabled_full/',
    '<rootDir>/pages._archive_corrupted/',
    '<rootDir>/pages._quarantine/',
    '<rootDir>/pages-backup/',
    '<rootDir>/pages_backup/',
    '<rootDir>/backup/',
    '<rootDir>/backups/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/backup-merge-conflicts/',
    '<rootDir>/broken_files_backup/',
    '<rootDir>/temp_*/',
    '<rootDir>/temp-backup/',
    '<rootDir>/temp_backup/',
    '<rootDir>/temp_broken_files/',
    '<rootDir>/tests.disabled/',
    '<rootDir>/pages-disabled/',
    '<rootDir>/pages.blog.disabled/',
    '<rootDir>/components-disabled/',
    '<rootDir>/ts_files_backup/',
  ],
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