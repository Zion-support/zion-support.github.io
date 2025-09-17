import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

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
          jsx: true,
        },
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        fetch: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        history: 'readonly',
        // DOM types
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLSelectElement: 'readonly',
        HTMLDivElement: 'readonly',
        MouseEvent: 'readonly',
        Node: 'readonly',
        PerformanceObserver: 'readonly',
        // Node.js globals
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        // React globals
        React: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    ignores: [
      // Node/build outputs
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'out/**',
      'coverage/**',

      // Large/legacy sources and disabled dirs
      'src-corrupted/**',
      'src.corrupted/**',
      'src.disabled/**',
      'src.broken/**',
      'src.pages.disabled/**',
      'src_backup_temp/**',
      'src_backup/**',
      'solutions.disabled/**',
      'components.disabled/**',
      'components.corrupted/**',
      'hooks/**',
      'hooks.disabled/**',
      'lib.disabled/**',
      'lib/**',
      'lib.corrupted/**',
      'zion-os.disabled/**',
      'zion-os/**',
      'zion-website/**',
      'zion.app/**',
      'zion_academy/**',
      'contracts.disabled/**',
      'corrupted-files-backup/**',
      'corrupted_files_backup_2/**',
      'cypress.disabled/**',
      'cypress_backup/**',
      'data/**',
      'e2e/**',
      'pages.disabled/**',
      'pages.disabled_backup/**',
      'pages_backup/**',
      'supabase/**',
      'types/**',
      'types.disabled/**',
      'utils/**',
      'utils.disabled/**',

      // Tests and mocks
      '__tests__/**',
      'tests/**',
      'tests.disabled/**',
      'test/**',
      'test_build/**',
      '*.test.*',

      // Temp and backups
      'backup/**',
      'backup-pages/**',
      'pages-backup/**',
      'lib_backup/**',
      'data_backup/**',
      'styles_backup/**',
      'api-backup/**',
      'automation_backup/**',
      'ai-optimization-backups/**',
      'ai-analysis-reports/**',
      'optimization-reports/**',
      'public/reports/**',
      'temp_backup/**',
      'temp_broken_components/**',
      'temp_working/**',
      'temp_*/**',
      'temp-backup/**',
      'temp-problematic-pages/**',
      'recovered-branches/**',
      'backup-merge-conflicts/**',

      // Scripts/configs and CJS files not intended for lint
      'scripts/**',
      'automation/**',
      'netlify/**',
      'token/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      '**/*.cjs',

      // Public assets/scripts
      'public/**',

      // Root-level noisy files
      'api/**',
      'api.disabled/**',
      'api.disabled.temp/**',
      '.*.js',
      'jest.config.*',
      'fix-*.js',
      'fix-*.jsx',
      'start-all-automations.js',
      'start-dev.js',
      'test-build.js',
      'syntax-fixer.js',
      'workbox-config.js',
      'vite.config-backup.ts',
      'talent/**',
      'test-utils.jsx',
      'store/**',

      // Misc root configs that were being linted
      '.eslintrc.js',
      '.eslintrc.cjs',
      '.eslintrc.disabled.js',
      '.prettierrc.js',

      // Page backups
      'pages.__backup/**',
      'pages-disabled/**',
      'pages.disabled_auto/**',
    ],
  },
];