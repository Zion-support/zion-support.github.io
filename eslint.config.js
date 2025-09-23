// Flat ESLint config for ESLint v9+
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'coverage/**',
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
      'types/**',
      'types.disabled/**',
      'utils/**',
      'utils.disabled/**',
      'zion_academy/**',
      'generated-services/**',
      'token/**',
      'workbox-config.js',
      'ultimate-*.js',
      'ultimate*.cjs',
      'verify-and-complete-merges.js',
      'ultimate_merge_and_improve.cjs',
      'ultimate-merge-conflict-resolver.js'
    ]
  },
  js.configs.recommended,
  {
    files: ['app/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}', 'pages/**/*.{js,jsx,ts,tsx}', 'src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    rules: {
      'react/react-in-jsx-scope': 'off'
    },
    settings: { react: { version: 'detect' } }
  }
];