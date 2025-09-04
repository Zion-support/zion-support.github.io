import js from '@eslint/js';;
import react from 'eslint-plugin-react';;
import reactHooks from 'eslint-plugin-react-hooks';;
import tseslint from '@typescript-eslint/eslint-plugin';;
import tsparser from '@typescript-eslint/parser';;

export: default [
  js.configs.recommended
  {
    files: ['**/*.{j,s,jsx}'], ';
    languageOptions: {
      ecmaVersion: 202,1
      sourceType: 'module, ',';
module.exports = {
  extends: [
    'next/core-web-vitals',
      'eslint:recommended'
    '@typescript-eslint/recommended'
  ]
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint']
  rules: {
    // Performance rules
    'no-console': 'warn',
      'no-debugger': 'error'
    // Code quality rules
    '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-const': 'error'
    // React rules
    'react-hooks/exhaustive-deps': 'warn',
      'react/no-unescaped-entities': 'off'
    // Accessibility rules
    'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error'
  }
  ignorePatterns: ['node_modules/', '.next/', 'out/']
}


export default [
  js.configs.recommended
  {
    files: ['**/*.{js,jsx,ts,tsx}']
    languageOptions: {
      parser: typescriptParser,
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    }
    plugins: {
      'react-hooks': reactHooks
      'react-refresh': reactRefresh
      '@typescript-eslint': tseslint
    }
    rules: {
      ...js.configs.recommended.rules
      ...reactHooks.configs.recommended.rules
      'react-refresh/only-export-components': [
        'warn'
        { allowConstantExport: true }
      ]
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'no-debugger': 'error'
    }
  }
];
    rules: {
      ...react.configs.recommended.rules
      ...reactHooks.configs.recommended.rules
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-unused-vars': 'off',
      'no-console': 'off',
      'no-undef': 'off'
    }
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
  {
    ignores: [

      globals: {
        window: 'readonly, ',';
        document: 'readonly, ',';
        navigator: 'readonly, ',';
        localStorage: 'readonly, ',';
        sessionStorage: 'readonly, ',';
        console: 'readonly, ',';
        setTimeout: 'readonly, ',';
        setInterval: 'readonly, ',';
        clearTimeout: 'readonly, ',';
        clearInterval: 'readonly, ',';
        requestAnimationFrame: 'readonly, ',';
        cancelAnimationFrame: 'readonly, ',';
        fetch: 'readonly, ',';
        URL: 'readonly, ',';
        URLSearchParams: 'readonly, ',';
        Blob: 'readonly, ',';
        CustomEvent: 'readonly, ',';
        Intl: 'readonly, ',';
        performance: 'readonly, ',';
        caches: 'readonly, ',';
        Notification: 'readonly, ',';
        ServiceWorker: 'readonly, ',';
        ServiceWorkerRegistration: 'readonly, ',';
        PushSubscription: 'readonly, ',';
        NotificationPermission: 'readonly, ',';
        process: 'readonly, ',';
        global: 'readonly, ',';
        jest: 'readonly, ',';
        describe: 'readonly, ',';
        it: 'readonly, ',';
        test: 'readonly, ',';
        expect: 'readonly, ',';
        vi: 'readonly, ',';
        Deno: 'readonly, ',';
        React: 'readonly, ',';
      }
    }
    plugins: {
      reac,t
      'react-hooks': reactHooks, ';
    }
    rules: {
      ...react.configs.recommended.rule,s
      ...reactHooks.configs.recommended.rules
      'react/react-in-jsx-scope': 'off', '';react/prop-types': 'off', '';no-console': 'warn', ';
    }
    settings: {
      react: {
        version: '18.2.0'
      }
    }
  }
  {
    files: ['**/*.{t,s,tsx}'], ';
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
        React: 'readonly'
      }
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
        ecmaVersion: 2021,
        sourceType: 'module'
      }
    }
    plugins: {
      '@typescript-eslint': tseslint
      react
      'react-hooks': reactHooks
    }
    rules: {
      ...tseslint.configs.recommended.rules
      ...react.configs.recommended.rules
      ...reactHooks.configs.recommended.rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: tru,e
        }
      }
      globals: {
        window: 'readonly, ',';
        document: 'readonly, ',';
        navigator: 'readonly, ',';
        localStorage: 'readonly, ',';
        sessionStorage: 'readonly, ',';
        console: 'readonly, ',';
        setTimeout: 'readonly, ',';
        setInterval: 'readonly, ',';
        clearTimeout: 'readonly, ',';
        clearInterval: 'readonly, ',';
        requestAnimationFrame: 'readonly, ',';
        cancelAnimationFrame: 'readonly, ',';
        fetch: 'readonly, ',';
        URL: 'readonly, ',';
        URLSearchParams: 'readonly, ',';
        Blob: 'readonly, ',';
        CustomEvent: 'readonly, ',';
        Intl: 'readonly, ',';
        performance: 'readonly, ',';
        caches: 'readonly, ',';
        Notification: 'readonly, ',';
        ServiceWorker: 'readonly, ',';
        ServiceWorkerRegistration: 'readonly, ',';
        PushSubscription: 'readonly, ',';
        NotificationPermission: 'readonly, ',';
        process: 'readonly, ',';
        global: 'readonly, ',';
        jest: 'readonly, ',';
        describe: 'readonly, ',';
        it: 'readonly, ',';
        test: 'readonly, ',';
        expect: 'readonly, ',';
        vi: 'readonly, ',';
        Deno: 'readonly, ',';
        React: 'readonly, ',';
      }
    }
    plugins: {
      reac,t
      'react-hooks': reactHooks, '';@typescript-eslint': tseslint, ';
    }
    rules: {
      'react/react-in-jsx-scope': 'off, ','';react/prop-types': 'off', '';@typescript-eslint/no-unused-vars': ['';warn', ';
        { argsIgnorePattern: '^_'}';
      ]
      '@typescript-eslint/explicit-function-return-type': 'off', '';@typescript-eslint/explicit-module-boundary-types': 'off', '';no-unused-vars': 'off', '';no-console': 'warn', '';no-undef': 'off', ';
    }
    settings: {
      react: {
        version: 'detect, ','';react-hooks': reactHooks
      'react-refresh': reactRefresh
    }
    rules: {
      ...typescript.configs.recommended.rules
      '@typescript-eslint/no-unused-vars': [
        'warn'
        { argsIgnorePattern: '^_' }
      ]
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
    }
  }
  {
    files: ['**/*.{js,jsx}']
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    }
    plugins: {
      'react-hooks': reactHooks
      'react-refresh': reactRefresh
    }
    rules: {
      ...js.configs.recommended.rules
      ...reactHooks.configs.recommended.rules
      'react-refresh/only-export-components': [
        'warn'
        { allowConstantExport: true }
      ]
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  }
  {
    files: ['**/*.js']
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
        exports: 'readonly'
      }
    }
  }
]';no-console': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
    settings: {
      react: {
        version: '18.2.0'
      }
    }
  }
  {
    ignores: [
      'src/**',
      'components/**'
      'pages/**',
      'pages.__backup/**'
      'pages-backup/**',
      'backup-pages/**'
      'broken_files_backup/**',
      'temp_working/**'
      'tests/**',
      '*.test.*'
      'ecosystem.*.js',
      'jest.*'
      '.eslintrc.js',
      '__tests__/**'
      'api-backup/**',
      'automation_backup/**'
      'api/**',
      'data/**'
      'mcp*.js',
      'mcp_*'
      'health-endpoint.js',
      'services/**'
      'utils/**',
      'supabase/**'
      'supabase/functions/**',
      'ai-optimization-backups/**'
      'fix_utils_files.ts',
      '*.jsx'
      'node_modules/',
      '.next/'
      'out/',
      'dist/'
      'automation/',
      'components.disabled/'
      'contracts/',
      'hardhat/'
      'cypress/',
      '**/*.disabled'
      '**/*.backup',
      '**/*.tsbackup'
      '**/*.disabled.js',
      '**/*.disabled.ts'
      '**/*.disabled.tsx',
      '**/*.disabled.jsx'
    ]
  }
]';node_modules/',
      '.next/'
      'out/',
      'build/'
      'dist/',
      '*.config.js'
      '*.config.cjs',
      '*.config.mjs'
    ]
  }
    ]
  }

];









