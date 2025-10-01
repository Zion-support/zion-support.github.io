/**
 * Jest configuration optimized for CI stability and comprehensive coverage
 */
module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },
  testMatch: ['**/src/**/*.test.ts?(x)', '**/src/**/*.(spec|test).ts?(x)', '**/__tests__/**/*.test.ts?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/build/',
    '/.next/',
    '/out/',
    '/tests.disabled/',
    '/automation/',
    '/backup/',
    '/backup-problematic-files/',
    '/apps.backup/',
    '/apps/',
    '/_app_disabled/',
    '/_pages_disabled/',
    '/_pages_api_disabled/'
  ],
  modulePathIgnorePatterns: [
    '^<rootDir>\/(automation|automation_backup|automation-reports|automation_logs|backup|backup-merge-conflicts|backup-pages|backup-problematic-files|ai-optimization-backups|apps\\.backup)(\/|$)'
  ],
  watchPathIgnorePatterns: [
    '<rootDir>/automation/',
    '<rootDir>/backup/',
    '<rootDir>/backup-problematic-files/'
  ],
  transform: {},
  cache: false,
};
