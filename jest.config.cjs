module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle image imports
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/tests/__mocks__/fileMock.js',
    // Minimal path mappings used in this repo
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/build/',
    '/.next/',
    '/out/',
    '/tests.disabled/',
    '/automation/backups/',
    '/backup-problematic-files/',
    '/corrupted_files_backup_2/',
    '/corrupted-files-backup/',
    '/backup/',
    '/automation_backup/'
  ],
  haste: {
    providesModuleNodeModules: [],
    platforms: ['web', 'native'],
    hasteImplModulePath: undefined,
  },
  modulePathIgnorePatterns: [
    '<rootDir>/automation/backups/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/corrupted_files_backup_2/',
    '<rootDir>/corrupted-files-backup/',
    '<rootDir>/backup/',
    '<rootDir>/automation_backup/'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  coverageDirectory: 'coverage',
  collectCoverage: false,
  verbose: false,
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  }
};
