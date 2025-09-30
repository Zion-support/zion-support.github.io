import type { Config } from 'jest';
import nextJest from 'next/jest.js';
import type { Config } from 'jest';
import nextJest from 'next/jest.js', const createJestConfig = nextJest({ dir: './'}), const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1'},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)***.{js,jsx,ts,tsx}!src*.d.ts!src*.stories.{js,jsx,ts,tsx}'],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70}}}; export default createJestConfig(config)
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  "dir": './'})
// Add any custom config to be passed to Jest
const "config": Config = {
  coverageProvider: 'v8'
  "testEnvironment": 'jsdom'
  "setupFilesAfterEnv": ['<rootDir>/jest.setup.js']
  "moduleNameMapping": {
    '^@/(.*)$': '<rootDir>/src/$1'}
  "testMatch": ['**/__tests__/**/*.(js|jsx|ts|tsx)**/*.(test|spec).(js|jsx|ts|tsx)'
  ]
  "collectCoverageFrom": ['src/**/*.{js,jsx,ts,tsx}!src/**/*.d.ts!src/**/*.stories.{js,jsx,ts,tsx}'
  ]
  "coverageThreshold": {
    global: {
      branches: 70
      "functions": 70
      "lines": 70
      "statements": 70}}};
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
<<<<<<< HEAD
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
=======
import type { Config } from 'jest'; import nextJest from 'next/jest.js'; const createJestConfig = nextJest({ dir: './',}); const config: Config = { coverageProvider: 'v8',testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: { '^@/(.*)$': '<rootDir>/src/$1',},testMatch: [ '**/__tests__*.(js|jsx|ts|tsx)','***.{js,jsx,ts,tsx}','!src*.d.ts','!src*.stories.{js,jsx,ts,tsx}',],coverageThreshold: { global: { branches: 70,functions: 70,lines: 70,statements: 70,},},}; export default createJestConfig(config);
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
