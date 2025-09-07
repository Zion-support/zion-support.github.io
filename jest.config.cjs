const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './'})


module.exports = {

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript'
      ]
    }]
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'app/**/*.{js,jsx,ts,tsx}',
    'utils/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/*.d.ts'
  ],
// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/out/',
    '<rootDir>/coverage/',
    '<rootDir>/src.corrupted/',
    '<rootDir>/src.disabled/',
    '<rootDir>/src.broken/',
    '<rootDir>/src.pages.disabled/',
    '<rootDir>/solutions.disabled/',
    '<rootDir>/components.disabled/',
    '<rootDir>/components.corrupted/',
    '<rootDir>/hooks.disabled/',
    '<rootDir>/lib.disabled/',
    '<rootDir>/lib.corrupted/',
    '<rootDir>/zion-os.disabled/',
    '<rootDir>/zion_academy/',
    '<rootDir>/contracts.disabled/',
    '<rootDir>/corrupted-files-backup/',
    '<rootDir>/corrupted_files_backup_2/',
    '<rootDir>/cypress.disabled/',
    '<rootDir>/cypress_backup/',
    '<rootDir>/data/',
    '<rootDir>/e2e/',
    '<rootDir>/pages.disabled/',
    '<rootDir>/pages.disabled_backup/',
    '<rootDir>/pages_backup/',
    '<rootDir>/pages.disabled_full/',
    '<rootDir>/pages_backup_before_cleanup/',
    '<rootDir>/pages_backup_conflicts/',
    '<rootDir>/pages.bak/',
    '<rootDir>/pages.broken/',
    '<rootDir>/pages.corrupted.*/',
    '<rootDir>/pages._quarantine/',
    '<rootDir>/pages._archive_corrupted/',
    '<rootDir>/pages-quarantine/',
    '<rootDir>/pages.blog.disabled/',
    '<rootDir>/pages.disabled_auto/',
    '<rootDir>/pages_api.disabled/',
    '<rootDir>/components.disabled_full/',
    '<rootDir>/components.broken/',
    '<rootDir>/backup-corrupted-files/',
    '<rootDir>/lib.broken/',
    '<rootDir>/data.disabled/',
    '<rootDir>/test_build/',
    '<rootDir>/server/',
    '<rootDir>/types/',
    '<rootDir>/temp-backup/',
    '<rootDir>/temp_backup/',
    '<rootDir>/temp_broken_files/',
    '<rootDir>/temp_working/',
    '<rootDir>/tests.disabled/',
    '<rootDir>/supabase/',
    '<rootDir>/public/',
    '<rootDir>/.venv/',
    '<rootDir>/api/',
    '<rootDir>/api.disabled/',
    '<rootDir>/api.disabled.temp/',
    '<rootDir>/disabled-api/',
    '<rootDir>/deployments/',
    '<rootDir>/pages.__backup/',
    '<rootDir>/pages-disabled/',
    '<rootDir>/src/',
    '<rootDir>/automation/',
    '<rootDir>/automation_backup/',

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom",
    "<rootDir>/src/test/setup.ts"
    '<rootDir>/data_backup/',
    '<rootDir>/pm2-automation/',
    '<rootDir>/scripts/',
    '<rootDir>/tests/',
    '<rootDir>/test-results/',
    '<rootDir>/test-reports/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'},
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/dist/**',
    '!**/build/**',
    '!**/out/**',
    '!**/coverage/**',
    '!**/*.config.js',
    '!**/*.config.cjs',
    '!**/*.config.mjs',
    '!**/jest.setup.js',
    '!**/next-env.d.ts'],
  testMatch: [
    '<rootDir>/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/**/*.{test,spec}.{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]},
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  passWithNoTests: true}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
