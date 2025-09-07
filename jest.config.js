module.exports = {
  testEnvironment: 'jsdom,
  setupFilesAfterEnv: [<rootDir>/jest.setup.js'],
  testMatch: [
    '<rootDir>/__tests__/**/*.test.{ts,tsx},
    <rootDir>/app/**/*.test.{ts,tsx}',
    '<rootDir>/components/**/*.test.{ts,tsx}
  ],
  collectCoverageFrom: [
    app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx},
    !**/*.d.ts',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },

