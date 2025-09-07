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
      'api-backup/',
      'src.pages.disabled.auto/',
      'src.broken/',
      'src.corrupted/',
      'src.pages.disabled/',
      'pages_backup/',
      'pages_backup_conflict/',
      'pages-disabled/',
      'pages.bak/',
      'pages.disabled/',
      'zion-ai-assistant/',
      'zion-os/',
      'zion-website/',
      'zion_academy/',
      'test_build/',
      'test-next/',
      'corrupted_backup/',
      'corrupted-files-backup/',
      'node_modules_bak_*/',
      'lib.disabled/',
      'components-disabled/',
      'recovered-branches/',
      'all-automations-reports/',
      'automation-reports/',
      'build-reports/',
      'ci-cd-reports/',
      'deployment-reports/',
      'improvement-reports/',
      'link-reports/',
      'log-analysis-reports/',
      'maintenance-reports/',
      'performance-reports/',
      'security-reports/',
      'test-reports/',
      'test-results/',
      'pm2-automation/',
      'monitoring/',
      'netlify/',
      'k8s/',
      'dao/',
      'data/',
      'content/',
      'docs/',
      'media/',
      'public/',
      'services/',
      'middleware/',
      'hooks/',
      'utils/',
      'types/',
      'components/',
      'app/',
      'pages/',
      'src/',
      'backend/',
      'apps/'
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