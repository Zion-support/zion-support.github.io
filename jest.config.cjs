const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript'
      ]
    }]
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/src/**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/main.tsx',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/.next/',
    '<rootDir>/out/',
    '<rootDir>/__tests__.disabled/',
    '<rootDir>/tests.disabled/',
    '<rootDir>/src_backup/',
    '<rootDir>/test.disabled/',
    '<rootDir>/plugins.disabled/',
    '<rootDir>/supabase.disabled/',
    '<rootDir>/dao/',
    '<rootDir>/pages.disabled/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  verbose: true,
  collectCoverage: false,
  testTimeout: 10000,
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  }
};

module.exports = createJestConfig(customJestConfig);
