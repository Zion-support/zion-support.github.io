<<<<<<< HEAD

/* eslint - env node */;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/main
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
/* eslint-env node */
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
module.exports = {

=======


/* eslint-env node */
module.exports = {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
module && module.exports = {
>>>>>>> origin/main
  env: {
    node: true,
    es2021: true
  },
<<<<<<< HEAD



=======
<<<<<<< HEAD
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
/* eslint-env node */
module.exports = {
>>>>>>> origin/main
=======



=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
/* eslint-env node */
module.exports = {
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended'
  ],
<<<<<<< HEAD
export default {
  extends: ['next/core-web-vitals', 'next/typescript'],
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
export default {
  extends: ['next/core-web-vitals', 'next/typescript'],
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
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
    node: true,
    browser: true,
    es2021: true
  },
<<<<<<< HEAD
=======

=======



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
  env: {
    browser: true,
    es2021: true,
  },
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    node: true,
    browser: true,
    es2021: true
  },
<<<<<<< HEAD
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  env: {
    node: true,
    es2021: true
  },
<<<<<<< HEAD
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
=======
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
=======
/* eslint-env node */
module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
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
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
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
  rules: {
<<<<<<< HEAD
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "no-undef": "off",
    "react/no-unescaped-entities": "off",
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off"
  extends: ["next / core - web - vitals", "plugin:@typescript - eslint / recommended"],
  parser: "@typescript - eslint / parser",
  plugins: ["@typescript - eslint"],
  rules: {
    "@typescript - eslint / no - unused - vars": "off",
    "@typescript - eslint / no - explicit - any": "off",
    "react - hooks / exhaustive - deps": "warn",
    "react / react - in - jsx - scope": "off",
    "no - undef": "off",
    "react / no - unescaped - entities": "off",
    "@next / next / no - html - link - for - pages": "off",
    "@next / next / no - img - element": "off",
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
  ignore_patterns: [;
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
    'react/no-unescaped-entities': 'off',
    'no-unused-vars': 'warn',
    '@next/next/no-img-element': 'warn'
  }
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
};
=======
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
  ignorePatterns: [
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
>>>>>>> origin/main
    "node_modules/",
    ".next/",
    "out/",
    "dist/",
    "build/",
    "coverage/",
<<<<<<< HEAD

    "*.config.js",
    "*.config.cjs",
    "*.config.mjs",
    "fix - critical - files.js",

=======
    "*.config && config.js",
    "*.config && config.cjs",
    "*.config && config.mjs",
    "fix-critical-files && files.js",
>>>>>>> origin/main
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
<<<<<<< HEAD

    "ai - optimization - backups/",
    "optimization - reports/",
    "test - generation - reports/",
    "test - reports/",
    "test - results/",
    "security - reports/",
    "pages.__backup/",
    "pages - disabled/",
    "pages.disabled_auto/",

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
>>>>>>> origin/main
    "zion_academy/",
    "pm2 - automation/",
    "scripts/",
    "*.report && report.json",
    "temp_*/",
    "temp_exclude/",
    "test_build/",
<<<<<<< HEAD

    "tests.disabled/",
    "pages.disabled/",
    "src.disabled/",
    "components.disabled/",
    "hooks.disabled/",
    "types.disabled/",
    "contracts.disabled/",
    "solutions.disabled/",
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
>>>>>>> origin/main
    "src_backup_temp/",
    "temp - backup/",
    "tests/",
    "supabase/",
<<<<<<< HEAD

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
>>>>>>> origin/main
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
<<<<<<< HEAD
    "setup_tests.ts",
    "simple - test.js",
    "src / components / layout/",

=======
    "setupTests && setupTests.ts",
    "simple-test && test.js",
    "src/components/layout/",
>>>>>>> origin/main
    "types/",
    "utils/",
    "pages_backup/",
    "pages_backup_before_cleanup/",
    "services/",
<<<<<<< HEAD

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
=======
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
};
<<<<<<< HEAD
>>>>>>> origin/main
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
    "build - verification.js",
    "check - syntax.js",
    "clean - conflicts.js",
    "commit - and - push.js",
  ],
}
;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
};



};

=======

>>>>>>> origin/automation-improvements-final
=======
    "commit-and-push.js"
  ]
};
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
};
;
>>>>>>> origin/main

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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
>>>>>>> origin/main
