const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/tests/**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/dist/',
    '/build/',
    '/out/',
    '<rootDir>/e2e/',
    '<rootDir>/public/',
    '<rootDir>/scripts/',
    // Ignore root-level legacy/corrupted tests; only use tests/ folder
    '<rootDir>/__tests__/',
    '<rootDir>/src_backup/',
    '<rootDir>/src.disabled/',
    '<rootDir>/tests/',
    '<rootDir>/test-results/',
    '<rootDir>/test-reports/'
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/backup/',
    '<rootDir>/apps.backup/',
    '<rootDir>/ai-optimization-backups/',
    '<rootDir>/broken_files_backup/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/corrupted-files-backup/',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/dist/**',
    '!**/build/**',
    '!**/out/**',
    '!**/coverage/**',
    '!**/*.config.js',
    '!**/*.config.cjs',
    '!**/*.config.mjs',
    '!**/jest.setup.js',
    '!**/next-env.d.ts'
  ],
  testTimeout: 30000,
  passWithNoTests: true
};

module.exports = createJestConfig(customJestConfig);
