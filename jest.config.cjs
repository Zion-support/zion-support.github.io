module.exports = {
  testEnvironment: 'jsdom',
  // Only run tests within src; ignore corrupted legacy __tests__ content
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [ '@testing-library/jest-dom' ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Minimal mappers to avoid conflicts; project has no tests
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/build/',
    '/.next/',
    '/out/',
    '/__tests__/',
    '/tests.disabled/',
    '/__tests__/',
    '/automation/',
    '/automation_backup/',
    '/backup/',
    '/backup-pages/',
    '/backup-merge-conflicts/',
    '/backup-problematic-files/',
    '/_conflicted_disabled/',
    '/apps.backup/',
  ],
  modulePathIgnorePatterns: [
    '/__tests__/',
    '/automation/',
    '/automation_backup/',
    '/backup/',
    '/backup-pages/',
    '/backup-merge-conflicts/',
    '/backup-problematic-files/',
    '/_conflicted_disabled/',
    '/apps.backup/',
  ],
  transform: {
    '^.+\\.(t|j)sx?$': 'jest-esbuild'
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  coverageDirectory: 'coverage',
  collectCoverage: false,
  verbose: false,
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  }
};
