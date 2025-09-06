<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
<<<<<<< HEAD
module.exports = { preset: "ts-jest","" testEnvironment: "jsdom"," globals: {" "ts-jest": { diagnostics: false," isolatedModules: true}},"" setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]," moduleNameMapper: {" "^@/(.*)$": "<rootDir>/src/$1"," "\.(css|less|scss|sass)$": "identity-obj-proxy"},"" testMatch: ["**/__tests__*.(js|jsx|ts|tsx)"," "***.{js,jsx,ts,tsx}"," "!src*.d.ts"," "!src*.stories.{js,jsx,ts,tsx}", ]," coverageThreshold: { global: { branches: 50," functions: 50," lines: 50," statements: 50}}," transform: {" "^.+\.(ts|tsx)$": "ts-jest"," "^.+\.(js|jsx)$": "babel-jest"},"" moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],"" testPathIgnorePatterns: ["/node_modules/"," "/dist/"," "/pages\.disabled/"," "/pages-disabled/"," "/pages\.broken/"," "/pages\.bak/"," "/pages-backup/"," "/pages\.__backup/"," "/src\.pages\.disabled/"," "/src\.disabled/"," "/src/disabled/"," "/tests/integration/", ]};'"'"
=======
module.exports = {}
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
>>>>>>> main
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-2480
module.exports = {
  preset: 'ts-jest',
<<<<<<< HEAD
=======
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
module.exports = {
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
=======
module.exports = {
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
  transformIgnorePatterns: [
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  collectCoverage: false,
<<<<<<< HEAD
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
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  testTimeout: 10000,
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
<<<<<<< HEAD
module.exports = createJestConfig(customJestConfig)
=======
<<<<<<< HEAD
module.exports = createJestConfig(customJestConfig)
=======
module.exports = createJestConfig(customJestConfig)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.simple.js'],
  transform: {
    '^.+\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(.*\.mjs$))'
  ]
};
>>>>>>> origin/main
=======
=======
};
>>>>>>> cursor/automate-test-improve-and-merge-code-2480
>>>>>>> origin/automation-improvements-final
=======
    '/node_modules/(?!(.*\.mjs$))'
  ]
};
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
