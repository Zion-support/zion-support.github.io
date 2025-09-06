const nextJest = require('next/jest');

const createJestConfig = nextJest({
<<<<<<< HEAD
  dir: './',
=======
  dir: './'
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
});

const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
<<<<<<< HEAD
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
=======
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '**/__tests__/**/*.smoke.(js|jsx|ts|tsx)',
    '**/*.smoke.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
};

module.exports = createJestConfig(config);