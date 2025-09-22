module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/__tests__/**/*.test.{js,jsx,ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {},
  testPathIgnorePatterns: [
    '/node_modules/',
    '/components.disabled/',
    '/components.disabled_full/',
    '/backup/',
    '/backups/',
    '/backup-merge-conflicts/',
    '/backup-problematic-files/',
    '/recovered-branches/',
    '/pages.disabled/',
    '/pages_backup_before_cleanup/',
    '/pages.broken/',
    '/pages.corrupted',
    '/temp_exclude/',
    '/ts_files_backup/'
  ],
};