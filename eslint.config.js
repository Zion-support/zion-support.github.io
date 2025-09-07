const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn'
    }
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      '*.config.js',
      '*.config.cjs',
      'public/**',
      'src/**',
      'app/**',
      'App.simple.tsx',
      'App.smoke.test.tsx',
      'App.tsx',
      '*.cjs',
      '*.js',
      '*.tsx',
      '*.ts',
      'scripts/**',
      'src.broken/**',
      'src.disabled/**',
      'src_backup_temp/**',
      'temp_exclude/**',
      'test-next/**',
      'test_build/**',
      'utils/**',
      'zion_academy/**',
      'backup/**',
      'backups/**',
      'backup-problematic-files/**',
      'automation/**',
      'automation_backup/**',
      'pm2-automation/**',
      'deployment/**',
      'deployments/**',
      'recovered-branches/**',
      'data_backup/**',
      'lib.broken/**',
      'middleware/**',
      'netlify/**',
      'dao/**',
      'components/**',
      'fix-merge-conflicts.mjs',
      'api-backup/**',
      'api/**',
      'apps.backup/**',
      'backup-merge-conflicts/**'
    ]
  }
];