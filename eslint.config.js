import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'dist/',
      'build/',
      'coverage/',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'scripts/',
      'automation/',
      'temp_*/',
      'tests/',
      'supabase/',
      '*.test.js',
      '*.test.ts',
      '*.test.tsx',
      '*.spec.js',
      '*.spec.ts',
      '*.spec.tsx',
      '**/temp_*/**',
      '**/temp-*/**',
      '**/temp*/**',
      '**/backup*/**',
      '**/corrupted*/**',
      '**/disabled*/**',
      '**/__backup*/**',
      '**/src_backup/**',
      '**/src.disabled/**',
      '**/pages.disabled*/**',
      '**/solutions.disabled/**',
      '**/zion-os.disabled/**',
      '**/zion_academy/**',
      '**/zion-website/**',
      '**/zion-os/**',
      '**/test*/**',
      '**/tests/**',
      '**/tools/**',
      '**/types/**',
      '**/utils/**',
      '**/supabase/**',
      '**/zion-ai-assistant/**',
      '**/src.pages.disabled.auto/**',
      '**/components.disabled/**',
      '**/api.disabled/**',
      '**/pages.disabled/**',
      '**/backup-problematic-files/**',
      '**/corrupted_backup/**',
      '**/apps.backup/**',
      '**/automation_backup/**',
      '**/test_build/**',
      '**/test-utils.jsx',
      '**/test-utils.tsx',
      '**/vitest.config.ts',
      '**/tailwind.config.js',
      '**/postcss.config.js',
      '**/pages.bak/**',
      '**/pages_backup/**',
      '**/pages_backup_conflict/**',
      '**/src.broken/**',
      '**/src.corrupted/**',
      '**/recovered-branches/**',
      '**/pm2-automation/**',
      '**/services/**',
      '**/setupTests.ts',
      '**/public/script.js',
      '**/public/accessibility.js',
      '**/public/analytics.js',
      '**/public/error-handling.js',
      '**/public/performance.js',
      '**/public/security.js',
      '**/public/service-worker.js',
      '**/public/sw-*.js',
      '**/components-disabled/**',
      '**/data/**',
      '**/cypress/**',
      '**/dao/**',
      '**/hooks/**',
      '**/lib.disabled/**',
      '**/middleware/**',
      '**/netlify/**',
      '**/pages-disabled/**',
      '**/fix_typescript_syntax_errors.jsx',
      '**/jest.setup.ts',
      '**/lint-target/**',
      '**/middleware.security.ts',
      '**/api-backup/**',
      '**/apps/**',
      '**/cypress.config.ts',
      '**/src/**'
    ]
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      },
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint
    },
    rules: {
      ...js.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  }
];