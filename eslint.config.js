import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }
      ],
<<<<<<< HEAD
      // '@typescript-eslint/no-explicit-any': 'warn', // Disabled due to plugin config issue
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-e453
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.ts',
      'temp-disabled/**',
      'temp_backup/**',
      'temp_exclude/**',
      'src.disabled/**',
      'corrupted_backup/**',
      'backup-problematic-files/**',
      'recovered-branches/**',
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
      'zion-film/**',
      'test-next/**',
      'test-reports/**',
      'test-results/**',
      'automation_backup/**',
      'ai-optimization-backups/**',
      'pages.disabled_full/**',
      'pages_backup_before_cleanup/**',
      'solutions.disabled/**',
      'src.pages.disabled/**',
      'scripts/**',
      'utils/**',
      'types/**',
      'tests/**',
      'src_backup/**',
      'src_backup_temp/**',
      'temp-backup/**',
      'vite.config-backup.ts',
      'zion/**',
      'components/reports/**',
      'components/sections/**',
      'components/services/**',
      'components/vendors/**',
      'components/wallet/**',
      'components/zion/**',
      'components/reviews/**',
      'components/search/**',
      'components/seo/**',
      'components/studio/**',
      'components/support/**',
      'components/token/**',
      'components/tokens/**',
      'components/layout/**',
      'components/ui/**',
      '*.cjs',
      '*.test.js',
      '*.test.ts',
      '*.test.tsx',
      '*.spec.js',
      '*.spec.ts',
      '*.spec.tsx',
    ],
  },
];