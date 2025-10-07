const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/dist/**',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/out/',
    '<rootDir>/dist/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/corrupted-src-backup/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/corrupted_files_backup_2/',
    '<rootDir>/backup/',
    '<rootDir>/api-backup/',
    '<rootDir>/apps.backup/',
    '<rootDir>/automation_backup/',
    '<rootDir>/ai-optimization-backups/',
    '<rootDir>/components_backup/',
    '<rootDir>/data_backup/',
    '<rootDir>/lib_backup/',
    '<rootDir>/broken_files_backup/',
    '<rootDir>/api-disabled/',
    '<rootDir>/__tests__/hooks.test.ts',
    '<rootDir>/__tests__/advanced-components.test.tsx',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!(lucide-react|@heroicons/react)/)',
  ],
  globals: {
    'import.meta': {
      env: {
        DEV: process.env.NODE_ENV !== 'production',
        PROD: process.env.NODE_ENV === 'production',
        MODE: process.env.NODE_ENV || 'test',
      },
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
