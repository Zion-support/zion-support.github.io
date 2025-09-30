// eslint.config.js (resolved)
import js from "@eslint/js";
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
// Keep config minimal to avoid plugin API mismatches

const browserGlobals = globals.browser;
const nodeGlobals = globals.node;

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        NodeJS: 'readonly'
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-undef': 'off'
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        NodeJS: 'readonly'
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'no-undef': 'off'
    },
  },
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '**/*.config.js',
      '**/*.config.ts',
      'public/**',
      'backup/**',
      'src.corrupted/**',
      'backup-problematic-files/**',
      'src.disabled/**',
      'src.pages.disabled/**',
      'automation/**',
      'temp_broken_files/**',
      'cypress/**',
      '**/backup-problematic-files/**',
      '**/src.disabled/**',
      '**/src.corrupted/**',
      '**/src.pages.disabled/**',
      '**/temp_broken_files/**',
      '**/automation/**',
      '**/backup-pages/**',
      '**/backup-merge-conflicts/**',
      '**/cypress_backup/**',
      '**/components.disabled/**',
      '**/components.disabled_full/**',
      '**/contracts.disabled/**',
      '**/data.disabled/**',
      '**/automation_backup/**',
      '**/broken_files_backup/**',
      '**/vite.config-backup.*',
      '**/test-simple.*',
      '**/*.disabled.*',
      '**/*.backup.*',
      '**/*.broken.*',
      '**/*.corrupted.*',
      '**/*.temp.*',
      '**/*.disabled/**',
      '**/*.backup/**',
      '**/*.broken/**',
      '**/*.corrupted/**',
      '**/*.temp/**',
      'coverage/**',
      'scripts/**',
      'pages/**',
      'store/**',
      'jest.setup.js',
      '*.config.js',
      '*.config.ts',
      'tests/**',
      '**/*.test.*',
      '**/*.spec.*'
    ]
  },

  // Keep only base configs; skip advanced spreads to avoid API differences
];
