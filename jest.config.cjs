<<<<<<< HEAD
const nextJest = require('next/jest');
<<<<<<< HEAD
const createJestConfig = nextJest({ dir: './' });
=======
const createJestConfig = nextJest({
  dir: './',
});
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const nextJest = require('next/jest')

const createJestConfig = nextJest({
<<<<<<< HEAD
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
=======
  dir: './',
})
<<<<<<< HEAD
=======
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

const customJestConfig = {
<<<<<<< HEAD
	testEnvironment: 'jsdom',
	testMatch: ['**/__tests__/**/*.(js|jsx|ts|tsx)', '**/*.(test|spec).(js|jsx|ts|tsx)'],
	testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist/', '/build/', '/out/'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	testTimeout: 30000,
	passWithNoTests: true,
};

module.exports = createJestConfig(customJestConfig);
=======
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'utils/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
  ],
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
    '!**/.next/**',
    '!**/dist/**',
    '!**/build/**',
    '!**/out/**',
    '!**/coverage/**',
    '!**/*.config.js',
    '!**/*.config.cjs',
    '!**/*.config.mjs',
    '!**/jest.setup.js',
    '!**/next-env.d.ts',
  ],
<<<<<<< HEAD
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
  passWithNoTests: true,
}
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
<<<<<<< HEAD
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
<<<<<<< HEAD
module.exports = createJestConfig(customJestConfig)
=======
module.exports = createJestConfig(customJestConfig)
=======
module.exports = createJestConfig(customJestConfig);
>>>>>>> origin/chore/fix-lint-and-merge
=======
module.exports = createJestConfig(customJestConfig)
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
module.exports = createJestConfig(customJestConfig)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
