import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"

export default tseslint.config(
  {
    ignores: [
      'app-broken/**',
      'app-disabled/**',
      'dist/**',
      'node_modules/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      '*.cjs',
      'api/**',
      'scripts/**',
      'validate-jsx.js',
      'public/sw.js'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^[A-Z]" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "warn"
    }
  },
  {
    files: ["public/sw.js"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.serviceworker,
        self: "readonly",
        caches: "readonly",
        fetch: "readonly",
        URL: "readonly",
        location: "readonly",
        clients: "readonly"
      }
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": "off"
    }
  },
  {
    files: ["jest.setup.js"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.jest,
        global: "readonly",
        console: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly"
      }
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": "off"
    }
  }
)