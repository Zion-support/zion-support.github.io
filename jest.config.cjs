module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/pages/(.*)$': '<rootDir>/app/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
    '^@/types/(.*)$': '<rootDir>/types/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/config/(.*)$': '<rootDir>/config/$1',
    '^@/data/(.*)$': '<rootDir>/data/$1',
    '^@/content/(.*)$': '<rootDir>/content/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testMatch: [
    '<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)'
  ],
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    '!app/**/index.{ts,tsx}'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/out/',
    '<rootDir>/dist/'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|lucide-react|framer-motion))'
  ]
};