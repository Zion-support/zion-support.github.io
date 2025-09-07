const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/src.disabled/',
    '<rootDir>/src-disabled/',
    '<rootDir>/components.disabled/',
    '<rootDir>/components-disabled/',
    '<rootDir>/pages.disabled/',
    '<rootDir>/backup/',
    '<rootDir>/backup-*/',
    '<rootDir>/broken*/',
    '<rootDir>/corrupted*/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/ai-optimization-backups/',
    '<rootDir>/apps.backup/',
    '<rootDir>/api-backup/',
    '<rootDir>/api-disabled/',
    '<rootDir>/api.disabled/',
    '<rootDir>/automation_backup/',
    '<rootDir>/cypress_backup/',
    '<rootDir>/data_backup/',
    '<rootDir>/data.disabled/',
    '<rootDir>/components.disabled_full/',
    '<rootDir>/apps/backup/',
    '<rootDir>/test-next/',
    '<rootDir>/backup-problematic-files/temp-exclude/',
    '<rootDir>/src/__tests__/.*\.test\.tsx?$',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/backup/.*',
    '<rootDir>/backup-*/.*',
    '<rootDir>/broken.*/.*',
    '<rootDir>/corrupted.*/.*',
    '<rootDir>/backup-problematic-files/.*',
    '<rootDir>/ai-optimization-backups/.*',
    '<rootDir>/apps.backup/.*',
    '<rootDir>/api-backup/.*',
    '<rootDir>/api-disabled/.*',
    '<rootDir>/api.disabled/.*',
    '<rootDir>/automation_backup/.*',
    '<rootDir>/cypress_backup/.*',
    '<rootDir>/data_backup/.*',
    '<rootDir>/data.disabled/.*',
    '<rootDir>/components.disabled_full/.*',
    '<rootDir>/apps/backup/.*',
    '<rootDir>/test-next/.*',
  ],
  watchPathIgnorePatterns: ['<rootDir>/backup.*', '<rootDir>/backup-problematic-files/.*'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '<rootDir>/src/__tests__/**/*.test.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.test.{js,jsx,ts,tsx}',
  ],
};

module.exports = createJestConfig(customJestConfig);
