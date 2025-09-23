/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/__safe_tests__'],
  testMatch: ['**/*.(test|spec).(ts|tsx|js|jsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: [],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript'
      ]
    }]
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '<rootDir>/__tests__/'
  ]
};
