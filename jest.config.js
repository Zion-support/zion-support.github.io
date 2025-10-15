export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
<<<<<<< HEAD
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }],
    '^.+\\.(js|jsx)$': 'babel-jest',
=======
    "^@/(.*)$": "<rootDir>/$1",
    "^@/components/(.*)$": "<rootDir>/app/components/$1",
    "^@/content/(.*)$": "<rootDir>/content/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
  },
  testMatch: [
    "<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)",
    "<rootDir>/__tests__/**/*.(test|spec).(ts|tsx|js|jsx)",
  ],
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "!app/**/index.{ts,tsx}",
    "!app/**/*.d.ts",
  ],
  testPathIgnorePatterns: ["<rootDir>/out/", "<rootDir>/node_modules/"],
  transformIgnorePatterns: [
<<<<<<< HEAD
    'node_modules/(?!(.*\\.mjs$|@testing-library|@heroicons|framer-motion))',
  ],};
=======
    "node_modules/(?!(.*\\.mjs$|lucide-react|framer-motion))",
  ],
};
>>>>>>> cursor/comprehensive-app-audit-and-update-8a56
