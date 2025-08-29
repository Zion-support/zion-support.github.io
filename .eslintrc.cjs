module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: [
    // Generated/build outputs
    'dist/',
    // Backup/scratch files
    '**/*.backup.*',
    // Legacy duplicate JSX variants that aren't used in build
    'src/**/*.jsx',
    'src/**/*.js.jsx',
    // Experimental or disabled folders
    'src/components.disabled/**',
    'tests.disabled/**',
  ],
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jsx-a11y',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/prop-types': 'off', // Using TypeScript instead
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off', // React Router handles this
  },
  overrides: [
    {
      files: ['tests/**/*.{js,jsx,ts,tsx}', '__tests__/**/*.{js,jsx,ts,tsx}'],
      env: { jest: true, node: true, browser: true },
      globals: {
        vi: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        jest: 'readonly',
      },
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['supabase/functions/**/*.ts'],
      env: { node: true },
      globals: {
        Deno: 'readonly',
      },
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
