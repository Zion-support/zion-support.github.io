/** @type {import('jest').Config} */
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  testMatch: ['<rootDir>/__tests__/**/*.(ts|tsx|js|jsx)', '<rootDir>/tests/**/*.(ts|tsx|js|jsx)'],
  roots: ['<rootDir>/__tests__', '<rootDir>/tests'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/build/',
    '/automation/',
    '/automation_backup/',
    '/backup/',
    '/backup-pages/',
    '/backup-merge-conflicts/',
    '/backup-problematic-files/',
    '/corrupted-files-backup/',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/automation/',
    '<rootDir>/automation_backup/',
    '<rootDir>/backup/',
    '<rootDir>/backup-pages/',
    '<rootDir>/backup-merge-conflicts/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/corrupted-files-backup/',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  collectCoverage: false,
};
