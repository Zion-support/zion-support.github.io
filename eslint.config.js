import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'node_modules/**',
      'coverage/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'scripts/**',
      'automation/**',
      'backup-merge-conflicts/**',
      '**/*.backup.*',
      '**/*.old.*',
      '**/*.disabled.*',
      '**/*.broken.*',
      '**/*.corrupted.*',
      '**/*.temp.*',
      '**/*.test.*',
      '**/*.spec.*',
      '**/performance-*.txt',
      '**/zion-os/**',
      '**/zion-website/**',
      '**/zion-academy/**',
      '**/zion-film/**',
      '**/zion-ai-assistant/**',
      '**/*.min.js',
      '**/*.bundle.js',
      '**/public/**',
      '**/static/**',
      'temp_exclude/**',
      'test_build/**',
      'tests/**',
      'types/**',
      'utils/**',
      'vite.config.js',
      'vite.config.ts',
      'zion-website/**',
      'zion_academy/**',
      'ultimate-*.cjs',
      'test-next.js',
      'src_backup_temp/**',
      'temp-backup/**',
      'temp_components/**',
      'temp_conflicts/**',
      'temp_working/**',
      'supabase/**',
      'super-syntax-fixer.cjs',
      'system-monitor.cjs',
      'tailwind.config.js',
      'start-dev.js',
      'structural-fix.js',
      'types/service-variants.js',
      'utils/accessibility-utils.js',
      'utils/csrf-protection.js',
      'utils/dynamic-imports.js',
      'utils/env-security.js',
      'utils/input-validation.js',
      'utils/performance-monitor.js',
      'utils/performance-optimizations.js',
      'utils/rate-limiting.js',
      'utils/security-headers.js',
      'utils/seo-utils.js',
      'zion-website/**',
      'zion_academy/**'
    ],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
<<<<<<< HEAD
        afterAll: 'readonly'
      }
=======
        afterAll: 'readonly',
      },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'react/prop-types': 'off',
<<<<<<< HEAD
      'react/react-in-jsx-scope': 'off'
=======
      'react/react-in-jsx-scope': 'off',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: [
      '**/*.cjs',
      '**/scripts/**/*.js',
      '**/automation/**/*.js',
      '**/pm2/**/*.js'
    ],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        ...globals.node,
        console: 'readonly',
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        global: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
<<<<<<< HEAD
      'no-undef': 'error'
    }
  }
=======
      'no-undef': 'error',
    },
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
];