<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/main
=======
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})
<<<<<<< HEAD
=======
=======
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
  testEnvironment: 'jsdom',
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
=======
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
>>>>>>> origin/main
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript'
      ]
    }]
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/src/**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/main.tsx',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/temp_exclude/',
    '<rootDir>/src_backup/',
    '<rootDir>/temp_backup/',
    '<rootDir>/temp_components/',
    '<rootDir>/temp_conflicts/',
    '<rootDir>/temp_working/',
  ],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}

<<<<<<< HEAD
module.exports = createJestConfig(customJestConfig)
=======
module.exports = createJestConfig(customJestConfig)
=======
=======
}

module.exports = createJestConfig(customJestConfig)
=======
  testMatch: [
    '**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/out/',
    '/dist/',
    '/recovered-branches/',
    '/src_backup/',
    '/e2e/',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts|tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
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
>>>>>>> origin/main
=======
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  testTimeout: 10000,
};

module.exports = createJestConfig(customJestConfig);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> c6cd63e1e962b6dc38d5b78d347bc10b6a345663
=======
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
>>>>>>> origin/main
