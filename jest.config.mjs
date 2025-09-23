export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['<rootDir>/__safe_tests__/**/*.test.(ts|tsx|js|jsx)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '<rootDir>/src.disabled/',
    '<rootDir>/components.disabled/',
    '<rootDir>/tests.disabled/',
    '<rootDir>/ts_files_backup/',
    '<rootDir>/__tests__/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      { presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'] }
    ]
  }
};