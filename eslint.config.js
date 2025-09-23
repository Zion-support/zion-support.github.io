// Flat ESLint config for ESLint v9+
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    // Keep linting fast and avoid scanning huge backups and generated folders
    ignores: [
      'node_modules/**',
      '.next/**',
      '**/.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'public/**',
      'automation/**',
      'apps.backup/**',
      'backup/**',
      'backups/**',
      'backup-merge-conflicts/**',
      'backup-problematic-files/**',
      'recovered-branches/**',
      'server/**',
      'zion-os/**',
      'zion-website/**',
      'zion-ai-assistant/**',
      'ts_files_backup/**',
      'temp_backup/**',
      'temp_exclude/**',
      'src_backup/**',
      'src_backup_temp/**',
      'styles_backup/**',
      '.temp_backup_components/**',
      'tests.disabled/**',
      'test/**',
      'tests/**',
      'test_build/**',
      '**/*.backup*/**',
      '**/*backup*/**',
      '**/*corrupt*/**',
      '**/*conflict*/**'
    ]
  },
  js.configs.recommended,
  {
    // Limit to JS/JSX only to avoid TS parser requirements
    files: ['app/**/*.{js,jsx}', 'components/**/*.{js,jsx}', 'pages/**/*.{js,jsx}', 'src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    plugins: { react, 'react-hooks': reactHooks },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  }
];