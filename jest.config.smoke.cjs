const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
<<<<<<< HEAD
  testMatch: [
    '**/__tests__/**/*.smoke.(js|jsx|ts|tsx)',
    '**/*.smoke.test.(js|jsx|ts|tsx)',
    '**/*.smoke.spec.(js|jsx|ts|tsx)'
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
    '/components.corrupted/',
    '/dist/',
    '/build/',
    '/temp_exclude/',
    '/temp_components/',
    '/temp_conflicts/',
    '/temp_working/',
    '/backup*/',
    '/corrupted_backup/',
    '/temp_*/'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
=======
  testMatch: ['**/__tests__/smoke/**/?(*.)+(test).[jt]s?(x)'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    'pages/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/src_backup/',
    '<rootDir>/temp_backup/',
    '<rootDir>/temp_components/',
    '<rootDir>/temp_conflicts/',
    '<rootDir>/temp_working/',
    '<rootDir>/backup*/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/temp_*/',
    '<rootDir>/components.disabled/',
    '<rootDir>/pages.disabled/',
    '<rootDir>/api.disabled/',
    '<rootDir>/src.disabled/',
    '<rootDir>/pages_backup/',
    '<rootDir>/lib_backup/',
    '<rootDir>/recovered-branches/',
    '<rootDir>/src.broken/',
    '<rootDir>/src.corrupted/',
    '<rootDir>/pages.broken/',
    '<rootDir>/pages.corrupted/',
    '<rootDir>/components.broken/',
    '<rootDir>/components.corrupted/'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!components/**/*.test.{js,jsx,ts,tsx}',
    '!components/**/*.spec.{js,jsx,ts,tsx}'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
  ],
  testTimeout: 30000,
  passWithNoTests: true
};

module.exports = createJestConfig(customJestConfig);