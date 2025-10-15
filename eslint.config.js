<<<<<<< HEAD
import js from "@eslint/js";"
import globals from "globals";"
import reactHooks from "eslint-plugin-react-hooks";"
import reactRefresh from "eslint-plugin-react-refresh";"
import tseslint from "typescript-eslint";"
export default tseslint.config(
  {
    ignores: [
      'app-broken/**','
      'app-disabled/**','
      'dist/**','
      'build/**','
      'node_modules/**','
      '*.config.js','
      '*.config.ts','
      'scripts/**','
      'public/**','
      '*.cjs','
      'jest.setup.js','
      '*.js','
      '*.cjs','
      '*.mjs','
      'add-*.js','
      'advanced-*.js','
      'aggressive-*.js','
      'cleanup-*.js','
      'comprehensive-*.js','
      'fix-*.js','
      'create-*.js','
      'identify-*.js','
      'merge-*.js','
      'remove-*.js','
      'simple-*.js','
      'website-*.js','
      '*.sh','
      '*.py','
      'api/**','
      'src/**','
      'temp-broken/**','
      'utils/**','
      'hooks/**''
=======
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "dist",
      ".next",
      "backup-problematic/**",
      "corrupted-src-backup/**",
      "app-broken/**",
      "app-disabled/**",
      "src/**",
      "*.js",
      "scripts/**",
      "public/sw.js",
      "identify_missing_pages.js",
      "merge-with-conflict-resolution.js",
      "resolve-all-conflicts.js"
>>>>>>> main
    ]
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
<<<<<<< HEAD
    files: ["**/*.{ts,tsx}"],"
    languageOptions: {
      ecmaVersion: "latest","
      sourceType: "module","
      globals: {
        ...globals.browser,
        window: "readonly","
        document: "readonly","
        console: "readonly","
        process: "readonly","
        global: "readonly","
        HTMLElement: "readonly","
        Event: "readonly","
        KeyboardEvent: "readonly","
        MediaQueryListEvent: "readonly","
        PerformanceObserver: "readonly","
        PerformanceNavigationTiming: "readonly","
        HTMLInputElement: "readonly","
        HTMLTextAreaElement: "readonly","
        HTMLSelectElement: "readonly","
        setTimeout: "readonly","
        clearTimeout: "readonly","
        setInterval: "readonly","
        clearInterval: "readonly","
        performance: "readonly","
        localStorage: "readonly","
        sessionStorage: "readonly","
        require: "readonly","
        module: "readonly","
        exports: "readonly","
        fs: "readonly","
        __dirname: "readonly","
        // Jest globals
        describe: "readonly","
        it: "readonly","
        test: "readonly","
        expect: "readonly","
        beforeEach: "readonly","
        afterEach: "readonly","
        beforeAll: "readonly","
        afterAll: "readonly","
        jest: "readonly","
      },
      parserOptions: {
        ecmaVersion: 'latest','
        sourceType: 'module','
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        window: 'readonly','
        document: 'readonly','
        console: 'readonly','
        setTimeout: 'readonly','
        clearTimeout: 'readonly','
        setInterval: 'readonly','
        clearInterval: 'readonly','
        HTMLInputElement: 'readonly','
        HTMLTextAreaElement: 'readonly','
        HTMLSelectElement: 'readonly','
        PerformanceObserver: 'readonly','
        PerformanceNavigationTiming: 'readonly','
        PerformanceEventTiming: 'readonly''
      }
    },
    plugins: {
      "react-hooks": reactHooks,"
      "react-refresh": reactRefresh,"
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'off','
      '@typescript-eslint/no-explicit-any': 'off','
      '@typescript-eslint/no-empty-object-type': 'off','
      'react/react-in-jsx-scope': 'off','
      'react/prop-types': 'off','
      'no-console': 'off','
      'react/no-unescaped-entities': 'off','
      'no-undef': 'off''
    },
  },
<<<<<<< HEAD
  {
    ignores: [
      "dist", 
      "node_modules", 
      "coverage/**",
      "*.config.js",
      "backup*/**",
      "backup-problematic*/**",
      "backup-unused-components/**",
      "corrupted-src-backup/**",
      "cleanup-*.cjs",
      "comprehensive-*.cjs",
      "fix-*.cjs",
      "fix-*.js",
      "create-*.cjs",
      "create-*.js",
      "scripts/**",
      "src/**",
      "utils/**",
      "*.cjs",
      "*.js",
      "*.py",
      "*.sh",
      "*.md",
      "*.txt",
      "*.json",
      "*.html",
      "*.original",
      "*.backup*",
      "__tests__/**",
      "api/**",
      "analysis/**",
      "ci-cd-reports/**",
      "content/**",
      "contracts/**"
    ],
=======
=======
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "off"
    }
>>>>>>> main
  }
>>>>>>> main
);