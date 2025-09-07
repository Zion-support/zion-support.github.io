<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
};  transform: {
module.exports = { preset: "ts-jest","" testEnvironment: "jsdom"," globals: {" "ts-jest": { diagnostics: false," isolatedModules: true}},"" setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]," moduleNameMapper: {" "^@/(.*)$": "<rootDir>/src/$1"," "\.(css|less|scss|sass)$": "identity-obj-proxy"},"" testMatch: ["**/__tests__*.(js|jsx|ts|tsx)"," "***.{js,jsx,ts,tsx}"," "!src*.d.ts"," "!src*.stories.{js,jsx,ts,tsx}", ]," coverageThreshold: { global: { branches: 50," functions: 50," lines: 50," statements: 50}}," transform: {" "^.+\.(ts|tsx)$": "ts-jest"," "^.+\.(js|jsx)$": "babel-jest"},"" moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],"" testPathIgnorePatterns: ["/node_modules/"," "/dist/"," "/pages\.disabled/"," "/pages-disabled/"," "/pages\.broken/"," "/pages\.bak/"," "/pages-backup/"," "/pages\.__backup/"," "/src\.pages\.disabled/"," "/src\.disabled/"," "/src/disabled/"," "/tests/integration/", ]};'"'"
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
module.exports = {
  preset: 'ts-jest',

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
module.exports = {}
<<<<<<< HEAD
  "preset": 'ts-jest',
  "testEnvironment": 'jsdom',
  "globals": {}
    'ts-jest': {}
      diagnostics: false,
      "isolatedModules": true}},
  "setupFilesAfterEnv": ['<rootDir>/jest.setup.js'],
  "moduleNameMapper": {}
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'},
  "testMatch": ['**/__tests__/**/*.(js|jsx|ts|tsx)',]
    '**/*.(test|spec).(js|jsx|ts|tsx)',
  ],
  "collectCoverageFrom": ['src/**/*.{js,jsx,ts,tsx}',]
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  "coverageThreshold": {}
    global: {}
      branches: 50,
      "functions": 50,
      "lines": 50,
      "statements": 50}},
  "transform": {}
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'},
  "moduleFileExtensions": ['ts', 'tsx', 'js', 'jsx', 'json'],
  "testPathIgnorePatterns": ['/node_modules/',]
    '/dist/',
    '/pages\\.disabled/',
    '/pages-disabled/',
    '/pages\\.broken/',
    '/pages\\.bak/',
    '/pages-backup/',
    '/pages\\.__backup/',
    '/src\\.pages\\.disabled/',
    '/src\\.disabled/',
    '/src/disabled/',
    '/tests/integration/',
  ]};
module.exports = {
  preset: 'ts-jest',
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
module.exports = {
module.exports = {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/out/',
    '/dist/',
    '/recovered-branches/',
    '/src_backup/',
    '/e2e/'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
<<<<<<< HEAD
  transform: {
    '^.+\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: [
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
  transform: {
    '^.+\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: [
<<<<<<< HEAD
  transformIgnorePatterns: [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  collectCoverage: false,
<<<<<<< HEAD

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  }
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
};
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-build-nav-links
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  testTimeout: 10000,
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
<<<<<<< HEAD
=======
<<<<<<< HEAD
module.exports = createJestConfig(customJestConfig)
=======
module.exports = createJestConfig(customJestConfig)
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> origin/automation-improvements-final
=======
    '/node_modules/(?!(.*\.mjs$))'
  ]
};
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
module.exports = createJestConfig(customJestConfig)
module.exports = createJestConfig(customJestConfig)
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.simple.js'],
  transform: {
    '^.+\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(.*\.mjs$))'
  ]
};
};
    '/node_modules/(?!(.*\.mjs$))'
  ]
};
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
