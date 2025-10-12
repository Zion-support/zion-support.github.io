module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/content/(.*)$': '<rootDir>/content/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: {
        jsx: 'react-jsx'
      }
    }],
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.(test|spec).(ts|tsx|js|jsx)',
    '<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)'
  ],
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    '!app/**/index.{ts,tsx}'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/out/',
    '<rootDir>/node_modules/'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|lucide-react|framer-motion))'
  ],
  globals: {
    TextEncoder: require('util').TextEncoder,
    TextDecoder: require('util').TextDecoder
  }
}