<<<<<<< HEAD

<<<<<<< HEAD
/* eslint-env node */
module.exports = {

/* eslint-env node */
module.exports = {

export default {
  extends: ['next/core-web-vitals', 'next/typescript'],
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
/* eslint - env node */;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
/* eslint-env node */
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
module.exports = {
<<<<<<< HEAD

=======


/* eslint-env node */
module.exports = {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  env: {
    node: true,
    es2021: true
  },
<<<<<<< HEAD



=======
<<<<<<< HEAD
  },
  ignore_patterns: [;
=======
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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

<<<<<<< HEAD
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

    node: true,
    browser: true,
    es2021: true
  },

=======
<<<<<<< HEAD



=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  env: {
    node: true,
    es2021: true
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
  env: {
    browser: true,
    es2021: true,
  },

    node: true,
    browser: true,
    es2021: true
  },

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





=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  extends: ['next/core-web-vitals'],
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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
  ignore_patterns: [;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  ignorePatterns: [
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
  ignorePatterns: [
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    "node_modules/",
    ".next/",
    "out/",
    "dist/",
    "build/",
    "coverage/",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    "*.config.js",
    "*.config.cjs",
    "*.config.mjs",
    "fix - critical - files.js",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    "zion_academy/",
    "pm2 - automation/",
    "scripts/",
    "*.report && report.json",
    "temp_*/",
    "temp_exclude/",
    "test_build/",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    "tests.disabled/",
    "pages.disabled/",
    "src.disabled/",
    "components.disabled/",
    "hooks.disabled/",
    "types.disabled/",
    "contracts.disabled/",
    "solutions.disabled/",
    "zion - os.disabled/",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    "src_backup_temp/",
    "temp - backup/",
    "tests/",
    "supabase/",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    "types/",
    "utils/",
    "pages_backup/",
    "pages_backup_before_cleanup/",
    "services/",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    "components.disabled_full/",
    "comprehensive - automation - runner.js",
    "comprehensive - automation.js",
    "comprehensive - merge - resolver.js",
    "corrupted - files - backup/",
    "cypress.config.ts",
<<<<<<< HEAD

    "cypress_backup/",
    "data && data.disabled/",
    "database/",
<<<<<<< HEAD
    "ecosystem.simple.js",
    "ecosystem.working.js",
    "execute-automation.js",
    "fix_all_function_names.js",
    "fix_corrupted_files.js",
    "fix_empty_pages.js",
    "fix_utils_files.js",
    "fix_variable_names.js",
    "git-ops.js",
    "health-endpoint.js",
    "hooks/",
    "improve-app.js",
    "jest.config.ts",
    "jest.setup.js",
    "lib.broken/",
    "lib.disabled/",
    "lib/",
    "lint-stub.js",
    "lint-target/",
    "maintenance-scheduler.js",
    "merge-prs.js",
    "merge-resolver.js",
    "middleware.security.ts",
    "middleware/",
    "monitoring-system.js",
    "netlify/",
    "next-env.d.ts",
    "next.config.analyze.js",
    "next.config.analyzer.js",
    "next.config.optimized.js",
    "next.config.resolved.js",
    "optimized-build.js",
    "pages-backup/",
    "pages._quarantine/",
    "pages.disabled_full/",
    "pages.old/",
    "App.tsx",
    "advanced-app-improvements.js",
    "analyze-missing-pages.js",
    "api-disabled/",
    "api.disabled/",
    "api/",
    "automation-runner.js",
    "basic-test.js",
    "broken_files_backup/",
    "build-verification.js",
    "check-syntax.js",
    "clean-conflicts.js",

    "commit-and-push.js"
  ]
};

};
=======

=======
    "cypress_backup/",
    "data && data.disabled/",
    "database/",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
  ],
};
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
    "build - verification.js",
    "check - syntax.js",
    "clean - conflicts.js",
    "commit - and - push.js",
  ],
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
<<<<<<< HEAD

=======
=======
    "build-verification.js",
    "check-syntax.js",
    "clean-conflicts.js",
<<<<<<< HEAD
    "commit-and-push.js"
  ]
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
    "commit-and-push.js",
  ],
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
};
>>>>>>> origin/main
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
