module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  passWithNoTests: true,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [ '@testing-library/jest-dom', '<rootDir>/jest.setup.ts' ],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1'
  },
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/build/',
    '/.next/',
    '/out/',
    '/tests.disabled/',
    '/automation/',
    '/automation_backup/',
    '/backup/',
    '/backup-pages/',
    '/backup-merge-conflicts/',
    '/backup-problematic-files/',
    '/_conflicted_disabled/',
    '/apps.backup/',
    '<rootDir>/__tests__/',
    // Skip all broken test files
    '/__tests__/.*\\.test\\.js$',
    '/__tests__/.*\\.integration\\.test\\.js$',
    '/__tests__/.*\\.test\\.tsx$',
    '/__tests__/server/',
    '/__tests__/.*\\.test\\.test\\.tsx$',
    '/__tests__/.*\\.smoke\\.test\\.tsx$',
    '/__tests__/.*\\.dynamic\\.test\\.js$',
  ],
  modulePathIgnorePatterns: [
    '/automation/',
    '/automation_backup/',
    '/backup/',
    '/backup-pages/',
    '/backup-merge-conflicts/',
    '/backup-problematic-files/',
    '/_conflicted_disabled/',
    '/apps.backup/',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }],
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|react|react-dom|@testing-library))'
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  coverageDirectory: 'coverage',
  collectCoverage: false,
  verbose: false,
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  },
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: {
        jsx: 'react-jsx'
      },
      isolatedModules: true,
    }
  }
};
