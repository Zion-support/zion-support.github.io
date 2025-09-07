const js = require('@eslint/js');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');

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