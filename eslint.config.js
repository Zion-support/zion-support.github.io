// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import cypressPlugin from "eslint-plugin-cypress/flat";

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
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "public/**",
      "backup/**",
      "backup-pages/**",
      "backup-merge-conflicts/**",
      "backup-problematic-files/**",
      "src.corrupted/**",
      "src.disabled/**",
      "src.pages.disabled/**",
      "automation/**",
      "temp_broken_files/**",
      "cypress/**",
      "**/*.disabled.*",
      "**/*.backup.*",
      "**/*.broken.*",
      "**/*.corrupted.*",
      "**/*.temp.*",
      "**/*.disabled/**",
      "**/*.backup/**",
      "**/*.broken/**",
      "**/*.corrupted/**",
      "**/*.temp/**",
      "coverage/**",
      "scripts/**",
      "*.d.ts"
    ],
  },
  {
    files: ["**/*.{js,cjs,mjs}"],
    rules: js.configs.recommended.rules,
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...nodeGlobals },
    },
  },
  {
    files: ["api/**/*.js", "pages/api/**/*.js", "src/utils/setupAnalyticsTables.js"],
    languageOptions: { sourceType: "module", globals: { ...nodeGlobals } },
  },
  {
    files: ["public/service-worker.js"],
    languageOptions: { globals: { ...serviceWorkerGlobals } },
  },
  // Non type-aware TypeScript configuration
  ...tseslint.config({
    files: ["src/**/*.{ts,tsx}", "pages/**/*.{ts,tsx}"],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      globals: { ...browserGlobals },
    },
    plugins: { "react-hooks": reactHooks, "react-refresh": reactRefresh },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-require-imports": "off",
      // Disable type-aware rules
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
    },
  }),
  ...tseslint.config({
    files: ["vite.config.ts", "tailwind.config.ts", "cypress.config.ts", "vitest.config.ts"],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      globals: { ...nodeGlobals },
    },
    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-require-imports": "off",
    }
  }),
  ...tseslint.config({
    files: ["__tests__/**/*.{ts,tsx}"],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      globals: { ...globals.jest, ...browserGlobals },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  }),
  ...tseslint.config({
    files: ["tests/**/*.{ts,tsx,js,jsx}"],
    ignores: ["tests/e2e/**"],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      globals: { ...globals.jest, ...browserGlobals },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  }),
  ...tseslint.config({
    files: [
      ".storybook/**/*.ts",
      ".storybook/**/*.tsx",
      "src/**/*.stories.tsx",
      "src/**/*.stories.ts",
      "stories/**/*.stories.tsx",
      "stories/**/*.stories.ts",
    ],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      globals: { ...browserGlobals },
    },
    rules: {
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  }),
  ...tseslint.config({
    files: ["supabase/functions/**/*.ts"],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      globals: { ...nodeGlobals },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  }),
  ...tseslint.config({
    files: ["cypress/**/*.ts", "cypress/**/*.tsx"],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      globals: {
        ...browserGlobals,
        ...nodeGlobals,
      },
    },
    rules: {
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    }
  }),
  {
    files: ["cypress/**/*.{js,ts,tsx}"],
    ...cypressPlugin.configs.recommended,
    rules: {
      ...cypressPlugin.configs.recommended.rules,
    }
  },
  {
    files: ["cypress/support/commands.js"],
    languageOptions: {
        sourceType: "commonjs",
         globals: {
          ...(cypressPlugin.configs.recommended.languageOptions?.globals || {}),
          ...nodeGlobals,
        }
    }
  }
];
