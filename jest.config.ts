// Simple jest config without external dependencies
export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapping: { "^@/(.*)$": "<rootDir>/src/$1" },
  testMatch: [
    "**/__tests__/**/*.(js|jsx|ts|tsx)",
    "**/*.(test|spec).(js|jsx|ts|tsx)"
  ]
};