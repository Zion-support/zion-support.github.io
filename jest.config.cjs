const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
<<<<<<< HEAD
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
=======
    '<rootDir>/src.disabled/',
    '<rootDir>/components.disabled/',
    '<rootDir>/pages.disabled/',
    '<rootDir>/src/__tests__/.*\.test\.tsx?$'
  ],
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}',
<<<<<<< HEAD
    '!src/**/*.spec.{js,jsx,ts,tsx}',
  coveragePathIgnorePatterns: [
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
};

module.exports = createJestConfig(customJestConfig);
=======
module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/*.(test|spec).+(ts|tsx|js)
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest
    'src/**/*.{ts,tsx}',
    '!src/main.tsx',
    '!src/vite-env.d.ts
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    '^@/(.*)$': '<rootDir>/src/$1
  testTimeout: 10000
>>>>>>> cursor/automate-test-improve-and-merge-code-6b26
=======
  ],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '<rootDir>/src/__tests__/**/*.test.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.test.{js,jsx,ts,tsx}',
  ],
};

module.exports = createJestConfig(customJestConfig);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
