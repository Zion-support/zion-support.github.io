import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    ignores: [
      '**/__tests__/**',
      '**/tests/**',
      '**/*.test.*',
      '**/*.spec.*',
      '**/*.dynamic.*',
      '**/src/data/**',
      '**/src/components/unused/**',
      '**/zion_academy/**',
      '**/*.cjs',
      '**/tools/**',
      '**/automation/**',
      '**/test_build/**'
    ]
  },
  {
    files: ['src/**/*.{js,jsx}'],
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
      '**/*.spec.*',
      '**/*.dynamic.*',
      '**/src/data/**',
      '**/src/components/unused/**',
      '**/zion_academy/**',
      '**/*.cjs',
      '**/tools/**',
      '**/automation/**',
      '**/test_build/**'
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
  },
  {
    files: ['src/**/*.{ts,tsx}'],
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
      '**/*.spec.*',
      '**/*.dynamic.*',
      '**/src/data/**',
      '**/src/components/unused/**',
      '**/zion_academy/**',
      '**/*.cjs',
      '**/tools/**',
      '**/automation/**',
      '**/test_build/**'
    ],
    languageOptions: {
      parser: typescriptParser,
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
    plugins: {
      '@typescript-eslint': typescript
    },
    rules: {
      ...typescript.configs.recommended.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'off',
      'no-undef': 'off'
    }
  }
];