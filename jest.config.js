export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js"
  },
  testMatch: [
    "<rootDir>/src/App.test.tsx"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/build/",
    "/backup/",
    "/temp/",
    "/zion-/",
    "/apps/",
    "/automation/",
    "/src.disabled/",
    "/components.disabled/",
    "/src/pages/",
    "/src/components/__tests__/",
    "/src/hooks/__tests__/"
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/index.tsx",
    "!src/main.tsx"
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": ["babel-jest", { configFile: "./babel.config.cjs" }]
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: [
    "node_modules/(?!(.*\\.mjs$))"
  ],
  testTimeout: 10000,
  verbose: true,
  // Skip tests that have no actual test cases
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  }
};