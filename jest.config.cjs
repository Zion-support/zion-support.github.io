const nextJest = require('next/jest');


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
    '<rootDir>/data_backup/',
    '<rootDir>/pm2-automation/',
    '<rootDir>/scripts/',
    '<rootDir>/tests/',
    '<rootDir>/test-results/',
    '<rootDir>/test-reports/',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  testMatch: [
    '<rootDir>/tests/**/*.{js,jsx,ts,tsx}',
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
  passWithNoTests: true,
}
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/dist/',
    '/build/',
    '/out/'
  ],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testTimeout: 30000,
  passWithNoTests: true
};


module.exports = createJestConfig(customJestConfig)
  testMatch: [
    '**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/out/',
    '/dist/',
    '/recovered-branches/',
    '/src_backup/',
    '/e2e/',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts|tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
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
};

module.exports = createJestConfig(customJestConfig);
module.exports = createJestConfig(customJestConfig)
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
