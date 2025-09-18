import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/zion-os.disabled/**',
      '**/zion-os/**',
      '**/zion-website/**',
      '**/zion.app/**',
      '**/zion_academy/**',
      '**/automation/**',
      '**/backup/**',
      '**/backups/**',
      '**/cache/**',
      '**/artifacts/**',
      '**/dao/**',
      '**/token/**',
      '**/server/**',
      '**/zion-ai-assistant/**',
      '**/*.min.js',
      '**/*.bundle.js',
      '**/prerender-manifest.js',
      '**/webpack-runtime.js',
      '**/route.js',
      '**/analytics.js',
      '**/feedback.js',
      '**/integration.js',
      '**/*.cjs',
      '**/*.config.js',
      '**/.eslintrc.cjs'
    ],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];