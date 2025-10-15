module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.cjs"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { 
      useESM: false,
      tsconfig: {
        jsx: 'react-jsx'
      }
    }],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testMatch: [
    "<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)",
    "<rootDir>/__tests__/**/*.(test|spec).(ts|tsx|js|jsx)",
  ],
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "!app/**/index.{ts,tsx}",
    "!app/**/*.d.ts",
  ],
  testPathIgnorePatterns: ["<rootDir>/out/", "<rootDir>/node_modules/"],
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|@testing-library|@heroicons|framer-motion))',
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: false
    }
  }
};
