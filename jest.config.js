'^@/content/(.*)$': '<rootDir>/content/$1'
        jsx: 'react-jsx'
    '^.+\\.(js|jsx)$': 'babel-jest'
  testMatch: [
    '<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)'
  collectCoverageFrom: [
    '!app/**/index.{ts,tsx}'
  testPathIgnorePatterns: [
    '<rootDir>/out/'
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|lucide-react|framer-motion))'
  ]
