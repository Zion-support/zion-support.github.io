module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
<<<<<<< HEAD
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js'
=======
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js'
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-3a91
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}',
    '<rootDir>/tests/**/*.{test,spec}.{js,jsx,ts,tsx}'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
<<<<<<< HEAD
    '!src/**/*.d.ts'
=======
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/reportWebVitals.ts'
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-3a91
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
<<<<<<< HEAD
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '<rootDir>/build/'],
  transformIgnorePatterns: ['node_modules/(?!(.*\\.mjs$))']
=======
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/zion-os.disabled/',
    '<rootDir>/backup-problematic-files/'
  ],
  transformIgnorePatterns: ['node_modules/(?!(.*\\.mjs$))'],
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  watchPathIgnorePatterns: [
    '<rootDir>/zion-os.disabled/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/zion-os.disabled/zion-os/package.json',
    '<rootDir>/backup-problematic-files/temp-exclude/zion-os/package.json'
  ],
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-3a91
};
