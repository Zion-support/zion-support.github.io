export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vitest$': '<rootDir>/tests/vitest-mock.ts',
  },
  transform: {},
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

