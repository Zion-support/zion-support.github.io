module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
<<<<<<< HEAD
    "^@/(.*)$": "<rootDir>/$1",
    "^@/components/(.*)$": "<rootDir>/app/components/$1",
    "^@/content/(.*)$": "<rootDir>/content/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
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
    "node_modules/(?!(.*\\.mjs$|lucide-react|framer-motion|react-lazy-load-image-component))",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testTimeout: 10000,
};
=======
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@/types/(.*)$": "<rootDir>/src/types/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@/config/(.*)$": "<rootDir>/src/config/$1",
    "^@/data/(.*)$": "<rootDir>/src/data/$1",
    "^@/content/(.*)$": "<rootDir>/src/content/$1",
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.jest.json',
      useESM: true
    }],
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testMatch: [
    "<rootDir>/__tests__/**/*.(ts|tsx|js|jsx)",
    "<rootDir>/src/**/*.(test|spec).(ts|tsx|js|jsx)",
    "<rootDir>/app/**/__tests__/**/*.(ts|tsx|js|jsx)",
    "<rootDir>/app/**/*.(test|spec).(ts|tsx|js|jsx)",
  ],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{ts,tsx}",
    "!src/**/index.{ts,tsx}",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/.next/",
    "<rootDir>/out/",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(.*\\.mjs$|lucide-react|framer-motion))",
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx']
};
>>>>>>> origin/main
