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
      'automation/**/*',
      'scripts/**/*',
      // Heavily corrupted/backup directories that should not be linted
      'src_backup/**/*',
      'backup/**/*',
      'backup-merge-conflicts/**/*',
      'backup-problematic-files/**/*',
      'broken_files_backup/**/*',
      'corrupted_backup/**/*',
      '_conflicted_disabled/**/*',
      'apps.backup/**/*',
      'components-disabled/**/*',
      'components.disabled/**/*',
      'components.disabled_full/**/*',
      'api-backup/**/*',
      'api-disabled/**/*',
      'api.disabled/**/*',
      'api.disabled.temp/**/*',
      // Generated reports and logs
      '**/*.report.json',
      '**/*report.json',
      'automation_logs/**/*',
      'automation-reports/**/*',
      'enhancement-reports/**/*',
      'health-reports/**/*',
      'error-reports/**/*',
      // Large utility folder known to contain many experimental files
      'utils/**/*',
      '*.cjs',
      '*.mjs',
      '*.js',
      '*.report.json',
      'test_build/**/*',
      'tests/**/*',
      'pages/**/*',
      'api/**/*'
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
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
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
    rules: {
      "no-unused-vars": "off",
      "no-console": "off",
      "prefer-const": "warn",
      "no-var": "warn",
      "no-undef": "off"
    }
  }
];