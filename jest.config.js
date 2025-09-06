module.exports = {
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": [
    "<rootDir>/jest.setup.js"
  ],
  "testMatch": [
    "**/__tests__/**/*.test.{js,jsx,ts,tsx}",
    "**/*.test.{js,jsx,ts,tsx}"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/dist/",
    "<rootDir>/recovered-branches/",
    "<rootDir>/src_backup/"
  ],
  "moduleNameMapping": {
    "^@/(.*)$": "<rootDir>/$1"
  },
  "transform": {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "babel-jest",
      {
        "presets": [
          "next/babel"
        ]
      }
    ]
  },
  "transformIgnorePatterns": [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$"
  ]
};