/** @type {import('jest').Config} */
const base = require('./jest.config.cjs');

module.exports = {
  ...base,
  testMatch: ['**/?(*.)+(smoke).(ts|tsx|js|jsx)'],
  testPathIgnorePatterns: [...(base.testPathIgnorePatterns || []), '/src/', '/components/'],
  passWithNoTests: true,
};

