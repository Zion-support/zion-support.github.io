export default {
  testEnvironment: 'jsdom','
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
'
    '^@/components/(.*)$': '<rootDir>/app/components/$1','
    '^@/pages/(.*)$': '<rootDir>/app/$1','
    '^@/utils/(.*)$': '<rootDir>/app/utils/$1','
    '^@/types/(.*)$': '<rootDir>/app/types/$1','
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1','
    '^@/config/(.*)$': '<rootDir>/app/config/$1','
    '^@/data/(.*)$': '<rootDir>/app/data/$1','
    '^@/content/(.*)$': '<rootDir>/app/content/$1'

  },
  transform: {'
    '^.+\\.(ts|tsx)$': ['ts-jest', {'
      tsconfig: 'tsconfig.jest.json'
    }],'
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testMatch: [

  ],'
  coverageDirectory: 'coverage','
  coverageReporters: ['text', 'lcov', 'html'],'
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  globals: {'
    'ts-jest': {
      useESM: true
    }

};