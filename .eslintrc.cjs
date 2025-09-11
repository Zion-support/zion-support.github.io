module.exports = {
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "no-undef": "off"
  },
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
    "fix-critical-files.js",
    "fix-*.js",
    "fix-*.cjs",
    "*-fix*.cjs",
    "*-fix*.js",
    "advanced-*.cjs",
    "aggressive-*.cjs",
    "aggressive-*.js",
    "app-improvement-*.cjs",
    "analyze-*.cjs",
    "code-quality-*.js",
    "components",
    "test_build/",
    "tests.disabled/",
    "pages.disabled/",
    "src.disabled/",
    "components.disabled/",
    "hooks.disabled/",
    "types.disabled/",
    "contracts.disabled/",
    "solutions.disabled/",
    "zion-os.disabled/",
    "zion_academy/",
    "automation_backup/",
    "automation/backups/",
    "backup-pages/",
    "backup/",
    "lib_backup/",
    "data_backup/",
    "styles_backup/",
    "api-backup/",
    "temp_backup/",
    "corrupted_files_backup_2/",
    "ai-optimization-backups/",
    "optimization-reports/",
    "test-generation-reports/",
    "test-reports/",
    "test-results/",
    "security-reports/",
    "pages.__backup/",
    "pages-disabled/",
    "pages.disabled_auto/"
  ]
};
  "extends": ['next/core-web-vitals',
    '"eslint": recommended',
    '@typescript-eslint/recommended',
  ],
:.eslintrc.cjs
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_" }
    ],
    "react/no-unescaped-entities": "off"
  }
};
  "parser": '@typescript-eslint/parser',
  "plugins": ['@typescript-eslint'],
  "rules": {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    'react/no-unescaped-entities': 'warn'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    dom: true
  },
  globals: {
    KeyboardEvent: 'readonly',
    "HTMLElement": 'readonly',
    "HTMLButtonElement": 'readonly',
    "HTMLAnchorElement": 'readonly',
    "MutationObserver": 'readonly',
    "RequestInit": 'readonly',
    "AbortController": 'readonly',
    "fs": 'readonly',
    "CodeQualityChecker": 'readonly'}};
module.exports = { extends: [ 'next/core-web-vitals','eslint:recommended','@typescript-eslint/recommended',],parser: '@typescript-eslint/parser',plugins: ['@typescript-eslint'],rules: { '@typescript-eslint/no-unused-vars': 'warn','@typescript-eslint/no-explicit-any': 'warn','no-console': 'off','react/no-unescaped-entities': 'warn','no-undef': 'off',},overrides: [{ files: ['*.ts','*.tsx'],rules: { 'no-undef': 'off' } }],env: { browser: true,node: true,es6: true,dom: true },globals: { KeyboardEvent: 'readonly',HTMLElement: 'readonly',HTMLButtonElement: 'readonly',HTMLAnchorElement: 'readonly',MutationObserver: 'readonly',RequestInit: 'readonly',AbortController: 'readonly',fs: 'readonly',CodeQualityChecker: 'readonly',},};