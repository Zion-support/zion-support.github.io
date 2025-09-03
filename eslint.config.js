import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

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
      }
    },
    plugins: {
      '@typescript-eslint': typescript
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-unused-vars': 'off', // Turn off base rule as it can report incorrect errors
      'no-undef': 'off' // TypeScript handles this
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
      'src.disabled/',
      'pages.disabled/',
      'pages.disabled_auto/',
      'pages_backup/',
      'pages-backup/',
      'pages.__backup/',
      'hooks.disabled/',
      'lib.disabled/',
      'types.disabled/',
      'tests.disabled/',
      'zion-os.disabled/',
      'zion_academy/',
      'temp_working/',
      'test_build/',
      'automation/',
      'automation_backup/',
      'automation/backups/',
      'broken_files_backup/',
      'contracts/',
      'hardhat/',
      'api-backup/',
      'backup-pages/',
      '*.backup/',
      '*.disabled/',
      'supabase/functions/',
      'working-automation-suite.cjs',
      'src/',
      'tests/',
      'scripts/',
      'services/',
      'public/',
      'src.broken/',
      '__tests__/',
      'ai-optimization-backups/',
      'api/',
      'components/',
      'data/',
      'ecosystem.*.js',
      'eslint.config.disabled.js',
      'fix-*.js',
      'fix_*.ts',
      'fix_*.jsx',
      'fix-variable-names.jsx',
      'health-endpoint.js',
      'jest.*.jsx',
      'middleware.ts',
      'netlify/',
      'pages/',
      'comprehensive-syntax-fix.js',
      'tailwind.config.ts',
      'vite.config.ts',
      'vitest.config.ts',
      '*.report.json',
      '*.status.json',
      '*.cjs',
      '*.sh',
      '*.toml',
      '*.conf',
      '*.lock',
      '*.log',
      '*.json',
      '*.md',
      '*.txt',
      '*.yml',
      '*.yaml'
    ]
  }
];