
=======



import type { Config } from 'jest';
import nextJest from 'next/jest.js';

=======
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
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
    global: { branches: 70, functions: 70, lines: 70, statements: 70 }
  }
}
export default createJestConfig(config);
import type { Config } from "jest";
import nextJest from "next/jest.js";


>>>>>>> origin/automation-improvements-final
import type { Config } from 'jest';
import nextJest from 'next/jest.js';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: "./"
});
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8"
  testEnvironment: "jsdom"
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
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





=======
export default createJestConfig(config);

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
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


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
