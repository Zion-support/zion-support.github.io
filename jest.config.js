export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
<<<<<<< HEAD

    '^@/(.*)$': '<rootDir>/app/$1',
=======
'^@/(.*)$': '<rootDir>/app/$1',
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/pages/(.*)$': '<rootDir>/app/$1',
    '^@/utils/(.*)$': '<rootDir>/app/utils/$1',
    '^@/types/(.*)$': '<rootDir>/app/types/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/config/(.*)$': '<rootDir>/app/config/$1',
    '^@/data/(.*)$': '<rootDir>/app/data/$1',
    '^@/content/(.*)$': '<rootDir>/app/content/$1'
<<<<<<< HEAD

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
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
'<rootDir>/app/**/__tests__/**/*.(ts|tsx|js|jsx)',
    '<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)',
    '<rootDir>/__tests__/**/*.(ts|tsx|js|jsx)',
    '<rootDir>/**/*.(test|spec).(ts|tsx|js|jsx)'
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
<<<<<<< HEAD

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
  globals: {
    'ts-jest': {
      useESM: true
    }
<<<<<<< HEAD

  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  preset: 'ts-jest'

=======
},
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  preset: 'ts-jest'
>>>>>>> cursor/website-audit-and-update-with-deployment-2b79
};