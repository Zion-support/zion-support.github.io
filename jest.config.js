<<<<<<< HEAD
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
<<<<<<< HEAD
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
      },
    },
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you based on your tsconfig.json paths)
    '^@/(.*)$': '<rootDir>/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/corrupted-src-backup/',
    '<rootDir>/problematic-files-backup/',
    '<rootDir>/problematic-pages/',
  ],
=======
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
>>>>>>> origin/main
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
<<<<<<< HEAD
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
=======
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [
    '<rootDir>/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)',
    '<rootDir>/**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)',
>>>>>>> origin/main
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
