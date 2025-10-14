module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@/types/(.*)$": "<rootDir>/src/types/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@/config/(.*)$": "<rootDir>/src/config/$1",
    "^@/data/(.*)$": "<rootDir>/src/data/$1",
    "^@/content/(.*)$": "<rootDir>/src/content/$1",
  },
  transform: {
<<<<<<< HEAD
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.jest.json",
        useESM: true,
      },
    ],
    "^.+\\.(js|jsx)$": "babel-jest",
=======
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.jest.json',
      useESM: true
    }],
    '^.+\\.(js|jsx)$': 'babel-jest'
>>>>>>> improvements-and-test-fixes
  },
  testMatch: [
    "<rootDir>/__tests__/**/*.(ts|tsx|js|jsx)",
    "<rootDir>/src/**/*.(test|spec).(ts|tsx|js|jsx)",
    "<rootDir>/app/**/__tests__/**/*.(ts|tsx|js|jsx)",
    "<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)",
  ],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{ts,tsx}",
    "!src/**/index.{ts,tsx}",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/.next/",
    "<rootDir>/out/",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(.*\\.mjs$|lucide-react|framer-motion))",
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx']
};
