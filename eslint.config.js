import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        React: 'readonly',
        console: 'readonly',
        process: 'readonly',
        window: 'readonly',
        document: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        HTMLElement: 'readonly',
        HTMLAnchorElement: 'readonly',
        performance: 'readonly',
        module: 'readonly',
        require: 'readonly',
        jest: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
      }
    },
    plugins: {
<<<<<<< HEAD
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/no-unescaped-entities': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off',
      'no-unused-vars': 'warn'
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-explicit-any': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        // Node.js globals
        process: 'readonly',
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        Buffer: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setImmediate: 'readonly',
        clearImmediate: 'readonly'
      }
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    }
  },
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'build/',
      'dist/',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'src/pages/services/',
      'src/pages/solutions/',
      'src/pages/talent/',
      'src/routes/',
      'src/services/',
      'src/store/',
      'src/test/',
      'src/utils/',
      'tests/',
      'tests.disabled/',
      'types.disabled/',
      'zion-os.disabled/',
      'zion_academy/',
      'temp_working/',
      'test_build/',
      'supabase/',
      'working-automation-suite.cjs'
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    ]
  }
];