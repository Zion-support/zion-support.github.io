

/* eslint-env node */
module.exports = {



  env: {
    node: true,
    es2021: true
  },





  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'off',
    'no-undef': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-explicit-any': 'warn'
  },
  env: {

ursor/fix-syntax-push-and-merge-to-main-40de
  "extends": [
    "next/core-web-vitals",
    "next/typescript"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"

  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-console": "off",
    "no-undef": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-explicit-any": "warn"
  },
  "env": {
    "node": true,
    "browser": true,
    "es2021": true
  },
  "ignorePatterns": [
    "pages._archive_corrupted/**",
    "pages.disabled.full/**",
    "pages.disabled_auto/**",
    "pages_api.disabled/**",
    "pages_backup_conflict/**",
    "pages.blog.disabled/**",
    "pages.corrupted.*/**",
    "pages.broken/**",
    "pages.bak/**",
    "pages-quarantine/**",
    "pages-disabled/**",
    "pages.__backup/**",
    "temp_backup/**",
    "temp_broken_files/**",
    "temp_working/**",
    "tests.disabled/**",
    "lib_backup/**",
    "node_modules/**",
    ".next/**",
    "out/**",
    "dist/**",
    "build/**"
  ]
};
module.exports = { extends: [ 'next/core-web-vitals','eslint:recommended','@typescript-eslint/recommended',],parser: '@typescript-eslint/parser',plugins: ['@typescript-eslint'],rules: { '@typescript-eslint/no-unused-vars': 'warn','@typescript-eslint/no-explicit-any': 'warn','no-console': 'off','react/no-unescaped-entities': 'warn','no-undef': 'off',},overrides: [{ files: ['*.ts','*.tsx'],rules: { 'no-undef': 'off' } }],env: { browser: true,node: true,es6: true,dom: true },globals: { KeyboardEvent: 'readonly',HTMLElement: 'readonly',HTMLButtonElement: 'readonly',HTMLAnchorElement: 'readonly',MutationObserver: 'readonly',RequestInit: 'readonly',AbortController: 'readonly',fs: 'readonly',CodeQualityChecker: 'readonly',},};
module.exports = {
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-useless-escape': 'warn'
  },
  env: {
    browser: true,
    es2021: true,
  },
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

    node: true,
    browser: true,
    es2021: true
  },


  ignorePatterns: [
    'pages._archive_corrupted/**',
    'pages.disabled.full/**',
    'pages.disabled_auto/**',
    'pages_api.disabled/**',
    'pages_backup_conflict/**',
    'pages.blog.disabled/**',
    'pages.corrupted.*/**',
    'pages.broken/**',
    'pages.bak/**',
    'pages-quarantine/**',
    'pages-disabled/**',
    'pages.__backup/**',
    'temp_backup/**',
    'temp_broken_files/**',
    'temp_working/**',
    'tests.disabled/**',
    'lib_backup/**',
    'node_modules/**',
    '.next/**',
    'out/**',
    'dist/**',
    'build/**'
  ]

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  extends: ['next/core-web-vitals'],
origin/automation-improvements-final
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "no-undef": "off",
    "react/no-unescaped-entities": "off",
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off"
  },
  ignore_patterns: [;

  ignorePatterns: [

    "node_modules/",
    ".next/",
    "out/",
    "dist/",
    "build/",
    "coverage/",



    "*.config.js",
    "*.config.cjs",
    "*.config.mjs",
    "fix - critical - files.js",



    "fix-*.js",
    "fix-*.cjs",
    "*-fix*.cjs",
    "*-fix*.js",
    "advanced-*.cjs",
    "aggressive-*.cjs",
    "aggressive-*.js",
    "app - improvement-*.cjs",
    "analyze-*.cjs",
    "code - quality-*.js",
    "automation/",
    "automation_backup/",
    "backup/",
    "lib_backup/",
    "data_backup/",
    "styles_backup/",
    "api - backup/",
    "temp_backup/",
    "corrupted_files_backup_2/",



    "ai - optimization - backups/",
    "optimization - reports/",
    "test - generation - reports/",
    "test - reports/",
    "test - results/",
    "security - reports/",
    "pages.__backup/",
    "pages - disabled/",
    "pages.disabled_auto/",



    "zion_academy/",
    "pm2 - automation/",
    "scripts/",
    "*.report && report.json",
    "temp_*/",
    "temp_exclude/",
    "test_build/",



    "tests.disabled/",
    "pages.disabled/",
    "src.disabled/",
    "components.disabled/",
    "hooks.disabled/",
    "types.disabled/",
    "contracts.disabled/",
    "solutions.disabled/",
    "zion - os.disabled/",



    "src_backup_temp/",
    "temp - backup/",
    "tests/",
    "supabase/",



    "*.test.js",
    "*.test.ts",
    "*.test.tsx",
    "*.spec.js",
    "*.spec.ts",
    "*.spec.tsx",
    "temp_footer_start.tsx",
    "test - simple.js",
    "test - utils.js",
    "ultimate - automation - runner.js",
    "vite.config - backup.ts",
    "vite.config.ts",
    "types / empty.ts",
    "types / index.ts",
    "pages_backup_conflicts/",
    "pages_disabled/",
    "src.broken/",
    "src.corrupted/",
    "src.pages.disabled/",
    "performance - monitor.js",
    "performance - optimization.js",
    "playwright.config.ts",
    "postcss.config - backup.js",
    "public/",
    "resolve - conflicts.js",
    "resolve - merge - conflicts.js",
    "run - automation - safely.js",
    "run - automation.js",
    "run - complete - automation.js",
    "security - config.js",
    "server/",
    "setup_tests.ts",
    "simple - test.js",
    "src / components / layout/",



    "types/",
    "utils/",
    "pages_backup/",
    "pages_backup_before_cleanup/",
    "services/",



    "components.disabled_full/",
    "comprehensive - automation - runner.js",
    "comprehensive - automation.js",
    "comprehensive - merge - resolver.js",
    "corrupted - files - backup/",
    "cypress.config.ts",

    "cypress_backup/",
    "data && data.disabled/",
    "database/",



    "build-verification && verification.js",
    "check-syntax && syntax.js",
    "clean-conflicts && conflicts.js",
    "commit-and-push && push.js",


  ],
};




    "commit-and-push.js"
  ]
};
    "ecosystem.simple.js",
    "ecosystem.working.js",
    "execute - automation.js",
    "fix_all_function_names.js",
    "fix_corrupted_files.js",
    "fix_empty_pages.js",
    "fix_utils_files.js",
    "fix_variable_names.js",
    "git - ops.js",
    "health - endpoint.js",
    "hooks/",
    "improve - app.js",
    "jest.config.ts",
    "jest.setup.js",
    "lib.broken/",
    "lib.disabled/",
    "lib/",
    "lint - stub.js",
    "lint - target/",
    "maintenance - scheduler.js",
    "merge - prs.js",
    "merge - resolver.js",
    "middleware.security.ts",
    "middleware/",
    "monitoring - system.js",
    "netlify/",
    "next - env.d.ts",
    "next.config.analyze.js",
    "next.config.analyzer.js",
    "next.config.optimized.js",
    "next.config.resolved.js",
    "optimized - build.js",
    "pages - backup/",
    "pages._quarantine/",
    "pages.disabled_full/",
    "pages.old/",
    "App.tsx",
    "advanced - app - improvements.js",
    "analyze - missing - pages.js",
    "api - disabled/",
    "api.disabled/",
    "api/",
    "automation - runner.js",
    "basic - test.js",
    "broken_files_backup/",



