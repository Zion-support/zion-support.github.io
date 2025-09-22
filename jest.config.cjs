<<<<<<< HEAD
<<<<<<< HEAD
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const nextJest = require('next/jest')
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  testMatch: [
    '<rootDir>/__tests__/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/main.tsx',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  verbose: true,
  collectCoverage: false,
<<<<<<< HEAD
  testTimeout: 10000,
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  collectCoverageFrom: [
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'app/**/*.{js,jsx,ts,tsx}',
    'utils/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/*.d.ts',
  ],
  testPathIgnorePatterns: [
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    '<rootDir>/.next/',
    '<rootDir>/out/',
    '<rootDir>/__tests__.disabled/',
    '<rootDir>/tests.disabled/',
    '<rootDir>/src_backup/',
    '<rootDir>/test.disabled/',
    '<rootDir>/plugins.disabled/',
    '<rootDir>/supabase.disabled/',
    '<rootDir>/dao/',
    '<rootDir>/pages.disabled/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/backup*/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/temp_*/',
    '<rootDir>/temp_exclude/',
    '<rootDir>/temp_backup/',
    '<rootDir>/temp_components/',
    '<rootDir>/temp_conflicts/',
    '<rootDir>/temp_working/',
    '<rootDir>/src.disabled/',
    '<rootDir>/components.disabled/',
    '<rootDir>/components.disabled_full/',
    '<rootDir>/contracts.disabled/',
    '<rootDir>/data.disabled/',
    '<rootDir>/api.disabled/',
    '<rootDir>/api.disabled.temp/',
    '<rootDir>/cypress_backup/',
    '<rootDir>/data_backup/',
    '<rootDir>/apps.backup/',
    '<rootDir>/automation_backup/',
    '<rootDir>/backup/',
    '<rootDir>/backups/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/corrupted-files-backup/',
    '<rootDir>/broken_files_backup/',
  ],
}

module.exports = createJestConfig(customJestConfig)
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  verbose: true,
  collectCoverage: false,
  testTimeout: 10000,
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  }
};
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}

module.exports = createJestConfig(customJestConfig)
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

module.exports = createJestConfig(customJestConfig);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
