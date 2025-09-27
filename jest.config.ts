import type { Config } from 'jest';

const config: Config = {testEnvironment: 'jsdom'preset: 'ts-jest'testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)']testPathIgnorePatterns: ['/node_modules/''/zion-website/''/e2e/']transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest'{ 
      tsconfig: {
        jsx: 'react-jsx"
      }
    }]}moduleFileExtensions: ["ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'}};

export default config;

