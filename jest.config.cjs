/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json', useESM: true }],
    '^.+\\.(js|jsx)$': ['ts-jest', { tsconfig: 'tsconfig.json', useESM: true }],
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/?(*.)+(spec|test).(ts|tsx|js)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  modulePathIgnorePatterns: ['<rootDir>/deployment/', '<rootDir>/deployments/', '<rootDir>/backup/'],
  testPathIgnorePatterns: [
    '<rootDir>/tests/',
  ],
};

