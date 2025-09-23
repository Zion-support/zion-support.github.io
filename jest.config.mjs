import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js|jsx)'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/',
    '<rootDir>/tests/',
    '<rootDir>/tests.disabled/',
    '<rootDir>/.temp_backup_components/',
    '<rootDir>/automation/backups/',
    '<rootDir>/apps.backup/',
    '<rootDir>/components/apps/',
    '<rootDir>/src.broken/',
    '<rootDir>/temp_backup/',
    '<rootDir>/temp_backup_pages/',
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
    '<rootDir>/__safe_tests__/',
    '<rootDir>/test/',
  ],
  haste: {
    providesModuleNodeModules: [],
    throwOnModuleCollision: false,
    forceNodeFilesystemAPI: true,
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig)