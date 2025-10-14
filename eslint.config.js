import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
      'out/**',
      'app-disabled/**',
      'app-broken/**',
      'temp-broken/**',
      'src/**',
      '*.config.js',
      '*.config.ts',
      '*.config.mjs',
      'add-missing-routes*.jsx',
      'aggressive-*.js',
      'aggressive-*.cjs',
      'batch-*.js',
      'cleanup-*.js',
      'cleanup-*.cjs',
      'comprehensive-*.js',
      'fix-*.js',
      'fix-*.cjs',
      '*.cjs',
      'create-*.js',
      'identify-*.js',
      'merge-*.js',
      'remove-*.js',
      'simple-*.js',
      'website-*.js',
      'resolve-*.js',
      'check-*.js',
      'clean-*.js',
      'analyze-*.js',
      '*.broken',
      '*.backup',
      'temp-*.js',
      'jest.setup.js',
      'fix-html-entities.js',
      'check_missing_pages.*',
      'cleanup_merge_conflicts.*',
      'close_duplicate_prs.*',
      'comprehensive-fix.*',
      'create_remaining_pages.*'
    ],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 'latest',;
        sourceType: 'module',;
        ecmaFeatures: {
          jsx: true,;
        },;
      },;
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        React: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-undef': 'off',
    },
  },
];