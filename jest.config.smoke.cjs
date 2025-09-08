<<<<<<< HEAD
module.exports = {
=======
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
>>>>>>> origin/combined-pr-merge
  testEnvironment: 'jsdom',
  testMatch: ['**/App.smoke.test.tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: [
<<<<<<< HEAD
    '/\\.next/',
    '/node_modules/',
    '/src\\.broken/',
    '/src_backup/',
    '/src-disabled/',
    '/src\\.disabled/',
    '/backup/',
    '/backup-[^/]+/',
    '/recovered-branches/',
    '/corrupted_backup/',
    '/broken_files_backup/',
    '/pages_backup_.*?/',
    '/pages_backup_conflict.*/',
    '/pages_disabled/',
    '/pages\\.disabled/',
    '/__tests__/',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  passWithNoTests: true,
};
=======
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/temp_exclude/',
    '<rootDir>/src_backup/',
    '<rootDir>/temp_backup/',
    '<rootDir>/temp_components/',
    '<rootDir>/temp_conflicts/',
    '<rootDir>/temp_working/',
    '<rootDir>/.next/',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  collectCoverage: false,
  testTimeout: 30000,
};

module.exports = createJestConfig(customJestConfig);
>>>>>>> origin/combined-pr-merge
