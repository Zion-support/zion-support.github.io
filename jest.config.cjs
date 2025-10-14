module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1",
    "^@/components/(.*)$": "<rootDir>/app/components/$1",
    "^@/pages/(.*)$": "<rootDir>/app/pages/$1",
    "^@/utils/(.*)$": "<rootDir>/app/utils/$1",
    "^@/types/(.*)$": "<rootDir>/app/types/$1",
    "^@/hooks/(.*)$": "<rootDir>/app/hooks/$1",
    "^@/config/(.*)$": "<rootDir>/app/config/$1",
    "^@/data/(.*)$": "<rootDir>/app/data/$1",
    "^@/content/(.*)$": "<rootDir>/app/content/$1",
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.jest.json',
    }],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: [
    '<rootDir>/app/**/__tests__/**/*.(ts|tsx|js|jsx)',
    '<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)',
  ],
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    '!app/**/*.d.ts',
    '!app/**/__tests__/**',
    '!app/**/node_modules/**',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|@heroicons|@testing-library|@typescript-eslint))',
  ],
};