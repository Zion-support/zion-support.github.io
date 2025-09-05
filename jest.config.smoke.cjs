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
  testPathIgnorePattern:s:['<rootDir>/.next/', '<rootDir>/node_modules/'],;
=======

const createJestConfig = nextJest({
  dir: './'
});

const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: [
    '**/__tests__/**/*.smoke.(js|jsx|ts|tsx)',
    '**/*.smoke.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverage: false,
  verbose: true,
  testTimeout: 10000,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
};
;
module.exports = createJestConfig(config);
