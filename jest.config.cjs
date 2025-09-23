const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  roots: ['<rootDir>/src', '<rootDir>/app', '<rootDir>/components', '<rootDir>/__tests__', '<rootDir>/tests'],
  testMatch: [
    '**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverage: false,
  verbose: true,
  testTimeout: 15000,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/src.disabled/',
    '<rootDir>/components.disabled/',
    '<rootDir>/app.disabled/',
    '<rootDir>/apps.backup/',
    '<rootDir>/backup/',
    '<rootDir>/backups/',
    '<rootDir>/backup-merge-conflicts/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/**/conflicted',
    '<rootDir>/**/.temp_backup_components/',
    '<rootDir>/**/.history/',
    '<rootDir>/ts_files_backup/',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/recovered-branches/',
    '<rootDir>/automation/backups/',
    '<rootDir>/.temp_backup_components/',
    '<rootDir>/apps.backup/',
    '<rootDir>/components/apps/',
  ],
};

module.exports = createJestConfig(config);

