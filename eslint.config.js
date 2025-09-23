// Minimal flat config to avoid crashes; we only define ignores.
export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'public/**',
      'automation/**',
      'backups/**',
      'backup/**',
      'backup-merge-conflicts/**',
      'apps.backup/**',
      'recovered-branches/**',
      'server/**',
      'zion-*/**',
      'src_backup*/**',
      'pages*/**',
      'tests*/**',
      'test*/**',
      'e2e/**',
      'temp*/**'
    ]
  }
];