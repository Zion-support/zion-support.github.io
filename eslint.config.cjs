const js = require('@eslint/js');

module.exports = [

  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
      'no-undef': 'off',
      'no-unused-expressions': 'warn',
      'no-var': 'warn',
      'prefer-arrow-callback': 'warn',
      'prefer-template': 'warn'
    },

    languageOptions: {
      ecmaVersion: 'latest',
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
        React: 'readonly',
        JSX: 'readonly'
      }
    },

    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'backup*/**',
      'temp*/**',
      'corrupted*/**',
      '**/*.backup.*',
      '**/*.temp.*',
      '**/*.conflict.*',
      '**/generated/**',
      '**/coverage/**',
      '**/*.min.js',
      '**/*.bundle.js'
    ]
  }
];

