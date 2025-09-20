import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{js,jsx}'],
    ignores: [
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
      'zion.app/**',
      'recovered/**',
      'recovered-branches/**',
      'src.disabled/**',
      'src.broken/**',
      'src_backup/**',
      'src_backup_temp/**',
      'temp_conflicts/**',
      'temp_components/**',
      'temp_broken_files/**',
      'temp_disabled/**',
      'temp_essential_pages/**',
      'temp_exclude/**',
      'temp_backup/**',
      'temp_backup_build_fix/**',
      'temp_backup_runtime_fix/**',
      'components-disabled/**',
      'pages-disabled/**',
      'pages.disabled/**',
      'tests/**',
      'test/**',
      'test_build/**',
      'token/**',
      'utils/**',
      '*.backup.*',
      '*.disabled/**',
      '*.broken/**',
      '*.corrupted/**',
      '*.test.*',
      '*.spec.*'
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn'
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    ignores: [
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
      'zion.app/**',
      'recovered/**',
      'recovered-branches/**',
      'src.disabled/**',
      'src.broken/**',
      'src_backup/**',
      'src_backup_temp/**',
      'temp_conflicts/**',
      'temp_components/**',
      'temp_broken_files/**',
      'temp_disabled/**',
      'temp_essential_pages/**',
      'temp_exclude/**',
      'temp_backup/**',
      'temp_backup_build_fix/**',
      'temp_backup_runtime_fix/**',
      'components-disabled/**',
      'pages-disabled/**',
      'pages.disabled/**',
      'tests/**',
      'test/**',
      'test_build/**',
      'token/**',
      'utils/**',
      '*.backup.*',
      '*.disabled/**',
      '*.broken/**',
      '*.corrupted/**',
      '*.test.*',
      '*.spec.*'
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn'
    }
  }
];