const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.smoke.+(ts|tsx|js)',
    '**/*.smoke.(test|spec).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/__mocks__/**',
    '!**/coverage/**',
    '!jest.config.js',
    '!jest.setup.js',
    '!next.config.js',
    '!postcss.config.js',
    '!tailwind.config.js'
  ]
};

module.exports = createJestConfig(customJestConfig);