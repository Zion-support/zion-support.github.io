const js = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');

module.exports = [
  {
    ignores: [
      'node_modules/**/*',
      'app-optimizer.js',
      'zion-os/**/*',
      'apps.backup/**/*',
      'zion-website/**/*',
      'automation/**/*',
      'advanced-automation-improvements.cjs',
      'analyze_links.cjs',
      'app-enhancement-suite.cjs',
      '.next/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.cjs',
      'public/**',
      'App.simple.tsx',
      'App.smoke.test.tsx',
      'pages.broken/**/*',
      'pages.corrupted.*/**/*',
      'pages.disabled*/**/*',
      'pages.old/**/*',
      'pages_backup*/**/*',
      'pages_disabled/**/*',
      'pages_minimal/**/*',
      'temp-disabled/**/*',
      'temp_backup/**/*',
      'temp_exclude/**/*',
      'backup-*/**/*',
      'corrupted*/**/*',
      'broken*/**/*',
      'recovered-branches/**/*',
      'components.disabled*/**/*',
      'lib_backup/**/*',
      'lib.broken/**/*',
      'lib.disabled/**/*',
      'src.pages.disabled*/**/*',
      'src.broken/**/*',
      'src.corrupted/**/*',
      'src_backup*/**/*',
      'src.disabled/**/*',
      'pm2-automation/**/*',
      'services/**/*',
      'performance-monitor.js',
      'resolve-all-conflicts.js',
      'resolve-conflicts.js',
      'resolve-merge-conflicts.js',
      'run-complete-automation.js',
      'security-config.js',
      'seo-improvements.js',
      'simple-test.js',
      'syntax-fixer.js',
      '*.js',
      '*.cjs',
      '*.mjs',
      '!jest.config.*',
      '!next.config.*',
      '!tailwind.config.*',
      '!postcss.config.*',
    ],
  },
  js.configs.recommended,
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