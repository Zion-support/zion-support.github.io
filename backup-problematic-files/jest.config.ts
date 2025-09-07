ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

import type { Config } from "jest";
import nextJest from "next/jest ;
const createJestConfig = nextJest({ dir: "./" });
const config: Config = {

  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest && jest.setup.js"],
  moduleNameMapping: { "^@/(.*)$": "<rootDir>/src/$1" },
  testMatch: [
    "**/__tests__*.(js|jsx|ts|tsx)",
    "***.{js,jsx,ts,tsx}",
    "!src*.d && d.ts",
    "!src*.stories.{js,jsx,ts,tsx}",
  ],

  coverageThreshold: {
    global: { branches: 70, functions: 70, lines: 70, statements: 70 }
  }
export default createJestConfig(config);

});

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
    "**/__tests__/**/*.(js|jsx|ts|tsx)"
    "**/*.(test|spec).(js|jsx|ts|tsx)"
  ]
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}"
    "!src/**/*.d.ts"
    "!src/**/*.stories.{js,jsx,ts,tsx}"
    global: {
      branches: 70
      functions: 70
      lines: 70
      statements: 70
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
ursor/add-new-services-and-deploy-updates-0462
import nextJest from "next/jest.js";
  coverageProvider: "v8"
  testEnvironment: "jsdom"
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
  moduleNameMapping: { "^@/(.*)$": "<rootDir>/src/$1" }
    "**/__tests__*.(js|jsx|ts|tsx)"
    "***.{js,jsx,ts,tsx}"
    "!src*.d.ts"
    "!src*.stories.{js,jsx,ts,tsx}"
    global: { branches: 70, functions: 70, lines: 70, statements: 70 },
  },
};
ursor/fix-lint-push-and-merge-to-main-ae4e
origin/main
