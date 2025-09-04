import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import next from '@next/eslint-plugin-next';

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
<<<<<<< HEAD
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        console: 'readonly',
        process: 'readonly',
        PerformanceObserver: 'readonly',
=======
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
>>>>>>> cursor/add-new-services-and-advertise-them-1b6b
        React: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
      '@next/next': next,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...next.configs.recommended.rules,
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
      'src/**',
      'src.corrupted/**',
      'src.disabled/**',
      'src.broken/**',
      'src.pages.disabled/**',
      'solutions.disabled/**',
      'components.disabled/**',
      'components.corrupted/**',
      'hooks/**',
      'hooks.disabled/**',
      'lib.disabled/**',
      'lib/**',
      'lib.corrupted/**',
      'zion-os.disabled/**',
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

      // Tests and mocks
      '__tests__/**',
      'tests/**',
      'tests.disabled/**',
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

      // Scripts/configs and CJS files not intended for lint
      'scripts/**',
      'automation/**',
      'netlify/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      '**/*.cjs',

      // Public assets/scripts
      'public/**',

      // Root-level noisy files
      'api/**',
      'jest.config.*',
      'fix-*.js',
      'fix-*.jsx',

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