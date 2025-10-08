// Jest configuration for Vite + React project

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript',
      ],
    }],
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/dist/**',
  ],
  coverageThreshold: {
    global: {
      branches: 3.5,
      functions: 3,
      lines: 3.8,
      statements: 3.8,
    },
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/out/',
    '<rootDir>/dist/',
    '<rootDir>/backup/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/corrupted-src-backup/',
    '<rootDir>/api-disabled/',
    '<rootDir>/api-backup/',
    '<rootDir>/_app_disabled/',
    '<rootDir>/_conflicted_disabled/',
    '<rootDir>/_pages_api_disabled/',
    '<rootDir>/_pages_disabled/',
    '<rootDir>/admin-api-disabled/',
    '<rootDir>/api.disabled/',
    '<rootDir>/api.disabled.temp/',
    '<rootDir>/apps.backup/',
    '<rootDir>/automation_backup/',
    '<rootDir>/components_backup/',
    '<rootDir>/data_backup/',
    '<rootDir>/lib_backup/',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!(lucide-react|@heroicons/react)/)',
  ],
};