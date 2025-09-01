module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: './tsconfig.jest.json'
    }],
    '^.+\\.m?(js|jsx)$': ['babel-jest', {
      presets: [['@babel/preset-env', { targets: { node: 'current' }, modules: 'commonjs' }], ['@babel/preset-react', { runtime: 'automatic' }]],
      babelrc: false,
      configFile: false
    }],
  },
  moduleNameMapper: { // Re-enable moduleNameMapper
    '^@/(.*)$': '<rootDir>/src/$1', // Basic alias, ensure it matches tsconfig
    // Add other aliases if validateEnv.test.ts or its imports need them
    // For now, keeping it minimal to what's likely needed by @/utils/validateEnv
  },
  // setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'], // Keep disabled for now
  testMatch: [ // Test the validateEnv file
    "**/__tests__/utils/validateEnv.test.ts",
  ],
  roots: [
    '<rootDir>/__tests__',
    '<rootDir>/src', // Add src to roots for module resolution if @/ points to src
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!(@babel|next|@next|react-markdown|@sentry/react)/)',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    // 'vitest$': '<rootDir>/tests/vitest-mock.ts', // Removed vitest mock
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Next.js mocks
    '^next/router$': '<rootDir>/tests/__mocks__/next/router.js',
    '^next/image$': '<rootDir>/tests/__mocks__/next/image.js',
    '^next/link$': '<rootDir>/tests/__mocks__/next/link.js',
  },
  roots: ['<rootDir>/__tests__', '<rootDir>/tests', '<rootDir>/src'], // Added <rootDir>/src in case tests live there
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};

