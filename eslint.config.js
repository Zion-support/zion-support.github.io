import js from '@eslint/js';
<<<<<<< HEAD
<<<<<<< HEAD
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescript from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
=======
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import next from '@next/eslint-plugin-next';
<<<<<<< HEAD
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705

export default [
  js.configs.recommended,
  {
<<<<<<< HEAD
    files: ['**/*.{js,jsx,ts,tsx}'],
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
    languageOptions: {
<<<<<<< HEAD
      parser: tsparser,
=======
      parser: typescriptParser,
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': typescript,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
<<<<<<< HEAD
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
  },
];
=======
<<<<<<< HEAD
=======
      },
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
export default [{
    "ignores": [
      'node_modules/',
      '.next/',
      'out/',
      'dist/',
      'build/',
      'coverage/',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
<<<<<<< HEAD
=======
      '.prettierrc.js',
      '.eslintrc.*',
      '*.min.js',
      '*.bundle.js',
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
      'scripts/',
      'automation/',
      'automation_backup/',
      'data_backup/',
      'pm2-automation/',
      '__tests__/',
      'pages.disabled/',
      'pages.corrupted.*/',
      'pages.broken/',
      'pages.bak/',
      'pages.blog.disabled/',
      'pages._archive_corrupted/',
      'pages._quarantine/',
      'pages-disabled/',
      'pages-quarantine/',
      'pages.__backup/',
      'pages-backup/',
<<<<<<< HEAD
      'src.pages.disabled/',
      'src.pages.disabled/**/*',
      'src_backup_temp/',
      'src_backup_temp/**/*',
      'temp_backup/',
      'temp_backup/**/*',
      'pages_backup/',
      'pages_backup/**/*',
      'pages_backup_conflicts/',
      'pages_backup_conflicts/**/*',
      'pages_backup_before_cleanup/',
      'pages_backup_before_cleanup/**/*',
      'pages_backup_conflict/',
      'pages_backup_conflict/**/*',
      'pages_disabled/',
      'pages_disabled/**/*',
      'pages.disabled_auto/',
      'pages.disabled_auto/**/*',
      'pages.disabled_full/',
      'pages.disabled_full/**/*',
      'pages.old/',
      'pages.old/**/*',
      'pages.broken/',
      'pages.broken/**/*',
      'pages.corrupted.1756905863/',
      'pages.corrupted.1756905863/**/*',
      'pages.disabled.full/',
      'pages.disabled.full/**/*',
      'pages_api.disabled/',
      'pages_api.disabled/**/*',
      'src.disabled/',
      'src.disabled/**/*',
      'components.disabled/',
      'components.disabled/**/*',
      'types.disabled/',
      'types.disabled/**/*',
      'contracts.disabled/',
      'contracts.disabled/**/*',
      'solutions.disabled/',
      'solutions.disabled/**/*',
      'zion-os.disabled/',
      'zion-os.disabled/**/*',
      'src_backup_temp/',
      'src_backup_temp/**/*',
      'temp-backup/',
      'temp-backup/**/*',
      'tests.disabled/',
      'tests.disabled/**/*',
      'data.disabled/',
      'data.disabled/**/*',
      'lib.broken/',
      'lib.broken/**/*',
      'lib.disabled/',
      'lib.disabled/**/*',
      'api-disabled/',
      'api-disabled/**/*',
      'api.disabled/',
      'api.disabled/**/*',
      'broken_files_backup/',
      'broken_files_backup/**/*',
      'corrupted-files-backup/',
      'corrupted-files-backup/**/*',
      'cypress_backup/',
      'cypress_backup/**/*',
      'middleware/',
      'middleware/**/*',
      'zion_academy/',
      'zion_academy/**/*',
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
      '*.test.js',
      '*.test.ts',
      '*.test.tsx',
      '*.spec.js',
      '*.spec.ts',
<<<<<<< HEAD
      '*.spec.tsx',
      '*.report.json',
      'temp_*/',
      'test_build/',
      'tests.disabled/',
      'src.disabled/',
      'components.disabled/',
      'types.disabled/',
      'contracts.disabled/',
      'solutions.disabled/',
      'zion-os.disabled/',
      'src_backup_temp/',
      'temp-backup/',
      'tests/',
      'supabase/',
      'public/',
      'server/',
      'services/',
      'components.disabled_full/',
      'data.disabled/',
      'database/',
      'lib.broken/',
      'lib.disabled/',
      'lib/',
      'lint-target/',
      'netlify/',
      'pages-backup/',
      'pages._quarantine/',
      'pages.disabled_full/',
      'pages.old/',
      'api-disabled/',
      'api.disabled/',
      'api/',
      'broken_files_backup/',
      'corrupted-files-backup/',
      'cypress_backup/',
      'middleware/',
      'pages_backup/',
      'pages_backup_before_cleanup/',
      'pages_backup_conflicts/',
      'pages_backup_conflict/',
      'pages_disabled/',
      'pages.disabled_auto/',
      'pages.disabled_full/',
      'pages.old/',
      'pages.broken/',
      'pages.corrupted.1756905863/',
      'pages.disabled.full/',
      'pages_api.disabled/',
      'pages.disabled_auto/',
      'pages.disabled_full/',
      'pages_backup_conflicts/',
      'pages_backup_before_cleanup/',
      'pages_backup_conflict/',
      'pages_backup/',
      'pages_api.disabled/',
      'pages.disabled_auto/',
      'pages.disabled_full/',
      'pages.old/',
      'pages.broken/',
      'pages.corrupted.1756905863/',
      'pages.disabled.full/'
    ]
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        Blob: 'readonly',
        CustomEvent: 'readonly',
        Intl: 'readonly',
        performance: 'readonly',
        caches: 'readonly',
        Notification: 'readonly',
        ServiceWorker: 'readonly',
        ServiceWorkerRegistration: 'readonly',
        PushSubscription: 'readonly',
        NotificationPermission: 'readonly',
        process: 'readonly',
        global: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        Deno: 'readonly',
        React: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'readonly'
      },
      parserOptions: {
=======
      '*.spec.tsx'
    ]
  },
  {
    "files": ['**/*.{js,jsx}'],
    "languageOptions": {
      ecmaVersion: 2021,
      "sourceType": 'module',
      "globals": {
        window: 'readonly',
        "document": 'readonly',
        "navigator": 'readonly',
        "localStorage": 'readonly',
        "sessionStorage": 'readonly',
        "console": 'readonly',
        "setTimeout": 'readonly',
        "setInterval": 'readonly',
        "clearTimeout": 'readonly',
        "clearInterval": 'readonly',
        "requestAnimationFrame": 'readonly',
        "cancelAnimationFrame": 'readonly',
        "fetch": 'readonly',
        "URL": 'readonly',
        "URLSearchParams": 'readonly',
        "Blob": 'readonly',
        "CustomEvent": 'readonly',
        "Intl": 'readonly',
        "performance": 'readonly',
        "caches": 'readonly',
        "Notification": 'readonly',
        "ServiceWorker": 'readonly',
        "ServiceWorkerRegistration": 'readonly',
        "PushSubscription": 'readonly',
        "NotificationPermission": 'readonly',
        "process": 'readonly',
        "global": 'readonly',
        "jest": 'readonly',
        "describe": 'readonly',
        "it": 'readonly',
        "test": 'readonly',
        "expect": 'readonly',
        "vi": 'readonly',
        "Deno": 'readonly',
        "React": 'readonly',
        "require": 'readonly',
        "module": 'readonly',
        "__dirname": 'readonly',
        "__filename": 'readonly',
        "exports": 'readonly'
      },
      "parserOptions": {
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
        ecmaFeatures: {
          jsx: true
        }
      }
    },
<<<<<<< HEAD
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    rules: {
=======
    "plugins": {
      react,
      'react-hooks': reactHooks
    },
    "rules": {
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  },
  {
    "files": ['**/*.{ts,tsx}'],
    "languageOptions": {
      parser: tsparser,
      "ecmaVersion": 2021,
      "sourceType": 'module',
      "globals": {
        window: 'readonly',
<<<<<<< HEAD
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        Blob: 'readonly',
        CustomEvent: 'readonly',
        Intl: 'readonly',
        performance: 'readonly',
        caches: 'readonly',
        Notification: 'readonly',
        ServiceWorker: 'readonly',
        ServiceWorkerRegistration: 'readonly',
        PushSubscription: 'readonly',
        NotificationPermission: 'readonly',
        process: 'readonly',
        global: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        Deno: 'readonly',
        React: 'readonly',
        KeyboardEvent: 'readonly',
        HTMLElement: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLAnchorElement: 'readonly',
        MutationObserver: 'readonly',
        RequestInit: 'readonly',
        AbortController: 'readonly',
        fs: 'readonly',
        CodeQualityChecker: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: react,
      'react-hooks': reactHooks
=======
        "document": 'readonly',
        "navigator": 'readonly',
        "localStorage": 'readonly',
        "sessionStorage": 'readonly',
        "console": 'readonly',
        "setTimeout": 'readonly',
        "setInterval": 'readonly',
        "clearTimeout": 'readonly',
        "clearInterval": 'readonly',
        "requestAnimationFrame": 'readonly',
        "cancelAnimationFrame": 'readonly',
        "fetch": 'readonly',
        "URL": 'readonly',
        "URLSearchParams": 'readonly',
        "Blob": 'readonly',
        "CustomEvent": 'readonly',
        "Intl": 'readonly',
        "performance": 'readonly',
        "caches": 'readonly',
        "Notification": 'readonly',
        "ServiceWorker": 'readonly',
        "ServiceWorkerRegistration": 'readonly',
        "PushSubscription": 'readonly',
        "NotificationPermission": 'readonly',
        "process": 'readonly',
        "global": 'readonly',
        "jest": 'readonly',
        "describe": 'readonly',
        "it": 'readonly',
        "test": 'readonly',
        "expect": 'readonly',
        "vi": 'readonly',
        "Deno": 'readonly',
        "React": 'readonly',
        "KeyboardEvent": 'readonly',
        "HTMLElement": 'readonly',
        "HTMLButtonElement": 'readonly',
        "HTMLAnchorElement": 'readonly',
        "MutationObserver": 'readonly',
        "RequestInit": 'readonly',
        "AbortController": 'readonly',
        "fs": 'readonly',
        "CodeQualityChecker": 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
      'jsx-a11y': jsxA11y,
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
<<<<<<< HEAD
      '@typescript-eslint/no-explicit-any': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    }
  },
  {
=======
  },
  {
      'src/**',
      'automation/**',
      'automation_backup/**',
      'data_backup/**',
      'pm2-automation/**',
      'scripts/**',
      'tests/**',
      'test-results/**',
      'test-reports/**',
      '*.test.js',
      '*.test.jsx',
      '*.test.ts',
      '*.test.tsx',
      '*.spec.js',
      '*.spec.jsx',
      '*.spec.ts',
      '*.spec.tsx',
      '*.backup.js',
      '*.backup.jsx',
      '*.backup.ts',
      '*.backup.tsx',
      '*.broken.js',
      '*.broken.jsx',
      '*.broken.ts',
      '*.broken.tsx',
      '*.corrupted.js',
      '*.corrupted.jsx',
      '*.corrupted.ts',
      '*.corrupted.tsx',
      '*.disabled.js',
      '*.disabled.jsx',
      '*.disabled.ts',
      '*.disabled.tsx',
      '*.old.js',
      '*.old.jsx',
      '*.old.ts',
      '*.old.tsx',
      '*.temp.js',
      '*.temp.jsx',
      '*.temp.ts',
      '*.temp.tsx',
      '*.tmp.js',
      '*.tmp.jsx',
      '*.tmp.ts',
      '*.tmp.tsx',
      '*.bak.js',
      '*.bak.jsx',
      '*.bak.ts',
      '*.bak.tsx',
      '*.orig.js',
      '*.orig.jsx',
      '*.orig.ts',
      '*.orig.tsx',
      '*.rej.js',
      '*.rej.jsx',
      '*.rej.ts',
      '*.rej.tsx',
      '*.swp.js',
      '*.swp.jsx',
      '*.swp.ts',
      '*.swp.tsx',
      '*.swo.js',
      '*.swo.jsx',
      '*.swo.ts',
      '*.swo.tsx',
      '*.log',
      '*.pid',
      '*.seed',
      '*.pid.lock',
      'comprehensive-*.js',
      'critical-fix.js',
      'execute-automation.js',
      'final-*.js',
      'fix_*.js',
      'health-endpoint.js',
      'improve-app.js',
      'maintenance-scheduler.js',
      'merge-*.js',
      'monitoring-system.js',
      'optimized-*.js',
      'performance-*.js',
      'resolve-*.js',
      'run-*.js',
      'seo-*.js',
      'services-broken.tsx',
      'simple-*.js',
      'test-*.js',
      '*.tgz',
      '*.tar.gz',
      '*.zip',
      '*.rar',
      '*.7z',
      '*.tar',
      '*.gz',
      '*.bz2',
      '*.xz',
      '*.lzma',
      '*.zst',
      '*.lz4',
      '*.lzop',
      '*.lrz',
      '*.lha',
      '*.lzh',
      '*.ace',
      '*.arj',
      '*.cab',
      '*.deb',
      '*.rpm',
      '*.msi',
      '*.dmg',
      '*.iso',
      '*.img',
      '*.bin',
      '*.exe',
      '*.app',
      '*.dll',
      '*.so',
      '*.dylib',
      '*.a',
      '*.lib',
      '*.o',
      '*.obj',
      '*.pyc',
      '*.pyo',
      '*.pyd',
      '*.class',
      '*.jar',
      '*.war',
      '*.ear',
      '*.sar',
      '*.nar'
    ]
  }
];
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
=======
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        fetch: 'readonly',
        process: 'readonly',
        // DOM types
        Element: 'readonly',
        HTMLElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLSelectElement: 'readonly',
        HTMLDivElement: 'readonly',
        MouseEvent: 'readonly',
        KeyboardEvent: 'readonly',
        Node: 'readonly',
        PerformanceObserver: 'readonly',
        PerformanceNavigationTiming: 'readonly',
        PerformanceEventTiming: 'readonly',
        LayoutShift: 'readonly',
        performance: 'readonly',
        IntersectionObserver: 'readonly',
        IntersectionObserverEntry: 'readonly',
        // React
        React: 'readonly',
        // Jest/Testing globals
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
<<<<<<< HEAD
        fireEvent: 'readonly',
        render: 'readonly',
<<<<<<< HEAD
        screen: 'readonly'
      }
