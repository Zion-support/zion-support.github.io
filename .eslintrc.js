<<<<<<< HEAD
/* eslint-env node */

module.exports = {

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
/* eslint-env node */
/* eslint-disable no-undef */
module.exports = {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  env: {
    node: true,
    es2021: true
  },
<<<<<<< HEAD



=======
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
origin/cursor/integrate-build-improve-and-re-verify-c7b5
/* eslint-env node */
module.exports = {
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended'
  ],
ursor/fix-syntax-push-and-merge-to-main-40de
export default {
  extends: ['next/core-web-vitals', 'next/typescript'],
ursor/add-new-services-and-deploy-updates-0462
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
=======
  globals: {
    module: 'readonly',
    require: 'readonly',
    exports: 'readonly',
    __dirname: 'readonly',
    __filename: 'readonly',
    global: 'readonly',
    Buffer: 'readonly',
    console: 'readonly'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },
  extends: ['next/core-web-vitals'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
<<<<<<< HEAD
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'off',
    'no-undef': 'off',

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
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
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
ursor/integrate-build-improve-and-re-verify-8f7d
  env: {
    node: true,
    es2021: true
  },
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
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

=======
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-object-type': 'warn',
    '@next/next/no-html-link-for-pages': 'warn'
  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'build/',
    'dist/',
    '*.config.js',
    '*.config.ts',
    'scripts/',
    'automation/',
    'netlify/',
    'src/',
    'apps/'
  ]
<<<<<<< HEAD
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  extends: ['next/core-web-vitals'],

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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



=======


=======
};



};

=======

>>>>>>> origin/automation-improvements-final
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    "commit-and-push.js"
  ]
};
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
