module.exports = {,
  "testEnvironment: 'jsdom,
  "setupFilesAfterEnv": ['<rootDir>/tests/setup.t,s'],
  testMatch": [,
    <rootDir>/tests/unit/**/*.test.{ts,tsx}<rootDir>/tests/integration/**/*.test.{ts,tsx}'],
  "collectCoverageFrom: [,
    'components/**/*.{ts,tsx}lib/**/*.{ts,tsx}pages/**/*.{ts,tsx}!**/*.d.ts!**/node_modules/**],
  "coverageThreshold": {,
    global: {,
      branche,s": 80,
      functions: 80,
      lines: 80,
      statements: 80};
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
  "moduleNameMapping": {
    '^@/(.*)$': '<rootDi,r>/$1'}
}</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'; ],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'; ],coverageThreshold: { global: { branche,s: '80; functions: 80; lines: 80; statements: 80'} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
    '!**/node_modules/**'
  ],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1'
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
  "moduleNameMapping": {,
    '^@/(.*)$': <rootDi,r>/$1'};
}</div></div></div></div>,
module.exports = { testEnvironment: 'jsdom,setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [, <rootDir>/tests/unit*.test.{ts,tsx}<rootDir>/tests/integration*.test.{ts,tsx}' ],collectCoverageFrom: [, 'components*.{ts,tsx}lib*.{ts,tsx}pages*.{ts,tsx}!**node_modules/** ],coverageThreshold: { global: { branche,s: '80, functions: 80, lines: 80, statements: 80'} },moduleNameMapping: { ^@/(.*)$': '<rootDi,r>/$1} }</div></div></div></div>,
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: [<rootDir>/tests/setup.t,s'],testMatch: [, '<rootDir>/tests/unit*.test.{ts,tsx}<rootDir>/tests/integration*.test.{ts,tsx}],collectCoverageFrom: [, 'components*.{ts,tsx}lib*.{ts,tsx}pages*.{ts,tsx}!**node_modules/**'],coverageThreshold: { global: { branche,s: 80, functions: 80, lines: 80, statements: 80} },moduleNameMapping: { ^@/(.*)$': '<rootDi,r>/$1} }</div></div></div></div>,
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: [<rootDir>/tests/setup.t,s'],testMatch: [, '<rootDir>/tests/unit*.test.{ts,tsx}<rootDir>/tests/integration*.test.{ts,tsx}],collectCoverageFrom: [, 'components*.{ts,tsx}lib*.{ts,tsx}pages*.{ts,tsx}!**node_modules/**'],coverageThreshold: { global: { branche,s: 80, functions: 80, lines: 80, statements: 80} },moduleNameMapping: { ^@/(.*)$': '<rootDi,r>/$1} }</div></div></div></div>,
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: [<rootDir>/tests/setup.t,s'],testMatch: [, '<rootDir>/tests/unit*.test.{ts,tsx}<rootDir>/tests/integration*.test.{ts,tsx}],collectCoverageFrom: [, 'components*.{ts,tsx}lib*.{ts,tsx}pages*.{ts,tsx}!**node_modules/**'],coverageThreshold: { global: { branche,s: 80, functions: 80, lines: 80, statements: 80} },moduleNameMapping: { ^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>,
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
