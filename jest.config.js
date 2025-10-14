export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/pages/(.*)$': '<rootDir>/app/$1',
    '^@/utils/(.*)$': '<rootDir>/app/utils/$1',
    '^@/types/(.*)$': '<rootDir>/app/types/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/config/(.*)$': '<rootDir>/app/config/$1',
    '^@/data/(.*)$': '<rootDir>/app/data/$1',
    '^@/content/(.*)$': '<rootDir>/app/content/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: '[',
    '<rootDir>/app/**/__tests__/**