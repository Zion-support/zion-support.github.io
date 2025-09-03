module.exports = {
  preset: "ts-jest",;
  testEnvironment: "jsdom",;
  setupFilesAfterEnv: [;
    "@testing-library/jest-dom",;
    "<rootDir>/src/test/setup.ts";
  ],;
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",;
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",;
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",;
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg)$": "<rootDir>/src/__mocks__/fileMock.js"},;
  testMatch: [;
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",;
    "<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}",;
    "<rootDir>/tests/**/*.{test,spec}.{js,jsx,ts,tsx}";
  ],;
  collectCoverageFrom: [;
    "src/**/*.{js,jsx,ts,tsx}",;
    "!src/**/*.d.ts",;
    "!src/index.tsx",;
    "!src/reportWebVitals.ts";
  ],;
  coverageDirectory: "coverage",;
  coverageReporters: ["text", "lcov", "html"],;
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",;
    "^.+\\.(js|jsx)$": "babel-jest"},;
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],;
  testPathIgnorePatterns: [;
    "<rootDir>/node_modules/",;
    "<rootDir>/dist/",;
    "<rootDir>/build/";
  ],;
  transformIgnorePatterns: [;
    "node_modules/(?!(.*\\.mjs$))";
  ]}