/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          '@babel/preset-react',
          '@babel/preset-typescript'
        ]
      }
    ]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: [
    '**/__tests__/**/*.(spec|test).(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).(ts|tsx|js|jsx)'
  ],
  transformIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/cypress/',
    '/e2e/',
    '/zion-website/e2e/',
    '/playwright/',
    '/dist/',
    '/build/'
  ],
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}']
};
