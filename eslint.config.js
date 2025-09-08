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


export default [
  // 1. Global Ignores
  {
    ignores: [
      "dist/",
      "out/",
      "build/",
      "node_modules/",
      "**/*.config.js", // Ignores this file, tailwind.config.js, etc.
      "extension/",
      "supabase/functions/_shared/",
      "playwright.config.ts",
      "jest.config.js",
      "scripts/",
      "coverage/",
      "*.d.ts", // Typically declaration files don't need linting
      // Disabled/corrupted files
      "src-disabled/",
      "src.broken/",
      "src_disabled_*/",
      "pages._archive_corrupted/",
      "pages.bak/",
      "*.disabled/",
      "*.backup/",
      "*.bak/",
      // Build artifacts
      "**/*.min.js",
      "**/*.bundle.js",
      // Service workers (browser globals)
      "public/sw*.js",
      "public/service-worker.js",
      // Automation scripts
      "*automation*.js",
      "*automation*.cjs",
      "*fix*.js",
      "*fix*.cjs",
      "*merge*.js",
      "*merge*.cjs",
      "*resolve*.js",
      "*resolve*.cjs",
      "*ultimate*.js",
      "*ultimate*.cjs",
      "*comprehensive*.js",
      "*comprehensive*.cjs",
      // PM2 configs
      "ecosystem*.js",
      "ecosystem*.cjs",
      "pm2-*.js",
      "pm2-*.cjs",
      // Recovery/backup files
      "recovered-branches/",
      "backup/",
      "corrupted*/",
      "*_backup*/",
      // Temporary files
      "temp*/",
      "tmp*/",
      "*.tmp",
      "*.temp",
      // Config files that may have syntax issues
      "postcss.config*.js",
      "vite.config*.js",
      "vitest.config*.js",
      "next.config*.js",
    ],
  },

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
];
