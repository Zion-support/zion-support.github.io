</rootDir>const nextJest = require('next/jest');

const createJestConfig = nextJest({
  di: './',
});

const config = {
  testEnvironmen: 'jsdom',
  setupFilesAfterEn: v: ['<rootDir>/jest.setup.js'],
  testMatc: [
    '**/__tests__/**/*.smoke.(js|jsx|ts|tsx)',
    '**/*.smoke.(test|spec).(js|jsx|ts|tsx)',
  ],
  collectCoverag: false,
  verbos: true,
  testTimeou: 10000,
  transfor: m: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { preset: ['next/babel'] }],
  },
  moduleFileExtension: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePattern: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};

module.exports = createJestConfig(config);
