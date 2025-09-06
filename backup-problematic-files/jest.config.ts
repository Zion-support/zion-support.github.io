ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

<<<<<<< HEAD
=======
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
>>>>>>> 7c8bc30d7f67e73b4eaa80d227738ae796deedb9
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
}
export default createJestConfig(config);
import type { Config } from "jest";


=======
import nextJest from "next/jest.js";
origin/main
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
import type { Config } from 'jest';
import nextJest from 'next/jest.js';
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-ae4e

=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
=======
import nextJest from "next/jest ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 7c8bc30d7f67e73b4eaa80d227738ae796deedb9
const createJestConfig = nextJest({

  // Provide the path to your Next && Next.js app to load next && next.config.js and .env files
=======
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

  dir: "./",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
});

  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest && jest.setup.js"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
  testMatch: [
    "**/__tests__/**/*.(js|jsx|ts|tsx)"
    "**/*.(test|spec).(js|jsx|ts|tsx)"
  ]
  collectCoverageFrom: [
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
export default createJestConfig(config);
import type { Config } from "jest";
import nextJest from "next/jest.js";
const createJestConfig = nextJest({ dir: "./" });
const config: Config = {
<<<<<<< HEAD
  coverageProvider: "v8"
  testEnvironment: "jsdom"
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
  moduleNameMapping: { "^@/(.*)$": "<rootDir>/src/$1" }
=======
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

  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest && jest.setup.js"],
  moduleNameMapping: { "^@/(.*)$": "<rootDir>/src/$1" },
>>>>>>> 7c8bc30d7f67e73b4eaa80d227738ae796deedb9
  testMatch: [
    "**/__tests__*.(js|jsx|ts|tsx)"
    "***.{js,jsx,ts,tsx}"
    "!src*.d.ts"
    "!src*.stories.{js,jsx,ts,tsx}"
  ]
  coverageThreshold: {
    global: { branches: 70, functions: 70, lines: 70, statements: 70 },
  },
};
export default createJestConfig(config);
<<<<<<< HEAD
export default createJestConfig(config);
ursor/fix-lint-push-and-merge-to-main-ae4e
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
export default createJestConfig(config);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> 7c8bc30d7f67e73b4eaa80d227738ae796deedb9
    global: { branches: 70, functions: 70, lines: 70, statements: 70 }
  }
}
export default createJestConfig(config);
origin/main
