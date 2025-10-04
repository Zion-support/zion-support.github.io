export const codeQualityConfig = {
  "eslint": {
    "rules": {
      "no-unused-vars": "error",
      "no-console": "warn",
      "prefer-const": "error",
      "no-var": "error"
    }
  },
  "typescript": {
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true
  },
  "testing": {
    "coverage": 90,
    "unitTests": true,
    "integrationTests": true
  }
};