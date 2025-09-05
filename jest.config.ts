<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
import type { Config } from 'jest';
import nextJest from 'next/jest.js';
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  "dir": './'});
// Add any custom config to be passed to Jest
const "config": Config = {
  coverageProvider: 'v8',
  "testEnvironment": 'jsdom',
  "setupFilesAfterEnv": ['<rootDir>/jest.setup.js'],
  "moduleNameMapping": {
    '^@/(.*)$': '<rootDir>/src/$1'},
  "testMatch": ['**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)',
  ],
  "collectCoverageFrom": ['src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  "coverageThreshold": {
    global: {
      branches: 70,
      "functions": 70,
      "lines": 70,
      "statements": 70}}};
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
<<<<<<< HEAD
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
=======
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
<<<<<<< HEAD
>>>>>>> origin/main
=======
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
