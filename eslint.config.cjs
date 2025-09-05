module.exports = [
  {
    files: ['automation/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        React: 'readonly',
      },
    },
    rules: {
      // Loosen rules for automation scripts to avoid CI noise
      'no-unused-vars': 'off',
      'no-console': 'off',
      'prefer-const': 'warn',
      'no-var': 'warn',
      'no-undef': 'off',
    },
  },
  {
    // Ignore build artifacts and vendor folders only
    ignores: [

      // Exclude automation backup snapshots and generated archives

      // Exclude known problematic automation scripts pending refactor









      // Remaining problematic files pending cleanup




    ],
  },
];
