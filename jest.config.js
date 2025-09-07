
<<<<<<< HEAD
=======

import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/backup-problematic-files/',
    '/backup-merge-conflicts/',
    '/broken_files_backup/',
    '/corrupted-files-backup/',
    '/pages.broken/',
    '/pages.corrupted*/',
    '/pages.disabled*/',
    '/pages_disabled/',
    '/pages_minimal/',
    '/pages.old/',
    '/pages._archive_corrupted/',
    '/pages._quarantine/',
    '/pages.bak/',
    '/pages-quarantine/',
    '/components.broken/',
    '/components.disabled*/',
    '/components-disabled/',
    '/data_backup/',
    '/lib.broken/',
    '/lib.disabled/',
    '/lib_backup/',
    '/deployments/',
    '/hooks/',
    '/middleware/',
    '/lint-target/',
    '/automation_backup/',
    '/ai-optimization-backups/',
    '/performance-reports/',
    '/log-analysis-reports/',
    '/link-reports/',
    '/monitoring/',
    '/pm2-automation/',
    '/scripts/',
    '/utils/',
    '/types/',
    '/tests/',
    '/src_backup/',
    '/src_backup_temp/',
    '/temp-backup/',
    '/temp-disabled/',
    '/temp_backup/',
    '/temp_exclude/',
    '/src.disabled/',
    '/corrupted_backup/',
    '/backup-problematic-files/',
    '/recovered-branches/',
    '/zion-os/',
    '/zion-website/',
    '/zion_academy/',
    '/zion-film/',
    '/test-next/',
    '/test-reports/',
    '/test-results/',
    '/apps.backup/',
    '/cypress_backup/',
    '/data/',
    '/corrupted-files-backup/',
    '/pages-backup/',
    '/components/api/',
    '/components/apps/',
    '/components/auth/',
    '/components/automation/',
    '/components/automations/',
    '/components/backgrounds/',
    '/components/browserstack.config.ts',
    '/components-disabled/',
    '/components.disabled/',
    '/components.disabled_full/',
  ],
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'app/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig)
>>>>>>> origin/chore/fix-lint-and-merge
