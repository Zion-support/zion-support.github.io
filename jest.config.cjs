/** @type {import('jest').Config} */
module.exports = {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(t|j)sx?$': ['ts-jest', { tsconfig: { jsx: 'react-jsx' } }],
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
	testMatch: ['**/__tests__/**/*.(js|jsx|ts|tsx)', '**/*.(test|spec).(js|jsx|ts|tsx)'],
};
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js'
  },
  testMatch: ['<rootDir>/tests/**/smoke.test.{js,jsx,ts,tsx}'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/zion-os.disabled/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/tests/integration/',
    '<rootDir>/tests/e2e/',
    '<rootDir>/tests/playwright/',
    '<rootDir>/tests/storybook/'
  ],
  transformIgnorePatterns: ['node_modules/(?!(.*\\.mjs$))'],
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  watchPathIgnorePatterns: [
    '<rootDir>/zion-os.disabled/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/zion-os.disabled/zion-os/package.json',
    '<rootDir>/backup-problematic-files/temp-exclude/zion-os/package.json'
  ]
};