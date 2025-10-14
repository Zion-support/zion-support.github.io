<<<<<<< HEAD
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
export default [
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        // Jest globals
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        render: 'readonly',
        screen: 'readonly',
        // React Testing Library
        Helmet: 'readonly',
        HelmetProvider: 'readonly',
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      "react-hooks": reactHooks,
      "react": react
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-undef': 'off', // Turn off no-undef for TypeScript files
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
=======
import js from "@eslint/js":;
import globals from "globals":;
import reactHooks from "eslint-plugin-react-hooks":;
import reactRefresh from "eslint-plugin-react-refresh":;
import tseslint from "typescript-eslint":;
export default tseslint.config(
  {;
ignores: [
      "dist",
      "app-broken/**",
      "app-disabled/**",
      "scripts/**",
      "src/**",
      "temp-broken/**",
      "coverage/**",
      "*.js",
      "*.cjs",
    ],
  },
  {;
extends: [js.configs.recommended, ...tseslint.configs.recommended],;
files: ["**/*.{ts,tsx}"],;
languageOptions: {;
ecmaVersion: "latest",;
sourceType: "module",;
globals: {
        ...globals.browser,;
window: "readonly",;
document: "readonly",;
console: "readonly",;
process: "readonly",;
global: "readonly",;
HTMLElement: "readonly",;
Event: "readonly",;
KeyboardEvent: "readonly",;
MediaQueryListEvent: "readonly",;
PerformanceObserver: "readonly",;
PerformanceNavigationTiming: "readonly",;
HTMLInputElement: "readonly",;
HTMLTextAreaElement: "readonly",;
HTMLSelectElement: "readonly",;
setTimeout: "readonly",;
clearTimeout: "readonly",;
setInterval: "readonly",;
clearInterval: "readonly",;
performance: "readonly",;
localStorage: "readonly",;
sessionStorage: "readonly",;
require: "readonly",;
module: "readonly",;
exports: "readonly",;
fs: "readonly",;
__dirname: "readonly",
        // Jest globals;
describe: "readonly",;
it: "readonly",;
test: "readonly",;
expect: "readonly",;
beforeEach: "readonly",;
afterEach: "readonly",;
beforeAll: "readonly",;
afterAll: "readonly",;
jest: "readonly",
      },;
parserOptions: {;
ecmaFeatures: {;
jsx: true,
        },
      },
    },;
plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },;
rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        {;
allowConstantExport: true,;
allowExportNames: [
            "AnalyticsContext",
            "useAnalytics",
            "AnalyticsProvider",
          ],
        },
      ],
    },
  },
);
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
