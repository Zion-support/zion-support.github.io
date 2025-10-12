export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir></rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir></rootDir>/$1',
    '^@/components/(.*)$': '<rootDir></rootDir>/app/components/$1',
    '^@/content/(.*)$': '<rootDir></rootDir>/content/$1'
  } ,
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  } ,
  testMatch: [
    '<rootDir></rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)',
    '<rootDir></rootDir>/__tests__/**/*.(test|spec).(ts|tsx|js|jsx)'
  ],
  collectCoverageFrom: [
    'app/**/*.{ts,tsx} ',
    '!app/**/index.{ts,tsx} ',
    '!app/**/*.d.ts'
  ],
  testPathIgnorePatterns: [
    '<rootDir></rootDir>/out/',
    '<rootDir></rootDir>/node_modules/'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|lucide-react|framer-motion))'
  ]
};