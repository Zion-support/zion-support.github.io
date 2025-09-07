const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: ./,
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: [
<<<<<<< HEAD
    '**/__tests__/**/*.smoke.+(ts|tsx|js)',
    '**/*.smoke.(test|spec).+(ts|tsx|js)
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1
=======
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePathIgnorePatterns: [
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/backup*/',
    '<rootDir>/temp*/',
    '<rootDir>/corrupted*/
  verbose: true,
  collectCoverage: false,
  testTimeout: 30000,
  passWithNoTests: true
=======
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/src_backup/',
    '/src_backup_temp/',
    '/backup-problematic-files/',
    '/src.disabled/',
    '/pages_backup/',
    '/corrupted-files-backup/',
    '/lib_backup/',
    '/components.disabled/',
    '/components.disabled_full/',
    '/pages.disabled/',
    '/src.pages.disabled/',
    '/recovered-branches/',
    '/temp_backup/',
    '/api.disabled/',
    '/src.broken/',
    '/src.corrupted/',
    '/pages.broken/',
    '/pages.corrupted/',
    '/components.broken/',
    '/components.corrupted/'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [<rootDir>/__tests__/**/*.smoke.(js|jsx|ts|tsx),<rootDir>/**/*.smoke.test.(js|jsx|ts|tsx),
  ],
  testPathIgnorePatterns: [<rootDir>/node_modules/,<rootDir>/dist/,<rootDir>/build/,<rootDir>/backup-problematic-files/,<rootDir>/temp_exclude/,<rootDir>/src_backup/,<rootDir>/temp_backup/,<rootDir>/temp_components/,<rootDir>/temp_conflicts/,<rootDir>/temp_working/,<rootDir>/backup*/,<rootDir>/corrupted_backup/,<rootDir>/temp_*/,
  ],
  collectCoverageFrom: [src/**/*.{js,jsx,ts,tsx},!src/**/*.d.ts,!src/**/*.stories.{js,jsx,ts,tsx},
  ],
  coveragePathIgnorePatterns: [<rootDir>/node_modules/,<rootDir>/.next/,<rootDir>/dist/,<rootDir>/build/,
  ],
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
};

module.exports = createJestConfig(config);
module.exports = {
  preset: ts-jest,
  testEnvironment: jsdom,
  roots: [<rootDir>/src],
  testMatch: [**/__tests__/**/*.smoke.+(ts|tsx|js),**/*.smoke.(test|spec).+(ts|tsx|js)],
  transform: {^.+\\.(ts|tsx)$: ts-jest},
  setupFilesAfterEnv: [<rootDir>/src/setupTests.ts],
  moduleNameMapping: {^@/(.*)$: <rootDir>/src/$1},
  testTimeout: 30000,
  passWithNoTests: true
};
