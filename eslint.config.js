export default [
  {
    ignores: ['next-env.d.ts', '**/*.d.ts', '.next/**/*'],
  },
  {
    files: ['**/*.test.*', '**/*.spec.*', 'jest.setup.*', 'jest.config.*'],
    languageOptions: {
      globals: {
        jest: 'readonly',
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        PerformanceObserver: 'readonly',
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
];