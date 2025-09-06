<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
<<<<<<< HEAD
import type { Config } from "jest";
import nextJest from "next/jest.js";
const createJestConfig = nextJest({ dir: "./" });
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapping: { "^@/(.*)$": "<rootDir>/src/$1" },
  testMatch: [
    "**/__tests__*.(js|jsx|ts|tsx)",
    "***.{js,jsx,ts,tsx}",
    "!src*.d.ts",
    "!src*.stories.{js,jsx,ts,tsx}",
  ],
  coverageThreshold: {
    global: { branches: 70, functions: 70, lines: 70, statements: 70 },
  },
};
export default createJestConfig(config);
import type { Config } from "jest";
import nextJest from "next/jest.js";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
import type { Config } from 'jest';
import nextJest from 'next/jest.js';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: [
    "**/__tests__/**/*.(js|jsx|ts|tsx)",
    "**/*.(test|spec).(js|jsx|ts|tsx)",
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
export default createJestConfig(config);
>>>>>>> origin/automation-improvements-final
<<<<<<< HEAD
export default createJestConfig(config);
import type { Config } from "jest";
import nextJest from "next/jest.js";
const createJestConfig = nextJest({ dir: "./" });
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapping: { "^@/(.*)$": "<rootDir>/src/$1" },
  testMatch: [
    "**/__tests__*.(js|jsx|ts|tsx)",
    "***.{js,jsx,ts,tsx}",
    "!src*.d.ts",
    "!src*.stories.{js,jsx,ts,tsx}",
  ],
  coverageThreshold: {
    global: { branches: 70, functions: 70, lines: 70, statements: 70 },
  },
};
export default createJestConfig(config);
=======
<<<<<<< HEAD
export default createJestConfig(config);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
=======
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
export default createJestConfig(config);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
