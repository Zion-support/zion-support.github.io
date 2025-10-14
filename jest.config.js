export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/pages/(.*)$': '<rootDir>/app/$1',
    '^@/utils/(.*)$': '<rootDir>/app/utils/$1',
    '^@/types/(.*)$': '<rootDir>/app/types/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/config/(.*)$': '<rootDir>/app/config/$1',
    '^@/data/(.*)$': '<rootDir>/app/data/$1',
    '^@/content/(.*)$': '<rootDir>/app/content/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.jest.json',
      useESM: true
    }],
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.(ts|tsx|js|jsx)'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/app-broken/',
    '<rootDir>/app-disabled/',
    '<rootDir>/node_modules/',
    '<rootDir>/app/utils/__tests__/'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  preset: 'ts-jest'
};