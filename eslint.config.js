export default [
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
      'coverage/**',
      '**/*.disabled',
      '**/*.backup',
      '**/*.bak',
      '**/*.old',
      '**/*.corrupted',
      '**/*.quarantine',
      '**/temp-backup/**',
      '**/temp_broken_files/**',
      '**/temp_working/**',
      '**/tests.disabled/**',
      '**/pages._quarantine/**',
      '**/pages.disabled/**',
      '**/components.disabled/**',
      '**/components.disabled_full/**',
      '**/src.disabled/**',
      '**/zion-os.disabled/**',
      '**/__tests__/**',
      '**/tests/**',
      '**/*.test.*',
      '**/*.spec.*'
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        HTMLElement: 'readonly',
        HTMLButtonElement: 'readonly',
        KeyboardEvent: 'readonly',
        MutationObserver: 'readonly',
        React: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        jest: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-undef': 'warn'
    }
  }
];