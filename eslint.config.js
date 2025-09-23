// Flat ESLint config for ESLint v9+
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
export default [
  {
    // Limit linting to main app sources; ignore backups/other projects
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
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
      'src_backup/**',
      'src_backup_temp/**',
      'components/20o25-advanced-services-showcase.tsx',
      'components/20o25-comprehensive-services-showcase-v2.tsx',
      'components/AI20o25AdvancedAutomationShowcase.tsx',
      'components/AI20o25AdvancedAnalyticsDashboard.tsx',
      '**/*.min.js'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: [
      'app/**/*.{js,jsx,ts,tsx}',
      'pages/**/*.{js,jsx,ts,tsx}',
      'src/**/*.{js,jsx,ts,tsx}'
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': tseslint.plugin
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^(React)$', ignoreRestSiblings: true }
      ]
    },
    settings: { react: { version: 'detect' } }
  }
];

