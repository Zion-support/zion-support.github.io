module.exports = {
<<<<<<< HEAD
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-undef': 'off',
  },
  globals: {
    'module': 'readonly',
    'require': 'readonly',
    'console': 'readonly',
    'process': 'readonly',
    'global': 'readonly',
    'Buffer': 'readonly',
    '__dirname': 'readonly',
    '__filename': 'readonly',
  },
  ignorePatterns: ['dist', 'node_modules'],
};
=======
  extends: ["next"],
  rules: {
    "no-console": "off",
    "prefer-const": "error",
    "no-var": "error",
    "react/no-unescaped-entities": "off"
  }
}
>>>>>>> origin/main
