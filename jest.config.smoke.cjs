<<<<<<< HEAD
const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});

const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.smoke.(js|jsx|ts|tsx)',
    '<rootDir>/**/*.smoke.test.(js|jsx|ts|tsx)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/temp_exclude/',
    '<rootDir>/src_backup/',
    '<rootDir>/temp_backup/',
    '<rootDir>/temp_components/',
    '<rootDir>/temp_conflicts/',
    '<rootDir>/temp_working/',
    '<rootDir>/backup*/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/temp_*/',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
  ],
};

module.exports = createJestConfig(config);
=======
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.smoke.+(ts|tsx|js)',
    '**/*.smoke.(test|spec).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testTimeout: 30000,
  passWithNoTests: true
};
>>>>>>> cursor/automate-test-improve-and-merge-code-6b26
