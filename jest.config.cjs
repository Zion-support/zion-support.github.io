const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/*.d.ts',
    '!**/*.stories.{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/pages.disabled/',
    '<rootDir>/src.pages.disabled/',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json',
      },
    ],
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  testTimeout: 10000,
};

module.exports = createJestConfig(customJestConfig);
