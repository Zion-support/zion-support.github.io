//eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  //Global ignores - ignore everything except src, app directories and main files
  {
    ignores: [
      '**/*',
      '!src/**',
      '!app/**',
      '!App.tsx',
      '!components/**',
      '!api/**',
      '!lib/**',
      '!hooks/**',
      '!utils/**',
      '!types/**',
      'src/pages/blog-disabled/**',
      'src/components/**',
      'src/pages/**',
      'src/content/**',
      'src/data/**',
      'src/hooks/**',
      'src/types/**',
      'src/utils/**',
      'src/config/**',
      //Ignore all disabled directories
      '_app_disabled/**',
      '_conflicted_disabled/**',
      '_pages_api_disabled/**',
      '_pages_disabled/**',
      'admin-api-disabled/**',
      'api-disabled/**',
      'api.disabled/**',
      'api.disabled.temp/**',
      'api-backup/**',
      'apps.backup/**',
      'automation_backup/**',
      'ai-optimization-backups/**',
      'automation_logs/**',
      'all-automations-reports/**',
      'accessibility-reports/**',
      'app/blog/**',
      'corrupted-files-backup/**',
      'corrupted_backup/**',
      'corrupted_files_backup_2/**',
      'content/**',
      'contracts/**',
      'components_backup/**',
      'app/services/**',
      'app/guides/**',
      'data/**',
      'data_backup/**',
      'dao/**',
      'deployments/**',
      'disabled-api/**',
      'e2e/**',
      'factories/**',
      'hooks/**',
      'lib_backup/**',
      'services/**',
      'middleware/**',
      'fix-*.jsx',
      'fix-*.ts',
      'jest.setup.*',
      'lib/integrations/**',
      'lint-target/**',
      'middleware.security.ts',
      'components/AutonomousEnterpriseBreakthroughBanner.tsx',
      'components/ConsensusIntelligenceBreakthroughBanner.tsx',
      'components/FeaturedServiceCard.tsx',
      'app/components/NewestContent2025Banner.tsx',
      'app/components/September30NewContent2025Banner.tsx',
      'app/components/UltimateBusinessIntelligence2025Banner.tsx',
      'app/components/UltimateBusinessIntelligenceShowcase2025.tsx',
      'app/contact/page.tsx',
      'app/enterprise/page.tsx',
      'app/not-found.tsx',
      'app/page-minimal.tsx',
      'app/page-optimized.tsx',
      'app/services-advertising/page.tsx',
      'fix_typescript_syntax_errors.jsx',
      'fix_utils_files.ts',
    ],
  },
  //Base JavaScript configuration (limit to app source only)
  {
    files: ['src/**/*.{js,cjs,mjs}', '**/*.{js,jsx}'],
    languageOptions: {
      globals: { ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ...js.configs.recommended,
  },
  //Simplified TypeScript configuration (non type-aware)
  {
    files: [
      'src/**/*.{ts,tsx}',
      'pages/**/*.{ts,tsx}',
      'app/**/*.{ts,tsx}',
      '**/*.{ts,tsx}',
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: { ...globals.browser },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@next/next': nextPlugin,
    },
    rules: {
      ...(reactHooks.configs.recommended?.rules || {}),
      ...(nextPlugin.configs.recommended?.rules || {}),
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
