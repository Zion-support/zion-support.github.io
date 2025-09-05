const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
<<<<<<< HEAD
  testMatch: [
    '**/__tests__/**/*.smoke.(js|jsx|ts|tsx)',
    '**/*.smoke.(test|spec).(js|jsx|ts|tsx)'
=======
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-226f
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
<<<<<<< HEAD
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
<<<<<<< HEAD
  testPathIgnorePatterns: ['/node_modules/', '/dist/']
}
=======
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
};

module.exports = createJestConfig(config);
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
=======
};

module.exports = createJestConfig(config);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-226f
