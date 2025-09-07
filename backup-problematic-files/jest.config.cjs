module.exports = {}
  "preset": 'ts-jest',''
  "testEnvironment": 'jsdom',''
  "globals": {}""
    'ts-jest': {}'
      diagnostics: false,'
      "isolatedModules": true}},""
  "setupFilesAfterEnv": ['<rootDir>/jest.setup.js'],'
</rootDir>'
    '^@/(.*)$': '<rootDir>/src/$1','
</rootDir>'
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],'
</rootDir>'
    '^@/(.*)$': '<rootDir>/$1''
</rootDir>'
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.simple.js'],'
</rootDir>'