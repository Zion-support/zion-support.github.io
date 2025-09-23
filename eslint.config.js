import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      '**/.next/**',
      'out/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.ts',
      'scripts/**',
      'automation/**',
      'public/**',
      'netlify/**',
      'ecosystem*.cjs',
      '**/*.cjs',
      'zion-os/**',
      'zion-website/.next/**',
      'zion-os/.next/**',
      'zion.app/**',
      'zion_academy/**',
      '**/static/**',
      '**/*.min.js',
      '.storybook/**',
      '.temp_backup_components/**',
      'backup/**',
      'backups/**',
      'backup-merge-conflicts/**',
      'backup-problematic-files/**',
      'recovered-branches/**',
      'corrupted_backup/**',
      'apps.backup/**',
      'components/**',
      'components.disabled/**',
      'components.disabled_full/**',
      'components-disabled/**',
      'components-disabled_full/**',
      'pages-disabled/**',
      'pages.disabled/**',
      'pages_disabled/**',
      'pages.disabled_full/**',
      'pages.disabled_auto/**',
      'pages_backup/**',
      'pages_backup_before_cleanup/**',
      'pages_backup_conflict/**',
      'pages_backup_conflicts/**',
      'pages._archive_corrupted/**',
      'pages.broken/**',
      'pages.corrupted.*/**',
      'pages_minimal/**',
      'pages.old/**',
      'pages-quarantine/**',
      'pages._quarantine/**',
      'src_backup/**',
      'src_backup_temp/**',
      'src.broken/**',
      'src.corrupted/**',
      'src-disabled/**',
      'src.disabled/**',
      'src.pages.disabled/**',
      'temp-backup/**',
      'temp_backup/**',
      'temp_broken_files/**',
      'temp_components/**',
      'temp_conflicts/**',
      'temp-disabled/**',
      'temp_exclude/**',
      'lib_backup/**',
      'lib.broken/**',
      'lib.disabled/**',
      'ts_files_backup/**',
      '**/*.backup*',
      '**/*.backups*/',
      '**/*.corrupted*/',
      '**/*.disabled*/'
    ]
  }
];