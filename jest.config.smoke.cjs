<<<<<<< HEAD
module.exports = {
=======
<<<<<<< HEAD
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
>>>>>>> origin/main
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.{js,jsx,ts,tsx}', '**/*.test.{js,jsx,ts,tsx}'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
<<<<<<< HEAD
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
=======
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};

module.exports = createJestConfig(config);
=======
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: [
    '<rootDir>/__tests__/**/*.smoke.test.{ts,tsx}',
    '<rootDir>/app/**/*.smoke.test.{ts,tsx}'
  ],
  collectCoverageFrom: [],
  coverageThreshold: {},
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: {
        jsx: 'react-jsx'
      }
    }]
  },
  preset: 'ts-jest',
  testTimeout: 10000
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
