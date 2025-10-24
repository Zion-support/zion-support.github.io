import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  { 
    ignores: [
      'dist', 
      '.next', 
      'node_modules', 
      'out', 
      'ai-pages-backup', 
      'all-pages-backup', 
      'app-backup', 
      'api',
      'src',
      'scripts',
      'public',
      'hooks',
      'problematic-files-backup',
      '*.js', 
      '*.py', 
      '*.sh', 
      '*.cjs', 
      '*.md', 
      '*.json', 
      '*.txt', 
      '*.html',
      'app/components/*.tsx',
      'app/hooks/*.ts',
      'app/config/*.tsx',
      'app/force-dynamic.ts',
      'app/main.tsx',
      'app/micro-saas-services/*.tsx',
      'app/contact/page-broken*.tsx',
      'app/compliance/page-*.tsx',
      'app/ai-customer-support/page-*.tsx',
      'app/pages/*.tsx',
      'app/types/*.ts',
      'app/utils/*.ts',
      'app/utils/*.tsx',
      'app/page-backup.tsx',
      'app/page-simple.tsx',
      'app/service-template.tsx',
      'clean-page-template.tsx',
      'global.d.ts',
      'jest.setup.ts',
      'jest.setup.tsx'
    ] 
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];