import js from '@eslint/js';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescript from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
=======
>>>>>>> main
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf6c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
<<<<<<< HEAD
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
<<<<<<< HEAD
  js.configs.recommended,
  {
<<<<<<< HEAD
    files: ['src/**/*.{js,jsx,ts,tsx}', '*.{js,jsx,ts,tsx}'],
    ignores: ['dist/**', 'node_modules/**', 'build/**'],
=======
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      '.next/**',
      'out/**',
      'dist/**',
      'node_modules/**',
      'temp_exclude/**',
      'src.disabled/**',
      'src.pages.disabled/**',
      'backup-problematic-files/**',
      'zion-os.disabled/**',
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
      'zion-ai-assistant/**',
      'utils/**',
      'vite.config.js',
      'vite.config.ts',
      'src_backup_temp/**',
      'temp_backup/**',
      'temp_broken_files/**',
      'temp_components/**',
      'temp_conflicts/**',
      'temp_exclude/**',
      'temp_working/**',
      'test_build/**',
      'tests/**',
      'types/**',
      '*.cjs',
      '*.js',
      '*.mjs',
      'supabase/**',
      'start-dev.js',
      'structural-fix.js',
      'system-monitor.cjs',
      'tailwind.config.js',
      'test-next.js',
      'ultimate-*.cjs'
    ],
>>>>>>> origin/main
    languageOptions: {
<<<<<<< HEAD
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
      },
      parser: tsparser,
=======
      parser: typescriptParser,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf6c
=======
  {
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "dist/",
      "build/",
      "coverage/",
      "*.config.js",
      "*.config.cjs",
      "*.config.mjs",
      "scripts/",
      "automation/",
      "pm2-automation/",
      "pages.disabled/",
      "pages.disabled_auto/",
      "pages.disabled_full/",
      "pages.corrupted.*/",
      "pages.broken/",
      "pages.bak/",
      "pages.blog.disabled/",
      "pages._archive_corrupted/",
      "pages._quarantine/",
      "pages-disabled/",
      "pages-quarantine/",
      "pages.__backup/",
      "pages-backup/",
      "tests.disabled/",
      "components.disabled/",
      "zion-os.disabled/",
      "zion_academy/",
      "temp_backup/",
      "temp_broken_files/",
      "test_build/",
      "temp_exclude/",
      "zion-os/",
      "zion-website/",
      "zion-ai-assistant/",
      "types/",
      "utils/",
      "ultimate-*.cjs",
      "*.test.js",
      "*.test.ts",
      "*.test.tsx",
      "*.spec.js",
      "*.spec.ts",
      "*.spec.tsx",
    ],
  },
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsparser,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
import next from '@next/eslint-plugin-next';
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export default [
  js.configs.recommended,
  {
    languageOptions: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      parser: tsparser,
=======
      parser: typescriptParser,
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
<<<<<<< HEAD
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
=======
<<<<<<< HEAD
      globals: {
<<<<<<< HEAD
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        performance: 'readonly',
        Performance: 'readonly',
        PerformanceNavigationTiming: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        KeyboardEvent: 'readonly',
        reportError: 'readonly',
        __REACT_DEVTOOLS_GLOBAL_HOOK__: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
<<<<<<< HEAD
      ...tseslint.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-unused-vars': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-debugger': 'warn',
      'no-trailing-spaces': 'error',
      'indent': 'off',
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-parens': ['error', 'as-needed'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'space-in-parens': ['error', 'never'],
      'func-call-spacing': ['error', 'never'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'camelcase': ['error', { properties: 'never' }],
      'eol-last': ['error', 'always'],
      'max-len': ['warn', { code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true }],
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'template-curly-spacing': ['error', 'never'],
      'space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-before-blocks': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-whitespace-before-property': 'error',
      'rest-spread-spacing': ['error', 'never'],
      'yield-star-spacing': ['error', 'after'],
      'generator-star-spacing': ['error', 'after'],
      'no-unneeded-ternary': 'error',
      'no-nested-ternary': 'warn',
      'no-mixed-operators': 'warn',
      'no-lonely-if': 'error',
      'no-else-return': 'error',
      'dot-location': ['error', 'property'],
      'no-extra-bind': 'error',
      'no-implicit-coercion': 'error',
      'no-invalid-this': 'error',
      'no-loop-func': 'error',
      'no-new-func': 'error',
      'no-return-assign': ['error', 'always'],
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'vars-on-top': 'error',
      'wrap-iife': ['error', 'outside'],
      'yoda': ['error', 'never'],
      'strict': ['error', 'global'],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error']
=======
      // Additional rules or overrides can be added here
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf6c
    },
    settings: {
      react: {
<<<<<<< HEAD
=======
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
>>>>>>> main
        version: 'detect',
      },
    },
  },
<<<<<<< HEAD
=======
        version: 'detect'
=======
        ...globals.browser,
        ...globals.node,
        React: 'readonly',
=======
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
>>>>>>> main
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
<<<<<<< HEAD
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly'
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-console": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off"
    },
    settings: {
      react: {
        version: "detect"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      }
    }
  },
  {
    files: [
      "**/*.cjs",
      "**/scripts/**/*.js",
      "**/automation/**/*.js",
      "**/pm2/**/*.js"
    ],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        ...globals.node,
<<<<<<< HEAD
      },
    },
    rules: {
      'no-console': 'off',
    },
  },
<<<<<<< HEAD
=======
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf6c
=======
        console: "readonly",
        process: "readonly",
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        Buffer: "readonly",
        global: "readonly"
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-undef': 'error'
    }
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
];
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'fix-*.js',
      'fix-*.cjs',
      '*-fix*.js',
      '*-fix*.cjs',
      'advanced-*.cjs',
      'aggressive-*.cjs',
      'aggressive-*.js',
      'corrupted_backup/**',
      'corrupted-files-backup/**',
      'apps.backup/**',
      'deployments/**',
      'pm2-backups/**',
      'lib.broken/**',
      'lib.disabled/**',
      'src.broken/**',
      'src.disabled/**',
      'netlify/functions/**',
      'scripts/**',
      'middleware/**',
      'ultimate-*.js',
      'resolve-*.js',
      'github-pr-processor.js',
      'types/service-variants.js',
      'backup-problematic-files/**',
      'backup/**',
      'clean-build/**',
      'complete-merge-resolution.js',
      'comprehensive-automation-runner.js',
      'build-optimizer.js',
      'public/sw-enhanced.js',
      '__tests__/**',
      'api/**',
      'automation/**',
      'deployment/**',
      'next.config.*.js',
      'resolve-*.cjs',
      'app-optimizer.js',
    ],
  },
<<<<<<< HEAD
];
=======
];
<<<<<<< HEAD
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
