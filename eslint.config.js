import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    ignores: [
      '**/*',
    ],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error',
    },
  },
];