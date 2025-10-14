module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1",
    "^@/components/(.*)$": "<rootDir>/app/components/$1",
    "^@/pages/(.*)$": "<rootDir>/app/$1",
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
      useESM: true
    }],
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testMatch: [
    "<rootDir>/__tests__/**/*.(ts|tsx|js|jsx)",
    "<rootDir>/app/**/__tests__/**/*.(test|spec).(ts|tsx|js|jsx)",
    "<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)",
  ],
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "!app/**/*.d.ts",
    "!app/**/*.stories.{ts,tsx}",
    "!app/**/index.{ts,tsx}",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/.next/",
    "<rootDir>/out/",
    "<rootDir>/app-broken/",
    "<rootDir>/app-disabled/",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(.*\\.mjs$|lucide-react|framer-motion))",
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx']
};