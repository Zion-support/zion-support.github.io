/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  // Limit roots to the curated jest directory to avoid malformed backup tests
  roots: ['<rootDir>/__jest__'],
  testMatch: ['**/*.(test|spec).(ts|tsx|js|jsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript'
        ]
      }
    ]
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // Ignore problematic directories
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/', '/tests/']
};
