import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'public/**',
      'components/**',
      'lib/**',
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
  eslintJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: [
      'app/**/*.{js,jsx,ts,tsx}',
      'pages/**/*.{js,jsx,ts,tsx}',
      'src/**/*.{js,jsx,ts,tsx}'
    ],
    languageOptions: {
<<<<<<< HEAD
      ecmaVersion: 2021,
      sourceType: 'module'
    },
    plugins: { react, 'react-hooks': reactHooks },
=======
      parser: tseslint.parser,
      ecmaVersion: 2021,
      sourceType: 'module'
    },
    plugins: { react: eslintReact, 'react-hooks': eslintReactHooks, '@typescript-eslint': tseslint.plugin },
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-9be7
    settings: { react: { version: 'detect' } },
        rules: {
          'react/react-in-jsx-scope': 'off',
          'no-console': ['warn', { allow: ['warn', 'error'] }],
          '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^(React|_)' }]
        }
  }
];

