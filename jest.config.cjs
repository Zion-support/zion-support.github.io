module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [],
  testPathIgnorePatterns: [
    '<rootDir>/deployment/',
    '<rootDir>/deployments/',
    '<rootDir>/tests/',
  ],
  testMatch: [
    '<rootDir>/tests/unit/**/*.test.{ts,tsx,js,jsx}',
    '<rootDir>/tests/integration/**/*.test.{ts,tsx,js,jsx}',
  ],
  collectCoverageFrom: [
    'components/**/*.{ts,tsx,js,jsx}',
    'lib/**/*.{ts,tsx,js,jsx}',
    'pages/**/*.{ts,tsx,js,jsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  passWithNoTests: true,
};