=======
        screen: 'readonly',
      },
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',
<<<<<<< HEAD
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
];
=======
=======
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
      'react-hooks': reactHooks,
      '@next/next': next,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...next.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        // Node.js globals
        process: 'readonly',
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        Buffer: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setImmediate: 'readonly',
        clearImmediate: 'readonly',
      },
    },
  },
  {
    ignores: [
      // Node/build outputs
<<<<<<< HEAD
=======
      'node_modules/**',
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'out/**',
      'coverage/**',
<<<<<<< HEAD
      // Large/legacy sources and disabled dirs
      'src/**/src.corrupted/**',
      'src/**/src.disabled/**',
      'src/**/src.broken/**',
      'src/**/src.pages.disabled/**',
      'solutions.disabled/**',
      'components.disabled/**',
      'components.corrupted/**',
      'hooks/**/hooks.disabled/**',
      'lib.disabled/**',
      'lib/**/lib.corrupted/**',
      'zion-os.disabled/**',
      'zion_academy/**',
      'contracts.disabled/**',
      'corrupted-files-backup/**',
      'corrupted_files_backup_2/**',
      'cypress.disabled/**',
      'cypress_backup/**',
      'data/**',
      'e2e/**',
      'pages.disabled/**',
      'pages.disabled_backup/**',
      'pages_backup/**',
      'supabase/**',
      'types/**',
      'types.disabled/**',
      'utils/**',
      // Tests and mocks
      '__tests__/**',
      'tests/**',
      'tests.disabled/**',
      '*.test.*',
      // Temp and backups
      'backup/**',
      'backup-pages/**',
      'pages-backup/**',
      'lib_backup/**',
      'data_backup/**',
      'styles_backup/**',
      'api-backup/**',
      'automation_backup/**',
      'ai-optimization-backups/**',
      'ai-analysis-reports/**',
      'optimization-reports/**',
      'public/reports/**',
      'temp_backup/**',
      'temp_broken_components/**',
      'temp_working/**',
      'temp_*/**',
      'backup-merge-conflicts/**',
      'deployments/**',
      'deployment/**',
      'server/**',
      'services/**',
      // Scripts/configs and CJS files not intended for lint
      'scripts/**',
      'automation/**',
      'netlify/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      '**/*.cjs',
      // Public assets/scripts
      'public/**',
      // Root-level noisy files
      'api/**',
      '*.js',
      '*.ts',
      '*.tsx',
      '*.jsx',
      'jest.config.*',
      'fix-*.js',
      'fix-*.jsx',
      // Misc root configs that were being linted
      '.eslintrc.js',
      '.eslintrc.cjs',
      '.eslintrc.disabled.js',
      '.prettierrc.js',
      // Page backups
      'pages.__backup/**',
      'pages-disabled/**',
      'pages.disabled_auto/**',
    ],
  },
];
import js from '@eslint/js',;
import typescript from '@typescript-eslint/eslint-plugin',;
import typescriptParser from '@typescript-eslint/parser',;
import react from 'eslint-plugin-react',;
import reactHooks from 'eslint-plugin-react-hooks',;
import next from '@next/eslint-plugin-next',;
export default [;
  js.configs.recommended,;
  {;
    files: ['**/*.{js,jsx,ts,tsx}'],;
    ignores: [;
      '.next/**out/**dist/**build/**',;
      'node_modules/**.eslintrc.js*.config.js*.config.cjs',;
      '*.config.mjsscripts/**automation/**backup-merge-conflicts/**',;
      '**/*.backup.***/*.old.***/*.disabled.***/*.broken.*',;
      '**/*.corrupted.***/*.temp.***/*.test.***/*.spec.*',;
      '**/test-utils.***/jest.setup.***/jest.config.***/vite.config.*',;
      '**/postcss.config.***/playwright.config.***/cypress.config.***/bundle-analyzer.config.*',;
      '**/csp-config.***/ecosystem.config.***/Dockerfile***/docker-compose*',;
      '**/pm2-***/fix-***/clean-***/batch-*',;
      '**/merge-***/resolve-***/systematic-***/ultimate-*',;
      '**/structural-***/quick-***/comprehensive-***/enhanced-*',;
      '**/complete-***/app-optimizer.***/improve-***/find-*',;
      '**/git-ops.***/pr-manager.***/merge-strategy.***/resolve-and-merge-*',;
      '**/merge-all-***/merge-prs.***/pr-***/batch_*',;
      '**/check_***/commit-***/complete_***/deploy-*',;
      '**/fix_***/git_***/health-***/quick-*',;
      '**/run-***/start-***/test-***/ultimate-*',;
      '**/utils/next-***/utils/performance-***/utils/rate-***/utils/input-*',;
      '**/utils/csrf-***/utils/dynamic-***/utils/env-***/utils/messageChannel*',;
      '**/utils/sanitize***/utils/seo-***/utils/testing-***/utils/accessibility-*',;
      '**/utils/api.***/utils/monitoring.***/utils/performance.***/utils/seo-optimizer.*',;
      '**/types/empty.***/types/index.***/types/service-***/supabase/**',;
      '**/src/main.***/src/data/****/src/utils/****/src/components/**',;
      '**/src/App.***/components/ui/****/components/layout/****/components/performance/**',;
      '**/hooks/****/lib/****/api-backup/****/deployment/**',;
      '**/deployments/****/docs/****/e2e/****/content/**',;
      '**/data/****/config/****/__tests__/****/automation-reports/**',;
      '**/error-prevention-reports/****/performance-reports/****/link-reports/****/monitoring/**',;
      '**/pm2-automation/****/automation/logs/****/automation/backup/****/backup-merge-conflicts/**',;
      '**/temp_backup/****/temp_broken_components/****/temp_working/****/temp_*/**',;
      '**/ai-optimization-backups/****/ai-analysis-reports/****/optimization-reports/****/public/reports/**',;
      '**/pages_backup*/****/pages.*/****/pages-*/****/pages_disabled*/**',;
      '**/pages.disabled*/****/pages.broken*/****/pages.corrupted*/****/pages.old*/**',;
      '**/pages._*/****/pages.__*/****/backup-pages/****/src.pages.disabled/**',;
      '**/lib_backup*/****/src_backup*/****/corrupted-files-backup*/****/performance-reports*/**',;
      '**/log-analysis-reports*/****/link-reports*/****/lint-target*/****/monitoring*/**',;
      '**/pm2-automation*/****/automation/logs*/****/automation/backup*/****/performance-*.json',;
      '**/performance-*.js**/performance-*.cjs**/performance-*.sh**/performance-*.html',;
      '**/performance-*.md**/performance-*.txt';
    ],;
    languageOptions: {;
      parser: typescriptParser,;
      parserOptions: {;
        ecmaVersion: 'latest',;
        sourceType: 'module',;
        ecmaFeatures: {;
          jsx: true;
        }
      },;
      globals: {;
        // Browser globals;
        window: 'readonly',;
        document: 'readonly',;
        console: 'readonly',;
        localStorage: 'readonly',;
        sessionStorage: 'readonly',;
        setTimeout: 'readonly',;
        clearTimeout: 'readonly',;
        setInterval: 'readonly',;
        clearInterval: 'readonly',;
        fetch: 'readonly',;
        process: 'readonly',;
        // DOM types;
        Element: 'readonly',;
        HTMLElement: 'readonly',;
        HTMLInputElement: 'readonly',;
        HTMLTextAreaElement: 'readonly',;
        HTMLSelectElement: 'readonly',;
        HTMLDivElement: 'readonly',;
        MouseEvent: 'readonly',;
        KeyboardEvent: 'readonly',;
        Node: 'readonly',;
        PerformanceObserver: 'readonly',;
        PerformanceNavigationTiming: 'readonly',;
        PerformanceEventTiming: 'readonly',;
        LayoutShift: 'readonly',;
        performance: 'readonly',;
        IntersectionObserver: 'readonly',;
        IntersectionObserverEntry: 'readonly',;
        // React;
        React: 'readonly',;
        // Jest/Testing globals;
        describe: 'readonly',;
        it: 'readonly',;
        test: 'readonly',;
        expect: 'readonly',;
        beforeEach: 'readonly',;
        afterEach: 'readonly',;
        beforeAll: 'readonly',;
        afterAll: 'readonly',;
        jest: 'readonly',;
        // Node.js globals;
        require: 'readonly',;
        module: 'readonly',;
        exports: 'readonly',;
        __dirname: 'readonly',;
        __filename: 'readonly',;
        global: 'readonly',;
        Buffer: 'readonly';
      }
    },;
    plugins: {;
      '@typescript-eslint': typescript,;
      'react': react,;
      'react-hooks': reactHooks,;
      '@next/next': next;
    },;
    rules: {;
      ...typescript.configs.recommended.rules,;
      ...react.configs.recommended.rules,;
      ...reactHooks.configs.recommended.rules,;
      ...next.configs.recommended.rules,;
      'no-unused-vars': 'warnno-console': 'warnprefer-const': 'errorno-var': 'errorreact/prop-types': 'offreact/react-in-jsx-scope': 'off@typescript-eslint/no-unused-vars': 'warn@typescript-eslint/no-explicit-any': 'warn';
    },;
    settings: {;
      react: {;
        version: 'detect';
      }
    }
  },;
  {;
    files: ['**/*.cjs'],;
    languageOptions: {;
      sourceType: 'commonjs',;
      globals: {;
        // Node.js globals;
        process: 'readonly',;
        console: 'readonly',;
        require: 'readonly',;
        module: 'readonly',;
        exports: 'readonly',;
        __dirname: 'readonly',;
        __filename: 'readonly',;
        global: 'readonly',;
        Buffer: 'readonly',;
        setTimeout: 'readonly',;
        clearTimeout: 'readonly',;
        setInterval: 'readonly',;
        clearInterval: 'readonly',;
        setImmediate: 'readonly',;
        clearImmediate: 'readonly';
      }
    }
  },;
  {;
    ignores: [;
      // Node/build outputs;
      '.next/**out/**dist/**build/**',;
      'node_modules/**',;
      // Public assets/scripts;
      'public/**',;
      // Root-level noisy files;
      '*.config.js*.config.cjs*.config.mjs*.backup.*',;
      '*.old.**.disabled.**.broken.**.corrupted.*';
      '*.temp.*';
    ];
  }
];
=======
      '*.log',
      '*.tsbuildinfo',
      // Generated files
      '**/*.min.js',
      '**/*.bundle.js',
      '**/static/**',
      '**/public/**',
      '**/backup*/**',
      '**/backups/**',
      '**/cache/**',
      '**/temp/**',
      '**/tmp/**',
      // Build artifacts
      '**/ecosystem*.cjs',
      '**/comprehensive-*.cjs',
      '**/advanced-*.cjs',
      '**/enhanced-*.cjs',
      '**/automation/**',
      '**/scripts/**',
      '**/tools/**',
      '**/zion-os/**',
      '**/zion-website/**',
    ],
  },
];
<<<<<<< HEAD
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
