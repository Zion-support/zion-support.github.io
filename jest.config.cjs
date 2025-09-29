module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Minimal mappers needed for this project
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/automation/',
    '<rootDir>/automation_backup/',
    '<rootDir>/backup/',
    '<rootDir>/backup-pages/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/backup-merge-conflicts/',
  ],
  watchPathIgnorePatterns: [
    '<rootDir>/automation/',
    '<rootDir>/automation_backup/',
    '<rootDir>/backup/',
    '<rootDir>/backup-pages/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/backup-merge-conflicts/',
  ],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/build/',
    '/.next/',
    '/out/',
    '/tests.disabled/',
    '/automation/',
    '/automation_backup/',
    '/backup/',
    '/backup-pages/',
    '/backup-problematic-files/',
    '/backup-merge-conflicts/' ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest' },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  coverageDirectory: 'coverage',
  collectCoverage: false,
  verbose: false,
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'] } };
