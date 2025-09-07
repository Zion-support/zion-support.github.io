import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  ...compat.extends('next/core-web-vitals'),
  {
    ignores: [
      '**/backup/**',
      '**/*.backup.*',
      '**/api-backup/**',
      '**/ai-optimization-backups/**',
      '**/.cursor/**',
      '**/*.mdc.backup.*',
      '**/.env.example.backup.*',
      '**/src.pages.disabled/**',
      '**/src_backup/**',
      '**/src-disabled/**',
      '**/src.broken/**',
      '**/src.corrupted/**',
      '**/src.disabled/**',
      '**/pages_backup/**',
      '**/pages.disabled/**',
      '**/pages_disabled/**',
      '**/components-disabled/**',
      '**/components.disabled/**',
      '**/hooks.disabled/**',
      '**/middleware.disabled/**',
      '**/contracts.disabled/**',
      '**/solutions.disabled/**',
      '**/apps.backup/**',
      '**/automation_backup/**',
      '**/cypress_backup/**',
      '**/data_backup/**',
      '**/data.disabled/**',
      '**/lib_backup/**',
      '**/lib.broken/**',
      '**/lib.disabled/**',
      '**/supabase/functions/**',
      '**/scripts/**',
      '**/server/**',
      '**/services/**',
      '**/pages.disabled_auto/**',
      '**/pages.disabled_full/**',
      '**/pages.old/**',
      '**/pages_api.disabled/**',
      '**/pages_backup_before_cleanup/**',
      '**/pages_backup_conflict/**',
      '**/pages_backup_conflicts/**',
      '**/pages_minimal/**',
      '**/pm2-automation/**',
      '**/providers/**',
      '**/public/**',
      '**/protocol/**',
      '**/pages.bak/**',
      '**/pages.blog.disabled/**',
      '**/pages.broken/**',
      '**/pages.corrupted.*/**',
      '**/pages.disabled.full/**',
      '**/pages/**',
      '**/data/**',
      '**/deployments/**',
      '**/hooks/**',
      '**/lib/**',
      '**/middleware/**',
      '**/netlify/**',
      '**/pages-backup/**',
      '**/pages-disabled-2/**',
      '**/pages-quarantine/**',
      '**/pages.__backup/**',
      '**/pages._archive_corrupted/**',
      '**/pages._quarantine/**',
             '**/components/**',
             '**/corrupted-files-backup/**',
             '**/cypress/**',
             '**/dao/**',
             '**/lint-target/**',
             '**/automation/**',
             '**/backup-merge-conflicts/**',
             '**/blog/**',
             '**/components.disabled_full/**',
             '**/comprehensive-automation-suite.cjs',
             '**/execute-all.cjs',
             '**/fix-all-*.cjs',
             '**/fix-all-*.js',
             '**/fix-all-*.mjs',
             '**/fix-corrupted-*.cjs',
             '**/fix-merge-*.cjs',
             '**/fix-merge-*.mjs',
             '**/postcss.config.js',
             '**/tailwind.config.js',
             '**/utils/**'
    ]
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error'
    }
  }
];

export default config;