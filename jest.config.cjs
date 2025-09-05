</rootDir>module.exports = {
  testEnvironmen: 'jsdom',
  setupFilesAfterEn: v: ['<rootDir>/jest.setup.js'],
  moduleNameMappin: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testMatc: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)',
  ],
  collectCoverageFro: m: [
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  transfor: m: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { preset: ['next/babel'] }],
  },
  moduleFileExtension: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePattern: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};
