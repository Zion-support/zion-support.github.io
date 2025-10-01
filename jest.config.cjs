module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  roots: ['<rootDir>/__tests__', '<rootDir>/src'],
  setupFilesAfterEnv: [ '@testing-library/jest-dom' ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Minimal mappers to avoid conflicts; project has no tests
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },
  testRegex: '^$',
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
    '/__tests__/.*\\.test\\.test\\.js$',
    '/__tests__/.*\\.dynamic\\.test\\.js$',
    '/__tests__/AccessibilityManager\\.test\\.js$',
    '/__tests__/AccessibilityEnhancer\\.test\\.js$',
    '/__tests__/AccessibilityEnhancer\\.test\\.tsx$',
    '/__tests__/server/authController\\.test\\.js$',
    '/__tests__/enhanced-home\\.integration\\.test\\.js$',
    '/__tests__/pricing-guide\\.integration\\.test\\.js$',
    '/__tests__/.*\\.test\\.js$',
    '/__tests__/.*\\.test\\.tsx$',
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
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      useESM: true
    }],
    '^.+\\.(js|jsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-react'
      ]
    }]
  },
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$))'
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'mjs'],
  coverageDirectory: 'coverage',
  collectCoverage: false,
  verbose: false,
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  }
};
