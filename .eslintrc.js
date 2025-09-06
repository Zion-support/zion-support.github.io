<<<<<<< HEAD
<<<<<<< HEAD
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
=======

/* eslint - env node */;
/* eslint-env node */
module.exports = {

/* eslint-env node */
module.exports = {

/* eslint-env node */
module.exports = {
module && module.exports = {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
module.exports = {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  env: {
    node: true,
    es2021: true,
    browser: true
  },
<<<<<<< HEAD
<<<<<<< HEAD



=======
=======
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
<<<<<<< HEAD
/* eslint-env node */
module.exports = {

/* eslint-env node */
module.exports = {
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],

origin/cursor/integrate-build-improve-and-re-verify-c7b5
/* eslint-env node */
module.exports = {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
origin/cursor/integrate-build-improve-and-re-verify-c7b5
/* eslint-env node */
module.exports = {
<<<<<<< HEAD
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended'
  ],
<<<<<<< HEAD
=======
export default {
  extends: ['next/core-web-vitals', 'next/typescript'],
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
ursor/fix-syntax-push-and-merge-to-main-40de
export default {
  extends: ['next/core-web-vitals', 'next/typescript'],
ursor/add-new-services-and-deploy-updates-0462
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
<<<<<<< HEAD
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
=======
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'off',
    'no-undef': 'off',
<<<<<<< HEAD

=======
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": "off",
=======
  rules: {
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "no-undef": "off",
    "no-console": "off",
<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

    node: true,
    browser: true,
    es2021: true,
    jest: true,
    vitest: true
  },

    node: true,
    browser: true,
    es2021: true
  },
  env: {
    node: true,
    es2021: true
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
  env: {
    browser: true,
    es2021: true,
  },
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    node: true,
    browser: true,
    es2021: true
  },
ursor/integrate-build-improve-and-re-verify-8f7d
  env: {
    node: true,
    es2021: true
  },
<<<<<<< HEAD
=======
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
/* eslint-env node */
module.exports = {
  env: {
    node: true,
    es2021: true,
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

<<<<<<< HEAD
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
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
<<<<<<< HEAD
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
=======
    'dist/',
    'build/',
    'coverage/',
    '*.config.js',
    '*.config.cjs',
    '*.config.mjs',
    'fix-critical-files.js',
    'fix-*.js',
    'fix-*.cjs',
    '*-fix*.cjs',
    '*-fix*.js',
    'advanced-*.cjs',
    'aggressive-*.cjs',
    'aggressive-*.js',
    'app-improvement-*.cjs',
    'analyze-*.cjs',
    'code-quality-*.js',
    'automation/',
    'automation_backup/',
    'backup/',
    'lib_backup/',
    'data_backup/',
    'styles_backup/',
    'api-backup/',
    'temp_backup/',
    'corrupted_files_backup_2/',
    'ai-optimization-backups/',
    'optimization-reports/',
    'test-generation-reports/',
    'test-reports/',
    'test-results/',
    'security-reports/',
    'pages.__backup/',
    'pages-disabled/',
    'pages.disabled_auto/',
    'zion_academy/',
    'pm2-automation/',
    'scripts/',
    '*.report.json',
    'temp_*/',
    'test_build/',
    'tests.disabled/',
    'pages.disabled/',
    'src.disabled/',
    'components.disabled/',
    'hooks.disabled/',
    'types.disabled/',
    'contracts.disabled/',
    'solutions.disabled/',
    'zion-os.disabled/',
    'src_backup_temp/',
    'temp-backup/',
    'tests/',
    'supabase/',
    '*.test.js',
    '*.test.ts',
    '*.test.tsx',
    '*.spec.js',
    '*.spec.ts',
    '*.spec.tsx',
    'temp_footer_start.tsx',
    'test-simple.js',
    'test-utils.js',
    'ultimate-automation-runner.js',
    'vite.config-backup.ts',
    'vite.config.ts',
    'types/empty.ts',
    'types/index.ts',
    'pages_backup_conflicts/',
    'pages_disabled/',
    'src.broken/',
    'src.corrupted/',
    'src.pages.disabled/',
    'performance-monitor.js',
    'performance-optimization.js',
    'playwright.config.ts',
    'postcss.config-backup.js',
    'public/',
    'resolve-conflicts.js',
    'resolve-merge-conflicts.js',
    'run-automation-safely.js',
    'run-automation.js',
    'run-complete-automation.js',
    'security-config.js',
    'server/',
    'setupTests.ts',
    'simple-test.js',
    'src/components/layout/',
    'types/',
    'utils/',
    'pages_backup/',
    'pages_backup_before_cleanup/',
    'services/',
    'components.disabled_full/',
    'comprehensive-automation-runner.js',
    'comprehensive-automation.js',
    'comprehensive-merge-resolver.js',
    'corrupted-files-backup/',
    'cypress.config.ts',
    'cypress_backup/',
    'data.disabled/',
    'database/',
    'ecosystem.simple.js',
    'ecosystem.working.js',
    'execute-automation.js',
    'fix_all_function_names.js',
    'fix_corrupted_files.js',
    'fix_empty_pages.js',
    'fix_utils_files.js',
    'fix_variable_names.js',
    'git-ops.js',
    'health-endpoint.js',
    'hooks/',
    'improve-app.js',
    'jest.config.ts',
    'jest.setup.js',
    'lib.broken/',
    'lib.disabled/',
    'lib/',
    'lint-stub.js',
    'lint-target/',
    'maintenance-scheduler.js',
    'merge-prs.js',
    'merge-resolver.js',
    'middleware.security.ts',
    'middleware/',
    'monitoring-system.js',
    'netlify/',
    'next-env.d.ts',
    'next.config.analyze.js',
    'next.config.analyzer.js',
    'next.config.optimized.js',
    'next.config.resolved.js',
    'optimized-build.js',
    'pages-backup/',
    'pages._quarantine/',
    'pages.disabled_full/',
    'pages.old/',
    'App.tsx',
    'advanced-app-improvements.js',
    'analyze-missing-pages.js',
    'api-disabled/',
    'api.disabled/',
    'api/',
    'automation-runner.js',
    'basic-test.js',
    'broken_files_backup/',
    'build-verification.js',
    'check-syntax.js',
    'clean-conflicts.js',
    'commit-and-push.js'
  ]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  extends: ['next/core-web-vitals'],

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD

=======
    'react/no-unescaped-entities': 'off',
    'no-unused-vars': 'warn',
    '@next/next/no-img-element': 'warn'
  }
}
};
  ignore_patterns: [;

  ignorePatterns: [
  ignore_patterns: [;

  ignorePatterns: [
  ignorePatterns: [
  ignorePatterns: [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    "node_modules/",
    ".next/",
    "out/",
    "dist/",
    "build/",
    "coverage/",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    "*.config.js",
    "*.config.cjs",
    "*.config.mjs",
    "fix - critical - files.js",
<<<<<<< HEAD

=======
    "*.config && config.js",
    "*.config && config.cjs",
    "*.config && config.mjs",
    "fix-critical-files && files.js",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    "fix-*.js",
    "fix-*.cjs",
    "*-fix*.cjs",
    "*-fix*.js",
    "advanced-*.cjs",
    "aggressive-*.cjs",
    "aggressive-*.js",
<<<<<<< HEAD
    "app - improvement-*.cjs",
    "analyze-*.cjs",
    "code - quality-*.js",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    "automation/",
    "automation_backup/",
    "backup/",
    "lib_backup/",
    "data_backup/",
    "styles_backup/",
<<<<<<< HEAD
    "api - backup/",
    "temp_backup/",
    "corrupted_files_backup_2/",

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    "ai - optimization - backups/",
    "optimization - reports/",
    "test - generation - reports/",
    "test - reports/",
    "test - results/",
    "security - reports/",
    "pages.__backup/",
    "pages - disabled/",
    "pages.disabled_auto/",
<<<<<<< HEAD

=======
    "ai-optimization-backups/",
    "optimization-reports/",
    "test-generation-reports/",
    "test-reports/",
    "test-results/",
    "security-reports/",
    "pages && pages.__backup/",
    "pages-disabled/",
    "pages && pages.disabled_auto/",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    "zion_academy/",
    "pm2 - automation/",
    "scripts/",
    "*.report && report.json",
    "temp_*/",
    "temp_exclude/",
    "test_build/",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    "tests.disabled/",
    "pages.disabled/",
    "src.disabled/",
    "components.disabled/",
    "hooks.disabled/",
    "types.disabled/",
    "contracts.disabled/",
    "solutions.disabled/",
<<<<<<< HEAD
    "zion - os.disabled/",

=======
    "tests && tests.disabled/",
    "pages && pages.disabled/",
    "src && src.disabled/",
    "components && components.disabled/",
    "hooks && hooks.disabled/",
    "types && types.disabled/",
    "contracts && contracts.disabled/",
    "solutions && solutions.disabled/",
    "zion-os && os.disabled/",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    "src_backup_temp/",
    "temp - backup/",
    "tests/",
    "supabase/",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    "*.test.js",
    "*.test.ts",
    "*.test.tsx",
    "*.spec.js",
    "*.spec.ts",
    "*.spec.tsx",
    "temp_footer_start.tsx",
<<<<<<< HEAD
    "test - simple.js",
    "test - utils.js",
    "ultimate - automation - runner.js",
    "vite.config - backup.ts",
    "vite.config.ts",
    "types / empty.ts",
    "types / index.ts",
=======
    "*.test && test.js",
    "*.test && test.ts",
    "*.test && test.tsx",
    "*.spec && spec.js",
    "*.spec && spec.ts",
    "*.spec && spec.tsx",
    "temp_footer_start && temp_footer_start.tsx",
    "test-simple && simple.js",
    "test-utils && utils.js",
    "ultimate-automation-runner && runner.js",
    "vite && vite.config-backup && backup.ts",
    "vite && vite.config.ts",
    "types/empty && empty.ts",
    "types/index && index.ts",
    "pages_backup_conflicts/",
    "pages_disabled/",
    "src && src.broken/",
    "src && src.corrupted/",
    "src && src.pages.disabled/",
    "performance-monitor && monitor.js",
    "performance-optimization && optimization.js",
    "playwright && playwright.config.ts",
    "postcss && postcss.config-backup && backup.js",
    "public/",
    "resolve-conflicts && conflicts.js",
    "resolve-merge-conflicts && conflicts.js",
    "run-automation-safely && safely.js",
    "run-automation && automation.js",
    "run-complete-automation && automation.js",
    "security-config && config.js",
    "server/",
    "setupTests && setupTests.ts",
    "simple-test && test.js",
    "src/components/layout/",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    "pages_backup_conflicts/",
    "pages_disabled/",
    "src.broken/",
    "src.corrupted/",
    "src.pages.disabled/",
<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    "types/",
    "utils/",
    "pages_backup/",
    "pages_backup_before_cleanup/",
    "services/",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

<<<<<<< HEAD
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
=======
}
};

    "components && components.disabled_full/",
    "comprehensive-automation-runner && runner.js",
    "comprehensive-automation && automation.js",
    "comprehensive-merge-resolver && resolver.js",
    "corrupted-files-backup/",
    "cypress && cypress.config.ts",
    "cypress_backup/",
    "data && data.disabled/",
    "database/",
    "ecosystem && ecosystem.simple.js",
    "ecosystem && ecosystem.working.js",
    "execute-automation && automation.js",
    "fix_all_function_names && fix_all_function_names.js",
    "fix_corrupted_files && fix_corrupted_files.js",
    "fix_empty_pages && fix_empty_pages.js",
    "fix_utils_files && fix_utils_files.js",
    "fix_variable_names && fix_variable_names.js",
    "git-ops && ops.js",
    "health-endpoint && endpoint.js",
    "hooks/",
    "improve-app && app.js",
    "jest && jest.config.ts",
    "jest && jest.setup.js",
    "lib && lib.broken/",
    "lib && lib.disabled/",
    "lib/",
    "lint-stub && stub.js",
    "lint-target/",
    "maintenance-scheduler && scheduler.js",
    "merge-prs && prs.js",
    "merge-resolver && resolver.js",
    "middleware && middleware.security.ts",
    "middleware/",
    "monitoring-system && system.js",
    "netlify/",
    "next-env && env.d.ts",
    "next && next.config.analyze && analyze.js",
    "next && next.config.analyzer && analyzer.js",
    "next && next.config.optimized && optimized.js",
    "next && next.config.resolved && resolved.js",
    "optimized-build && build.js",
    "pages-backup/",
    "pages && pages._quarantine/",
    "pages && pages.disabled_full/",
    "pages && pages.old/",
    "App && App.tsx",
    "advanced-app-improvements && improvements.js",
    "analyze-missing-pages && pages.js",
    "api-disabled/",
    "api && api.disabled/",
    "api/",
    "automation-runner && runner.js",
    "basic-test && test.js",
    "broken_files_backup/",
    "build-verification.js",
    "check-syntax.js",
    "clean-conflicts.js",
    "commit-and-push.js",
    "temp_exclude/",
  ],
}
}
};

  ],
}
}
};

    "commit-and-push.js"
  ]
};
    "ecosystem.simple.js",
    "ecosystem.working.js",
    "execute-automation.js",
    "fix_all_function_names.js",
    "fix_corrupted_files.js",
    "fix_empty_pages.js",
    "fix_utils_files.js",
    "fix_variable_names.js",
    "jest.config.ts",
    "jest.setup.js",
    "lib.broken/",
    "lib.disabled/",
    "lib/",
    "next.config.analyze.js",
    "next.config.analyzer.js",
    "next.config.optimized.js",
    "next.config.resolved.js",
    "pages._quarantine/",
    "pages.disabled_full/",
    "pages.old/",
    "App.tsx",
    "build - verification.js",
    "check - syntax.js",
    "clean - conflicts.js",
    "commit - and - push.js",

}
};

    "build-verification.js",
    "check-syntax.js",
    "clean-conflicts.js",
    "commit-and-push.js"
  ]
};
    "commit-and-push.js",
  ],
}
};
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
};
origin/main
origin/automation-improvements-final
};
  ],
}
;
    "commit-and-push.js"
  ]
}
};
;
;
/* eslint-env node */;
/* eslint-disable no-undef */;
module.exports = {;
  env: {;
    node: true,;
    es2021: true;
  },;
  globals: {;
    module: 'readonly',;
    require: 'readonly',;
    exports: 'readonly',;
    __dirname: 'readonly',;
    __filename: 'readonly',;
    global: 'readonly',;
    Buffer: 'readonly',;
    console: 'readonly';
  },;
  extends: ['next/core-web-vitals'],;
  rules: {;
    'react-hooks/rules-of-hooks': 'errorreact-hooks/exhaustive-deps': 'warn@typescript-eslint/no-unused-vars': [;
      'warn',;
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
    ],;
    '@typescript-eslint/no-explicit-any': 'warn@typescript-eslint/no-empty-object-type': 'warn@next/next/no-html-link-for-pages': 'warn';
  },;
  ignorePatterns: [;
    'node_modules/.next/out/build/',;
    'dist/*.config.js*.config.tsscripts/',;
    'automation/netlify/src/apps/';
  ];
},;

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    "react/no-unescaped-entities": "warn"
  }
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======







=======
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
