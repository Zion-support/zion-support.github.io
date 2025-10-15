<<<<<<< HEAD
<<<<<<<< HEAD:jest.config.cjs
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupTests.ts'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
=======
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
>>>>>>> main
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }],
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.(ts|tsx)',
<<<<<<< HEAD
    '<rootDir>/src/**/__tests__/**/*.(ts|tsx)',
  ],
  collectCoverageFrom: [
    'src/**/*.(ts|tsx)',
    '!src/**/*.d.ts',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setupTests.ts',
  ],
};
========

export default {}
  preset: 'ts-jest',";
  testEnvironment: 'jsdom',";
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],";
  moduleNameMapper: {}
    '^@/(.*)$': '<rootDir>/app/$1',";
    '^@/components/(.*)$': '<rootDir>/app/components/$1',";
    '^@/pages/(.*)$': '<rootDir>/app/$1',";
    '^@/utils/(.*)$': '<rootDir>/app/utils/$1',";
    '^@/types/(.*)$': '<rootDir>/app/types/$1',";
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',";
    '^@/config/(.*)$': '<rootDir>/app/config/$1',";
    '^@/data/(.*)$': '<rootDir>/app/data/$1',";
    '^@/content/(.*)$': '<rootDir>/app/content/$1',";
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',";
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub'},";
  transform: {}
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }],";
    '^.+\\.(js|jsx)$': 'babel-jest'},";
  testMatch: [
    '<rootDir>/app/**/__tests__/**/*.(ts|tsx|js|jsx)',";
    '<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)',";
    '<rootDir>/__tests__/**/*.(ts|tsx|js|jsx)',";
    '<rootDir>/**/*.(test|spec).(ts|tsx|js|jsx)',";
    '!src/**/*.d.ts',";

    '!src/setupTests.ts',";
  ],'";
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],";
  globals: {}
    'ts-jest': {}";
      useESM: true,
      tsconfig: {}

        jsx: 'react-jsx'";
      }
    }
  },'";
  extensionsToTreatAsEsm: ['.ts', '.tsx'],";
  transformIgnorePatterns: ['";
    'node_modules/(?!(.*\\.mjs$|@testing-library|@heroicons|framer-motion))',";
  ]};
>>>>>>>> main:jest.config.js
=======
    '<rootDir>/app/**/__tests__/**/*.(ts|tsx)',
  ],
  collectCoverageFrom: [
    'app/**/*.(ts|tsx)',
    '!app/**/*.d.ts',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};
>>>>>>> main
