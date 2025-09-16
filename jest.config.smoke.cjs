const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
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

  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  verbose: true,
  collectCoverage: false,
  testTimeout: 30000
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
};

module.exports = createJestConfig(config);

