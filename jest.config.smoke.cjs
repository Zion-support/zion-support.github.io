module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  roots: ['<rootDir>/tests'],
  testMatch: ['<rootDir>/tests/smoke.test.ts'],
  errorOnDeprecated: false,
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/zion-os.disabled/',
    '<rootDir>/backup-problematic-files/',
  ],
  transformIgnorePatterns: ['node_modules/(?!(.*\\.mjs$))'],
};