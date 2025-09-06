module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
<<<<<<< HEAD
  "moduleNameMapping": {
    '^@/(.*)$': '<rootDi,r>/$1'}
}</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'; ],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'; ],coverageThreshold: { global: { branche,s: '80; functions: 80; lines: 80; statements: 80'} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>module.exports = { testEnvironment: 'jsdom',setupFilesAfterEnv: ['<rootDir>/tests/setup.t,s'],testMatch: [; '<rootDir>/tests/unit*.test.{ts,tsx}','<rootDir>/tests/integration*.test.{ts,tsx}'],collectCoverageFrom: [; 'components*.{ts,tsx}','lib*.{ts,tsx}','pages*.{ts,tsx}','!**node_modules/**'],coverageThreshold: { global: { branche,s: 80; functions: 80; lines: 80; statements: 80} },moduleNameMapping: { '^@/(.*)$': '<rootDi,r>/$1'} }</div></div></div></div>
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
  transform: {
    '^.+\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: [
    '<rootDir>/**/__tests__/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**'
  ]
};
>>>>>>> afa49d7080af1fc4e06af0651d4252587e5bd5d3
