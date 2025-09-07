
;
import type { Config } from 'jest';
import nextJest from 'next/jest.js';
<<<<<<< HEAD
const createJestConfig = nextJest({// Provide the path to your Next.js app to load next.config.js and .env files;
  dir: './';
})// Add any custom config to be passed to Jest;
const config: Config = {coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: {'^@/(.*)$': '<rootDir>/src/$1';
  },testMatch: [;
    '**/__tests__/**/*.(js|jsx|ts|tsx)','**/*.(test|spec).(js|jsx|ts|tsx)';
  ],collectCoverageFrom: [;
    'src/**/*.{js,jsx,ts,tsx}','!src/**/*.d.ts','!src/**/*.stories.{js,jsx,ts,tsx}';
  ],coverageThreshold: {global: {branches: 70,functions: 70,lines: 70,statements: 70;
    }
  }
}// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async;
export default createJestConfig(config)import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './'})const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1'},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}'],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70}}}export default createJestConfig(config)export default createJestConfig(config)export default createJestConfig(config)export default createJestConfig(config)
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  "dir": './'});
=======
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files;
    dir: './',
});
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
// Add any custom config to be passed to Jest
const "config": Config = {
  coverageProvider: 'v8',
  "testEnvironment": 'jsdom',
  "setupFilesAfterEnv": ['<rootDir>/jest.setup.js'],
  "moduleNameMapping": {
    '^@/(.*)$': '<rootDir>/src/$1'},
  "testMatch": ['**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  "collectCoverageFrom": ['src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}'
  ],
  "coverageThreshold": {
    global: {
      branches: 70,
<<<<<<< HEAD
      "functions": 70,
      "lines": 70,
      "statements": 70}}};
=======
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './'}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1'},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}'],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70}}}; export default createJestConfig(config);
