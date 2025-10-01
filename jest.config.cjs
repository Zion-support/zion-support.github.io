module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1'
  },
  testMatch: ['**/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/build/',
    '/.next/',
    '/out/',
    '/tests.disabled/',
    '/backup/',
    '/backup-problematic-files/',
    '/automation/',
    '/temp_broken_files/',
    '/__tests__/',
    '/e2e/',
    '/api-disabled/',
    '/api-backup/',
    '/components.disabled/'
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/backup/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/automation/',
    '<rootDir>/temp_broken_files/',
    '<rootDir>/out/',
    '<rootDir>/__tests__/',
    '<rootDir>/e2e/',
    '<rootDir>/api-disabled/',
    '<rootDir>/api-backup/',
    '<rootDir>/components.disabled/'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest' },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  coverageDirectory: 'coverage',
  collectCoverage: false,
  verbose: false,
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'] } };
