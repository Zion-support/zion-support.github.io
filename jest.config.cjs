<<<<<<< HEAD

module.exports = {

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript'
      ]
    }]
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
    'components/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'app/**/*.{js,jsx,ts,tsx}',
    'utils/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/*.d.ts'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/out/',
    '<rootDir>/__tests__.disabled/',
    '<rootDir>/tests.disabled/',
    '<rootDir>/src_backup/',
    '<rootDir>/test.disabled/',
    '<rootDir>/plugins.disabled/',
    '<rootDir>/supabase.disabled/',
    '<rootDir>/dao/',
    '<rootDir>/pages.disabled/',
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/backup*/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/temp_*/',
    '<rootDir>/temp_exclude/',
    '<rootDir>/temp_backup/',
    '<rootDir>/temp_components/',
    '<rootDir>/temp_conflicts/',
    '<rootDir>/temp_working/',
    '<rootDir>/src.disabled/',
    '<rootDir>/components.disabled/',
    '<rootDir>/components.disabled_full/',
    '<rootDir>/contracts.disabled/',
    '<rootDir>/data.disabled/',
    '<rootDir>/api.disabled/',
    '<rootDir>/api.disabled.temp/',
    '<rootDir>/cypress_backup/',
    '<rootDir>/data_backup/',
    '<rootDir>/apps.backup/',
    '<rootDir>/automation_backup/',
    '<rootDir>/backup/',
    '<rootDir>/backups/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/corrupted-files-backup/',
    '<rootDir>/broken_files_backup/',
    '<rootDir>/zion-os/',
    '<rootDir>/zion-website/',
    '<rootDir>/zion-ai-assistant/',
    '<rootDir>/zion_academy/',
    '<rootDir>/apps/',
    '<rootDir>/pages_backup*/',
    '<rootDir>/pages.*/',
    '<rootDir>/pages-*/',
    '<rootDir>/pages_disabled*/',
    '<rootDir>/pages.disabled*/',
    '<rootDir>/pages.broken*/',
    '<rootDir>/pages.corrupted*/',
    '<rootDir>/pages.old*/',
    '<rootDir>/pages._*/',
    '<rootDir>/pages.__*/',
    '<rootDir>/backup-pages/',
    '<rootDir>/src.pages.disabled/',
    '<rootDir>/lib_backup*/',
    '<rootDir>/corrupted-files-backup*/',
    '<rootDir>/performance-reports*/',
    '<rootDir>/log-analysis-reports*/',
    '<rootDir>/link-reports*/',
    '<rootDir>/lint-target*/',
    '<rootDir>/monitoring*/',
    '<rootDir>/pm2-automation*/',
    '<rootDir>/automation/logs*/',
    '<rootDir>/automation/backup*/'
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/backup-problematic-files/',
    '<rootDir>/temp_exclude/',
    '<rootDir>/src_backup/',
    '<rootDir>/temp_backup/',
    '<rootDir>/temp_components/',
    '<rootDir>/temp_conflicts/',
    '<rootDir>/temp_working/',
    '<rootDir>/backup*/',
    '<rootDir>/corrupted_backup/',
    '<rootDir>/temp_*/',
    '<rootDir>/zion-os/',
    '<rootDir>/zion-website/',
    '<rootDir>/zion-ai-assistant/',
    '<rootDir>/zion_academy/',
    '<rootDir>/apps/',
    '<rootDir>/pages_backup*/',
    '<rootDir>/pages.*/',
    '<rootDir>/pages-*/',
    '<rootDir>/pages_disabled*/',
    '<rootDir>/pages.disabled*/',
    '<rootDir>/pages.broken*/',
    '<rootDir>/pages.corrupted*/',
    '<rootDir>/pages.old*/',
    '<rootDir>/pages._*/',
    '<rootDir>/pages.__*/',
    '<rootDir>/backup-pages/',
    '<rootDir>/src.pages.disabled/',
    '<rootDir>/lib_backup*/',
    '<rootDir>/corrupted-files-backup*/',
    '<rootDir>/performance-reports*/',
    '<rootDir>/log-analysis-reports*/',
    '<rootDir>/link-reports*/',
    '<rootDir>/lint-target*/',
    '<rootDir>/monitoring*/',
    '<rootDir>/pm2-automation*/',
    '<rootDir>/automation/logs*/',
    '<rootDir>/automation/backup*/'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  verbose: true,
  collectCoverage: false,
  testTimeout: 10000,
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  }
}

=======
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom",
    "<rootDir>/src/test/setup.ts"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg)$": "<rootDir>/src/__mocks__/fileMock.js"
  },
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}",
    "<rootDir>/tests/**/*.{test,spec}.{js,jsx,ts,tsx}"
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/index.tsx",
    "!src/reportWebVitals.ts"
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/build/"
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(.*\\.mjs$))"
  ]
};
>>>>>>> origin/chore/fix-automation-and-build
