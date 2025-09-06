<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
<<<<<<< HEAD
=======
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript'
      ]
    }]
  },
<<<<<<< HEAD
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
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  verbose: true,
  collectCoverage: false,
<<<<<<< HEAD
  testTimeout: 10000,
};
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
}

<<<<<<< HEAD
module.exports = createJestConfig(customJestConfig)
=======
module.exports = createJestConfig(customJestConfig)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
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
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
