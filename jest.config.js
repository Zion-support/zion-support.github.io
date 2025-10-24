const nextJest = require('next/jest''
  "dir": './'',
  "setupFilesAfterEnv": ['<rootDir>/jest.setup.js'',
  "testEnvironment": 'jsdom'',
  "testPathIgnorePatterns": ['<rootDir>/.next/', '<rootDir>/node_modules/''
    '^@/(.*)$': '<rootDir>/$1''