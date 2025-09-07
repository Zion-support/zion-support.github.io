const js = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');

module.exports = [
  {
    ignores: [
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
      'apps.backup/**',
      // tests and generated
      '__tests__/**',
      'tests/**',
      'tests.disabled/**',
      '*.config.js',
      '*.config.cjs',
      '*.mjs',
      '*.cjs',
      '*.js',
      '!jest.config.*',
      '!next.config.*',
      '!tailwind.config.*',
      '!postcss.config.*',
    ],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
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
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        window: 'readonly',
        document: 'readonly',
        HTMLElement: 'readonly',
        HTMLButtonElement: 'readonly',
        ScrollToOptions: 'readonly',
        fetch: 'readonly',
        console: 'readonly',
      },
    },
    plugins: { '@typescript-eslint': tseslint },
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
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { '@typescript-eslint': tseslint },
    rules: {
      "no-unused-vars": "off",
      "no-console": "off",
      "prefer-const": "warn",
      "no-var": "warn",
      "no-undef": "off"
    }
  }
];