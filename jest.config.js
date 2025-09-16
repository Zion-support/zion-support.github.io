<<<<<<< HEAD
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@types/(.*)$': '<rootDir>/src/types/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(ts|tsx|js)',
    '<rootDir>/src/**/*.(test|spec).(ts|tsx|js)',
  ],
  collectCoverageFrom: [
    'src/**/*.(ts|tsx)',
    '!src/**/*.d.ts',
    '!src/setupTests.ts',
    '!src/**/__tests__/**',
    '!src/**/*.test.(ts|tsx)',
    '!src/**/*.spec.(ts|tsx)',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html', 'json'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/server/'],
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|@testing-library|@babel|@jest))',
  ],
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
      },
    },
  },
};
=======
<<<<<<< HEAD
module.exports = {"testEnvironment": 'jsdom',"setupFilesAfterEnv": ['<rootDir>/tests/setup.t,s'],"testMatch": [;
    '<rootDir>/tests/unit/**/*.test.{ts,tsx}','<rootDir>/tests/integration/**/*.test.{ts,tsx}'],"collectCoverageFrom": [;
    'components/**/*.{ts,tsx}','lib/**/*.{ts,tsx}','pages/**/*.{ts,tsx}','!**/*.d.ts','!**/node_modules/**'],"coverageThreshold": {global: {branche,"s": 80;
      functions: 80;
      lines: 80;
      statements: 80}
  },"moduleNameMapping": {'^@/(.*)$': '<rootDi,r>/$1'}
}</div></div></div></div>;
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'; ],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'; ],coverageThreshold: { global: { branche,s: '80; functions: 80; lines: 80; statements: 80'} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>;
  testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],moduleNameMapping: {'^@/(.*)$': '<rootDir>/$1';
  },"moduleNameMapping": {'^@/(.*)$': '<rootDi,r>/$1'}
}</div></div></div></div>;
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'; ],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'; ],coverageThreshold: { global: { branche,s: '80; functions: 80; lines: 80; statements: 80'} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>;
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>;
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>;
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>;
  transform: {'^.+\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }];
  },moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],testMatch: [;
    '<rootDir>/**/__tests__/**/*.(js|jsx|ts|tsx)','<rootDir>/**/*.(test|spec).(js|jsx|ts|tsx)';
  ],collectCoverageFrom: [;
    '**/*.{js,jsx,ts,tsx}','!**/*.d.ts','!**/node_modules/**','!**/.next/**','!**/coverage/**';
  ];
}"moduleNameMapping": {'^@/(.*)$': '<rootDi,r>/$1'}
}</div></div></div></div>;
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'; ],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'; ],coverageThreshold: { global: { branche,s: '80; functions: 80; lines: 80; statements: 80'} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>;
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>;
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>;
module.exports = {
  "testEnvironment": 'jsdom',
  "setupFilesAfterEnv": ['<rootDir>/tests/setup.t,s'],
  "testMatch": [;
    '<rootDir>/tests/unit/**/*.test.{ts,tsx}',
    '<rootDir>/tests/integration/**/*.test.{ts,tsx}'],
  "collectCoverageFrom": [;
    'components/**/*.{ts,tsx}',
    'lib/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'],
  "coverageThreshold": {
    global: {
      branche,"s": 80;
      functions: 80;
      lines: 80;
      statements: 80}
  },
  "moduleNameMapping": {
    '^@/(.*)$': '<rootDi,r>/$1'}
}</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'; ],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'; ],coverageThreshold: { global: { branche,s: '80; functions: 80; lines: 80; statements: 80'} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
=======

>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './'
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1'
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
>>>>>>> origin/merge-pr-12271
