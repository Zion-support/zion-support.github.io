<<<<<<< HEAD
<<<<<<< HEAD
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
module.exports = {
<<<<<<< HEAD
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: {
        jsx: 'react-jsx'
      }
    }],
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/out/', '/tests.disabled/'],
  coverageDirectory: 'coverage',
  collectCoverage: false,
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  }
=======
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
  testTimeout: 10000,
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
};
=======
<<<<<<< HEAD
  testTimeout: 10000,
};
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/backup*/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/temp_*/',
  ],
}

module.exports = createJestConfig(customJestConfig)
<<<<<<< HEAD
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
