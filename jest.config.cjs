module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/__tests__/tsconfig.json',
      diagnostics: false,
      isolatedModules: true,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)',
    '<rootDir>/src/**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/automation/',
    '/backup/',
    '/backup-problematic-files/',
    '/apps.backup/',
    '/apps/',
    '/_app_disabled/',
    '/_pages_disabled/',
    '/_pages_api_disabled/'
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/automation/',
    '<rootDir>/backup/',
    '<rootDir>/backup-problematic-files/'
  ],
  watchPathIgnorePatterns: [
    '<rootDir>/automation/',
    '<rootDir>/backup/',
    '<rootDir>/backup-problematic-files/'
  ]
};
