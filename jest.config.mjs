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
    '<rootDir>/components/api/docs/spec.ts',
    '<rootDir>/__tests__/',
    '<rootDir>/tests/',
    '<rootDir>/tests.disabled/',
    '<rootDir>/.temp_backup_components/',
    '<rootDir>/automation/backups/',
    '<rootDir>/backups/',
    '<rootDir>/backup-merge-conflicts/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/src.disabled/',
    '<rootDir>/src_backup_temp/',
    '<rootDir>/src_backup/',
    '<rootDir>/pages-disabled/',
    '<rootDir>/pages.bak/',
    '<rootDir>/components.disabled/',
    '<rootDir>/components.disabled_full/',
    '<rootDir>/pages.disabled/',
    '<rootDir>/pages.disabled_auto/',
    '<rootDir>/pages.disabled_full/',
    '<rootDir>/pages_backup_before_cleanup/',
    '<rootDir>/pages.broken/',
    '<rootDir>/src.broken/',
    '<rootDir>/temp_backup/',
    '<rootDir>/test/backend/',
    '<rootDir>/App.test.ts',
    '<rootDir>/recovered-branches/',
    '<rootDir>/ts_files_backup/',
    '<rootDir>/temp_exclude/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/e2e/',
  ],
  // Correct option name is moduleNameMapper
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  // Prevent Jest HasteMap from scanning huge/backup directories with conflicting package.json files
  modulePathIgnorePatterns: [
    '<rootDir>/automation/backups',
    '<rootDir>/backups',
    '<rootDir>/backup-merge-conflicts',
    '<rootDir>/backup-problematic-files',
    '<rootDir>/recovered-branches',
    '<rootDir>/apps.backup',
    '<rootDir>/app_backup',
    '<rootDir>/components/apps',
    '<rootDir>/plugins/wallet-connector/cypress',
    '<rootDir>/dao',
    '<rootDir>/server',
    '<rootDir>/zion-os',
    '<rootDir>/zion-website',
    '<rootDir>/zion-ai-assistant',
    '<rootDir>/generated-services',
    '<rootDir>/token',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig)