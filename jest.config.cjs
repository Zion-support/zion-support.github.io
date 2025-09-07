<<<<<<< HEAD
const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)',
    '<rootDir>/src/**/*.(test|spec).(js|jsx|ts|tsx)',
    '<rootDir>/tests/**/*.(test|spec).(js|jsx|ts|tsx)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
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
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}',
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
