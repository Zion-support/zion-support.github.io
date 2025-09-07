const js = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');

module.exports = [
  {
    ignores: [
<<<<<<< HEAD
      'node_modules/**/*',
      '.next/**/*',
      'out/**/*',
      'dist/**/*',
      'build/**/*',
      'automation/**/*',
      'scripts/**/*',
      '*.cjs',
      '*.mjs',
      '*.js',
      '*.report.json',
      'test_build/**/*',
      'tests/**/*',
      'pages/**/*',
      'api/**/*'
=======
<<<<<<< HEAD
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
      'api.disabled.temp/**/*',
      // Temporary and backup directories to ignore
      'temp_backup/**/*',
      'temp_components/**/*',
      'apps.backup/**/*',
=======
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'public/**',
      'pages-disabled/**',
      'pages.disabled/**',
      'components.disabled/**',
      'api.disabled/**',
      'api-disabled/**',
      'backup/**',
      'pages.broken/**',
      'pages.corrupted.*/**/*',
      'pages.disabled*/**/*',
      'pages.old/**',
      'pages_backup*/**/*',
      'pages_disabled/**',
      'pages_minimal/**',
      'temp-disabled/**',
      'temp_backup/**',
      'temp_exclude/**',
      'backup-*/**/*',
      'corrupted*/**/*',
      'broken*/**/*',
      'recovered-branches/**',
      'components.disabled*/**/*',
      'lib_backup/**',
      'lib.broken/**',
      'lib.disabled/**',
      'src.pages.disabled*/**/*',
      'src.broken/**',
      'src.corrupted/**',
      'src_backup*/**/*',
      'src.disabled/**',
      'pm2-automation/**',
      // other nested projects
      'zion-os/**',
      'zion-website/**',
      'zion-ai-assistant/**',
      'zion/**',
      'zion_academy/**',
      'zion-film/**',
      'apps/**',
>>>>>>> merged-prs-20250907-203621
      'apps.backup/**',
      '*_backup/**/*',
      '*-backup/**/*',
      '*-backups/**/*',
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
      // Ignore top-level configuration scripts to avoid parsing noise
      '*.cjs',
<<<<<<< HEAD
      '*.mjs',
=======
      '*.js',
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      '!jest.config.*',
      '!next.config.*',
      '!tailwind.config.*',
      '!postcss.config.*',
<<<<<<< HEAD
      'node_modules/**/*,app-optimizer.js,zion-os/**/*,apps.backup/**/*,zion-website/**/*,automation/**/*,advanced-automation-improvements.cjs,analyze_links.cjs,app-enhancement-suite.cjs,]
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
    rules: {
      "no-unused-vars": "off",
      "no-console": "off",
      "prefer-const": "warn",
      "no-var": "warn",
      "no-undef": "off"
=======
<<<<<<< HEAD
=======
      'node_modules/**/*,app-optimizer.js,zion-os/**/*,apps.backup/**/*,zion-website/**/*,automation/**/*,advanced-automation-improvements.cjs,analyze_links.cjs,app-enhancement-suite.cjs,]
>>>>>>> main
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
=======
>>>>>>> merged-prs-20250907-203621
    ],
  },
  {
    ignores: [
      // Ignore entire src tree due to known corruption; app/ is the source of truth
      'src/**/*',
      'src.pages.disabled/**/*',
      'src.broken/**/*',
      'src.corrupted/**/*',
      'src-disabled/**/*',
      'src.disabled/**/*',
      'recovered-branches/**/*',
      'server/**/*',
      'services/**/*',
      'solutions.disabled/**/*',
      'pages_backup_*/**/*',
      'pages_backup_before_cleanup/**/*',
      'pages_backup_conflict/**/*',
      'pages_backup_conflicts/**/*',
      'pages_backup_*/**/*',
      'pages.broken/**/*',
      'pages.corrupted.*/*',
      'pages.disabled_auto/**/*',
      'pages.disabled_full/**/*',
      'pages-disabled/**/*',
      'pages-quarantine/**/*',
      'pages._archive_corrupted/**/*',
      'pages.bak/**/*',
      'pages.blog.disabled/**/*',
      'components/**/*',
      'data/**/*',
      'hooks/**/*',
      'lib/**/*',
      'deployments/**/*',
      'netlify/**/*',
      'contracts.disabled/**/*',
      'cypress*/**/*',
      'pages-disabled-2/**/*',
      'pages.old/**/*',
      'pages_api.disabled/**/*',
      'pages_disabled/**/*',
      'pages_minimal/**/*',
      'providers/**/*',
      'protocol/**/*',
      'public/**/*',
      'pm2-automation/**/*',
      'playwright.config.ts',
      'services-broken.tsx',
      'supabase/functions/**/*',
      'vite.config.ts',
      'vite.config-backup.ts'
    ]
  },
  {
    ignores: [
      'src.disabled/**/*'
    ]
  },
  {
    ignores: [
      'src-disabled/**/*'
    ]
  },
  {
    files: ['app/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescriptEslint,
    },
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      ecmaVersion: 2022,
      sourceType: 'module',
<<<<<<< HEAD
      parserOptions: { ecmaFeatures: { jsx: true } },
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
    files: ['app/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
=======
>>>>>>> merged-prs-20250907-203621
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
=======
    },
>>>>>>> merged-prs-20250907-203621
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2022,
      sourceType: 'module',
<<<<<<< HEAD
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
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
=======
<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
<<<<<<< HEAD
        jest: 'readonly',
      },
  }
=======
<<<<<<< HEAD
        jest: 'readonly'}}}
=======
        jest: 'readonly',
=======
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        window: 'readonly',
        document: 'readonly',
        HTMLElement: 'readonly',
        HTMLButtonElement: 'readonly',
        ScrollToOptions: 'readonly',
        fetch: 'readonly',
        console: 'readonly',
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
    }
  }
=======
    },
  },
  {
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { '@typescript-eslint': tseslint },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
    },
  },
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
];