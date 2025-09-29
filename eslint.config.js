// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // Global ignores
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'public/**',
      'backup/**',
      'backup-pages/**',
      'backup-merge-conflicts/**',
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
      '**/pages/**',
      '**/store/**',
      '**/tests/**',
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
      'cypress/**',
      'tests/**',
      'coverage/**',
      'scripts/**',
      'pages/**',
      'store/**',
      'jest.setup.js',
      '**/vite.config-backup.*',
      '**/test-simple.*',
      '*.config.js',
      '*.config.ts'
    ]
  },

  // Base JavaScript configuration
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: {
      globals: { ...globals.node },
    },
    ...js.configs.recommended,
  },

  // 3. TypeScript Configurations (non type-aware to avoid project resolution issues in CI)
  // Main application TS/TSX files (src, pages, but not tests, stories, cypress, supabase yet)
  ...tseslint.config({
    files: ["src/**/*.{ts,tsx}", "pages/**/*.{ts,tsx}"],
    // Exclude story and test files from this general src/pages config
    ignores: ["src/**/*.stories.tsx", "src/**/*.stories.ts", "src/**/*.test.tsx", "src/**/*.test.ts"],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      globals: { ...browserGlobals },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-misused-promises": "off",
    },
  }),

  // TypeScript configuration for config files
  ...tseslint.config({
    files: ["*.config.{ts,js}", "vite.config.ts", "tailwind.config.ts"],
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  }),

  // Test files configuration
  ...tseslint.config({
    files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
    languageOptions: {
      globals: { ...globals.jest, ...globals.browser },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/unbound-method": "off",
    },
  }),
];