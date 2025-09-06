<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



import type { Config } from 'jest';
import nextJest from 'next/jest.js';

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

=======
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======

ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { Config } from "jest";
import nextJest from "next/jest ;
const createJestConfig = nextJest({ dir: "./" });
const config: Config = {
<<<<<<< HEAD
<<<<<<< HEAD

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

=======
  coverageProvider: "v8"
  testEnvironment: "jsdom"
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
  moduleNameMapping: { "^@/(.*)$": "<rootDir>/src/$1" }
  testMatch: [
    "**/__tests__*.(js|jsx|ts|tsx)"
    "***.{js,jsx,ts,tsx}"
    "!src*.d.ts"
    "!src*.stories.{js,jsx,ts,tsx}"
  ]
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  coverageThreshold: {
    global: { branches: 70, functions: 70, lines: 70, statements: 70 }
  }
}
export default createJestConfig(config);
import type { Config } from "jest";
<<<<<<< HEAD
<<<<<<< HEAD


=======
import nextJest from "next/jest.js";


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
=======
import nextJest from "next/jest.js";


import nextJest from "next/jest.js";
origin/main
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import type { Config } from 'jest';
import nextJest from 'next/jest.js';
ursor/fix-lint-push-and-merge-to-main-ae4e

const createJestConfig = nextJest({
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Provide the path to your Next && Next.js app to load next && next.config.js and .env files
import type { Config } from './jest';
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  dir: "./",
});
<<<<<<< HEAD

  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest && jest.setup.js"],

=======
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest && jest.setup.js"],
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
  testMatch: [
    "**/__tests__/**/*.(js|jsx|ts|tsx)"
    "**/*.(test|spec).(js|jsx|ts|tsx)"
  ]
  collectCoverageFrom: [
<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
export default createJestConfig(config);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
    "src/**/*.{js,jsx,ts,tsx}"
    "!src/**/*.d.ts"
    "!src/**/*.stories.{js,jsx,ts,tsx}"
  ]
  coverageThreshold: {
    global: {
      branches: 70
      functions: 70
      lines: 70
      statements: 70
    }
  }
}
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
ursor/integrate-build-improve-and-re-verify-8f7d
export default createJestConfig(config);
origin/automation-improvements-final
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
export default createJestConfig(config);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default createJestConfig(config);
import type { Config } from "jest";
import nextJest from "next/jest.js";
const createJestConfig = nextJest({ dir: "./" });
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
const config: Config = {
<<<<<<< HEAD
  coverage_provider: "v8",
  test_environment: "jsdom",
  setupFilesAfterEnv: ["<root_dir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<root_dir>/src/$1",
  },
  test_match: [;
    "**/__tests__/**/*.(js | jsx | ts | tsx)",
    "**/*.(test | spec).(js | jsx | ts | tsx)",
  ],
  collectCoverageFrom: [;
    "src/**/*.{js, jsx, ts, tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{js, jsx, ts, tsx}",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  ],
  coverage_threshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },

=======
const config: Config = {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

  coverageThreshold: {


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
=======
  coverageThreshold: {
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
export default createJestConfig(config);
  coverageProvider: "v8"
  testEnvironment: "jsdom"
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
  moduleNameMapping: { "^@/(.*)$": "<rootDir>/src/$1" }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  testMatch: [
    "**/__tests__*.(js|jsx|ts|tsx)"
    "***.{js,jsx,ts,tsx}"
    "!src*.d.ts"
    "!src*.stories.{js,jsx,ts,tsx}"
  ]
  coverageThreshold: {
<<<<<<< HEAD
    global: { branches: 70, functions: 70, lines: 70, statements: 70 },
  },
};
export default createJestConfig(config);
export default createJestConfig(config);
ursor/fix-lint-push-and-merge-to-main-ae4e
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default createJestConfig(config);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    global: { branches: 70, functions: 70, lines: 70, statements: 70 }
  }
}
export default createJestConfig(config);
<<<<<<< HEAD

<<<<<<< HEAD
}
;
// createJestConfig is exported this way to ensure that next / jest can load the Next.js config which is async;
export default createJestConfig (config);
import type { Config } from './jest';
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
;

=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

origin/main
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
