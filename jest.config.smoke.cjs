const nextJest = require('next/jest');

const createJestConfig = nextJest({
  "dir": './',
});

const config = {
  "testEnvironment": 'jsdom',
  "setupFilesAfterEnv": ['<rootDir>/jest.setup.js'],
  "testMatch": [
    '**/__tests__/**/*.smoke.(js|jsx|ts|tsx)',
    '**/*.smoke.(test|spec).(js|jsx|ts|tsx)',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/src_backup/',
    '/src_backup_temp/',
    '/backup-problematic-files/',
    '/src.disabled/',
    '/pages_backup/',
    '/corrupted-files-backup/',
    '/lib_backup/',
    '/components.disabled/',
    '/components.disabled_full/',
    '/pages.disabled/',
    '/src.pages.disabled/',
    '/recovered-branches/',
    '/temp_backup/',
    '/api.disabled/',
    '/src.broken/',
    '/src.corrupted/',
    '/pages.broken/',
    '/pages.corrupted/',
    '/components.broken/',
    '/components.corrupted/'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  "moduleFileExtensions": ['ts', 'tsx', 'js', 'jsx', 'json'],
  "testPathIgnorePatterns": ['<rootDir>/.next/', '<rootDir>/node_modules/']
};

module.exports = createJestConfig(config);