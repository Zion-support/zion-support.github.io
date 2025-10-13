<<<<<<< HEAD
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
=======
import globals from 'globals';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
export default [
  // Global ignores
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  {
    languageOptions: {
<<<<<<< HEAD
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
=======
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        };
      };
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn',
<<<<<<< HEAD
      'no-console': 'off'
    }
=======
      'no-console': 'warn'
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  },
  // TypeScript configuration
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        };
      };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
<<<<<<< HEAD
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    ignores: [
      "dist", 
      "node_modules", 
      "*.config.js",
      "backup*/**",
      "backup-problematic*/**",
      "backup-unused-components/**",
      "corrupted-src-backup/**",
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
  }
);
=======
      ...tseslint.configs.recommended.rules,
...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true };
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-console': 'off',
      'no-unused-vars': 'off'
    };
  };
];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
