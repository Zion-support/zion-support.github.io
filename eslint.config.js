// Minimal ESLint flat config for ESLint v9+. Ignore large non-app trees and lint only app/.
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
      'apps.backup/**',
      'backup/**',
      'backups/**',
      'backup-merge-conflicts/**',
      'backup-problematic-files/**',
      'recovered-branches/**',
      'temp*/**',
      'temp_*/**',
      'temp-*/**',
      'temp_backup/**',
      'ts_files_backup/**',
      'src_backup*/**',
      'pages*/**',
      'components.disabled*/**',
      'zion-*/**',
      'server/**',
      'services/**',
      'solutions/**',
      'supabase/**',
      '**/*.min.js',
      '**/*.cjs'
    ]
  },
  {
    files: ['app/**/*.{js,jsx,ts,tsx}']
  }
];