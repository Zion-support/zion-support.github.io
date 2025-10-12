export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],</rootDir>
  moduleNameMapper: {</rootDir>
    '^@/(.*)$': '<rootDir>/$1',</rootDir>
    '^@/components/(.*)$': '<rootDir>/app/components/$1',</rootDir>
    '^@/content/(.*)$': '<rootDir>/content/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'</rootDir>
  },</rootDir>
  testMatch: [</rootDir>
    '<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)',</rootDir>
    '<rootDir>/__tests__/**/*.(test|spec).(ts|tsx|js|jsx)'
  ],
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    '!app/**/index.{ts,tsx}',
    '!app/**/*.d.ts'</rootDir>
  ],</rootDir>
  testPathIgnorePatterns: [</rootDir>
    '<rootDir>/out/',</rootDir>
    '<rootDir>/node_modules/'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|lucide-react|framer-motion))'</rootDir>
  ]</rootDir>
};</rootDir>