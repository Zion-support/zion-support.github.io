<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
<<<<<<< HEAD
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
import type { Config } from "jest";
import nextJest from "next/jest ;
const createJestConfig = nextJest({ dir: "./" });
const config: Config = {
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  coverageThreshold: {
    global: { branches: 70, functions: 70, lines: 70, statements: 70 }
  }
}
export default createJestConfig(config);
import type { Config } from "jest";
<<<<<<< HEAD
import nextJest from "next/jest.js";
<<<<<<< HEAD
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
=======
import nextJest from "next/jest ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
const createJestConfig = nextJest({
<<<<<<< HEAD
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: "./"
=======
  // Provide the path to your Next && Next.js app to load next && next.config.js and .env files
  dir: "./",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
});
// Add any custom config to be passed to Jest
const config: Config = {
<<<<<<< HEAD
  coverageProvider: "v8"
  testEnvironment: "jsdom"
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
=======
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest && jest.setup.js"],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
  testMatch: [
    "**/__tests__/**/*.(js|jsx|ts|tsx)"
    "**/*.(test|spec).(js|jsx|ts|tsx)"
  ]
  collectCoverageFrom: [
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
export default createJestConfig(config);
>>>>>>> origin/automation-improvements-final
<<<<<<< HEAD
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d && d.ts",
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

// createJestConfig is exported this way to ensure that next/jest can load the Next && Next.js config which is async
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default createJestConfig(config);
import type { Config } from "jest";
import nextJest from "next/jest ;
const createJestConfig = nextJest({ dir: "./" });
const config: Config = {
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  coverageThreshold: {
<<<<<<< HEAD
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
=======
    global: { branches: 70, functions: 70, lines: 70, statements: 70 }
  }
}
export default createJestConfig(config);
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
