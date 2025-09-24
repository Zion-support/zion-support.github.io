const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  roots: ['<rootDir>/src', '<rootDir>/app', '<rootDir>/components', '<rootDir>/tests'],
  testMatch: [
    '**/__tests__/**/*.smoke.(js|jsx|ts|tsx)',
    '**/*.smoke.(test|spec).(js|jsx|ts|tsx)',
  ],
  collectCoverage: false,
  verbose: true,
  testTimeout: 10000,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  modulePathIgnorePatterns: [
    '<rootDir>/recovered-branches/',
    '<rootDir>/automation/backups/',
    '<rootDir>/.temp_backup_components/',
    '<rootDir>/apps.backup/',
    '<rootDir>/components/apps/',
  ],
};

module.exports = createJestConfig(config);
