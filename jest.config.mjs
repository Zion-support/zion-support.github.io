export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  roots: ['<rootDir>/app'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  modulePathIgnorePatterns: [
    '<rootDir>/automation/',
    '<rootDir>/apps.backup/',
    '<rootDir>/backups/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/recovered-branches/',
    '<rootDir>/server/',
    '<rootDir>/zion-os/',
    '<rootDir>/zion-website/',
    '<rootDir>/zion-ai-assistant/',
    '<rootDir>/generated-services/',
    '<rootDir>/token/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest'
  }
}