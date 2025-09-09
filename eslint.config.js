import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
// import eslintConfigNext from 'eslint-config-next';

const typescriptParser = tseslint.parser;
const typescript = tseslint.plugin;
const react = pluginReact;
const reactHooks = pluginReactHooks;

export default [
  { ...js.configs.recommended, files: ['app/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}', 'src/**/*.{js,jsx,ts,tsx}'] },
  {
    ignores: [
      "node_modules/**", 
      "dist/**", 
      "out/**", 
      "coverage/**", 
      "build/**", 
      ".next/**", 
      "public/build/**",
      "api/**",
      "apps.backup/**",
      "backup-merge-conflicts/**",
      "clean-build/**",
      "cache/**",
      "corrupted_backup/**",
      "*.cjs",
      "*.js",
      "api-backup/**",
      "advanced-*.js",
      "aggressive-*.js",
      "analyze-*.js",
      "automation/**",
      "backup/**",
      "build-reports/**",
      "ci-cd-reports/**",
      "comprehensive-*.js",
      "conflict-*.js",
      "create-*.js",
      "debug-*.js",
      "enhance-*.js",
      "fix-*.js",
      "improve-*.js",
      "optimize-*.js",
      "test-*.js",
      "*.report.json",
      "*.log",
      "*.md",
      "*.txt",
      "*.tsv",
      "*.html",
      "*.json"
    ],
  },

  // eslintConfigNext,

  // TypeScript configuration for main app files
  {
    files: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}', 'src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
      'react-hooks': reactHooks,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-debugger': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'public/**',
      'temp_conflicts/**',
      'temp_exclude/**',
      '__tests__/**',
      'tests/**',
      'apps/**',
      'utils/**',
      'types/**',
      'zion-*/**',
      'zion_os/**',
      'zion/**',
      '*.cjs',
      '*.js',
      'api-backup/**',
      'advanced-*.js',
      'aggressive-*.js',
      'analyze-*.js',
      'automation/**',
      'backup/**',
      'build-reports/**',
      'ci-cd-reports/**',
      'comprehensive-*.js',
      'conflict-*.js',
      'create-*.js',
      'debug-*.js',
      'enhance-*.js',
      'fix-*.js',
      'improve-*.js',
      'optimize-*.js',
      'test-*.js',
      '*.report.json',
      '*.log',
      '*.md',
      '*.txt',
      '*.tsv',
      '*.html',
      '*.json'
    ],
  },
];
