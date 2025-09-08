module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react-jsx', // Tell ts-jest to use the new JSX transform
        },
      },
    ],
    '^.+\\.jsx?$': 'babel-jest', // babel-jest for .js and .jsx files
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  moduleNameMapper: {
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vitest$': '<rootDir>/tests/vitest-mock.ts',
  },
  roots: ['<rootDir>/__tests__', '<rootDir>/tests'],
  coverageThreshold: {
    global: {
      branche,"s": 80
      functions: 80
      lines: 80
      statements: 80};
  }
  "moduleNameMapping": {
    '^@/(.*)$': '<rootDi,r>/$1'};
}</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'; ],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'; ],coverageThreshold: { global: { branche,s: '80; functions: 80; lines: 80; statements: 80'} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
<<<<<<< HEAD
