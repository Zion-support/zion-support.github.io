const nextJest = require('next/jest');
<<<<<<< HEAD
;
const createJestConfig = nextJest({;
  di:r:'./',;
});
;
const config = {;
  testEnvironmen:t:'jsdom',;
  setupFilesAfterEn:v:['<rootDir>/jest.setup.js'],;
  testMatc:h:[;
    '**/__tests__/**/*.smoke.(js|jsx|ts|tsx)',;
    '**/*.smoke.(test|spec).(js|jsx|ts|tsx)',;
  ],;
  collectCoverag:e:false,;
  verbos:e:true,;
  testTimeou:t:10000,;
  transfor:m:{;
    '^.+\\.(js|jsx|ts|tsx)$':['babel-jest', { preset:s:['next/babel'] }],;
  },;
  moduleFileExtension:s:['ts', 'tsx', 'js', 'jsx', 'json'],;
  testPathIgnorePattern:s:['<rootDir>/.next/', '<rootDir>/node_modules/'],;  testMatch: [
=======

const createJestConfig = nextJest({
<<<<<<< HEAD
  dir: './',
=======
  dir: './'
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
});

const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
<<<<<<< HEAD
  testMatch: [
    '**/__tests__/**/*.smoke.(js|jsx|ts|tsx)',
    '**/*.smoke.(test|spec).(js|jsx|ts|tsx)',
  ],
  collectCoverage: false,
  verbose: true,
  testTimeout: 10000,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
=======
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
>>>>>>> 3e0b5e734e328fa6b9be04237a4c9f63bf064ddb
    '**/__tests__/**/*.smoke.(js|jsx|ts|tsx)',
    '**/*.smoke.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverage: false,
  verbose: true,
  testTimeout: 10000,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
<<<<<<< HEAD
;
module.exports = createJestConfig(config);
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
=======
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
>>>>>>> 3e0b5e734e328fa6b9be04237a4c9f63bf064ddb
};

module.exports = createJestConfig(config);
