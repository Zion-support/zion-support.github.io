/* Minimal ESLint flat config for CI */
const js = require('@eslint/js');

module.exports = [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'public/**',
      'src/pages/**'
    ]
  },
  {
    files: ['src/**/*.{js,jsx}'],
    ...js.configs.recommended,
  },
];