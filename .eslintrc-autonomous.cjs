/**
 * Autonomous ESLint Rules — Custom Linter
 *
 * Flat-config equivalent of the autonomous CI gate. Keep this file
 * dependency-free beyond packages already pinned by package-lock.json.
 */

const js = require('@eslint/js');
const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const globals = require('globals');

const sharedLanguageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  globals: {
    ...globals.browser,
    ...globals.node,
    ...globals.es2020,
  },
};

const sharedRules = {
  'no-eval': 'error',
  'no-new-func': 'error',
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  'require-await': 'warn',
  complexity: ['warn', 20],
  curly: ['error', 'all'],
  'no-magic-numbers': ['warn', {
    ignore: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 24, 48, 60, 100, 1000, 1024, 3600, 86400],
    ignoreArrayIndexes: true,
  }],
  'no-restricted-syntax': ['error', {
    selector: "AssignmentExpression[left.type='MemberExpression'][left.property.name='innerHTML']",
    message: 'Assigning to innerHTML requires explicit sanitization.',
  }],
};

module.exports = [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '.hermes/**',
      'automation/reports/**',
      '**/*.config.js',
      '**/*.config.cjs',
      'scripts/automation/**',
      'automation/**/*.cjs',
      '.eslintrc-autonomous.cjs',
    ],
  },
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    languageOptions: sharedLanguageOptions,
    rules: {
      ...js.configs.recommended.rules,
      ...sharedRules,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ...sharedLanguageOptions,
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...sharedRules,
      'no-unused-vars': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-explicit-any': ['error', {
        fixToUnknown: false,
        ignoreRestArgs: false,
      }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'function',
          format: ['camelCase'],
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'property',
          format: ['camelCase', 'snake_case', 'UPPER_CASE'],
        },
        {
          selector: 'memberLike',
          format: ['camelCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
    },
  },
  {
    files: ['test/**/*.ts', '**/*.test.ts', '**/*.spec.ts', '**/*.test.tsx', '**/*.spec.tsx'],
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
