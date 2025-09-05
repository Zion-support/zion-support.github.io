<<<<<<< HEAD
module.exports = {;
  testEnvironmen:t:'jsdom',;
  setupFilesAfterEn:v:['<rootDir>/jest.setup.js'],;
  moduleNameMappin:g:{;
    '^@/(.*)$':'<rootDir>/$1',;
  },;
  testMatc:h:[;
    '**/__tests__/**/*.(js|jsx|ts|tsx)',;
    '**/*.(test|spec).(js|jsx|ts|tsx)',;
  ],;
  collectCoverageFro:m:[;
    'components/**/*.{js,jsx,ts,tsx}',;
    'pages/**/*.{js,jsx,ts,tsx}',;
    '!**/*.d.ts',;
    '!**/node_modules/**',;
  ],;
  transfor:m:{;
    '^.+\\.(js|jsx|ts|tsx)$':['babel-jest', { preset:s:['next/babel'] }],;
  },;
  moduleFileExtension:s:['ts', 'tsx', 'js', 'jsx', 'json'],;
  testPathIgnorePattern:s:['<rootDir>/.next/', '<rootDir>/node_modules/'],;
};
=======
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)',
  ],
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};
<<<<<<< HEAD
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
