const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: ./,
});


  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  verbose: true,
  collectCoverage: false,
  testTimeout: 30000,
  passWithNoTests: true

};


