export default {testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/content/(.*)$': '<rootDir>/content/$1'},
  transform: {'^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'},
  testMatch: ['<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)',
    '<rootDir>/__tests__/**/*.(test|spec).(ts|tsx|js|jsx)'],
  collectCoverageFrom: ['app/**/*.{ts,tsx}',
    '!app/**/index.{ts,tsx}',
    '!app/**/*.d.ts'],
  testPathIgnorePatterns: ['<rootDir>/out/',
    '<rootDir>/node_modules/'],
  transformIgnorePatterns: ['node_modules/(?!(.*\\.mjs$|lucide-react|framer-motion))']
};