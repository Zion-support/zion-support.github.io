module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
  },
  // Only lint the source directory and main files
  ignorePatterns: [
    '**/*',
    '!src/**/*',
    '!index.html',
    '!vite.config.ts',
    '!tailwind.config.js',
    '!postcss.config.js',
  ],
};