export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
<<<<<<< HEAD

    '^@/(.*)$': '<rootDir>/app/$1',
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/pages/(.*)$': '<rootDir>/app/$1',
    '^@/utils/(.*)$': '<rootDir>/app/utils/$1',
    '^@/types/(.*)$': '<rootDir>/app/types/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/config/(.*)$': '<rootDir>/app/config/$1',
    '^@/data/(.*)$': '<rootDir>/app/data/$1',
    '^@/content/(.*)$': '<rootDir>/app/content/$1'

=======
'^@/(.*)$': '<rootDir>/$1',
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/pages/(.*)$': '<rootDir>/app/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
    '^@/types/(.*)$': '<rootDir>/types/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/config/(.*)$': '<rootDir>/config/$1',
    '^@/data/(.*)$': '<rootDir>/data/$1',
    '^@/content/(.*)$': '<rootDir>/content/$1',
>>>>>>> cursor/fix-errors-and-merge-to-main-fd3e
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.jest.json'
    }],
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testMatch: [
<<<<<<< HEAD

    '<rootDir>/app/**/__tests__/**/*.(ts|tsx|js|jsx)',
    '<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)',
    '<rootDir>/__tests__/**/*.(ts|tsx|js|jsx)',
    '<rootDir>/**/*.(test|spec).(ts|tsx|js|jsx)'

=======
'<rootDir>/app/**/__tests__/**/*.(ts|tsx|js)',
    '<rootDir>/app/**/*.(test|spec).(ts|tsx|js)',
    '<rootDir>/__tests__/**/*.(ts|tsx|js)'
>>>>>>> cursor/fix-errors-and-merge-to-main-fd3e
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
<<<<<<< HEAD

  globals: {
    'ts-jest': {
      useESM: true
    }

  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  preset: 'ts-jest'

=======
collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    '!app/**/*.d.ts',
    '!app/**/__tests__/**',
    '!app/**/*.test.{ts,tsx}',
    '!app/**/*.spec.{ts,tsx}'
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
>>>>>>> cursor/fix-errors-and-merge-to-main-fd3e
};