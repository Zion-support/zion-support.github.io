const js = require('@eslint/js');

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
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
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
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
    }
  }
];