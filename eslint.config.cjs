const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const nextPlugin = require('@next/eslint-plugin-next');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const path = require('path');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...compat.extends('next/core-web-vitals'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'next': nextPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': ['warn', { 
        ignoreRestArgs: true,
        fixToUnknown: false 
      }],
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'no-undef': 'off',
    },
  },
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'build/',
      'dist/',
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
      'src/pages/blog-disabled/**',
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
];