module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
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
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/main.tsx',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
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
    '<rootDir>/recovered-branches/',
  ],
  watchPathIgnorePatterns: [
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/recovered-branches/',
    '<rootDir>/backup*/',
    '<rootDir>/temp_*/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  verbose: true,
  collectCoverage: false,
  testTimeout: 10000,
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