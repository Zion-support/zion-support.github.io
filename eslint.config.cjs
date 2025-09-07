const js = require('@eslint/js);
const tseslint = require(@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser);

module.exports = [
  {
    ignores: [

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
      "no-unused-vars: off",
      "no-console: off",
      "prefer-const: warn",
      "no-var: warn",
      "no-undef: off"
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
          jsx: true}},
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
        React: readonly}},
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
      globals: {
        describe: readonly,
        it: 'readonly',
        test: readonly,
        expect: 'readonly',
        beforeEach: readonly,
        afterEach: 'readonly',
        beforeAll: readonly,
        afterAll: 'readonly',
        jest: 'readonly'}}}
];