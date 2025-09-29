export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [],
  modulePathIgnorePatterns: [
    '<rootDir>/automation/backups/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/backup/',
    '<rootDir>/backup-pages/',
    '<rootDir>/backup-merge-conflicts/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  coverageDirectory: 'coverage',
  collectCoverage: false
};
