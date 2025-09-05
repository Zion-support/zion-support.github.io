export default {
  extends: [
    'next/core-web-vitals'
    'next/typescript'
  ]
  parser: '@typescript-eslint/parser'
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
    ecmaVersion: 12
    sourceType: 'module'
  }
  plugins: ['react', '@typescript-eslint']
  rules: {
    "react-hooks/rules-of-hooks": "error"
    "react-hooks/exhaustive-deps": "warn"
    "no-unused-vars": "off"
    "@typescript-eslint/no-unused-vars": "warn"
    "no-console": "off"
    "no-undef": "off"
  }
  env: {
    node: true
    browser: true
    es2021: true
  }
  ignorePatterns: [
    'node_modules/'
    '.next/'
    'out/'
    'dist/'
    'pages._archive_corrupted/'
    'pages.disabled/'
    'pages.disabled.full/'
    'pages.disabled_auto/'
    'pages_api.disabled/'
    'pages_backup_conflict/'
    'temp_backup/'
    'temp_broken_files/'
    'temp_working/'
    'tests.disabled/'
    'zion-os.disabled/'
    '*.backup'
    '*.disabled'
    '*.corrupted'
    '*.broken'
    'performance-optimizations.js'
    'seo-improvements.js'
    'services-broken.tsx'
    'test-automation.js'
    'utils/testing-system.tsx'
    'utils/serviceFinder.ts'
    'utils/validation.ts'
    'utils/supabase/client.ts'
    'utils/next-link-shim.tsx'
    'utils/messageChannelHandler.ts'
    'utils/api.ts'
  ]
};