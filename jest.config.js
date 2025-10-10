export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],</rootDir>
  moduleNameMapper: {</rootDir>
    '^@/(.*)$': '<rootDir>/app/$1',</rootDir>
    '^@/components/(.*)$': '<rootDir>/app/components/$1',</rootDir>
    '^@/pages/(.*)$': '<rootDir>/app/$1',</rootDir>
    '^@/utils/(.*)$': '<rootDir>/utils/$1',</rootDir>
    '^@/types/(.*)$': '<rootDir>/types/$1',</rootDir>
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',</rootDir>
    '^@/config/(.*)$': '<rootDir>/config/$1',</rootDir>
    '^@/data/(.*)$': '<rootDir>/data/$1',</rootDir>
    '^@/content/(.*)$': '<rootDir>/content/$1'
  },
  transform: {

    '^.+\\.(ts|tsx|js|jsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript'
      ]
    }]

  },</rootDir>
  testMatch: [</rootDir>
    '<rootDir>/__tests__/**/*.(ts|tsx|js|jsx)',</rootDir>
    '<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)'
  ],
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    '!app/**/*.d.ts',
    '!app/**/*.stories.{ts,tsx}',
    '!app/**/index.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],</rootDir>
  testPathIgnorePatterns: [</rootDir>
    '<rootDir>/node_modules/',</rootDir>
    '<rootDir>/dist/',</rootDir>
    '<rootDir>/.next/',</rootDir>
    '<rootDir>/out/'
  ],
  transformIgnorePatterns: [,
    'node_modules/(?!(.*\\.mjs$|lucide-react|framer-motion))'
  ]</rootDir>
};</rootDir>