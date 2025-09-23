import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        exports: 'readonly',
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
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      '**/.next/**',
      'out/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.ts',
      'scripts/**',
      'automation/**',
      'public/**',
      'netlify/**',
      'ecosystem*.cjs',
      '**/*.cjs',
      'zion-os.disabled/**',
      'zion-website/.next/**',
      'zion-os/.next/**',
      'zion.app/**',
      'zion_academy/**',
      'zion-website/**',
      'zion-ai-assistant/**',
      'zion-os/**',
      '**/static/**',
      '**/*.min.js',
      'ts_files_backup/**',
      'src_backup_temp/**',
      'src_backup/**',
      'src.pages.disabled/**',
      'src-corrupted/**',
      'src.corrupted/**',
      'recovered-branches/**',
      'solutions/**',
      'remote/**',
      'sdk/**',
      '*.jsx',
      '*.js',
      'temp_backup/**',
      'temp_exclude/**',
      'backups/**',
      'backup/**',
      'backup-merge-conflicts/**',
      'backup-problematic-files/**',
      'apps.backup/**',
      'pages.disabled/**',
      'pages.bak/**',
      'pages_backup_before_cleanup/**',
      'zion-film/**',
      'src.broken/**',
      'src.disabled/**',
      'src/**',
      'tests.disabled/**',
      'server/**',
      'plugins/**',
      'components.disabled/**',
      'components.disabled_full/**',
      'tests/**',
      'e2e/**',
      'test_build/**',
      'test*.jsx',
      'test-*.js',
      'start-*.js',
      'verify-and-complete-merges.js',
      'ultimate-*.js',
      'syntax-fixer.js',
      'structural-fix.js',
      'workbox-config.js',
      'types/**',
      'utils/**'
    ]
  }
];