<<<<<<< HEAD
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
=======
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a

export default [
  {
    ignores: [
<<<<<<< HEAD
      "dist", 
      "node_modules", 
      "*.config.js",
      "backup*/**",
      "backup-problematic*/**",
      "backup-unused-components/**",
      "corrupted-src-backup/**",
      "app-disabled/**",
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
      'app-broken/**',
      'app-disabled/**',
      'dist/**',
      'build/**',
      'node_modules/**',
      '*.config.js',
      '*.config.ts',
      'scripts/**',
      'public/**',
      'add-missing-routes*.jsx',
      'backup-problematic/**',
      'backup-unused-components/**',
      'backup/**',
      'cleanup-*.js',
      'cleanup-*.cjs',
      'comprehensive-*.js',
      'fix-*.js',
      'fix-*.cjs',
      '*.cjs',
      'create-*.js',
      'identify-*.js',
      'merge-*.js',
      'remove-*.js',
      'simple-*.js',
      'website-*.js',
      'public/sw.js',
      'admin-api-disabled/**',
      'ai-customer-support-disabled/**',
      'ai-data-visualization-disabled/**',
      'ai-sales-automation-disabled/**',
      'ai-workflow-automation-disabled/**',
      'api-disabled/**',
      'api.disabled/**',
      'api-backup/**',
      'components-disabled/**',
      'components.disabled/**',
      'automation_backup/**',
      'backup*/**',
      '*-disabled/**',
      '*.disabled/**',
      '*.broken',
      '*.backup',
      'temp-files/**',
      'cache/**',
      'analyze-*.js',
      'check-*.js',
      'clean-*.js',
      'jest.setup.js'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-console': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
  }
);
