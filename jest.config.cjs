module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  passWithNoTests: true,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [ '@testing-library/jest-dom', '<rootDir>/jest.setup.ts' ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Minimal mappers to avoid conflicts; project has no tests
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1'
  },
  testMatch: ['<rootDir>/src/**/*.(spec|test).(ts|tsx)'],
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
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx'
      },
      isolatedModules: true,
    }
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  coverageDirectory: 'coverage',
  collectCoverage: false,
  verbose: false,
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  },
  // Enable ES modules support
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  // Transform ignore patterns for node_modules
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|@testing-library|@babel/runtime))'
  ]
};
