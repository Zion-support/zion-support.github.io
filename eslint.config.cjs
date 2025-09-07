const js = require('@eslint/js');
<<<<<<< HEAD
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');
=======
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

module.exports = [
  {
    ignores: [
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      'node_modules/**/*',
      '.next/**/*',
      'out/**/*',
      'dist/**/*',
      'build/**/*',
      'automation/**/*',
      'scripts/**/*',
      '*.cjs',
      '*.mjs',
<<<<<<< HEAD
      '*.js',
      '*.report.json',
      'test_build/**/*',
      'tests/**/*',
      'pages/**/*',
      'api/**/*'
=======
=======
      'node_modules/**/*',
      'app-optimizer.js',
      'zion-os/**/*',
      'apps.backup/**/*',
      'zion-website/**/*',
      'automation/**/*',
      'advanced-automation-improvements.cjs',
      'analyze_links.cjs',
      'app-enhancement-suite.cjs',
      'advanced-app-enhancement-suite.cjs',
      'advanced-performance-optimizer.cjs',
      'ai-optimization-backups/**/*',
      'api-backup/**/*',
      'api.disabled/**/*',
      'api.disabled.temp/**/*',
      'src_backup_temp/**/*',
      'temp-backup/**/*',
      'temp_backup/**/*',
      'temp_exclude/**/*',
      'targeted-syntax-fixer.cjs',
      'ultimate-automation-suite.cjs',
      'ultimate-syntax-fixer.cjs',
      'ultimate-test-fixer.cjs',
      'test-runner.cjs',
      'analyze-missing-pages.js',
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
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
      '!jest.config.*',
      '!next.config.*',
      '!tailwind.config.*',
      '!postcss.config.*',
=======
      'node_modules/**/*,app-optimizer.js,zion-os/**/*,apps.backup/**/*,zion-website/**/*,automation/**/*,advanced-automation-improvements.cjs,analyze_links.cjs,app-enhancement-suite.cjs,]
>>>>>>> main
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
=======
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
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
    rules: {
      "no-unused-vars": "off",
      "no-console": "off",
      "prefer-const": "warn",
      "no-var": "warn",
      "no-undef": "off"
    }
<<<<<<< HEAD
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
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
        React: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
    }
  },
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
      },
    },
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  }
];