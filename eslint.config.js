import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }
      ],
      'no-console': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error'
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**'
    ]
  }
];