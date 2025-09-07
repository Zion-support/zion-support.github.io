const js = require('@eslint/js);
const tseslint = require(@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser);

module.exports = [
  {
    ignores: [
<<<<<<< HEAD

      node_modules/**/*',
      '.next/**/*,
      out/**/*',
      'dist/**/*,
      build/**/*',
      'automation/**/*,
      scripts/**/*',
      '*.cjs,
      *.mjs',

      '!jest.config.*,
      !next.config.*',
      '!tailwind.config.*,
      !postcss.config.*',
=======
      'node_modules/**/*,app-optimizer.js,zion-os/**/*,apps.backup/**/*,zion-website/**/*,automation/**/*,advanced-automation-improvements.cjs,analyze_links.cjs,app-enhancement-suite.cjs]
>>>>>>> main

    ]},
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
      'node_modules/**/*',
      'app-optimizer.js',
      'zion-os/**/*',
      'apps.backup/**/*',
      'zion-website/**/*',
      'automation/**/*',
<<<<<<< HEAD
      'pages-disabled/**/*',
      'pages.disabled/**/*',
      'components.disabled/**/*',
      'api.disabled/**/*',
      'api-disabled/**/*',
      'backup/**/*',
      'advanced-automation-improvements.cjs',
      'analyze_links.cjs',
      'app-enhancement-suite.cjs'
=======
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
=======
      'node_modules/**/*,app-optimizer.js,zion-os/**/*,apps.backup/**/*,zion-website/**/*,automation/**/*,advanced-automation-improvements.cjs,analyze_links.cjs,app-enhancement-suite.cjs,]
>>>>>>> main
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
    ],
  },
>>>>>>> origin/chore/fix-lint-and-merge
  js.configs.recommended,
  {
    files: [**/*.{js,jsx}],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        window: readonly,
        document: 'readonly',
        console: readonly,
        process: 'readonly',
        Buffer: readonly,
        global: 'readonly',
        __dirname: readonly,
        __filename: 'readonly',
        module: readonly,
        require: 'readonly',
        exports: readonly}},
    rules: {
<<<<<<< HEAD
      "no-unused-vars: off",
      "no-console: off",
      "prefer-const: warn",
      "no-var: warn",
      "no-undef: off"
=======
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
    }
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
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
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
>>>>>>> origin/chore/fix-lint-and-merge
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2022,
      sourceType: module,
      parserOptions: {
        ecmaFeatures: {
<<<<<<< HEAD
          jsx: true}},
=======
          jsx: true
        }
      },
>>>>>>> origin/chore/fix-lint-and-merge
      globals: {
        window: 'readonly',
        document: readonly,
        console: 'readonly',
        process: readonly,
        Buffer: 'readonly',
        global: readonly,
        __dirname: 'readonly',
        __filename: readonly,
        module: 'readonly',
        require: readonly,
        exports: 'readonly',
<<<<<<< HEAD
        React: readonly}},
=======
      },
    },
>>>>>>> origin/chore/fix-lint-and-merge
    plugins: {
      '@typescript-eslint': tseslint},
    rules: {
      no-unused-vars: 'off',
      @typescript-eslint/no-unused-vars: 'warn',
      no-console: 'warn',
      prefer-const: 'warn'}
  },
  {
    files: [**/*.test.{js,jsx,ts,tsx}, '**/*.spec.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
<<<<<<< HEAD
        describe: readonly,
=======
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
        describe: 'readonly',
>>>>>>> origin/chore/fix-lint-and-merge
        it: 'readonly',
        test: readonly,
        expect: 'readonly',
        beforeEach: readonly,
        afterEach: 'readonly',
        beforeAll: readonly,
        afterAll: 'readonly',
<<<<<<< HEAD
        jest: 'readonly'}}}
=======
        jest: 'readonly',
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
  }
>>>>>>> origin/chore/fix-lint-and-merge
];