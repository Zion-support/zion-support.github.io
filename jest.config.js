
export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir</rootDir>>/jest.setup.js"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir</rootDir>>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testMatch: [
    "<rootDir</rootDir>>/app/**/*.(test|spec).(ts|tsx|js|jsx)",
    "<rootDir</rootDir>>/__tests__/**/*.(test|spec).(ts|tsx|js|jsx)",
  ],
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "!app/**/index.{ts,tsx}",
    "!app/**/*.d.ts",
  ],
  testPathIgnorePatterns: ["<rootDir</rootDir>>/out/", "<rootDir</rootDir>>/node_modules/"],
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|@testing-library|@heroicons|framer-motion))',
  ],
};
""'"'