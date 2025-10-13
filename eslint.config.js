<<<<<<< HEAD
import globals from 'globals';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: [
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
      'src/**',
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
<<<<<<< HEAD
    ],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'off'
    }
  },
  // TypeScript configuration
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
=======
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: typescriptParser,
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        window: 'readonly',
        document: 'readonly',
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        Buffer: 'readonly'
      }
    },
    plugins: {
<<<<<<< HEAD
      '@typescript-eslint': tseslint,
=======
      '@typescript-eslint': typescript,
      'react': react,
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
<<<<<<< HEAD
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-console': 'off',
      'no-unused-vars': 'off'
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
    }
  }
];