<<<<<<< HEAD
=======
<<<<<<< HEAD
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
module.exports = {
  preset: 'ts-jest',
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'utils/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/out/',
    '<rootDir>/__tests__.disabled/',
    '<rootDir>/tests.disabled/',
    '<rootDir>/src_backup/',
    '<rootDir>/test.disabled/',
    '<rootDir>/plugins.disabled/',
    '<rootDir>/supabase.disabled/',
    '<rootDir>/dao/',
    '<rootDir>/pages.disabled/',
  ],
<<<<<<< HEAD
}

module.exports = createJestConfig(customJestConfig)
=======
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  collectCoverage: false,
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
};
>>>>>>> origin/chore/fix-build-nav-links
=======
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  testTimeout: 10000,
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
<<<<<<< HEAD
module.exports = createJestConfig(customJestConfig)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
module.exports = createJestConfig(customJestConfig)
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
