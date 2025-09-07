module.exports = {
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