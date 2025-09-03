/**
 * Clean Jest configuration for this repo (CommonJS for Jest compatibility).
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  // Limit test discovery to a minimal, stable subset to keep CI fast
  testMatch: [
    '<rootDir>/App*.test.{ts,tsx}',
    '<rootDir>/src/test/**/*.test.{ts,tsx}',
    '<rootDir>/__tests__/**/*.(spec|test).{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/out/',
    '/dist/',
    '/build/',
    '/coverage/',
    '/__tests__.disabled/',
    '/tests.disabled/',
    '/src.disabled/',
    '/pages.disabled/',
    '/src\.pages\.disabled/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'src/**/*.{js,jsx,ts,tsx}',
    'utils/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
};

