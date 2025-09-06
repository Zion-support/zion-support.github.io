<<<<<<< HEAD
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

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
    '<rootDir>/deployments/',
    '<rootDir>/pages.__backup/',
    '<rootDir>/pages-disabled/',
    '<rootDir>/src/',
    '<rootDir>/automation/',
    '<rootDir>/automation_backup/',
    '<rootDir>/data_backup/',
    '<rootDir>/pm2-automation/',
    '<rootDir>/scripts/',
    '<rootDir>/tests/',
    '<rootDir>/test-results/',
    '<rootDir>/test-reports/',
    '<rootDir>/api/',
    '<rootDir>/api.disabled/',
    '<rootDir>/api.disabled.temp/',
    '<rootDir>/disabled-api/',
  ],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/types/(.*)$': '<rootDir>/types/$1',
  },
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'lib/**/*.{js,jsx,ts,tsx}',
    'hooks/**/*.{js,jsx,ts,tsx}',
    'utils/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/dist/**',
    '!**/build/**',
    '!**/out/**',
    '!**/coverage/**',
  ],
  testMatch: [
    '<rootDir>/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/**/*.{test,spec}.{js,jsx,ts,tsx}',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  testTimeout: 10000,
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
<<<<<<< HEAD
module.exports = createJestConfig(customJestConfig)
=======
<<<<<<< HEAD
module.exports = createJestConfig(customJestConfig)
=======
module.exports = createJestConfig(customJestConfig)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
module.exports = {;
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [ "@testing-library/jest-dom",
    "<rootDir>/src/test/setup.ts" ],
  moduleNameMapper: {;
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg)$": "<rootDir>/src/__mocks__/fileMock.js";
},
  testMatch: [ "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}",
    "<rootDir>/tests/**/*.{test,spec}.{js,jsx,ts,tsx}" ],
  collectCoverageFrom: [ "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/index.tsx",
    "!src/reportWebVitals.ts" ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  transform: {;
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest";
},
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: [ "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/build/" ],
  transformIgnorePatterns: [ "node_modules/(?!(.*\\.mjs$))" ];
};
>>>>>>> origin/automation-fixes
