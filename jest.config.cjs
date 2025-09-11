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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '@testing-library/jest-dom'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
    // Handle image imports
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/src/__mocks__/fileMock.js',
    // Fix path mappings with more specific ordering
    '^@/pages/api/(.*)$': '<rootDir>/pages/api/$1',
    '^@/pages/(.*)$': ['<rootDir>/pages/$1', '<rootDir>/src/pages/$1'],
    '^@/components/ui/CategoryCard$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@/components/ui/(.*)$': '<rootDir>/src/components/ui/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/i18n$': '<rootDir>/tests/__mocks__/i18n.js',
    '^@/utils/(?!devtools)(.*)$': '<rootDir>/src/utils/$1',
    '^@/context$': '<rootDir>/src/context/index.ts',
    '^@/context/(.*)$': '<rootDir>/src/context/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/services/(.*)$': '<rootDir>/src/services/$1',
    '^@/api/(.*)$': '<rootDir>/src/api/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^@/data/(.*)$': '<rootDir>/src/data/$1',
    '^@/integrations/(.*)$': '<rootDir>/src/integrations/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/store$': '<rootDir>/src/store/index.ts',
    '^@/store/(.*)$': '<rootDir>/src/store/$1',
    '^@/layout$': '<rootDir>/src/layout/index.ts',
    '^@/layout/(.*)$': '<rootDir>/src/layout/$1',
    '^@/routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@/mobile/(.*)$': '<rootDir>/src/mobile/$1',
    '^@/sdk/(.*)$': '<rootDir>/sdk/$1',
    '^@/mocks/(.*)$': '<rootDir>/src/mocks/$1',
    '^@/config/(.*)$': '<rootDir>/src/config/$1',
    '^@/middleware/(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^vitest$': '<rootDir>/tests/__mocks__/vitestMock.js',
    // Special module mocks
    '^msw/node$': require.resolve('msw/node'),
    '^next/router$': 'next-router-mock',
    '^next/navigation$': '<rootDir>/tests/__mocks__/emptyModule.js',
    'react-router-dom$': '<rootDir>/src/stubs/react-router-dom.tsx',
    'react-router$': '<rootDir>/src/stubs/react-router-dom.tsx',
    // Mock heavy libraries not needed for unit tests
    '^@reown/appkit(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@walletconnect/(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^uint8arrays/(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^multiformats/(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^react-markdown$': '<rootDir>/tests/__mocks__/reactMarkdown.js',
    '^@/pages/(.*)\.jsx$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@/pages/Signup$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@/pages/signup$': '<rootDir>/src/pages/Signup.tsx',
    '^@/utils/devtools$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^scripts/watchdog$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^scripts/(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^os-utils$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@/pages/api/points/(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@/pages/api/users/(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@/pages/Login\.jsx$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@/App$': '<rootDir>/src/App.tsx',
    '^@/pages/api/auth/(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    // Additional aliases for Jest environment
    '^@/hooks$': '<rootDir>/src/hooks/index.ts',
    '^@/i18n/(.*)$': '<rootDir>/src/i18n/$1',
    '^mongoose(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^mongodb(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^bson(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
    '^@/components/search/(.*)$': '<rootDir>/src/components/talent/$1',
    // Retain original mocks for middleware to avoid heavy imports in Jest
    '^@/middleware/(.*)$': '<rootDir>/tests/__mocks__/emptyModule.js',
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
    '^.+\\.(js|jsx|ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.jest.json'
    }]
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
