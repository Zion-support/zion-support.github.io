const js = require('@eslint/js');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
              ignores: [
            'node_modules/**/*',
            '.next/**/*',
            'out/**/*',
            'dist/**/*',
            'build/**/*',
            'app-optimizer.js',
            'zion-os/**/*',
            'apps.backup/**/*',
            'zion-website/**/*',
            'automation/**/*',
            'scripts/**/*',
            'corrupted_backup/**/*',
            'recovered-branches/**/*',
            'tools/**/*',
            'ultimate/**/*',
            'pm2/**/*',
            'pm2-backups/**/*',
            'backup/**/*',
            'deployments/**/*',
            'server/**/*',
            '*.cjs',
            '*.mjs',
            '*.js',
            'advanced-automation-improvements.cjs',
            'analyze_links.cjs',
            'app-enhancement-suite.cjs',
          ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescriptEslint,
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
      '@typescript-eslint/no-explicit-any': 'warn'
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
];