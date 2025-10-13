module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
<<<<<<< HEAD
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.(ts|tsx)',
    '<rootDir>/src/**/__tests__/**/*.(ts|tsx)',
  ],
  collectCoverageFrom: [
    'src/**/*.(ts|tsx)',
    '!src/**/*.d.ts',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
=======
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }],
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.(ts|tsx)',
    '<rootDir>/app/**/__tests__/**/*.(ts|tsx)',
  ],
  collectCoverageFrom: [
    'app/**/*.(ts|tsx)',
    '!app/**/*.d.ts',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
>>>>>>> origin/main
};