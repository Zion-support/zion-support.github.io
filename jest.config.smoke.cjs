module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: [
    '<rootDir>/__tests__/**/*.smoke.test.{ts,tsx}',
    '<rootDir>/app/**/*.smoke.test.{ts,tsx}'
  ],
  collectCoverageFrom: [],
  coverageThreshold: {},
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: {
        jsx: 'react-jsx'
      }
    }]
  },
  preset: 'ts-jest',
  testTimeout: 10000
};