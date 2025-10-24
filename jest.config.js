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
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
      },
    },
  },
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
  transform: {
    '^.+\\\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\\\.module\\\\.(css|sass|scss)$',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [
    '<rootDir>/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)',
    '<rootDir>/**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)',
  ],
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
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
