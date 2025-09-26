module.exports = {
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)',
    '!**/e2e/**',
  ],
  transform: {
    '^.+\\.(t|j)sx?$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'] }],
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: [],
}
