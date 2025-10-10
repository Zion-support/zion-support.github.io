export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir></rootDi></rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir></rootDi></rootDir>/app/$1',
    '^@/components/(.*)$': '<rootDir></rootDi></rootDir>/app/components/$1',
    '^@/pages/(.*)$': '<rootDir></rootDi></rootDir>/app/$1',
    '^@/utils/(.*)$': '<rootDir></rootDi></rootDir>/utils/$1',
    '^@/types/(.*)$': '<rootDir></rootDi></rootDir>/types/$1',
    '^@/hooks/(.*)$': '<rootDir></rootDi></rootDir>/hooks/$1',
    '^@/config/(.*)$': '<rootDir></rootDi></rootDir>/config/$1',
    '^@/data/(.*)$': '<rootDir></rootDi></rootDir>/data/$1',
    '^@/content/(.*)$': '<rootDir></rootDi></rootDir>/content/$1'

}
},
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: jsx, 'react-jsx'

}
}
  }]
    ]
      }
    ]
    }],
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testMatch: [
    '<rootDir></rootDi></rootDir>/__tests__/**/*.(ts|tsx|js|jsx)']
    '<rootDir></rootDi></rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)'],
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    '!app/**/*.d.ts',
    '!app/**/*.stories.{ts,tsx}']
    '!app/**/index.{ts,tsx}'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: [
    '<rootDir></rootDi></rootDir>/node_modules/',
    '<rootDir></rootDi></rootDir>/dist/',
    '<rootDir></rootDi></rootDir>/.next/']
    '<rootDir></rootDi></rootDir>/out/'],
  transformIgnorePatterns: []
    'node_modules/(?!(.*\\.mjs$|lucide-react|framer-motion))']
};