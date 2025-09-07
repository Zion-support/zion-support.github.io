<<<<<<< HEAD
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

<<<<<<< HEAD
=======
const customJestConfig = {
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
=======
module.exports = {
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/src.pages.disabled.auto/',
    '/src.broken/',
    '/src.corrupted/',
    '/pages.disabled/',
    '/components-disabled/',
    '/lib.disabled/',
    '/corrupted_backup/',
    '/temp_backup/',
    '/temp_components/',
    '/temp_conflicted_files/',
    '/temp_exclude/',
    '/test_build/',
    '/test-next/',
    '/lint-target/',
    '/node_modules_bak_*/'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript'
      ]
    }]
  },
<<<<<<< HEAD
  testMatch: [
    '<rootDir>/__tests__/**/*.smoke.(js|jsx|ts|tsx)',
    '<rootDir>/**/*.smoke.test.(js|jsx|ts|tsx)'
  ],
  testPathIgnorePatterns: [
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
<<<<<<< HEAD
    '<rootDir>/backup*/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/temp_*/',
    '<rootDir>/zion-os/',
    '<rootDir>/zion-website/',
    '<rootDir>/zion-ai-assistant/',
    '<rootDir>/zion_academy/',
    '<rootDir>/apps/',
    '<rootDir>/pages_backup*/',
    '<rootDir>/pages.*/',
    '<rootDir>/pages-*/',
    '<rootDir>/pages_disabled*/',
    '<rootDir>/pages.disabled*/',
    '<rootDir>/pages.broken*/',
    '<rootDir>/pages.corrupted*/',
    '<rootDir>/pages.old*/',
    '<rootDir>/pages._*/',
    '<rootDir>/pages.__*/',
    '<rootDir>/backup-pages/',
    '<rootDir>/src.pages.disabled/',
    '<rootDir>/lib_backup*/',
    '<rootDir>/corrupted-files-backup*/',
    '<rootDir>/performance-reports*/',
    '<rootDir>/log-analysis-reports*/',
    '<rootDir>/link-reports*/',
    '<rootDir>/lint-target*/',
    '<rootDir>/monitoring*/',
    '<rootDir>/pm2-automation*/',
    '<rootDir>/automation/logs*/',
    '<rootDir>/automation/backup*/'
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/temp_exclude/',
    '<rootDir>/src_backup/',
    '<rootDir>/temp_backup/',
    '<rootDir>/temp_components/',
    '<rootDir>/temp_conflicts/',
    '<rootDir>/temp_working/',
    '<rootDir>/backup*/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/temp_*/',
    '<rootDir>/zion-os/',
    '<rootDir>/zion-website/',
    '<rootDir>/zion-ai-assistant/',
    '<rootDir>/zion_academy/',
    '<rootDir>/apps/',
    '<rootDir>/pages_backup*/',
    '<rootDir>/pages.*/',
    '<rootDir>/pages-*/',
    '<rootDir>/pages_disabled*/',
    '<rootDir>/pages.disabled*/',
    '<rootDir>/pages.broken*/',
    '<rootDir>/pages.corrupted*/',
    '<rootDir>/pages.old*/',
    '<rootDir>/pages._*/',
    '<rootDir>/pages.__*/',
    '<rootDir>/backup-pages/',
    '<rootDir>/src.pages.disabled/',
    '<rootDir>/lib_backup*/',
    '<rootDir>/corrupted-files-backup*/',
    '<rootDir>/performance-reports*/',
    '<rootDir>/log-analysis-reports*/',
    '<rootDir>/link-reports*/',
    '<rootDir>/lint-target*/',
    '<rootDir>/monitoring*/',
    '<rootDir>/pm2-automation*/',
    '<rootDir>/automation/logs*/',
    '<rootDir>/automation/backup*/'
  ],

=======
    '<rootDir>/.next/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  collectCoverage: false,
  testTimeout: 30000,
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
<<<<<<< HEAD
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  verbose: true,
  collectCoverage: false,
  testTimeout: 30000
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
};

module.exports = createJestConfig(config);

=======
};

module.exports = createJestConfig(customJestConfig);
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
=======
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'app/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  passWithNoTests: true,
  verbose: true
}
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
