module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vitest$': '<rootDir>/tests/vitest-mock.ts',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  roots: ['<rootDir>/tests'],
  // Use Node's native V8 coverage provider to avoid issues with
  // babel-plugin-istanbul instrumentation when running tests.
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 80,
    },
  },
};

