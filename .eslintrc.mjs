export default {
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
<<<<<<< HEAD
    'no-undef': 'off'
=======
    'no-undef': 'off',
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'dist/',
    'build/',
    'coverage/',
    '*.config.js',
    '*.config.cjs',
<<<<<<< HEAD
    '*.config.mjs'
  ]
};
=======
    '*.config.mjs',
  ],
};
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
