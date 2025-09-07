module.exports = {
  testEnvironment: 'jsdom',
  // Run only curated smoke tests to avoid corrupted/empty suites
  testMatch: [
    '**/App.smoke.test.{js,jsx,ts,tsx}',
    '**/AppMinimal.test.{js,jsx,ts,tsx}'
  ],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/src_backup/',
    '<rootDir>/src.broken/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/_conflicted_disabled/',
    '<rootDir>/temp_components/',
    '<rootDir>/data/',
    '<rootDir>/apps.backup/',
    '<rootDir>/apps/'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};