import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
<<<<<<< HEAD
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescript from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import globals from 'globals';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import reactHooks from 'eslint-plugin-react-hooks';
<<<<<<< HEAD
import next from '@next/eslint-plugin-next';
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
=======
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1

export default [
  js.configs.recommended,
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
<<<<<<< HEAD
    files: ['**/*.{js,jsx,ts,tsx}'],
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
<<<<<<< HEAD
      '.next/**',
      'out/**',
      'dist/**',
      'node_modules/**',
      'temp_exclude/**',
      'src.disabled/**',
      'src.pages.disabled/**',
=======
      'coverage/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'scripts/**',
      'automation/**',
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      'backup-problematic-files/**',
      'src.disabled/**',
      'components.disabled/**',
      'pages.disabled/**',
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
      'api/**',
      'api-backup/**',
      'api-disabled/**',
      'api.disabled/**',
      'backup/**',
      'backups/**',
      'broken_files_backup/**',
      'corrupted-files-backup/**',
      'cypress_backup/**',
      'data_backup/**',
      'deployment/**',
      'e2e/**',
      'server/**',
      'temp_*/**',
      'test_build/**',
      'tests/**',
      '__tests__/**',
      'types/**',
      '*.cjs',
      '*.mjs',
      'supabase/**',
      'ultimate-*.cjs',
      'advanced-*.js',
      'comprehensive-*.js',
      'enhanced-*.js',
      'fix-*.js',
      'merge-*.js',
      'run-*.js',
      'test-*.js',
      '*.test.js',
      '*.spec.js',
      'aggressive-*.js',
      'batch-*.js',
      'clean-*.js',
      'critical-*.js',
      'execute-*.js',
      'final-*.js',
      'health-*.js',
      'improve-*.js',
      'maintenance-*.js',
      'monitoring-*.js',
      'optimized-*.js',
      'performance-*.js',
      'resolve-*.js',
      'seo-*.js',
      'simple-*.js',
      'structural-*.js',
      'system-*.js',
      'ultimate-*.js',
      '*.js'
    ],
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}', 'app/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
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
<<<<<<< HEAD
=======
        afterAll: 'readonly',
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      },
      parser: tsparser,
<<<<<<< HEAD
<<<<<<< HEAD
=======
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

export default [
  js.configs.recommended,
  {
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    languageOptions: {
<<<<<<< HEAD
      parser: tsparser,
=======
      parser: typescriptParser,
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> main
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
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
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
<<<<<<< HEAD
=======
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
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
    rules: {
      'no-console': 'off',
    },
  },
<<<<<<< HEAD
];
=======
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
=======
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
<<<<<<< HEAD
import next from '@next/eslint-plugin-next';
=======
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-9571
=======
=======
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1

export default [
  ...compat.extends('next/core-web-vitals'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
>>>>>>> main
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
<<<<<<< HEAD
          jsx: true
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
      'jsx-a11y': jsxA11y
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
=======
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
<<<<<<< HEAD
      'react': react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
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
    },
    settings: {
      react: {
        version: 'detect'
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
=======
      'coverage/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.ts'
    ],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsparser,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/aria-role': 'warn',
      'jsx-a11y/heading-has-content': 'warn',
      'jsx-a11y/img-redundant-alt': 'warn',
      'jsx-a11y/no-access-key': 'warn',
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
<<<<<<< HEAD
=======
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
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
    rules: {
      'no-console': 'off',
    },
  },
=======
      react,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
>>>>>>> main
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
];
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
