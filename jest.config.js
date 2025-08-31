module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  

},
  transform: {
<<<<<<< HEAD
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      presets: [
=======
    '^.+\\.(js|jsx|ts|tsx)$'['babel-jest', { 
      presets[
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript'
      ]
    }],
  },
  moduleFileExtensions['js', 'jsx', 'ts', 'tsx'],
  testMatch['**/__tests__/**/*.(js|jsx|ts|tsx)', '**/*.(test|spec).(js|jsx|ts|tsx)'],
  testPathIgnorePatterns['/node_modules/', '/tests.disabled/'],
  collectCoverageFrom[
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/main.tsx',
    '!src/App.jsx',
  ],
  coverageDirectory: 'coverage',
  coverageReporters['text', 'lcov', 'html'],
  transformIgnorePatterns[
    'node_modules/(?!(react-router-dom|@testing-library)/)'
  ],
};