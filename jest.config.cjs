const createJestConfig = nextJest({
  dir: './',
})
const createJestConfig = nextJest({
  dir: './',
});=======
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
module.exports = createJestConfig(customJestConfig);=======
module.exports = createJestConfig(customJestConfig)