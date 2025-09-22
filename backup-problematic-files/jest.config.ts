import type { Config } from 'jest';
import nextJest from 'next/jest.js';
<<<<<<< HEAD

<<<<<<< HEAD
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
=======
import type { Config } from "jest";
import nextJest from "next/jest ;
const createJestConfig = nextJest({ dir: "./" });
const config: Config = {
=======
import type { Config } from "jest";""
import nextJest from "next/jest ;""
const createJestConfig = nextJest({ dir: "./" });"
const config: Config = {,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  coverageThreshold: {
    global: { branches: 70, functions: 70, lines: 70, statements: 70 }
  }
export default createJestConfig(config);"
import type { Config } from "jest";"
  // Provide the path to your Next && Next.js app to load next && next.config.js and .env files;"
import type { Config } from './jest';
<<<<<<< HEAD
import next_jest from "next / jest.js";
const createJestConfig = next_jest ({ dir: "./" });
const config: Config = {
  coverage_provider: "v8",
  test_environment: "jsdom",
  setupFilesAfterEnv: ["<root_dir>/jest.setup.js"],
  moduleNameMapping: { "^@/(.*)$": "<root_dir>/src/$1" },
  test_match: [;
    "**/__tests__*.(js | jsx | ts | tsx)",
    "***.{js, jsx, ts, tsx}",
    "!src*.d.ts",
    "!src*.stories.{js, jsx, ts, tsx}",
  ],
  coverage_threshold: {
    global: { branches: 70, functions: 70, lines: 70, statements: 70 },
  },
}
export default createJestConfig (config);
import type { Config } from './jest';
import next_jest from "next / jest.js";
;
const createJestConfig = next_jest ({
  // Provide the path to your Next.js app to load next.config.js and .env files;
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
  testMatch: [
    "**/__tests__/**/*.(js|jsx|ts|tsx)"
    "**/*.(test|spec).(js|jsx|ts|tsx)"
  ]
  collectCoverageFrom: [
export default createJestConfig(config);
import type { Config } from "jest";
import nextJest from "next/jest.js";
const createJestConfig = nextJest({ dir: "./" });
const config: Config = {
  testMatch: [
    "**/__tests__*.(js|jsx|ts|tsx)"
    "***.{js,jsx,ts,tsx}"
    "!src*.d.ts"
    "!src*.stories.{js,jsx,ts,tsx}"
  ]
  coverageThreshold: {
    global: { branches: 70, functions: 70, lines: 70, statements: 70 }
  }
}
export default createJestConfig(config);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import next_jest from "next / jest.js";""
const createJestConfig = next_jest ({ dir: "./" });"
const config: Config = {,"
  coverage_provider: "v8",""
  test_environment: "jsdom",""
  setupFilesAfterEnv: ["<root_dir>/jest.setup.js"],"
</root_dir>"
  moduleNameMapping: { "^@/(.*)$": "<root_dir>/src/$1" },"
    "^@/(.*)$": "<rootDir>/src/$1""
</rootDir>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
