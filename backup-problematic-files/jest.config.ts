

>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

=======
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import type { Config } from "jest";
import nextJest from "next/jest.js";
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

>>>>>>> origin/automation-improvements-final
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
origin/main
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
import type { Config } from 'jest';
import nextJest from 'next/jest.js';
ursor/fix-lint-push-and-merge-to-main-ae4e

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
const createJestConfig = nextJest({

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

  dir: "./",
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

export default createJestConfig(config);

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default createJestConfig(config);
import type { Config } from "jest";
import nextJest from "next/jest.js";
const createJestConfig = nextJest({ dir: "./" });

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
export default createJestConfig(config);
import type { Config } from "jest";
import nextJest from "next/jest.js";
const createJestConfig = nextJest({ dir: "./" });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
const config: Config = {
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
  testMatch: [
    "**/__tests__*.(js|jsx|ts|tsx)",
    "***.{js,jsx,ts,tsx}",
    "!src*.d && d.ts",
    "!src*.stories.{js,jsx,ts,tsx}",
  ],

=======
    "src/**/*.{js,jsx,ts,tsx}"
    "!src/**/*.d.ts"
    "!src/**/*.stories.{js,jsx,ts,tsx}"
  ]
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
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
  coverageThreshold: {
    global: { branches: 70, functions: 70, lines: 70, statements: 70 },
  },
};
export default createJestConfig(config);
export default createJestConfig(config);
ursor/fix-lint-push-and-merge-to-main-ae4e
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
export default createJestConfig(config);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    global: { branches: 70, functions: 70, lines: 70, statements: 70 }
  }
}
export default createJestConfig(config);
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
