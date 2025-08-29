module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle image imports
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$':
      '<rootDir>/tests/__mocks__/fileMock.js',

    // Fix path mappings with more specific ordering
    '^@/pages/api/(.*)$': '<rootDir>/pages/api/$1',
    '^@/pages/(.*)$': ['<rootDir>/pages/$1', '<rootDir>/src/pages/$1'],
    '^@/components/ui/CategoryCard$':
      '<rootDir>/tests/__mocks__/emptyModule.js',
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
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/out/', '/tests.disabled/'],
  coverageDirectory: 'coverage',
  collectCoverage: true,
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