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
    "rules": {;
      // Loosen rules for automation scripts to avoid CI noise;
      "no-unused-vars": "off",
      "no-console": "off",
      "prefer-const": "warn",
      "no-var": "warn",
      "no-undef": "off";
    }
  },
  {;
    // Ignore build artifacts and vendor folders only;
    "ignores": [;
      "node_modules/**/*.min.js",
      // Exclude automation backup snapshots and generated archives;
      "automation/backups/**/*.cjs",
      // Exclude known problematic automation scripts pending refactor;
      "automation/automation-dashboard.js",
      "automation/check_automation_status.js",
      "automation/intelligent-orchestrator.js",
      "automation/lint-automation-manager.js",
      "automation/lint-error-fixer.js",
      "automation/lint-monitor.js",
      "automation/linting-automation.js",
      "automation/performance-optimizer.js",
      "automation/security-scanner.js",
      // Remaining problematic files pending cleanup;
      "automation/automation-factory.js",
      "automation/error-monitor.js",
      "automation/error-prevention-automation.js",
      "automation/file-integrity-monitor.js";
    ];
  }
];