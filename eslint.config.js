<<<<<<< HEAD
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
=======
<<<<<<< HEAD
// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
// import cypressPlugin from "eslint-plugin-cypress/flat"; // Corrected import for flat config

// Cleaned global objects
const browserGlobals = Object.fromEntries(
  Object.entries(globals.browser).map(([key, value]) => [key.trim(), value])
);
const nodeGlobals = Object.fromEntries(
  Object.entries(globals.node).map(([key, value]) => [key.trim(), value])
);
const serviceWorkerGlobals = Object.fromEntries(
  Object.entries(globals.serviceworker).map(([key, value]) => [key.trim(), value])
);

>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3

export default [
  { ...js.configs.recommended, files: ['app/**/*.{js,jsx,ts,tsx}', 'src/**/*.{js,jsx,ts,tsx}'], ignores: ['src.disabled/**/*', 'src_disabled_*/**/*', 'src.broken/**/*', 'scripts/**/*', '**/*.disabled/**/*', '**/*.backup/**/*', '**/*.temp/**/*', '**/*.old/**/*'] },
  {
    files: ['app/**/*.{js,jsx,ts,tsx}', 'src/**/*.{js,jsx,ts,tsx}'],
    ignores: ['src.disabled/**/*', 'src_disabled_*/**/*', 'src.broken/**/*', 'scripts/**/*', '**/*.disabled/**/*', '**/*.backup/**/*', '**/*.temp/**/*', '**/*.old/**/*'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        JSX: 'readonly',
        NodeJS: 'readonly',
        IntersectionObserverInit: 'readonly',
        BeforeInstallPromptEvent: 'readonly',
        NotificationPermission: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
      'react-hooks': reactHooks,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-debugger': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'public/**',
      'temp_conflicts/**',
      'temp_exclude/**',
      '__tests__/**',
      'tests/**',
      'apps/**',
      'utils/**',
      'types/**',
      'zion-*/**',
      'zion_os/**',
      'zion/**'
    ],
  },
<<<<<<< HEAD
=======

  // 2. Base Configuration for JavaScript files
  {
    files: ["**/*.{js,cjs,mjs}"],
    rules: js.configs.recommended.rules, // Using only rules from js.configs.recommended
    languageOptions: {
      sourceType: "commonjs", // Default, overridden by more specific configs below
      globals: { ...nodeGlobals },
    },
  },
  // JS files that are ES Modules
  {
    files: ["api/**/*.js", "pages/api/**/*.js", "src/utils/setupAnalyticsTables.js"],
    languageOptions: { sourceType: "module", globals: { ...nodeGlobals } },
  },
  // Service Worker JS
  {
    files: ["public/service-worker.js"],
    languageOptions: { globals: { ...serviceWorkerGlobals } },
  },

  // 3. TypeScript Configurations
  // Main application TS/TSX files (src, pages, but not tests, stories, cypress, supabase yet)
  ...tseslint.config({
    files: ["src/**/*.{ts,tsx}", "pages/**/*.{ts,tsx}"], 
    // Exclude story files from this general src/pages config
    ignores: ["src/**/*.stories.tsx", "src/**/*.stories.ts", "src/**/*.test.tsx", "src/**/*.test.ts"],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"], // Simplified to only tsconfig.json
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...browserGlobals },
    },
    plugins: { "react-hooks": reactHooks, "react-refresh": reactRefresh },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/restrict-template-expressions": "warn",
      "@typescript-eslint/no-floating-promises": ["warn", { ignoreVoid: true }],
      "@typescript-eslint/no-misused-promises": ["warn", { checksVoidReturn: false }],
    },
  }),

  // Config for vite.config.ts, tailwind.config.ts etc. (Node environment TS files)
  // This should specifically target config files at the root.
  ...tseslint.config({
    files: ["vite.config.ts", "tailwind.config.ts", "cypress.config.ts", "vitest.config.ts"], // Explicit list
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json"], // Use tsconfig.node.json
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...nodeGlobals },
    },
    rules: {
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-require-imports": "off",
    }
  }),

  // Test files configuration (__tests__ directory)
  ...tseslint.config({
    files: ["__tests__/**/*.{ts,tsx}"],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: "./__tests__/tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.jest, ...browserGlobals }, // Jest and browser globals
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      // Allow describe, it, expect etc.
      "@typescript-eslint/unbound-method": "off",
    },
  }),

  // Test files configuration (tests/ directory)
  ...tseslint.config({
    files: ["tests/**/*.{ts,tsx,js,jsx}"], // Include JS/JSX as per its tsconfig
    ignores: ["tests/e2e/**"], // e2e tests inside 'tests' might be Playwright, not Jest
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: "./tests/tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.jest, ...browserGlobals }, // Jest and browser globals
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/unbound-method": "off", // for Jest matchers
      "@typescript-eslint/no-var-requires": "off", // Allow require in JS test files
      "@typescript-eslint/no-require-imports": "off", // Allow require in JS test files
    },
  }),

  // Storybook files configuration
  ...tseslint.config({
    files: [
      ".storybook/**/*.ts",
      ".storybook/**/*.tsx",
      "src/**/*.stories.tsx",
      "src/**/*.stories.ts", // Added .ts stories
      "stories/**/*.stories.tsx",
      "stories/**/*.stories.ts", // Added .ts stories
    ],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: "./.storybook/tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...browserGlobals },
    },
    rules: {
      "import/no-anonymous-default-export": "off",
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
    },
  }),

  // Supabase functions configuration
  ...tseslint.config({
    files: ["supabase/functions/**/*.ts"],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: "./supabase/functions/tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...nodeGlobals },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-floating-promises": "warn", 
      "@typescript-eslint/restrict-template-expressions": "warn", 
    },
  }),
  
  // Cypress configuration removed due to missing plugin
=======
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  { ...js.configs.recommended, files: ['app/**/*.{js,jsx,ts,tsx}'] },
  {
    files: ['app/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
      'react-hooks': reactHooks,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-debugger': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'public/**',
      'temp_conflicts/**',
      'temp_exclude/**',
      '__tests__/**',
      'tests/**',
      'apps/**',
      'utils/**',
      'types/**',
      'zion-*/**',
      'zion_os/**',
      'zion/**'
    ],
  },
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
];
