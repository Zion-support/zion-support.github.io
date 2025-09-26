/**
 * Root Jest configuration to avoid picking up non-Jest e2e tests
 * and mixed toolchains from nested projects like `zion-website`.
 *
 * This file is ESM-compatible because the repo uses `"type": "module"`.
 */
export default {
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/build/',
    '/zion-website/', // ignore nested Next.js site with its own tooling
  ],
  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};

