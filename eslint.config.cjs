/* ESLint flat config */
const js = require('@eslint/js');

module.exports = [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'public/**',
      'src/pages/**/*',
      '**/src/pages/**',
      '**/*.backup.*',
      '**/*.disabled.*'
    ],
  },
  // JavaScript
  {
    files: ['src/**/*.{js,jsx}'],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
  // TypeScript
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: false,
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];